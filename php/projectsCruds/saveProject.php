    <?php
include("../connectSQL.php");

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

$json = $data["json"];
$id = $data["id"];

$sql="UPDATE `siteproject` set `json`='$json' WHERE `id`=$id" ;
$return = mysqli_query($connection, $sql) ;
echo $return;
include("../disconnectSQL.php");
?>