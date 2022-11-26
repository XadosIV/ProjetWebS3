<?php
    if (isset($_GET['name2']) and isset($_GET['password2'])){ 
        $res=get_users();
        for ($i=0; $i<count($res); $i++){
            if ($res[$i]['name']==$_GET['name2'] or $res[$i]['email']==$_GET['name2'] and $res[$i]['password']==$_GET['password2']){
                $connected = True;
                $connectedAs = [$_GET['name2']];   
            }
        }		
    }
    $connected = True;
    if ($connected){
        header("Location:../index.html");
        exit;
    }  

    if (isset($_GET['submit'])){ 
        if ($connected == False){
            echo("<br><br><i><strong><span style='color:red'>*</span> Password or username incorrect</strong></i>");
        }	
    }
    return $res;
?>
