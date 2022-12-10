var profileName = sessionStorage.getItem('name');
var profileEmail = sessionStorage.getItem('email');

function modifPseudo(){
    createForm()
    var newPseudo = document.getElementById('newPseudoForm');  
    newPseudo.addEventListener("submit", (e) => {
        e.preventDefault();
        var paramsCheck = {
            name : newPseudo.elements["newPseudo"].value
        };
        axios.post("php/modifPseudo/checkIfPseudo.php", paramsCheck).then(response => {
            if (response.data["exists"]) {
                if (profileName != paramsCheck["name"]) {
                    popUp("Warning","Pseudo already used !","","", popUpTime=2000);
                }
                deleteMenuProfile(profile)
                previewProfile()
            } else {
                popUp("Warning","Do you really want to change your pseudo to '" + newPseudo.elements["newPseudo"].value + "' ?","Yes","No");
                document.querySelector("#true").addEventListener('click',(e) => {
                    validChange(newPseudo) 
                    deleteMenuProfile(profile)
                    previewProfile()
                }); 
            }
            });
        })
}

function deleteMenuProfile(menu) {
    var child = menu.lastChild; 
    while (child) {
        menu.removeChild(child);
        child = menu.lastChild;
    }
}

function createForm() {
    var pseudo = document.querySelector("#pseudo")
    deleteMenuProfile(pseudo)

    var formNewPseudo = document.createElement("form")
    formNewPseudo.action = "#";
    formNewPseudo.id = "newPseudoForm";
    formNewPseudo.name = "newPseudoForm";

    var labelPseudo = document.createElement("input")
    labelPseudo.name = "newPseudo";
    labelPseudo.value = profileName
    labelPseudo.required = true;
    var buttonChangePseudo = document.createElement("button");
    buttonChangePseudo.type = 'submit'
    buttonChangePseudo.innerHTML = `<i class='fa-solid fa-check'></i>`;   
    buttonChangePseudo.setAttribute("id", "changePseudo")
    formNewPseudo.appendChild(labelPseudo)
    formNewPseudo.appendChild(buttonChangePseudo)
    pseudo.appendChild(formNewPseudo)

    var email = document.createElement("p")
    email.innerHTML = "<br>Email : " + profileEmail;
    pseudo.appendChild(email)
}

function validChange(newPseudo) {
    console.log("yo")
    var paramsChange = {
        name : profileName,
        newPseudo : newPseudo.elements["newPseudo"].value,
    };

    axios.post("php/modifPseudo/changePseudo.php", paramsChange).then(response => {
        if (response.data["leave"]) {
            sessionStorage.setItem("name", response.data["profile"]["name"]);
            profileName = sessionStorage.getItem('name')
        }
        
        deleteMenuProfile(profile)
        previewProfile()
        document.querySelector("#pop").remove();
    })
}
