var signIn = document.getElementById('signingIn');  
signIn.addEventListener("submit", (e) => {
    e.preventDefault();
	labels = signIn.getElementsByTagName('label');
	if (labels.length != 0){
		signIn.removeChild(labels[0]);
	}
	var params = {
		name2 : signIn.elements["name2"].value,
		password2 : signIn.elements["password2"].value,
	};
	axios.post("php/sign_in.php", params).then(response => {
		if (response.data["leave"]) {
			window.location.href = "projects.html";
			sessionStorage.setItem("name", response.data["profile"]["name"]);
			sessionStorage.setItem("email", response.data["profile"]["email"]);
			sessionStorage.setItem("id", response.data["profile"]["id"]);
		} else {
			var newlabel = document.createElement("label");
			newlabel.innerHTML = response.data;
			signIn.appendChild(newlabel);
		}
	})
});
