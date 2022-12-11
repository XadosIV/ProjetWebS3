<?php

include("../connectSQL.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$ownerId = $data["ownerId"];

$sql="INSERT INTO `siteproject`(`name`, `ownerId`) VALUES ('New project',$ownerId)";

mysqli_query($connection , $sql);
echo $connection -> insert_id;
include("../disconnectSQL.php");
?>