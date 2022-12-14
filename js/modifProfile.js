var profileName = sessionStorage.getItem('name');
var profileEmail = sessionStorage.getItem('email');

function modifPseudo(){
    createFormPseudo()
    var newPseudo = document.getElementById('newPseudoForm');  
    newPseudo.addEventListener("submit", (e) => {
        e.preventDefault();
        var paramsCheck = {
            name : newPseudo.elements["newPseudo"].value
        };
        axios.post("php/modifPseudo/checkIfPseudo.php", paramsCheck).then(response => {
            if (response.data["exists"]) {
                if (profileName != paramsCheck["name"]) {
                    popUp("Warning","Pseudo already used !",null, null, popUpTime=2000);
                }
            } else {
                popUp("Warning","Do you really want to change your pseudo to '" + newPseudo.elements["newPseudo"].value + "' ?","Yes","No");
                document.querySelector("#true").addEventListener('click',(e) => {
                    validChange(newPseudo) 
                }); 
            }
            deleteMenu(profile)
            previewProfile()
        });
    })
}

function createFormPseudo() {
    var pseudo = document.querySelector("#pseudo")
    deleteMenu(pseudo)

    var formNewPseudo = document.createElement("form")
    formNewPseudo.action = "#";
    formNewPseudo.id = "newPseudoForm";
    formNewPseudo.name = "newPseudoForm";

    var labelPseudo = document.createElement("input")
    labelPseudo.name = "newPseudo";
    labelPseudo.pattern = "[a-zA-Z0-9]*"
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
    var paramsChange = {
        name : profileName,
        newPseudo : newPseudo.elements["newPseudo"].value,
    };

    axios.post("php/modifPseudo/changePseudo.php", paramsChange).then(response => {
        if (response.data["leave"]) {
            sessionStorage.setItem("name", response.data["profile"]["name"]);
            profileName = sessionStorage.getItem('name')
        }
        document.querySelector("#pop").remove();
        deleteMenu(profile)
        previewProfile()
    })
}

