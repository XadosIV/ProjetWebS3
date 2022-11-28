/**
 * affiche/cache le menu deroulant.
 */
function showHideSlideMenu(){
    const slideMenu =document.querySelector(".slideMenu");
    slideMenu.classList.toggle("hide");
}


/**
 * CrÃ©e les events 'click' des bouttons menu pour rendre le menu dynamique.
 * Le nombre de bouton dans l'element avec l'id 'nav' doit etre le meme que
 * le nombre de div avec la classe 'menu'
 */
function setUpSlideMenu(){
    let menus = document.querySelectorAll(".menu");
    const nav = document.querySelector("#nav");
    hideAllMenu();

    const childNumber = nav.children.length

    for(let i = 0; i < childNumber ; i++){
        nav.children[i].addEventListener("click", ()=>{
            menus[i].classList.toggle("hide");
            hideAllMenu(menus[i]);
        });
    }
    document.body.addEventListener("keydown", e => {
        if (e.keyCode == 27) hideAllMenu();
    })
}


/**
 * Rend invisible tout les sous menus du slide.
 * @param {array} exception parametre optionnel, menu a ne pas rendre invisible
 */
function hideAllMenu(exception = null){
    let menus = document.querySelectorAll(".menu");
    for(let menu of menus){
        if(exception == null || exception != menu){
            menu.classList.add("hide");
        }
    }
}
