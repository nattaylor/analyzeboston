# SQL Client for Analyze Boston

Edit and execute SQL queries in the browser using the CKAN DataStore API on the Analyze Boston Datasets

## Installation

Get the latest Ace editor `src-noconflict/` https://github.com/ajaxorg/ace-builds/ 


## DataStore API Docs

http://docs.ckan.org/en/latest/maintaining/datastore.html#the-datastore-api

## TODO
 - Welcome Screen
    - ~Usage Instructions~
    - Error Examples
 - Examples
    - Window query
    - CTE
    - ~PIVOT via `FILTER()`~
    - ~Permits~
    - ~Crime~
    - ~311~
 - Features
    - Trim semicolins
    - Proxy (only needed to handle 409s)
    - Deeplinking (with query)
    - Typeahead Improvements
        - BUG: Typehead broken without tablename
        - Human readable table names
        - Show datatype in typeahead
        - default transforms (e.g. into decimals, 1) create table of fully qualified names and types 2) implement
        - transform hints: nullif('','')::decimal
        - Configurable autocomplete?
    - Resize & fullscreen panels
    - Schema browser panel
    - Editor Tabs
    - Enable worksheet to have multiple queries
 - Project
    - Add `console.log()`ing
    - Separate scripts and CSS
    - Automated Testing
    - Convert to library/Class
    - Adopt a framework
    - Build Script
    - Contribute to AnalzeBoston and/or CKAN (See: https://docs.ckan.org/en/latest/extensions/index.html)
 - ~History~
    - ~show query history~
    - ~Retrieve results~
 - ~Scrape schema: `SELECT * FROM "" LIMIT 1;` response.result.fields ex {type: "text", id: "year"}~
    - ~https://data.boston.gov/api/3/action/package_list?limit=150 -> https://data.boston.gov/api/3/action/datastore_search?id=6ddcd912-32a0-43df-9908-63574f8c7e77&limit=0~
    - ~https://data.boston.gov/api/3/action/package_search?q=*:*&rows=150&~
 - ~add basic typeahead~
 - ~Errors~
    - ~look at the response.success property~
    - ~display the error!~
 - ~Download as CSV/TSV~
 - ~Copy to clipboard~

## Examples

`SELECT version(); --PostgreSQL 9.6.9 on x86_64-pc-linux-gnu, compiled by gcc (GCC) 4.9.3, 64-bit`

```
{
    "help": "https://data.boston.gov/api/3/action/help_show?name=datastore_search_sql",
    "success": false,
    "error": {
        "info": {
            "params": [{}],
            "statement": ["SELECT\n    *\nFROM \"approved-building-permits\"\nLIMIT 1;"],
            "orig": ["relation \"approved-building-permits\" does not exist\nLINE 3: FROM \"approved-building-permits\"\n             ^\n"]
        },
        "query": ["(ProgrammingError) relation \"approved-building-permits\" does not exist\nLINE 3: FROM \"approved-building-permits\"\n             ^\n 'SELECT\\n    *\\nFROM \"approved-building-permits\"\\nLIMIT 1;' {}"],
        "__type": "Validation Error"
    }
}
```

```
{
    "help": "https://data.boston.gov/api/3/action/help_show?name=datastore_search_sql",
    "success": true,
    "result": {
        "records": [{
            "Parcel_ID": "2012032000",
            "Comments": "Change connector link layout from attached enclosed walkway to partially enclose walkway with canopy.",
            "Location": "(42.260750000, -71.149610000)",
            "PermitNumber": "A100071",
            "PermitTypeDescr": "Amendment to a Long Form",
            "ISSUED_DATE": "2011-11-04T11:04:58",
            "sq_feet": "170",
            "TOTAL_FEES": "429.00",
            "EXPIRATION_DATE": "2012-05-04 00:00:00",
            "WORKTYPE": "COB",
            "STATUS": "Open",
            "ZIP": "02132",
            "APPLICANT": "Renee Santeusanio",
            "STATE": "MA",
            "DECLARED_VALUATION": "40000.00",
            "CITY": "West Roxbury",
            "DESCRIPTION": "City of Boston",
            "_full_text": "'-04':31,37 '-05':36 '-11':30 '-71.149610000':58 '00':38,39,40 '02132':54 '04':33 '11':32 '170':46 '17268':55 '175':47 '2011':29 '2012':35 '2012032000':56 '40000.00':27 '42.260750000':57 '429.00':28 '58':34 'a':5 'a100071':1 'amendment':3 'attached':16 'boston':10,44 'boundary':49 'canopy':24 'change':11 'city':8,42 'cob':2 'comm':45 'connector':12 'enclose':21 'enclosed':17 'form':7 'from':15 'layout':14 'link':13 'long':6 'ma':53 'of':9,43 'open':41 'partially':20 'rd':50 'renee':25 'roxbury':52 'santeusanio':26 'to':4,19 'w':48 'walkway':18,22 'west':51 'with':23",
            "OCCUPANCYTYPE": "Comm",
            "ADDRESS": "175  W Boundary RD",
            "OWNER": "CITY OF BOSTON",
            "_id": 1,
            "Property_ID": "17268"
        }],
        "fields": [{
            "type": "int4",
            "id": "_id"
        }, {
            "type": "tsvector",
            "id": "_full_text"
        }, {
            "type": "text",
            "id": "PermitNumber"
        }, {
            "type": "text",
            "id": "WORKTYPE"
        }, {
            "type": "text",
            "id": "PermitTypeDescr"
        }, {
            "type": "text",
            "id": "DESCRIPTION"
        }, {
            "type": "text",
            "id": "Comments"
        }, {
            "type": "text",
            "id": "APPLICANT"
        }, {
            "type": "text",
            "id": "DECLARED_VALUATION"
        }, {
            "type": "text",
            "id": "TOTAL_FEES"
        }, {
            "type": "timestamp",
            "id": "ISSUED_DATE"
        }, {
            "type": "text",
            "id": "EXPIRATION_DATE"
        }, {
            "type": "text",
            "id": "STATUS"
        }, {
            "type": "text",
            "id": "OWNER"
        }, {
            "type": "text",
            "id": "OCCUPANCYTYPE"
        }, {
            "type": "text",
            "id": "sq_feet"
        }, {
            "type": "text",
            "id": "ADDRESS"
        }, {
            "type": "text",
            "id": "CITY"
        }, {
            "type": "text",
            "id": "STATE"
        }, {
            "type": "text",
            "id": "ZIP"
        }, {
            "type": "text",
            "id": "Property_ID"
        }, {
            "type": "text",
            "id": "Parcel_ID"
        }, {
            "type": "text",
            "id": "Location"
        }],
        "sql": "SELECT\n    *\nFROM \"6ddcd912-32a0-43df-9908-63574f8c7e77\"\nLIMIT 1;"
    }
}```