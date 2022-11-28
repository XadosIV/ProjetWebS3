<?php

include("../connectSQL.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$id = $data["id"];


$sql="DELETE FROM `siteproject` WHERE `id`=$id";

mysqli_query($connection , $sql);

include("../disconnectSQL.php");
?>