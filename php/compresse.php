<?php
function findValidFileName($index,$defaultFileName,$zip) {
    echo $projectName . "-find";
    if ($zip->locateName($defaultFileName . $index . ".html") !== false)
    {
        return findValidFileName($index +1, $defaultFileName, $zip);
    }

    return $defaultFileName . $index;
}

if (!function_exists('str_starts_with')) {
    function str_starts_with($haystack, $needle) {
        return (string)$needle !== '' && strncmp($haystack, $needle, strlen($needle)) === 0;
    }
}

include "connectSQL.php";


$request_body = file_get_contents('php://input');
$id = json_decode($request_body, true)['id'];


$sql="SELECT * FROM `siteproject` WHERE `id`=$id" ;
if($data = mysqli_query($connection , $sql)){
    $data = mysqli_fetch_assoc($data);
}

$projectName = $data["name"] . "-" . $data["id"];
$site = json_decode($data["json"], true);

if(file_exists('../projects/' . $projectName . ".zip")){
    unlink('../projects/' . $projectName . ".zip");
}

$zip = new ZipArchive();
$opened = $zip->open("../projects/" . $projectName . ".zip", ZIPARCHIVE::CREATE | ZIPARCHIVE::OVERWRITE );
if( $opened !== true ){
    die("cannot open file for writing.");
}


$defaultStyle = "* {
    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    align-content: center;
    margin: 0;
    padding: 0;
}";

$zip->addFromString("style.css", $defaultStyle);

foreach($site as $page){

    $content = "<!DOCTYPE html>
    <html lang='fr' style ='height:100%'>
    <head>
        <meta charset='UTF-8'>
        <meta http-equiv='X-UA-Compatible' content='IE=edge'>
        <meta name={$page['name']} content='width=device-width, initial-scale=1.0'>
        <link rel='stylesheet' href='style.css'>
    </head>
    <body style= 'height:100vh; width:100%;'>\n";
    
   
    foreach($page["elements"] as $element){

        $balise = "<{$element['balise']} ";


        $x = $element["x"];
        $y = $element["y"];

        $style = "style = 'position:absolute; left:{$x}%; top:{$y}%; margin:0px; padding:0px;";

        $text = "";

        foreach($element["attributes"] as $attribute){

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


        $balise .= $style . "> {$text} </{$element['balise']}>\n";


        $content .= $balise;

    }

    $content .= "</body>\n</html>";

    $pageName = $page["name"];
    
    if ($zip->locateName($pageName . ".html") !== false)
    {
        $pageName = findValidFileName(1, $pageName, $zip);
    }
                    
    $zip->addFromString($pageName.".html", $content);
}

$zip->close();

echo $projectName;
include "disconnectSQL.php";
?>