<?php
require_once("db.php");
$db_handle = new DBController();
$query ="SELECT * FROM state ORDER BY state";
$results = $db_handle->runQuery($query);
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1">
		
		<title>//</title>

		<!-- Loading third party fonts -->
		<link href="http://fonts.googleapis.com/css?family=Roboto:300,400,700|" rel="stylesheet" type="text/css">
		<!-- <link href="http://fonts/font-awesome.min.css" rel="stylesheet" type="text/css"> -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>

		<script src="https://code.jquery.com/jquery-2.1.1.min.js" type="text/javascript"></script>

		<script>
			function getState(val) {
				$.ajax({
				type: "POST",
				url: "ajax.php",
				data:'state_id_2='+val,
				success: function(data){
					$("#city").html(data);
				}
				});
			}

			function selectCountry(val) {
			$("#search-box").val(val);
			$("#suggesstion-box").hide();
			}
		</script>

		<!-- Loading main css file -->
		<link rel="stylesheet" href="style.css">
		
		<!--[if lt IE 9]>
		<script src="js/ie-support/html5.js"></script>
		<script src="js/ie-support/respond.js"></script>
		<![endif]-->

	</head>


	<body>
		
		<div class="site-content">
			<div class="site-header">
				<div class="container">
					<a href="index.html" class="branding">
						<img src="images/tmlogo.png" alt="" class="logo" width="100px" height="45px">
						<div class="logo-type">
							<h1 class="site-title">TM R&D</h1>
							<small class="site-description"></small>
						</div>
					</a>

					<!-- Default snippet for navigation -->
					<!-- <div class="main-navigation">
						<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						<ul class="menu">
							<li class="menu-item current-menu-item"><a href="index.html">Home</a></li>
							<li class="menu-item"><a href="news.html">News</a></li>
							<li class="menu-item"><a href="live-cameras.html">Live cameras</a></li>
							<li class="menu-item"><a href="photos.html">Photos</a></li>
							<li class="menu-item"><a href="contact.html">Contact</a></li>
						</ul> --> <!-- .menu -->
					<!-- </div> --> <!-- .main-navigation -->

					<!-- <div class="mobile-navigation"></div> -->

			<!-- 	</div> -->
			</div> <!-- .site-header -->

			<div class="hero">
				<div class="container">

					  <br>
					  <center><!-- <form action="script.js"> -->
					  	<form>

					  <select name="state" id="state" class="custom-select mb-3" onChange="getState(this.value);">
					  <option value="">Select State</option>

						  <?php
							foreach($results as $state) {
						  ?>
							
							<option value="<?php echo $state["id_2"]; ?>"><?php echo $state["state"]; ?></option>
						  
						  <?php
							}
						  ?>

					  </select>

					  <select name="city" id="city" class="custom-select mb-3">
						
						<option value="">Select City</option>
 
					  </select>

					    <br>
					    
					    <button id="submit-btn" type="button" class="btn btn-primary">Submit</button>
					  </form>

					</center>
				</div>
			</div>

			<br>
			<br>
			<br>

			<div class="forecast-table">
				<div class="container">
					<div class="forecast-container">
						<div class="today forecast">
							<div class="forecast-header">
								<div class="title">Geolocation</div>
							</div> <!-- .forecast-header -->
							<div class="forecast-content">


								<div id ="city-name" class="location"></div>
								<br>
								<div class="degree">
									<center><div id ="city-name2" class="num">---</div>
									</div>	
								</div>

							    <center>
							    <!-- <img src="images/icon-sun.png" alt=""> --><span id="lat">&nbsp;</span>
							    <!-- <img src="images/icon-a.png" alt=""> --><span id="long"></span>
								</center>
								<br>

							</div>
						</div>
					</div>
				</div>
			</div>

			<br>
			<br>
			<br>
			<br>
			<br>

			<div class="forecast-table">
				<div class="container">
					<div class="forecast-container">
						<div class="today forecast">
							<div class="forecast-header">
								<div class="title">Weather Forecast</div>
							</div> <!-- .forecast-header -->
							<div class="forecast-content">




								<!-- <div id ="city-name" class="location"></div> -->
								<br>
								<div class="degree">
									<center><div id ="temp" class="num">---</div>
									</div>	
								</div>
								<div class="temperature">
							      <div id="temp"></div>
							    </div>
							    
							    <center>
							    <img src="images/icon-sun.png" alt=""><span id="morning-div">&nbsp;</span>
							    <img src="images/icon-a.png" alt=""><span id="afternoon-div"></span>
								<img src="images/icon-n.png" alt=""><span id="night-div">&nbsp;&nbsp;</span>
								</center>
								<br>
							</div>
						</div>
					</div>
				</div>
			</div>

			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			<br>
			


			<div class="forecast-table">
				<div class="container">
					<div class="forecast-container">
						<div class="today forecast">
							<div class="forecast-header">
								<div class="title">Power Outage Alert</div>
							</div> <!-- .forecast-header -->
							<div class="forecast-content">




								<div id ="city-name" class="location"></div>
								<br>
								<center>
								<div class="temperature">
									<div id ="alert" class="num">---</div>
								</div>	
								</div>
							    <br>
							    </center>
							    <!-- <img src="images/icon-sun.png" alt=""><span id="morning-div">&nbsp;</span>
							    <img src="images/icon-a.png" alt=""><span id="afternoon-div"></span>
								<img src="images/icon-n.png" alt=""><span id="night-div">&nbsp;&nbsp;</span> -->
								

							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- <script src="js/jquery-1.11.1.min.js"></script>
		<script src="js/plugins.js"></script>
		<script src="js/app.js"></script> -->
		<script  src="script.js"></script>
		<script  src="script2.js"></script>
		
	</body>

</html>
