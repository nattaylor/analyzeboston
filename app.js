	
	var map = {}; // You could also use an array
	onkeydown = onkeyup = function(e){
	    e = e || event; // to deal with IE
	    map[e.keyCode] = e.type == 'keydown';
	    if(map[13] && map[91]) {
	    	document.querySelector("#execute").click();
	    	map = {}
	    }
	}
	document.querySelector("#execute").addEventListener("click", execute);
	editor.setValue(queries[Math.floor(Math.random()*queries.length)], 1);
	if(localStorage.getItem('showWelcome') === null) {
		localStorage.setItem('showWelcome', 'show');
	}
	if(localStorage.getItem('showWelcome')=='show') {
		document.location.hash='#help';
		document.querySelector('#welcome').checked = true;
	}

	function toggleWelcome() {
		localStorage.setItem('showWelcome', localStorage.getItem('showWelcome') == 'show' ? 'hide' : 'show');
	}

	var ENDPOINT = "https://data.boston.gov/api/3/action/datastore_search_sql?sql=";

	function execute() {
		if (document.querySelector("#results") !== null) {
			document.body.removeChild(document.querySelector("#results"));
		}
		var oReq = new XMLHttpRequest();
		oReq.addEventListener("load", reqListener);
		oReq.addEventListener("error", transferFailed);
		oReq.open("GET", ENDPOINT+rawurlencode(editor.getValue()));
		oReq.send();
	}

	/**
	 * Note: Without CORS this will happen
	 * @return void
	 */
	function transferFailed() {
		div = document.createElement("div");
		div.setAttribute("id","results");
		div.innerHTML = "Error: To troubleshoot open devtools or see help.  Most commonely: missing &quot;, errant field name or similar";
		document.body.appendChild(div);
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

		table = document.createElement("table");
		table.setAttribute("id","results");
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
		document.body.appendChild(table);

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