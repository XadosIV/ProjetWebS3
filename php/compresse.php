<?php
include "connectSQL.php";

$request_body = file_get_contents('php://input');
$id = json_decode($request_body, true)['id'];

$sql="SELECT * FROM `siteproject` WHERE `id`=$id" ;
if($data = mysqli_query($connection , $sql)){
    $data = mysqli_fetch_assoc($data);
}

$projectName = $data["name"] . "-" . $data["id"];
$site = json_decode($data["json"], true);


$zip = new ZipArchive();


if ($zip->open("../projects/" . $projectName . ".zip", ZipArchive::CREATE)!==TRUE) {
    exit("cannot open file");
}



foreach($site as $page){
    
    $content = "<!DOCTYPE html>
    <html lang='fr' style ='height:100%'>
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name={$page['name']} content='width=device-width, initial-scale=1.0'>
        <title>Document</title>
    </head>
    <body style= 'height:100%; width:100vh; border:0px; margin:0px; padding:0px'>";
    
   
    foreach($page["elements"] as $element){


        $balise = "<{$element['balise']} ";


        $x = $element["x"];
        $y = $element["y"];

        $style = " style = 'position:absolute; left:{$x}%; top:{$y}%; ";

        foreach($element["attributes"] as $attribute){

            $text = "";

            if(str_starts_with($attribute["name"], "style.")) {

                if($attribute["style"] == "") {
                    $property = ltrim($attribute["name"], "style.");
                    $style .= $property . ":" . $attribute["value"] . "; ";
                }
                else {
                    $style .= $attribute["style"] . ":" . $attribute["value"] . "; ";
                }
                
            }
            else {

                if($attribute["name"] != "innerHTML"){
                    $balise .=  $attribute["name"] . " = '" . $attribute["value"] . "'";
                }
                else{
                    $text = $attribute["value"];
                }
            }

        }

        $style .= "' ";


        $balise .= $style . " {$element['balise']}>{$text}</{$element['balise']}>";


        $content .= $balise;

    }

    $content .= "</body>
                    </html>";

    $zip->addFromString($page["name"].".html", $content);
}


$zip->close();

echo $projectName;
include "disconnectSQL.php";
?>