<?php
include("../connectSQL.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);


$id = $data["id"];

$sql="SELECT * FROM `siteproject` WHERE `id`=$id" ;
if($return = mysqli_query($connection , $sql)){
    $return = mysqli_fetch_assoc($return);
}

echo json_encode($return);
include("../disconnectSQL.php");
?>
