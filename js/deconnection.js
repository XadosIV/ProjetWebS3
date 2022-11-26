function deconnection() {
    var profileName = sessionStorage.removeItem('name');
    var profileEmail = sessionStorage.removeItem('email');
    window.location.href = "accueil.html";
}