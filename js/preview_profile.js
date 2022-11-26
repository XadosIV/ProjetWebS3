var slideMenu = document.getElementById('slideMenu');  
var profileLink = document.createElement("a");
var profileName = sessionStorage.getItem('name');
var profileEmail = sessionStorage.getItem('email');

if (profileName != null && profileEmail != null) {
    var link = document.createTextNode(profileName + " - " + profileEmail); 
    profileLink.appendChild(link);
    profileLink.href = "profile.html";
    profileLink.target = "_parent";
    slideMenu.appendChild(profileLink);

    var deconnectionButton = document.createElement("button");
    deconnectionButton.innerHTML = "Se déconnecter";
    deconnectionButton.className = "button";
    deconnectionButton.addEventListener("click", deconnection)
    slideMenu.append(deconnectionButton);
}
