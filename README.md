# SQL Client for Analyze Boston

Edit and execute SQL queries in the browser using the CKAN DataStore API on the Analyze Boston Datasets

## Getting Started

A User Guide is included in the application's **Help** dialog.

A Develop Guide has not been created yet.

The Administrator Guide is simply the **"Installation"** section below.

## Motivation

This project is motivated by the workflow hurdles when working with the CKAN `datastore_search_sql` API,
which offers the full power of Postgres through a clumsy interface.  Some challenges I encountered:

  * The endpoint requires more than just URLEncoding (what about `*, ', !, (, )`)
  * The errors aren't particularly intuitive (i.e. any data exception, like `division_by_zero` results in an opaque 500 error)
  * 

## Installation

1. Clone the repo
2. Get the latest [Ace editor](https://github.com/ajaxorg/ace-builds/) and store it in `src-noconflict/`
3. Customize config.js
4. Run `php -f schema-generator.php > schema.js`
5. Serve it (I prefer `php -S localhost:8000`)


**NOTE** To disable the proxy, run `localStorage.setItem('proxy',false);`

## Developer Guide

**WARNING** This code is MESSY and the abuse of the global namespace is attrocious.  Oops.

**Prerequisites**

  * Profiency with Javascript, HTML and CSS
  * Basic understanding of CKAN Project's dataset web services (especially `package_search`, `datastore_search` & `datastore_search_sql`)
  * Probably run `SELECT version();` so you know what version of Postgres you're working with (e.g. `--PostgreSQL 9.6.9 on x86_64-pc-linux-gnu, compiled by gcc (GCC) 4.9.3, 64-bit`)

### Project Structure / Application Architecture

Basically all the functionality is contained in `app.js`

```
+-Browser------------------------------------------------+
| index.html ---> app.js                                 |
|  - style.css     -setup: config, render, etc           |
|  - Lib: ace.js   -execute: call API & handle response  |
|  - Helpers       -render: (re)draw UI elements         |
|    - help.js                                           |
|    - schema.js                                         |
|    - config.js                                         |
+--------------------------------------------------------+
```

### Making Changes

Basiscally, to change anything interesting, you should go into `app.js` and make changes, taking care that you let all the `setup<Stuff>()` functions run first, since they set stuff up and do the initial rendering.


### Modal Dialogs

For modal dialogs we use (abuse?) the `:target` pseudo-selector.

To add a new modal dialog simply configure a new element with `class="lightbox" id="your-id"`, then to display the modal use `<a href="your-id">Link</a>` (or `document.location.hash = "your-id"`)

### Debugging

In almost all cases, the Browser's developer tools are the best option.

A weak debug mode (`localStorage.setItem('debug','true')`) will result in calls to `log([])` getting displayed on the console.

You can create a nested log by passing `{"label":"MyLabel","logs":[]}`

### Testing

Completely manual.  Goodluck!

**NOTE** Most testing to date has been done in Chrome, and only the very slightest of attempts has been made at cross-browser testing.

### Documentation Links

  * [CKAN DataStore API Docs](http://docs.ckan.org/en/latest/maintaining/datastore.html#the-datastore-api)

## Roadmap
 
 - **Documentation**
    - Error Examples (add to the troubleshooting section of `help.js`)
    - Example of Rollup/Cube
 - **Features**
    - Query History: reverse chronological
    - Schema Browser sidebar
    - Schema Browser should filter to active table
    - Schema Browser display to metadata about a dataset
 - **Project** (ways to improve the project and code within)
    - DRY the modals (with `<template>` etc)
    - Automated Testing
    - Convert to library/Class
    - Adopt a framework
    - Build Script
    - Contribute to AnalzeBoston and/or as CKAN extension (See: https://docs.ckan.org/en/latest/extensions/index.html)
 - **Icebox** (Things we won't do)
    - Editor Tabs (Do we really need this?)
    - BUG: results for errors (Doesn't seem like this is needed?)
    - Typehead: default transforms (e.g. into decimals, 1) create table of fully qualified names and types 2) implement
    - Typeahad: transform hints: nullif('','')::decimal
 - **Done**
 - ~~Developer Guide~~
 - ~~Layout: Resize & fullscreen panels~~
 - ~~Example: CTE & Window~~
 - ~~Improve Use of Config~~   
 - ~~Proxy (only needed to handle 409s)~~
 - ~~Separate scripts and CSS~~
 - ~~Add DEBUG mode (with `console.log()`)~~   
 - ~~Example: Polygon~~
 - ~~Filter results~~
 - ~~Layout: Improve colors and positioning~~   
 - ~~Add datatype to schema for browser and typeahead~~
 - ~~Typeahead Improvements: BUG: Typehead broken without tablename~~
    - ~~Typeahead Improvements: Human readable table names~~
    - ~~Typeahead Improvements: Show datatype in typeahead~~
    - ~~Typeahead Improvements: Configurable autocomplete? (I think this means search tables until one is set)~~   
 - ~~History~~
    - ~~show query history~~
    - ~~Retrieve results~~
 - ~~Scrape schema: `SELECT * FROM "" LIMIT 1;` response.result.fields ex {type: "text", id: "year"}~~
    - ~~https://data.boston.gov/api/3/action/package_list?limit=150 -> https://data.boston.gov/api/3/action/datastore_search?id=6ddcd912-32a0-43df-9908-63574f8c7e77&limit=0~~
    - ~~https://data.boston.gov/api/3/action/package_search?q=*:*&rows=150&~~
 - ~~add basic typeahead~~
 - ~~Errors~~
    - ~~look at the response.success property~~
    - ~~display the error!~~
 - ~~Download as CSV/TSV~~
 - ~~Copy to clipboard~~
 - ~~Schema browser panel~~
 - ~~Enable worksheet to have multiple queries~~
 - ~~Usage Instructions~~
 - ~~Welcome Screen~~
 - ~~Trim semicolins~~
 - ~~Example: PIVOT via `FILTER()`~~
 - ~~Example: Permits~~
 - ~~Example: Crime~~
 - ~~Example: 311~~
 - ~~Deeplinking (with query)~~
 - ~~Add Editor Saving~~
 - ~~Change Examples to dialog~~

## Ideas

### Convert to CKAN Extension

This project is probably a good candidate for a [CKAN extension](https://docs.ckan.org/en/latest/extensions/index.html)

Some work will need to be done to genericize it.

### Infer Data Type

We should look for indicators (e.g. field name contains "date") then set `$.filed.info.type_override` in `schema-generator.php`

```
DateTime
_dt
_DT
_date
date$
timestamp

Total
Cost
```
### Refactoring Thoughts

* Move ace setup into app.js
