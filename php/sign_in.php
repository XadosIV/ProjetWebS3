<?php
include("connectSQL.php");
include("registration.php");
$connected = False;
$errorPassword = 0;
$_POST = json_decode(file_get_contents("php://input"),true);

    if (isset($_POST['name2']) and isset($_POST['password2'])){ 
        $res=get_users();
        for ($i=0; $i<count($res); $i++){
            if (($res[$i]['name']==$_POST['name2'] || $res[$i]['email']==$_POST['name2']) && $res[$i]['password']==$_POST['password2']){
                $connected = True;  
            } else {
                $errorPassword += 1;
            }
        }		
    }

    if ($connected){
        echo "leave";
        exit;
    }  

    if ($errorPassword == count($res)) {
        echo "Name, email or password incorrect";
    }

include("disconnectSQL.php");
?>
