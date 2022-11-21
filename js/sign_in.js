let buttonIn = document.getElementById("getSignIn")

buttonIn.addEventListener("click", function() {
	axios.get("../php/sign_in.php").then(function(response) {
		buttonIn.innerText = response.data
        console.log(response.data)
    })
})