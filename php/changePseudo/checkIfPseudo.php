<?php
include("../connectSQL.php");
include("../connCrud/user_crud.php");
$_POST = json_decode(file_get_contents("php://input"),true);
$res=get_user_by_name($_POST['name']);
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