var profileName = sessionStorage.getItem('name');
var profileEmail = sessionStorage.getItem('email');

function modifPseudo(){
    var pseudo = document.querySelector("#pseudo")
    var child = pseudo.lastChild; 
        while (child) {
            pseudo.removeChild(child);
            child = pseudo.lastChild;
        }
    var labelPseudo = document.createElement("input")
    var buttonChangePseudo = document.createElement("button");
    pseudo.appendChild(labelPseudo)
    buttonChangePseudo.innerHTML = `<i class='fa-solid fa-check'></i>`;   
    buttonChangePseudo.setAttribute("id", "changePseudo")
    pseudo.appendChild(buttonChangePseudo)

    var email = document.createElement("p")
    email.innerHTML = "<br>" + profileEmail;
    pseudo.appendChild(email)

    buttonChangePseudo.addEventListener("click", function() {
        sessionStorage.setItem("name", labelPseudo.innerHTML); 
        var child = pseudo.lastChild; 
        while (child) {
            pseudo.removeChild(child);
            child = pseudo.lastChild;
        }
        previewProfile()
    })
    //popUp("Warning","Do you really want to change your pseudo to" + pseudo + " ?","Yes","No");
}
