function deconnection() {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    window.location.href = "index.html";
}