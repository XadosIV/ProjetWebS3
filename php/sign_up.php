<?php
if (isset($_GET['name']) and isset($_GET['email']) and isset($_GET['password'])){ 
    $res=get_users();
    for ($i=0; $i<count($res); $i++){
        if ($res[$i]['name']==$_GET['name']) {
            echo("<br><br><i><strong><span style='color:red'>*</span> Name already taken.</strong></i>");
            $alreadyUsed = True;
        }
        if ($res[$i]['email']==$_GET['email']) {
            echo("<br><br><i><strong><span style='color:red'>*</span> Email alrdeady used.</strong></i>");
            $alreadyUsed = True;
        }
    }	
    
    if (!$alreadyUsed){
        insert_user($_GET['name'],$_GET['email'],$_GET['password']);         
        $connected = True;  
        $connectedAs = [$_GET['name']];           
    }        

    if ($connected){
        header("Location:../index.html");
        exit;
    }  
}
?>