<?php 
function insert_user($user, $email, $password){
	global $connection; 
	$result = mysqli_query($connection, "INSERT INTO users (name, email, password) VALUES ('$user', '$email', '$password')");
}

function get_user($name, $password){
	global $connection;
	$return = null;
	$result = mysqli_query($connection, "SELECT * FROM users WHERE (name='$name' OR email='$name') AND password='$password'");
	if($result){
		$return = mysqli_fetch_assoc($result);
	}
	return $return;
}

function get_user_by_name($name) {
	global $connection;
	$return = null;
	$result = mysqli_query($connection, "SELECT * FROM users WHERE name='$name'");
	if($result){
		$return = mysqli_fetch_assoc($result);
	}
	return $return;
}

function check_user($name, $email){
	global $connection;
	$return = null;
	$result = mysqli_query($connection, "SELECT * FROM users WHERE name='$name' OR email='$email'");
	if($result){
		$return = mysqli_fetch_assoc($result);
	}
	return $return;
}

function change_user_name($name, $newName){
	global $connection;
	$return = null;
	$result = mysqli_query($connection, "UPDATE users SET name='$newName' WHERE name='$name'");
}
?>