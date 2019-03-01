
	var map = {}; // You could also use an array
	onkeydown = onkeyup = function(e){
	    e = e || event; // to deal with IE
	    map[e.keyCode] = e.type == 'keydown';
	    if(map[13] && map[91]) {
	    	document.querySelector("#execute").click();
	    	map = {}
	    }
	}

	renderSchemaBrowser();
	renderExamples();

	window.addEventListener('hashchange', share, false);

	if(!localStorage.getItem('queryHistory')) {
		localStorage.setItem('queryHistory',JSON.stringify([]));
	} else {
		renderQueryHistory();
	}

	document.addEventListener("itemInserted", renderQueryHistory, false);

	document.querySelector("#execute").addEventListener("click", execute);

	editor.on("change",handleEditorChange);
	
	if(localStorage.getItem('showWelcome') === null) {
		localStorage.setItem('showWelcome', 'show');
	}

	if(localStorage.getItem('editorValue') === null) {
		localStorage.setItem('editorValue', '');
		editor.setValue(queries[Math.floor(Math.random()*queries.length)], 1);
	} else {
		editor.setValue(localStorage.getItem('editorValue'));
	}

	if(localStorage.getItem('showWelcome')=='show' && document.location.hash.startsWith('#share')) {
		document.location.hash='#help';
		document.querySelector('#welcome').checked = true;
	}

	if(document.location.hash.startsWith('#share')) {
		//TODO: Fix since there are lots of failure cases for this
		editor.setValue(atob(document.location.hash.slice(13)));
	}

	function toggleWelcome() {
		localStorage.setItem('showWelcome', localStorage.getItem('showWelcome') == 'show' ? 'hide' : 'show');
	}

	var ENDPOINT = "https://data.boston.gov/api/3/action/datastore_search_sql?sql=";

	function execute() {
		removeResultsTable();
		if (document.querySelector("#results-table") !== null) {
			document.querySelector("#results-table").parentNode.removeChild(document.querySelector("#results-table"));
		}
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.addEventListener("error", transferFailed);
		oReq.open("GET", ENDPOINT+rawurlencode(getCurrentQuery()));
		oReq.send();
	}

	/**
	 * Find the current query, based on cursor or selection
	 *  - If there is a selection, just return it
	 *  - If there is only 1 semicolin, return the whole thing (because it indicates 1 query)
	 *  - If there are 2 or more
	 *  	1. start from the cursor and walk back to previous (or start of editor)
	 *  	2. if the current line has a semicolin, end here else walk forward
	 * 
	 * 
	 * @return {[type]} [description]
	 */
	function getCurrentQuery() {
		if(editor.getSelectedText().length>0) {
			return editor.getSelectedText().trim(";").replace(";","");
		} else if(!editor.getValue().match(/;/g) || editor.getValue().match(/;/g).length <= 1) {
			return editor.getValue().trim(";").replace(";","");
		} else {
			var cursorPosition = editor.getCursorPosition();
			var editorRows = editor.getValue().split("\n");
			var queryStart;
			var queryEnd;
			for (let i = cursorPosition.row; i >=0 ; i--) {
				if(editorRows[i].match(/;/) && editorRows[i].match(/;/).length >= 1) {
			    	if(i == cursorPosition.row) {
			    		queryEnd = i;
			    		continue;
			    	}
			    	queryStart = i + 1;
			    	break;
				}
			}
			if(!queryEnd) {
				for (let i = cursorPosition.row; i >=0 ; i++) {
					if(editorRows[i].match(/;/) && editorRows[i].match(/;/).length >= 1) {
						queryEnd = i;
						break;
					}
				}
			}
			return editorRows.slice(queryStart, queryEnd+1).join("\n").trim().replace(";","");
		}
	}


	function removeResultsTable(){
		if (document.querySelector("#results-table") !== null) {
			document.querySelector("#results-table").parentNode.removeChild(document.querySelector("#results-table"));
		}
	}
	/**
	 * Note: Without CORS this will happen
	 * @return void
	 */
	function transferFailed() {
		div = document.createElement("div");
		div.setAttribute("id","results-table");
		div.innerHTML = "Error: To troubleshoot open devtools or see help.  Most commonely: missing &quot;, errant field name or similar";
		document.querySelector("#results").appendChild(div);
	}

	function reqListener() {

		if (this.status == 500) {
			//We build a results object since it is not provided by the endpoint
			results = {
				"success": false,
				"error": {
					"query": ["500 Error: often a \"Class 22 - Data Exception\" which occurs after the query begins executing such as: invalid_character_value_for_cast or division_by_zero, etc.  More at https://www.postgresql.org/docs/10/static/errcodes-appendix.html"]
				}
			}
		} else {
			results = JSON.parse(this.responseText);    
		}

		queryHistoryAdd(results);

		if(typeof results.success !== 'undefined' && !results.success) {
			div = document.createElement("div");
			div.setAttribute("id","results");
			const error_regex = /([^\^]*)\^/
			error_extract = error_regex.exec(results.error.query[0]);
			error_msg = (error_extract !== null && error_extract.hasOwnProperty(1)) ? error_extract[1] : results.error.query[0]
			div.innerHTML = error_msg;
			document.body.appendChild(div);
			return true;
		}

		renderResultsTable(results);
	}

	function renderResultsTable(results) {
		removeResultsTable();
		var table = document.createElement("table");
		table.setAttribute("id","results-table");
		html = "<thead><tr>";
		headers = []
		for (var field of results.result.fields) {
			html += "<th>"+field.id+"</th>";
			headers.push(field.id);
		}
		csv="\""+headers.join("\",\"")+"\"\n";
		tsv=headers.join("\t")+"\n";
		html += "</thead></tr>";
		for (var record of results.result.records) {
			html += "<tr>";
			fields = [];
			for (var field of results.result.fields) {
				html += "<td>"+record[field.id]+"</td>";
				fields.push(record[field.id])
			}
			html += "</tr>";
			csv += "\""+fields.join("\",\"")+"\"\n";
			tsv += fields.join("\t")+"\n";
		}
		html+="<a href=\"data:text/csv;charset=utf-8,"+encodeURI(csv)+"\" target\"_blank\" download=\"results.csv\">CSV</a>&nbsp;";
		html+="<a href=\"data:text/tsv;charset=utf-8,"+encodeURI(tsv)+"\" target\"_blank\" download=\"results.tsv\">TSV</a>&nbsp;";
		html+="<a href=\"javascript:copyResults()\">COPY</a>"
		html+="<textarea id=\"results-ta\">"+tsv+"</textarea>"
		table.innerHTML = html;
		document.querySelector("#results").appendChild(table);
	}

	function renderResultsTableWrapper(index) {
		renderResultsTable(JSON.parse(localStorage.getItem('queryHistory'))[index]);
	}

	function queryHistoryAdd(results) {
		var queryHistory = JSON.parse(localStorage.getItem("queryHistory"));
		if(queryHistory.length >= config.queryHistorySize) {
			queryHistory.pop();
		}
		queryHistory.push(results);
		localStorage.setItem('queryHistory',JSON.stringify(queryHistory));
		var event = new Event('itemInserted');
  		document.dispatchEvent(event);
		return true;
	}

	function rawurlencode (str) {
		str = (str+'').toString();        
		return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
	}

	function copyResults() {
		var copy = document.querySelector("#results-ta");
		copy.select();
		document.execCommand('copy');
	}

	function getResultSql(index) {
		window.prompt('SQL',JSON.parse(localStorage.getItem('queryHistory'))[index].result.sql)
	}

	function renderQueryHistory() {
		if (document.querySelector("#history-table") !== null) {
			document.querySelector("#history-table").parentNode.removeChild(document.querySelector("#history-table"));
		}
		var queryHistory = JSON.parse(localStorage.getItem('queryHistory'));

		var table = document.createElement("table");
		table.setAttribute("id","history-table");
		html = "<thead><tr><th>Index</th><th>SQL Text</th><th>Row Count</th></tr></thead>";
		html += queryHistory.reduce(function(accumulator, currentValue, currentIndex, array) {
			if(!currentValue.success) {
				return accumulator;
			}
			var row = "<tr>";
			row += "<td onclick=\"renderResultsTableWrapper("+currentIndex+")\">"+currentIndex+"</td>";
			row += "<td>" + "<a href=\"javascript:getResultSql("+currentIndex+")\">"+currentValue.result.sql.slice(0,20)+"...</a>" + "</td>";
			row += "<td>" + currentValue.result.records.length + "</td>";
			row += "";
			row += "</tr>"
  			return accumulator + row;
  		},'');
		html += "</tbody>";
		table.innerHTML = html;
		document.querySelector("#history").appendChild(table);
	}

	function renderSchemaBrowser() {
		let html = "<h1>Schema Browser</h1>";
		for(let table in schema) {
			let data = schema[table];
			html += "<h2>" + data.title + "</h2>";
			html += "<div><input type=\"text\" value=\""+table+"\"></div>"; 
			html += "<ul>" + data.fields.reduce(function(accumulator, currentValue) {
				return accumulator + "<li>" + currentValue + "</li>";
			},'') + "</ul>";
		}
		document.querySelector("#schema-browser-content").innerHTML = html;
	}

	function share() {
		if(document.location.hash == '#share') {
			document.querySelector('#share-textarea').innerHTML = document.location.href + "?query=" + btoa(getCurrentQuery());
		}
	}

	function renderExamples() {
		let figure = document.createElement("figure");
		html="<a href=\"#\" class=\"closemsg\"></a><figcaption>";
		html += "<h1>Examples</h1>";
		html += "<textarea>" + queries.reduce(function(acc, cur) {
			return acc + cur + ";\n\n"
		},"") + "</textarea>";
		html += "</figcaption>";
		figure.innerHTML = html;
		document.querySelector("#examples").appendChild(figure);
	}

	function handleEditorChange(e) {
		localStorage.setItem('editorValue',editor.getValue())
	}
