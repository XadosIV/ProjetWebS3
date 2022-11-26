<?php
include("connectSQL.php");
include("registration.php");
$connected = False;
$alreadyUsed = False;
$_POST = json_decode(file_get_contents("php://input"),true);


if (isset($_POST['name1']) and isset($_POST['email']) and isset($_POST['password'])){ 
    $res=get_users();
    for ($i=0; $i<count($res); $i++){
        if ($res[$i]['name']==$_POST['name1']) {
            //echo("<br><br><i><strong><span style='color:red'>*</span> Name already taken.</strong></i>");
            $rep = "Name already taken.";
            $alreadyUsed = True;
        }
        else if ($res[$i]['email']==$_POST['email']) {
            //echo("<br><br><i><strong><span style='color:red'>*</span> Email alrdeady used.</strong></i>");
            $rep = "Email already used.";
            $alreadyUsed = True;
        }
    }	
    
    if (!$alreadyUsed){
        insert_user($_POST['name1'],$_POST['email'],$_POST['password']);         
        $connected = True;        
        $connectedAs = array(
            "name" => $_POST['name1'], 
            "email" => $_POST['email']
        );   
    }        

    if ($connected){
        echo (json_encode(array(
            "leave" => True,
            "profile" => $connectedAs
        )));
        exit;
    } else {
        echo $rep;
    }
}
include("disconnectSQL.php");
?>