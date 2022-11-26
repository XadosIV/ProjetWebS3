var createAccount = document.getElementById('createAccount');  
createAccount.addEventListener("submit", (e) => {
    e.preventDefault();
	labels = createAccount.getElementsByTagName('label');
	if (labels.length != 0){
		createAccount.removeChild(labels[0]);
	}
	var params = {
		name1 : createAccount.elements["name1"].value,
		email : createAccount.elements["email"].value,
		password : createAccount.elements["password"].value,
	};
	axios.post("php/sign_up.php", params).then(response => {
		sessionStorage.setItem("name", response.data["profile"]["name"]);
		sessionStorage.setItem("email", response.data["profile"]["email"]);
		if (response.data["leave"]) {
			window.location.href = "index.html";
		} else {
			var newlabel = document.createElement("label");
			newlabel.innerHTML = response.data; //"<br><br><i><strong><span style='color:red'>*</span> Password or username incorrect</strong></i>"
			createAccount.appendChild(newlabel);
		}
	})
});