<?php
include("../connectSQL.php");
include("../connCrud/user_crud.php");
$_POST = json_decode(file_get_contents("php://input"),true);

if (isset($_POST['newPseudo'])){ 
    change_user_name($_POST['name'], $_POST['newPseudo']);
    $connectedAs = array(
        "name" => $_POST['newPseudo']
    );   

    echo (json_encode(array(
        "leave" => True,
        "profile" => $connectedAs
    )));
    exit;
}		

include("../disconnectSQL.php");
?>