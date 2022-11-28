<?php
include("connectSQL.php");
include("connCrud/user_crud.php");
$connected = False;
$alreadyUsed = False;
$_POST = json_decode(file_get_contents("php://input"),true);


if (isset($_POST['name1']) and isset($_POST['email']) and isset($_POST['password'])){ 
    $res=check_user($_POST['name1'], $_POST['email']);
    if ($res != null) {
        echo "Name or email already taken.";
    } else {
        insert_user($_POST['name1'],$_POST['email'],$_POST['password']);         
      
        $connectedAs = array(
            "name" => $_POST['name1'], 
            "email" => $_POST['email'],
            "id" => get_user($_POST['name1'], $_POST['password'])['id']
        ); 

        echo (json_encode(array(
            "leave" => True,
            "profile" => $connectedAs
        )));
        exit;
    }     
}

include("disconnectSQL.php");
?>