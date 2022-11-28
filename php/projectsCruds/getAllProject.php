<?php

include("../connectSQL.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$ownerId = $data["ownerId"];
$projects = [];

$sql="SELECT * FROM `siteproject` WHERE `siteproject`.`ownerId`=$ownerId";

$result = mysqli_query($connection , $sql);
while($project = mysqli_fetch_assoc($result)) {
    $projects[] = $project;
}

echo json_encode($projects);
include("../disconnectSQL.php");
?>