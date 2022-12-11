var website = document.querySelector("#website")
var tabs = document.querySelector("#tabs")
const tabToDropzoneMap = new Map()

function switch_pages(divPage){
    var dropzone = tabToDropzone(divPage)
    var workspace = document.querySelector("#website")
    for (var element of workspace.childNodes){
        if (element.classList.contains("dropzone")){
            if (element == dropzone){
                element.classList.remove("invisible")
                dropzoneToTab(element).style.color = "black"
            }else{
                element.classList.add("invisible")
                dropzoneToTab(element).style.color = "white"
            }
        }
    }
}

function tabToDropzone(div){
    return tabToDropzoneMap.get(div)
}

function dropzoneToTab(dropzone){
    for (var kv of tabToDropzoneMap.entries()){ //kv stands for key/value, array with [key, value]
        if (kv[1] == dropzone){
            return kv[0]
        }
    }
    return false
}

function switch_first_page(){
    for (var element of workspace.childNodes){
        if (element.classList.contains("dropzone")){
            element.classList.remove("invisible")
            return element
        }
    }
}

function get_current_dropzone(){
    var workspace = document.querySelector("#website")
    for (var element of workspace.childNodes){
        if (element.classList.contains("dropzone")){
            if (!element.classList.contains("invisible")){
                return element
            }
        }
    }
    return false
}

function delete_page(divPage){
    var dropzone = tabToDropzone(divPage)
    switchToFirst = get_current_dropzone() == dropzone
    dropzone.remove()
    tabToDropzoneMap.delete(divPage)
    divPage.remove()
    if (switchToFirst){
        switch_first_page()
    }

    saveProject();
}

function create_tab(save = true){
    //Crée un nouvel onglet et le sélectionne
    var divOnglet = document.createElement("div")

    var divSwitch = document.createElement("span") //remplacer par un div puis faire du css
    divSwitch.innerText = "Page"
    divSwitch.addEventListener("click", (e) => switch_pages(e.target.parentElement))
    divOnglet.appendChild(divSwitch)

    var divDel = document.createElement("span") //remplacer par un div puis faire du css
    divDel.innerText = "[X]"
    divDel.addEventListener("click", (e) => {
        popUp("Warning","Do you really want to delete this page ?","Yes","No");
        document.querySelector("#true").addEventListener('click',(f) => {
            closePopUp()
            delete_page(e.target.parentElement)
        })
    })
    divOnglet.appendChild(divDel)

    var dropzone = document.createElement("div")
    drop(dropzone)
    website.appendChild(dropzone)

    tabToDropzoneMap.set(divOnglet, dropzone)

    var plus_button = document.querySelector("#plus_button")
    tabs.insertBefore(divOnglet, plus_button)
    switch_pages(divOnglet)

    if(save){
        saveProject();
    }
}

function plus_button(){
    var plus_button = document.createElement("button")
    plus_button.id = "plus_button"
    plus_button.innerText = "+"
    plus_button.setAttribute("onclick", "create_tab()")
    tabs.appendChild(plus_button)
}

function init_tabs(){
    plus_button()
    create_tab()
}
