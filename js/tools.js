/*
Syntaxe d'attribut : 

{
    "displayName":String qui sera affiché dans le menu
    "style":l'attribut du style à changer dans le js / false si c'est un attribut directement dans l'élément, comme a.href
    "name":si style à false, correspond à l'attribut à modifier
    "inputtype": type de l'input pour rentrer les données
}

*/

const tools = [
    {
        "balise":"p",
        "displayName":"Texte",
        "class":"text",
        "attributes":[
            {"displayName":"Couleur", "name":"color", "inputtype":"color", "style":"color"},
            {"displayName":"Couleur de fond", "name":"background-color", "inputtype":"color", "style":"backgroundColor"},
            {"displayName":"Texte", "name":"innerHTML", "inputtype":"text", "style":false}
        ]
    },
    {
        "balise":"button",
        "displayName":"Bouton",
        "class":"button",
        "attributes":[
            {"displayName":"Couleur", "name":"color", "inputtype":"color", "style":"color"},
            {"displayName":"Couleur de fond", "name":"background-color", "inputtype":"color", "style":"backgroundColor"},
            {"displayName":"Texte", "name":"innerHTML", "inputtype":"text", "style":false}
        ]
    },
    {
        "balise":"a",
        "displayName":"Lien",
        "class":"link",
        "attributes":[
            {"displayName":"Couleur", "name":"color", "inputtype":"color", "style":"color"},
            {"displayName":"Couleur de fond", "name":"background-color", "inputtype":"color", "style":"backgroundColor"},
            {"displayName":"Texte", "name":"innerHTML", "inputtype":"text", "style":false},
            {"displayName":"Redirection", "name":"href", "inputtype":"text", "style":false}
        ]
    },
    {
        "balise":"input",
        "displayName":"Champ d'écriture",
        "class":"input",
        "attributes":[]
    }
]

function displayNameToTool(name){
    for (var tool of tools){
        if (tool.displayName == name){
            return tool
        }
    }
    return false;
}

function getToolByClass(classs) {
    for (var tool of tools){
        if (tool.class == classs){
            return tool
        }
    }
    return false;
}

function elementToTool(element){
    if (element.classList.contains("toolElement")){ //si l'élément est un élément d'une dropzone (anciennement "clone")
        for (var classs of element.classList.values()){
            if (classs != "toolElement" && classs != "selector" && classs != "draggable"){
                return getToolByClass(classs)
            }
        }
    }
    return false
}