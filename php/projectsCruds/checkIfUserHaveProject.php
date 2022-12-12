<?php
include("../connectSQL.php");


$_POST = json_decode(file_get_contents("php://input"),true);
$id = $_POST["id"];
$ownerId = $_POST["ownerId"];


$res = null;
$result = mysqli_query($connection, "SELECT * FROM siteproject WHERE id='$id' AND ownerId='$ownerId'");
if($result){
    $res = mysqli_fetch_assoc($result);
}

//vole  de code :
if ($res!=null) {
    echo (json_encode(array(
        "good" => True
    )));
} else {
    echo (json_encode(array(
        "good" => False
    )));
}


include("../disconnectSQL.php");