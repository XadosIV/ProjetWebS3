/*
Syntaxe d'attribut : 

{
    "display":String qui sera affiché dans le menu
    "name":l'attribut du style à changer dans le js (faire "style.{name}" si la propriété est dans style.)
    "input": type de l'input pour rentrer les données

    ## Facultatifs ##
    value : valeur par défaut (quand le tool sera créé)
    unit : string à rajouter à la fin d'une valeur de l'input (ex: "px")
}

*/

const attributesAll = [
    {"display":"Couleur", "name":"style.color", "input":"color"},
    {"display":"Couleur de fond", "name":"style.backgroundColor", "input":"color" , "style": "background-color"},
    {"display":"Largeur", "name":"style.width", "input":"number", "unit":"%"},
    {"display":"Hauteur", "name":"style.height", "input":"number", "unit":"%"},
    {"display":"Profondeur", "name":"style.zIndex", "input":"number"}
]

const tools = [
    {
        "balise":"p",
        "displayName":"Texte",
        "class":"text",
        "attributes":[
            {"display":"Texte", "name":"innerHTML", "input":"text"},
            {"display":"Police", "name":"style.fontSize", "input":"number", "unit":"px", "style": "font-size"}
        ]
    },
    {
        "balise":"button",
        "displayName":"Bouton",
        "class":"button",
        "attributes":[
            {"display":"Texte", "name":"innerHTML", "input":"text"}
        ]
    },
    {
        "balise":"a",
        "displayName":"Lien",
        "class":"link",
        "attributes":[
            {"display":"Texte", "name":"innerHTML", "input":"text"},
            {"display":"Redirection", "name":"href", "input":"text"}
        ]
    },
    {
        "balise":"div",
        "displayName":"rectangle",
        "class":"div",
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