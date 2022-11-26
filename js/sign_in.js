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
	axios.post("../php/sign_in.php", params).then(response => {
        console.log(response.data)
		if (response.data == "leave") {
			window.location.href = "../index.html"
		} else {
			var newlabel = document.createElement("label");
			newlabel.innerHTML = response.data;
			signIn.appendChild(newlabel);
		}
	})
});