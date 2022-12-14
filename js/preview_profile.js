var slideMenuProfile = document.querySelector("#profile");  
var profileName = sessionStorage.getItem('name');
var profileEmail = sessionStorage.getItem('email');

function previewProfile() {
    if (profileName != null && profileEmail != null) {
        var titre = document.createElement("h1")
        titre.innerHTML = "Profile"
        titre.style.position = "absolute"
        titre.style.color = "black"
        titre.style.top = "2%"
        titre.style.left = "10%"
        titre.style.textDecoration = "underline"
        slideMenuProfile.appendChild(titre)

        var pseudo = document.createElement("p");
        pseudo.innerHTML = "Connected as : " + profileName + "  <button id='changePseudo' onclick=modifPseudo()><i class='fa-solid fa-pen'></i></button>" + "<br><br>Email : " + profileEmail;
        pseudo.setAttribute("id", "pseudo");
        slideMenuProfile.appendChild(pseudo);

        var projectsButton = document.createElement("button");
        projectsButton.innerHTML = "Your projects";
        projectsButton.style.marginTop = "170%";
        projectsButton.className = "button ghost";
        projectsButton.addEventListener("click", function(){
            window.location.href = "projects.html";
        })
        slideMenuProfile.append(projectsButton);

        var deconnectionButton = document.createElement("button");
        deconnectionButton.innerHTML = "Deconnection";
        deconnectionButton.style.marginTop = "10%";
        deconnectionButton.className = "button ghost";
        deconnectionButton.addEventListener("click", deconnection)
        slideMenuProfile.append(deconnectionButton);
    }
}

previewProfile()