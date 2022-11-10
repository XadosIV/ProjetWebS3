var website = document.querySelector("#website")
var tabs = document.querySelector("#tabs")
var pages = []

function switch_pages(nb){
    var args = nb.split("_")
    nb = args[args.length-1]
    for (var i in pages){
        var button = document.querySelector("#tab_button_"+i)
        if (i == nb){
            pages[i].classList.remove("invisible")
            current_dropzone = pages[i]
            button.style.backgroundColor="white"
        }else{
            pages[i].classList.add("invisible")
            button.style.backgroundColor="buttonface"
        }
    }
}

function create_tab(){
    //Crée un nouvel onglet et le sélectionne
    var id = pages.length
    var button = document.createElement("button")
    button.id = "tab_button_"+id
    button.innerText = id
    button.setAttribute("onclick","switch_pages(this.id)");
    var dropzone = document.createElement("div")
    dropzone.classList.add("invisible")
    drop(dropzone)
    website.appendChild(dropzone)
    tabs.insertBefore(button, plus_button)
    pages.push(dropzone)
    switch_pages(button.id)
}

create_tab()

var plus_button = document.createElement("button")
plus_button.id = "plus_button"
plus_button.innerText = "+"
plus_button.setAttribute("onclick", "create_tab()")
tabs.appendChild(plus_button)
var current_dropzone = pages[0]