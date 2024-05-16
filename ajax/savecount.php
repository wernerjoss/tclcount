<?php
	/*	this will not work here ! (together with $param = $_GET...)
	$request = $_REQUEST; //a PHP Super Global variable which used to collect data after submitting it from the form
	$Number = $request['Number'];
	*/
	$param = $_GET["p"];	// decide what data to retrieve based on call
	
	//	include "../include/connect.php";
	require_once "../include/connect.php";

	$mysqli = new mysqli($db_host, $db_user, $db_pw, $db_name);

	if ($mysqli->connect_errno) {
	  echo "Failed to connect to MySQL: " . $mysqli->connect_error;
	  exit();
	}

	// get last Count
	$sql = "SELECT * from TCL_count";
	$result = $mysqli->query($sql);
	$numrows = mysqli_num_rows($result);
	if ($numrows>0) {
		$rows = $result->fetch_all(MYSQLI_ASSOC);
		foreach ($rows as $row)	{
			$res = $row;
			//	echo print_r($res);
		}
		$count = intval($res["Count"]);	// get last Count
		//	echo "Last Count:".$count."<br>";
	}
	switch($param) {
		case 'add':
			$count += 1;
			break;
		case 'sub':
			$count -= 1;
			if (($count) < 0) $count = 0;
			break;
		case 'reset':
			$count = 0;
			break;
	}
	//	INSERT or UPDATE SQL data
	$sql = "SELECT * from TCL_count";
	$result = $mysqli->query($sql);
	if (mysqli_num_rows($result)==0) { 
		$sql = "INSERT INTO TCL_count (Count)
		VALUES ('".$count."')";
	}	else	{
		$sql = "UPDATE TCL_count SET Count='".$count."'";
	}
	
	if ($mysqli->query($sql)) {
		//	echo "Req: ".print_r($request);
		echo "Count record has been saved successfully - be sure to reload page to see the results!";
	} else {
		//	echo "Req: ".print_r($request)." Error: " . $sql . "<br>" . $mysqli->error;
		return "Req: ".$request." Error: " . $sql . "<br>" . $mysqli->error;
	}

	// Close the connection after using it
	$mysqli->close();
?>