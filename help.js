const help = 	`<figure>
		<a href="#" class="closemsg"></a>
		<figcaption>
			<h1>Welcome (Help)</h1>
			<div><input type="checkbox" id="welcome" onclick="toggleWelcome()"><label for="welcome">Show Welcome on startup</label></div>
			<p><strong>Analyze Boston</strong> at <a href="https://data.boston.gov/">data.boston.gov</a> is "is the City of Boston's open data hub" with over 134 datasets and this Analyze Boston SQL Client is a tool for executing queries and displaying the results.</p>
			<p><strong>Analyze Boston SQL Client</strong> is a tool for building SQL queries to run against the Analyze Boston dataset.</p>
			<p>You can watch a video introduction here <a href="https://youtu.be/eKUrV0yQCW4">https://youtu.be/eKUrV0yQCW4</a></p>
			<p><button onclick="getStarted();">Get Started</button> with an example.</p>
			<p>Note: this interface is largely inspired Snowflake Cloud Datawarehouse</p>
			<h2>User Guide</h2>
			<h3>Query Editor</h3>
			<p>"Simply" write a valid SQL statement and click the "Run Query" button to run the query and then display the results (or error) in the panel to the right.</p>
			<p>Your worksheet may contain multiple queries.  Your cursor position within the editor controls which query is executed.  If you have an editor selection, then the selection will be executed.</p>
			<p>Use <code>ctrl + space</code> at any time to bring up the autocomplete menu.</p>
			<p>Use <code>command + Enter</code> to submit the current query.</p>
			<h3>Query Results</h3>
			<p>The query results panel contains query results, including errors</p>
			<p>Successful queries are displayed as a table</p>
			<p>Controls appear above the table to download the results as a CSV, TSV, or copy to clipboard</p>
			<p>You can also filter the results by typing a search string</p>
			<h3>Query History</h3>
			<p>The Query History panel displays your query history</p>
			<p>Click any row to restore the query results</p>
			<p>Click the SQL Text to be prompted to insert that into the editor</p>
			<h3>Keyboard Shorcuts</h3>
			<ul>
				<li><code>command + Enter</code> Run current query</li>
				<li><code>Esc</code> Dismiss the modal</li>
				<li><code>ctrl + space</code> bring up autocomplete</li>
			</ul>
			<h3>Schema Browser</h3>
			<p>Click "Schema Browser" to see the available data tables and column names</p>
			<p>Click a field to insert it into the editor at the current cursor position</p>
			<h3>Examples</h3>
			<p>Click "Examples" to see example queries.</p>
			<p>Select a query then click the "Insert" button to insert it into the editor</p>
			<h3>Link</h3>
			<p>Click "Link" to get a shareable link with your current worksheet embedded.  You may also bookmark such a link</p>
			<h3>Common Workflow</h3>
			<p>A common workflow is as follows:</p>
			<ol>
				<li>Go to <a href="https://data.boston.gov/dataset">https://data.boston.gov/dataset</a> and click on a dataset.</li>
				<li>Click the "Preview" button and select the hash from the URL (e.g. "5bce8e71-5192-48c0-ab13-8faff8fef4d7" for https://data.boston.gov/dataset/cityscore/resource/5bce8e71-5192-48c0-ab13-8faff8fef4d7)</li>
				<li>Enter the following query <code>SELECT * FROM "5bce8e71-5192-48c0-ab13-8faff8fef4d7" LIMIT 1</code></li>
				<li>Click "Run Query"</li>
				<li>You will see the results on the right.  You can use the column names to make further more interesting queries!</li>
			</ol>
			<p>This tool uses CKAN's SQL endpoint (<a href="http://docs.ckan.org/en/latest/maintaining/datastore.html#ckanext.datastore.logic.action.datastore_search_sql">documentation</a>.)</p>
			<h2>Example: Volume of 311 Reports Over Time</h2>
			<p>You want to see the volume of 311 reports over time.  Craft a SQL query that counts the incidents grouped by year and run it.</p>
			<pre><code>SELECT
	TO_CHAR("open_dt"::timestamp, 'YYYY') AS YEAR,
	COUNT(*) TOTAL_REPORTS,
	COUNT(*)/MAX(CASE WHEN EXTRACT(YEAR FROM CURRENT_DATE) = EXTRACT(YEAR FROM "open_dt"::timestamp) THEN CURRENT_DATE-(EXTRACT(YEAR FROM CURRENT_DATE)||'-01-01')::date ELSE 365 END) DAILY_AVERAGE
FROM "2968e2c0-d479-49ba-a884-4ef523ada3c0" REPORTS_311
WHERE
	"neighborhood_services_district" = '1'
GROUP BY TO_CHAR("open_dt"::timestamp, 'YYYY')
ORDER BY TO_CHAR("open_dt"::timestamp, 'YYYY') ASC</code></pre>
<table border="1"><thead><tr><th>year</th><th>total_reports</th><th>daily_average</th></tr></thead><tbody><tr><td>2011</td><td>2764</td><td>7</td></tr><tr><td>2012</td><td>7624</td><td>20</td></tr><tr><td>2013</td><td>8996</td><td>24</td></tr><tr><td>2014</td><td>9125</td><td>25</td></tr><tr><td>2015</td><td>11209</td><td>30</td></tr><tr><td>2016</td><td>10237</td><td>28</td></tr><tr><td>2017</td><td>12961</td><td>35</td></tr><tr><td>2018</td><td>14212</td><td>38</td></tr><tr><td>2019</td><td>2209</td><td>38</td></tr></tbody></table>
			<h2>Troubleshooting</h2>
			<p><strong>To see error messages</strong> enable this extension <a href="https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en">allow-control-allow-origin:*</a> otherwise you will just get generic errors.</p>
			<p>The tool uses CKAN DataStore, which is a thin layer on top of a PostgreSQL database, so the PostgreSQL docs are very helpful.  MySQL users may want to read <a href="https://wiki.postgresql.org/wiki/Things_to_find_out_about_when_moving_from_MySQL_to_PostgreSQL">Things to find out about when moving from MySQL to PostgreSQL</a>.</p>
			<p>Common Problems Include: </p>
			<ul>
				<li>500 error
					<div class="query-example-error">Error messages: <code>500 Error: often a "Class 22 - Data Exception" which occurs after the query begins executing such as: invalid_character_value_for_cast or division_by_zero, etc. More at https://www.postgresql.org/docs/10/static/errcodes-appendix.html</code></div>
					<p>The error message is a 500 HTTP status code without any additional data.  Most commonly it is a data exception, such as</p>
					<ul>
						<li>A cast failed (e.g. <code>'one'::decial</code>) and you need to be more careful (e.g. use <code>NULLIF("column1",'')</code>).</li>
						<li>You divided by zero somewhere (so look for division operators and use <code>NULLIF()</code> on the denominator.)</li>
					</ul>
					<ul>
						<li><span class="query-example-invalid">INVALID</span> <code>SELECT 1/0::decimal</code></li>
						<li><span class="query-example-valid">VALID</span> <code>SELECT (1/NULLIF(0,0))::decimal</code></li>
					</ul>
					<p>In this case, the API responds with a 500 code and no error message, but you can infer that it is a data except from this list (<a href="https://www.postgresql.org/docs/9.6/errcodes-appendix.html">https://www.postgresql.org/docs/9.6/errcodes-appendix.html</a>.)</p>
					<p>In this example, you can clearly see we were dividing by zero.</p>
				</li>
				<li>A system identifiers (e.g field names, table names, etc) wasn't <strong>doublequoted</strong>
					<p>All system identifiers need to be double quoted (every column and every table name)</p>
					<div class="query-example-error">Error messages: <code></code></div>
					<ul>
						<li><span class="query-example-invalid">INVALID</span> <code>SELECT * FROM 5bce8e71-5192-48c0-ab13-8faff8fef4d7 LIMIT 1</code></li>
						<li><span class="query-example-valid">VALID</span> <code>SELECT * FROM "5bce8e71-5192-48c0-ab13-8faff8fef4d7" LIMIT 1</code></li>
					</ul>
				</li>
				<li>A string wasn't <strong>single quoted</strong>
					<p>Any string needs to be single quoted</p>
					<div class="query-example-error">Error messages: <code></code></div>
					<ul>
						<li><span class="query-example-invalid">INVALID</span> <code>SELECT * FROM 5bce8e71-5192-48c0-ab13-8faff8fef4d7 LIMIT 1</code></li>
						<li><span class="query-example-valid">VALID</span> <code>SELECT * FROM "5bce8e71-5192-48c0-ab13-8faff8fef4d7" LIMIT 1</code></li>
					</ul>
				</li>
				<li>A nonexistent (or wrong-case) field was referenced
					<div class="query-example-error">Error messages: <code></code></div>
					<ul>
						<li><span class="query-example-invalid">INVALID</span> <code>SELECT * FROM 5bce8e71-5192-48c0-ab13-8faff8fef4d7 LIMIT 1</code></li>
						<li><span class="query-example-valid">VALID</span> <code>SELECT * FROM "5bce8e71-5192-48c0-ab13-8faff8fef4d7" LIMIT 1</code></li>
					</ul>
				</li>
				<li>A <code>::cast</code> failed
					<p>This is indicated by a 500 error.  See above.</p>
					<div class="query-example-error">Error messages: <code></code></div>
					<ul>
						<li><span class="query-example-invalid">INVALID</span> <code>SELECT * FROM 5bce8e71-5192-48c0-ab13-8faff8fef4d7 LIMIT 1</code></li>
						<li><span class="query-example-valid">VALID</span> <code>SELECT * FROM "5bce8e71-5192-48c0-ab13-8faff8fef4d7" LIMIT 1</code></li>
					</ul>
				</li>
			</ul>
		</figcaption>
	</figure>`

/*
column "foo" does not exist
	* If you meant to reference a column, then you forgot to doublequote it
	* If you meant to reference a string, then you forgot to singlequite it
function countx(text) does not exist
type "blah" does not exist
relation "6ddcd912-32a0-43df-9908-63574f8c7e77x" does not exist
500 Error
 * You compared data of different types
 * Ambiguous column names
 */