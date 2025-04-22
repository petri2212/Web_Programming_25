<?php
	$servername= "localhost";
	$username = "root";
	$dbname= "fadein"; //my_pfunibg
	$password = null;
	$error = false;
	
	try {
		$conn = new PDO("mysql:host=".$servername.";dbname=".$dbname, 
											$username, $password);
		// set the PDO error mode to exception
		$conn->setAttribute(PDO::ATTR_ERRMODE, 
												PDO::ERRMODE_EXCEPTION);
	} catch(PDOException$e) {
		echo "DB Error: " . $e->getMessage();
		$error = true;
	}
?>
