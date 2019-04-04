<?php

require_once("db.php");

$db_handle = new DBController();

	if(!empty($_POST["state_id_2"])) {

		$query ="SELECT * FROM city_2 WHERE state_id_2 = '" . $_POST["state_id_2"] . "' ORDER BY city";
		$results = $db_handle->runQuery($query);

?>

		<option value="">Select City</option>

<?php

		foreach($results as $city) {

?>

		<option value="<?php echo $city["city_id"].$city["cityID"]; ?>"><?php echo $city["city"]; ?></option>

<?php
	}
}
?>