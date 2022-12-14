<?php

include("../connectSQL.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$ownerId = $data["ownerId"];
$name = $data["name"];
$json = '[{"name":"index","elements":[]}]';

$sql="INSERT INTO `siteproject`(`name`, `ownerId`, `json`) VALUES ('$name',$ownerId,'$json')";

mysqli_query($connection , $sql);
echo $connection -> insert_id;
include("../disconnectSQL.php");
?>