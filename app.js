/**
 * SQL Client Application
 *
 * @author Nat Taylor <nattaylor@gmail.com>
 *
 * Note: messy abuses of global namespace.  Oops.
 * 
 */

	var map = {};
	onkeydown = onkeyup = function(e){
		e = e || event; // to deal with IE
		map[e.keyCode] = e.type == 'keydown';
		if(map[13] && map[91]) {
			document.querySelector("#execute").click();
			map = {}
		} else if (map[27]) {
			document.location.hash = "#";
		}/*else if (map[16] && map[191]) {
			console.log(document.hasFocus())
			document.location.hash = "help";
			map = {}
		} */
	}

	renderSchemaBrowser();
	renderExamples();
	renderHelp();
	setupAutocomplete();

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

	if(localStorage.getItem('showWelcome')=='show' && !document.location.hash.startsWith('#share')) {
		document.location.hash='#help';
		document.querySelector('#welcome').checked = true;
	}

	if(document.location.hash.startsWith('#share')) {
		//TODO: Fix since there are lots of failure cases for this
		editor.setValue(atob(document.location.hash.slice(13)));
		document.location.hash = "";
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
			div.setAttribute("id","results-table");
			const error_regex = /([^\^]*)\^/
			error_extract = error_regex.exec(results.error.query[0]);
			error_msg = (error_extract !== null && error_extract.hasOwnProperty(1)) ? error_extract[1] : results.error.query[0]
			div.innerHTML = error_msg;
			document.querySelector("#results").appendChild(div);
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
			html += "<th title=\""+JSON.stringify(field).replace(/\"/g,"&quot;")+"\">"+field.id+"</th>";
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
		html+="<div id=\"results-table-actions\">Download: "
		html+="<a href=\"data:text/csv;charset=utf-8,"+encodeURI(csv)+"\" target\"_blank\" download=\"results.csv\">CSV</a>&nbsp;";
		html+="<a href=\"data:text/tsv;charset=utf-8,"+encodeURI(tsv)+"\" target\"_blank\" download=\"results.tsv\">TSV</a>&nbsp;";
		html+="<a href=\"javascript:copyResults()\">COPY</a>";
		html+=" <input placeholder=\"Filter...\" size=\"20\" onkeyup=\"filterResultsTable(this)\"/>";
		html+="</div>"
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
		let sql = JSON.parse(localStorage.getItem('queryHistory'))[index].result.sql;
		if(window.prompt('Set editor contents to the following SQL?', sql)) {
			editor.setValue(sql);
		}
	}

	function renderQueryHistory() {
		if (document.querySelector("#history-table") !== null) {
			document.querySelector("#history-table").parentNode.removeChild(document.querySelector("#history-table"));
		}
		var queryHistory = JSON.parse(localStorage.getItem('queryHistory'));

		var table = document.createElement("table");
		table.setAttribute("id","history-table");
		table.setAttribute("width","100%");
		html = "<thead><tr><th width=\"20\">Index</th><th>SQL Text</th><th width=\"100\">Row Count</th></tr></thead>";
		html += queryHistory.reverse().reduce(function(accumulator, currentValue, currentIndex, array) {
			if(!currentValue.success) {
				return accumulator;
			}
			var row = "<tr onclick=\"renderResultsTableWrapper("+currentIndex+")\">";
			row += "<td>"+currentIndex+"</td>";
			row += "<td class=\"query-history-sql-text\">" + "<a href=\"javascript:getResultSql("+currentIndex+")\">"+currentValue.result.sql.slice(0,200)+"...</a>" + "</td>";
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
			html += "<div onclick=\"editor.session.insert(editor.getCursorPosition(), this.innerText)\">"+table+"</div>"; 
			html += "<ul>" + data.fields.reduce(function(accumulator, currentValue) {
				return accumulator + "<li onclick=\"editor.session.insert(editor.getCursorPosition(), this.innerText)\">\"" + currentValue.id + "\"::"+currentValue.type+"</li>";
			},'') + "</ul>";
		}
		document.querySelector("#schema-browser-content").innerHTML = html;
	}

	function share() {
		if(document.location.hash.startsWith('#share')) {
			document.querySelector('#share-textarea').innerHTML = document.location.href + "?query=" + btoa(getCurrentQuery());
		}
	}

	function renderExamples() {
		let figure = document.createElement("figure");
		html="<a href=\"#\" class=\"closemsg\"></a><figcaption>";
		html += "<h1>Examples</h1>";
		html += "<div><button onclick=\"insertExample()\">Set editor contents to selected query</button></div>";
		html += "<textarea>" + queries.reduce(function(acc, cur) {
			return acc + cur + ";\n\n"
		},"") + "</textarea>";
		html += "</figcaption>";
		figure.innerHTML = html;
		document.querySelector("#examples").appendChild(figure);
	}

	function insertExample() {
		editor.setValue(window.getSelection().toString());
	}

	function handleEditorChange(e) {
		localStorage.setItem('editorValue',editor.getValue())
	}

	function filterResultsTable(e) {
		document.querySelectorAll("#results-table tbody tr").forEach(function(tr){tr.style.display="table-row"});
		document.querySelectorAll("#results-table tbody tr").forEach(function(tr){
			if(!tr.innerText.includes(e.value)) {
				tr.style.display="none";
			}
		});
	}

	function renderHelp() {
		document.querySelector("#help").innerHTML = help;
	}

	function setupAutocomplete() {
		var schema_tables = Object.entries(schema).map(function(key) {return {"title": key[1].title, "id": key[0]}});
		var schema_search = {
			identifierRegexps: [/[a-zA-Z_0-9\.\$\-\u00A2-\uFFFF]/],
			getCompletions: function(editor, session, pos, prefix, callback) {
				//if (prefix.length === 0) { callback(null, []); return }
				const regex = /FROM "(.+?)"/gi;
				m = regex.exec(getCurrentQuery());
				if(m && schema[m[1]]) {
					table = m[1];
					callback(null, schema[table].fields.filter(function(current_search){
						return current_search.id.startsWith(prefix); }).map(function(current_search) {
							return {
								"caption": current_search.id,
								"value": "\""+current_search.id+"\"::"+current_search.type,
								"score": (current_search.id.includes('.') ? 50 : 500),
								"meta": current_search.type,
							};
					}));
				} else {
					callback(null, schema_tables.filter(function(current_search){
						return current_search.id.startsWith(prefix); }).map(function(current_search) {
							return {
								"caption": current_search.title,
								"value": "\""+current_search.id+"\" "+current_search.title.toUpperCase().replace(/ /g,"_"),
								"score": (current_search.id.includes('.') ? 50 : 500),
								"meta": current_search.type,
							};
					}));
				}

			}
		}
		langTools.setCompleters([schema_search]);
	}

	function getStarted() {
		document.location.hash = "";
		editor.setValue(queries[Math.floor(Math.random()*queries.length)], 1);
		document.querySelector("#execute").click();
	}
