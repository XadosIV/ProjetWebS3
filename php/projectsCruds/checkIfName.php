<?php
include("../connectSQL.php");

function get_project_by_name($name, $ownerId) {
	global $connection;
	$return = null;
	$result = mysqli_query($connection, "SELECT * FROM siteproject WHERE name='$name' AND ownerId='$ownerId'");
	if($result){
		$return = mysqli_fetch_assoc($result);
	}
	return $return;
}

$_POST = json_decode(file_get_contents("php://input"),true);
$res = get_project_by_name($_POST['name'], $_POST['ownerId']);
if ($res!=null) {
    echo (json_encode(array(
        "exists" => True
    )));
} else {
    echo (json_encode(array(
        "exists" => False
    )));
}
include("../disconnectSQL.php");