let buttonUp = document.getElementById("getSignUp")

buttonUp.addEventListener("click", function() {
	axios.get("../php/sign_up.php")
})