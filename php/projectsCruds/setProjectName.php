<?php
$_POST = json_decode(file_get_contents("php://input"),true);

$name = $_POST["nameProjectToPost"];

echo $name;
?>