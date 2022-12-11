function deleteMenu(menu) {
    var child = menu.lastChild; 
    while (child) {
        menu.removeChild(child);
        child = menu.lastChild;
    }
}
