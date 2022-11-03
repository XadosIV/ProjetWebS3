<?php
// create a html and link css and js to it
$html=fopen("test.html", "a+");//create htlm file
$js=fopen("test.js", "a+");//create js file
$css=fopen("test.css", "a+");// create css file

fputs($html,"<!DOCTYPE html>\n<html lang='en'>\n<head>\n\t<meta charset='UTF-8'>\n\t<title>Document</title>\n\t<link rel='stylesheet' href='test.css'>");
fputs($html,"</head>\n\t<body>\n\t\t<script src='js/test.js' defer></script>\n\t</body>\n</html>");
 

