/**
 * SQL Client Application
 *
 * @author Nat Taylor <nattaylor@gmail.com>
 *
 * Note: messy abuses of global namespace.  Oops.
 * 
 */
 	/*
	'use strict';
 	import { config } from './config.js';
 	import { schema } from './schema.js';
 	import { help }   from './help.js';
 	import { queries }   from './queries.js';
 	*/

	//Setup the UI
	renderSchemaBrowser();
	renderExamples();
	renderHelp();
	renderQueryHistory();
	setupAutocomplete();
	setupKeyboardShortcuts();
	setupStorageAndCheckHashes();

	//Setup Event Listeners
	window.addEventListener('hashchange', renderShare, false);
	document.addEventListener("itemInserted", renderQueryHistory, false);
	document.querySelector("#execute").addEventListener("click", executeQuery);
	editor.on("change",handleEditorChange);

	
	function setupStorageAndCheckHashes() {
		if(!localStorage.getItem('proxy')) {
			localStorage.setItem('proxy',true);
		}
		if(localStorage.getItem('proxy') === 'true') {
			config.datastore_search_sql = document.location.origin+document.location.pathname+"query-proxy.php?sql=";
		}

		if(localStorage.getItem('showWelcome') === null) {
			localStorage.setItem('showWelcome', 'true');
		}

		if(localStorage.getItem('editorValue') === null) {
			localStorage.setItem('editorValue', '');
			editor.setValue(queries[Math.floor(Math.random()*queries.length)], 1);
		} else {
			editor.setValue(localStorage.getItem('editorValue'));
		}

		if(localStorage.getItem('showWelcome')==='true' && !document.location.hash.startsWith('#share')) {
			document.location.hash='#help';
			document.querySelector('#welcome').checked = true;
		}

		//Load Shared Query if set
		if(document.location.hash.startsWith('#share')) {
			//TODO: Fix since there are lots of failure cases for this
			editor.setValue(atob(document.location.hash.slice(13)));
			document.location.hash = "";
		}

		if(document.location.hash.includes('?debug=true')) {
			localStorage.setItem('debug',true);
		} else if (document.location.hash.includes('?debug=false') || localStorage.getItem('debug') === null) {
			localStorage.setItem('debug',false);
		}
	}

	function toggleWelcome() {
		localStorage.setItem('showWelcome', localStorage.getItem('showWelcome') === 'true' ? 'false' : 'true');
	}

	function executeQuery() {
		removeResultsTable();
		
		log([{"label":"Running Query","logs":[getCurrentQuery()]}]);
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", queryExecutionListener);
		oReq.addEventListener("error", queryExecutionFailure);
		oReq.open("GET", config.datastore_search_sql+rawurlencode(getCurrentQuery()));
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
	 * @return string the current query
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
	function queryExecutionFailure() {
		div = document.createElement("div");
		div.setAttribute("id","results-table");
		div.innerHTML = "Error: To troubleshoot open devtools or see help.  Most commonely: missing &quot;, errant field name or similar";
		document.querySelector("#results").appendChild(div);
	}

	function queryExecutionListener() {

		//Build results if not provided by endpoint
		if (this.status == 500) {
			results = {"success": false, "error": { "query": ["(500ErrorFromException) Exception occurred during query execution after successful query parsing."] } }
		} else {
			results = JSON.parse(this.responseText);    
		}

		if(results.success === true) {
			renderResultsTable(results);
			queryHistoryAdd(results);
		} else if (results.success === false) {
			renderError(results);
		} else {
			
		}
	}

	function renderError(results) {
		div = document.createElement("div");
		div.setAttribute("id","results-table");
		div.innerHTML = "<pre>"+results.error.query[0]+"</pre>";
		document.querySelector("#results").appendChild(div);
	}

	function renderResultsTable(results) {
		removeResultsTable();
		var table = document.createElement("table");
		table.setAttribute("id","results-table");
		html = "<thead><tr>";
		headers = []
		for (var field of results.result.fields) {
			if(field.id=='_full_text') {
				continue;
			}
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
				if(field.id=='_full_text') {
					continue;
				}
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
			queryHistory.shift();
		}
		queryHistory.push(results);
		localStorage.setItem('queryHistory',JSON.stringify(queryHistory));
		var event = new Event('itemInserted');
		document.dispatchEvent(event);
		return true;
	}

	/** Encodes additional characters as required by the datastore_search_sql API */
	function rawurlencode (str) {
		str = (str+'').toString();
		return encodeURIComponent(str).replace(/!/g, '%21').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/\*/g, '%2A');
	}

	function copyResults() {
		var copy = document.querySelector("#results-ta");
		copy.select();
		document.execCommand('copy');
	}

	function promptResultSql(index) {
		let sql = JSON.parse(localStorage.getItem('queryHistory'))[index].result.sql;
		if(window.prompt('Set editor contents to the following SQL?', sql)) {
			editor.setValue(sql);
		}
	}

	function renderQueryHistory() {
		if(!localStorage.getItem('queryHistory')) {
			localStorage.setItem('queryHistory',JSON.stringify([]));
		}
		if (document.querySelector("#history-table") !== null) {
			document.querySelector("#history-table").parentNode.removeChild(document.querySelector("#history-table"));
		}
		var queryHistory = JSON.parse(localStorage.getItem('queryHistory'));

		var table = document.createElement("table");
		table.setAttribute("id","history-table");
		table.setAttribute("width","100%");
		html = "<thead><tr><th width=\"20\">Index</th><th>SQL Text</th><th width=\"100\">Row Count</th></tr></thead>";
		html += queryHistory.reduce(function(accumulator, currentValue, currentIndex, array) {
			if(!currentValue.success) {
				return accumulator;
			}
			var row = "<tr onclick=\"renderResultsTableWrapper("+currentIndex+")\">";
			row += "<td>"+currentIndex+"</td>";
			row += "<td class=\"query-history-sql-text\">" + "<a href=\"javascript:promptResultSql("+currentIndex+")\">"+currentValue.result.sql.slice(0,200)+"...</a>" + "</td>";
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

	function renderShare() {
		if(document.location.hash.startsWith('#share')) {
			document.querySelector('#share-textarea').innerHTML = document.location.href + "?query=" + btoa(getCurrentQuery());
		}
	}

	function renderExamples() {
		let figure = document.createElement("figure");
		html="<a href=\"#\" class=\"closemsg\"></a><figcaption>";
		html += "<h1>Examples</h1>";
		html += "<div><button onclick=\"insertSelectionIntoEditor()\">Set editor contents to selected query</button></div>";
		html += "<textarea>" + queries.reduce(function(acc, cur) {
			return acc + cur + ";\n\n"
		},"") + "</textarea>";
		html += "</figcaption>";
		figure.innerHTML = html;
		document.querySelector("#examples").appendChild(figure);
	}

	function insertSelectionIntoEditor() {
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


	/**
	 * Instruct Ace Autocompletion how to find matches
	 *
	 * More info at https://github.com/ajaxorg/ace/wiki/How-to-enable-Autocomplete-in-the-Ace-editor
	 *
	 *   1. Ace calls getCompletions() on keypresses and passes `prefix`
	 *   2. First, attempt to detect if user already has a table.  If so, search that table's columns.  If not, search table names.
	 *   3. In callback() the second argument is what to search (some dataset) and how to search it (e.g. filter())
	 *   4. Check if each item  (`current_search`) contains the search term (`prefix`)
	 *   5. return an object
	 *     - caption: what shows up in the typeahead dialog
	 *     - value: what gets autocompleted, if selected
	 *     - meta: appears to the right of caption in typeahead dialog
	 *     - score: how to rank results
	 * 
	 */
	function setupAutocomplete() {
		// Generate the list of tables from the schema
		var schema_tables = Object.entries(schema).map(function(key) {return {"title": key[1].title, "id": key[0]}});
		var schema_search = {
			identifierRegexps: [/[a-zA-Z_0-9\.\$\-\u00A2-\uFFFF]/],
			getCompletions: function(editor, session, pos, prefix, callback) {
				//if (prefix.length === 0) { callback(null, []); return }
				const regex = /FROM "([a-z0-9\-]+)"/gi;
				m = regex.exec(getCurrentQuery());
				if(m && schema[m[1]]) {
					table = m[1];
					callback(null, schema[table].fields.filter(function(current_search){
						return current_search.id.toLowerCase().includes(prefix.toLowerCase()); }).map(function(current_search) {
							return {
								"caption": current_search.id,
								"value": "\""+current_search.id+"\"::"+current_search.type,
								"score": (current_search.id.includes('.') ? 50 : 500),
								"meta": current_search.type,
							};
					}));
				} else {
					callback(null, schema_tables.filter(function(current_search){
						return current_search.id.toLowerCase().includes(prefix.toLowerCase()); }).map(function(current_search) {
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

	function log(entries) {
		if(localStorage.getItem('debug') === "true") {
			entries.forEach(function(entry) {
				if(typeof entry === 'object') {
					console.groupCollapsed(entry.label);
					entry.logs.forEach(log => console.log(log))
					console.groupEnd();
				} else {
					console.log(entry);
				}
			});
		}
	}

	function setupKeyboardShortcuts() {
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
	}

	function toggleFullscreen(selector) {
		document.querySelector(selector).classList.toggle("fullscreen");
	}
