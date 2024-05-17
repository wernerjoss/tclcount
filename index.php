<?php
// Start the session
session_start();
?>
<!doctype html>
<html lang="de">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="refresh" content="15" >
	<title>TCL Zweirad Traings-Counter</title>
  	<!-- Bootstrap CSS local -->
	<link rel="stylesheet" href="assets/bootstrap-4.4.1/css/bootstrap.min.css">
	<!-- Page CSS -->
  	<link rel="stylesheet" href="assets/css/styles.css">
	<link rel="stylesheet" href="assets/css/font-awesome.min.css">
</head>
<body>
	<!-- <div style="background: url(./assets/img/Bahn2011.jpg)" class="page-holder bg-cover">  see 	https://jsfiddle.net/bootstrapious/vq6pxe78/ -->
	<div class="page-holder bg-cover">
		<div id = "top" class="container">
			<?php
			$Username = $_GET["user"];
			// remember Username as Session var for Convenience (keep 'logged in' Status during Session)
			if (isset($Username))	{ 
				$_SESSION["user"] = $Username; 
			}
			if (isset($_SESSION["user"])) {
				$Username = $_SESSION["user"];
			}
			if (isset($Username)) {
				require_once "./include/connect.php";
				$mysqli = new mysqli($db_host, $db_user, $db_pw, $db_name);
				if ($mysqli->connect_errno) {
					echo "Failed to connect to MySQL: " . $mysqli->connect_error;
					exit();
				}
				$sql = 'SELECT Count FROM TCL_count';
				//	echo $sql;
				$results = $mysqli->query($sql);
				$row = $results->fetch_all(MYSQLI_ASSOC);
				if (is_array($row))	{
					$Count = $row[0]["Count"];
				}
				$results->free_result();
				$mysqli->close();

				echo '<br><br>
				<h3>TCL Zweirad Counter</h3>
				<h4>Aktueller Zählerstand:</h4>
				<h2 id="Count">';echo $Count;echo '</h2>
				<div id="CountForm">
					<div class="row">
						<div class="col-md-6">
							<h4>Hallo <span id="Username">';echo $Username;echo '</span></h4>
							<h4>Deine Zählerstandseingabe:</h4>
							<form action="ajax/savecount.php" id="form">
								<div id="CForm" class="row">
									<div class="col-sm-4" style="margin-top: 1em;">
										<button type="button" class="btn btn-primary" id="btnPlus">+</button>
									</div>
									<div class="col-sm-4" style="margin-top: 1em;">
										<button type="button" class="btn btn-primary" id="btnMinus">-</button>
									</div>
									<div class="col-sm-4" style="margin-top: 1em;">
										<button type="button" class="btn btn-primary" id="btnPlus10">+10</button>
									</div>
									<div class="col-sm-4" style="margin-top: 1em;">
										<button type="button" class="btn btn-primary" id="btnReset">Reset</button>
									</div>
									<div class="col-sm-12" style="margin-top: 1em;">
										<h5>oder numerisch:</h5>
									</div>
									<div class="col-sm-4">
										<input class="form-control" type="text" name="Number">
										<button type="button" class="btn btn-primary" id="btnSubmit" style="margin-top: 1em;">Absenden</button>
									</div>
								</div>
							</form>
						</div>
					</div>
					<p></p>
				</div>';
			}	else	{
				echo '<div class="row">
				<div class="col-md-8">
				<h4>Hallo Gast, du bist nicht angemeldet und kannst daher hier nichts tun.</h4><br>
				</div>
				</div>';
			}
			?>
	</div>	<!-- background container	-->
	<!-- Must put our javascript files here to fast the page loading -->
	<!-- jQuery library local -->
	<script src="assets/js/jquery-3.6.0.min.js"></script>
	<!-- Bootstrap JS local -->
	<script src="assets/bootstrap-4.4.1/js/bootstrap.min.js"></script>
	<!-- Page Scripts -->
	<script src="assets/js/savecount.js"></script>
	
</body>
</html>