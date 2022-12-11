<?php
include("../connectSQL.php");
global $connection;
$_POST = json_decode(file_get_contents("php://input"),true);

if (isset($_POST['newProjectName']) and isset($_POST['name'])){ 
    change_project_name($_POST['name'], $_POST['newProjectName']);
}		

function change_project_name($name, $newName){
	global $connection;
	$result = mysqli_query($connection, "UPDATE siteproject SET name='$newName' WHERE name='$name'");
}

include("../disconnectSQL.php");
?>