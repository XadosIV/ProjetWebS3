var website = document.querySelector("#website")
var tabs = document.querySelector("#tabs")
var projects = document.querySelector("#project")
const tabToDropzoneMap = new Map()

function switch_pages(divPage){
    var dropzone = tabToDropzone(divPage)
    var website = document.querySelector("#website")
    for (var element of website.childNodes){
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
    var website = document.querySelector("#website")
    for (var element of website.childNodes){
        if (element.classList.contains("dropzone")){
            element.classList.remove("invisible")
            return element
        }
    }
}

function get_current_dropzone(){
    var website = document.querySelector("#website")
    for (var element of website.childNodes){
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
    deleteMenu(projects)
    previewProject();
}

function create_tab(save = true){
    //Crée un nouvel onglet et le sélectionne
    var divOnglet = document.createElement("div")

    var divSwitch = document.createElement("div")
    divSwitch.innerHTML = "New page"
    divSwitch.addEventListener("click", (e) => {
        switch_pages(e.target.parentElement)
        e.stopPropagation();
    })
    divSwitch.setAttribute("id", "pageStyle")
    divOnglet.appendChild(divSwitch)

    //var divModif = document.createElement("button") //remplacer par un div puis faire du css
    //divModif.setAttribute("id", "delButton")
    //divModif.innerHTML = "<button id='changePageName' onclick=modifPageName("+divSwitch+")><i class='fa-solid fa-pen'></i></button>"
    //divModif.addEventListener("click", (e) => {
        //pass
    //})
    //divOnglet.appendChild(divModif)
    

    var divDel = document.createElement("button") //remplacer par un div puis faire du css
    divDel.setAttribute("id", "delButton")
    divDel.innerHTML = "<i class='fa-solid fa-trash'></i>"
    divDel.addEventListener("click", (e) => {
        popUp("Warning","Do you really want to delete this page ?","Yes","No");
        document.querySelector("#true").addEventListener('click',(f) => {
            closePopUp()
            if (e.target.tagName == "BUTTON"){
                delete_page(e.target.parentElement)
            }else{
                delete_page(e.target.parentElement.parentElement)
            }

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
        deleteMenu(projects)
        previewProject();
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