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



        $x = $element["x"];
        $y = $element["y"];
        $style = "style= 'position:absolute; left:{$x}%; top:{$y}%;'";


        switch($element["type"]){
            case "link" : {
                $content .= "<a href = 'https://pornhub.com' {$style}>lien local</a>";
            }
            break;
            case "input" : {
                $content .= "<input {$style}>";
            }
            break;
            case "text" : {
                $content .= "<p {$style}>text</p>";
            }
            break;
            case "button" : {
                $content .= "<button {$style}>button</button>";
            }
            break;
        }
    }

    $content .= "</body>
                    </html>";

    $zip->addFromString($page["name"].".html", $content);
}


$zip->close();

echo $projectName;
include "disconnectSQL.php";
?>