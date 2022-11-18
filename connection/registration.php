<?php 
function insert_user($user, $email, $password){
	global $connection; 
	$result = mysqli_query($connection, "INSERT INTO users (name, email, password) VALUES ('$user', '$email', '$password')");
}

function get_user(){
	global $connection;
	$result = mysqli_query($connection, "SELECT * FROM users");
	while ($row = $result->fetch_assoc()) {
			$res[]=$row;
		}
	return $res;
}
?>