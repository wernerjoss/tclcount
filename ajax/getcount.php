<?php
	require_once "../include/connect.php";
	
	$mysqli = new mysqli($db_host, $db_user, $db_pw, $db_name);
	if ($mysqli->connect_errno) {
		echo "Failed to connect to MySQL: " . $mysqli->connect_error;
		exit();
	}
	$sql = "SELECT * FROM TCL_count";
	$results = $mysqli->query($sql);
	// Fetch Associative array
	$row = $results->fetch_all(MYSQLI_ASSOC);
	// Free result set
	$results->free_result();
	$mysqli->close();
	echo json_encode($row);

?>