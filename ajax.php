<?php

require_once("db.php");

$db_handle = new DBController();

	if(!empty($_POST["state_id_2"])) {

		$query ="SELECT * FROM city WHERE state_id_2 = '" . $_POST["state_id_2"] . "' ORDER BY city";
		$results = $db_handle->runQuery($query);

?>

		<option value="">Select City</option>

<?php

		foreach($results as $city) {

?>

		<option value="<?php echo $city["city_id"].$city["cityID"].$city["city"]; ?>"><?php echo $city["city"]; ?></option>

<?php
	}
}
?>
