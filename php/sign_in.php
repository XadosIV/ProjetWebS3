<?php
include("connectSQL.php");
include("connCrud/user_crud.php");
$connected = False;
$_POST = json_decode(file_get_contents("php://input"),true);

    if (isset($_POST['name2']) and isset($_POST['password2'])){ 
        $res=get_user($_POST['name2'], $_POST['password2']);
        if ($res != null){
            $connectedAs = array(
                "name" => $res['name'], 
                "email" => $res['email'],
                "id" => $res['id']
            );   

            echo (json_encode(array(
                "leave" => True,
                "profile" => $connectedAs
            )));
            exit;
        } else {
            echo "Name, email or password incorrect";
        }
    }		

include("disconnectSQL.php");
?>
