<?php
include("../connectSQL.php");
global $connection;
$_POST = json_decode(file_get_contents("php://input"),true);

if (isset($_POST['newProjectName']) and isset($_POST['id'])){ 
    change_project_name($_POST['id'], $_POST['newProjectName']);
}		

function change_project_name($id, $newName){
	global $connection;
	$result = mysqli_query($connection, "UPDATE siteproject SET name='$newName' WHERE id='$id'");
}

include("../disconnectSQL.php");
?>