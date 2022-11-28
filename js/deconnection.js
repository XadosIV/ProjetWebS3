function deconnection() {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('id');
    window.location.href = "index.html";
}