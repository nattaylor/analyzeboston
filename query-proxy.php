<?php

	/**
	 * Proxy Requests via the origin because CORS
	 */
	
	$config = file_get_contents("config.js");

	preg_match_all('/\{.*\}/sm', $config, $json);

	$base = json_decode( $json[0][0] )->datastore_search_sql;

	$ch = curl_init($base.rawurlencode($_GET['sql']));
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_VERBOSE, false);
	$result = curl_exec($ch);
	$responseInfo = curl_getinfo ( $ch );
	curl_close($ch);

	http_response_code($responseInfo['http_code']);
	header(sprintf('contet-type: %s', $responseInfo['content_type']));
	header(sprintf('contet-length: %s', $responseInfo['download_content_length']));
	echo $result;