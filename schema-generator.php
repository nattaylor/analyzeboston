<?php
/**
 * Generate schema.js from the datasets
 *
 * Usage: php -f schema-generator.php > schema.js
 * 
 */

	$config = file_get_contents("config.js");

	preg_match_all('/\{.*\}/sm', $config, $json);

	$host = json_decode( $json[0][0] )->host;

	$ch = curl_init($host."/api/3/action/package_search?q=*:*&rows=1000");
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_VERBOSE, true);
	$result = curl_exec($ch);
	$package_list = json_decode($result)->result->results;
	curl_close($ch);

	$schema = array();

	foreach ($package_list as $package) {
		
		$ch = curl_init($host."/api/3/action/datastore_search?limit=0&id=".$package->resources[0]->id);
		curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);	
		$result = json_decode(curl_exec($ch));
		curl_close($ch);
		if (!isset($result->result->fields)) {
			continue;
		}
		$schema[$package->resources[0]->id] = array("fields" => $result->result->fields, "title" => $package->title);
	}

	echo "var schema = ".json_encode($schema, JSON_PRETTY_PRINT);

/*
[23]=>
      object(stdClass)#143 (3) {
        ["info"]=>
        object(stdClass)#142 (3) {
          ["notes"]=>
          string(61) "Indicates the weekday associated with the daily metric values"
          ["type_override"]=>
          string(4) "text"
          ["label"]=>
          string(0) ""
        }
        ["type"]=>
        string(4) "text"
        ["id"]=>
        string(16) "CTY_SCR_DAY_NAME"
      }
 */