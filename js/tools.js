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
    {"display":"Couleur de fond", "name":"style.backgroundColor", "input":"color" , "style": "background-color"},
    {"display":"Largeur", "name":"style.width", "input":"number", "unit":"%"},
    {"display":"Hauteur", "name":"style.height", "input":"number", "unit":"%"},
    {"display":"Profondeur", "name":"style.zIndex", "input":"number" , "style" : "z-index"}
]

const tools = [
    {
        "balise":"p",
        "displayName":"Texte",
        "class":"text",
        "attributes":[
            {"display":"Couleur", "name":"style.color", "input":"color"},
            {"display":"Texte", "name":"innerHTML", "input":"text"},
            {"display":"Police", "name":"style.fontSize", "input":"number", "unit":"em", "style": "font-size"}
        ],
        "defaultValue" : [
            {"name" : "style.color", "value" : "black"},
            {"name" : "style.width", "value" : "10%"},
            {"name" : "style.height", "value" : "10%"},
            {"name" : "style.zIndex", "value" : "1"},
            {"name" : "innerHTML", "value" : "text"},
            {"name" : "style.fontSize", "value" : "2em"}  
        ]
    },
    {
        "balise":"a",
        "displayName":"Lien",
        "class":"link",
        "attributes":[
            {"display":"Couleur", "name":"style.color", "input":"color"},
            {"display":"Texte", "name":"innerHTML", "input":"text"},
            {"display":"Redirection", "name":"href", "input":"text"}
        ],
        "defaultValue" : [
            {"name" : "style.color", "value" : "black"},
            {"name" : "style.backgroundColor", "value" : "white"},
            {"name" : "style.width", "value" : "10%"},
            {"name" : "style.height", "value" : "10%"},
            {"name" : "style.zIndex", "value" : "1"},
            {"name" : "innerHTML", "value" : "link"}
        ]
    },
    {
        "balise":"div",
        "displayName":"Rectangle",
        "class":"div",
        "attributes":[],
        "defaultValue" : [
            {"name" : "style.backgroundColor", "value" : "black"},
            {"name" : "style.width", "value" : "20%"},
            {"name" : "style.height", "value" : "20%"},
            {"name" : "style.zIndex", "value" : "1"},
        ]
    },
    {
        "balise":"img",
        "displayName":"Image",
        "class":"img",
        "attributes":[
            {"display":"Source", "name":"src", "input":"text"}
        ],
        "defaultValue":[
            {"name":"src", "value":"https://static.thenounproject.com/png/2932881-200.png"},
            {"name" : "style.width", "value" : "10%"},
            {"name" : "style.height", "value" : "20%"}
        ]
    },
    {
        "balise":"h1",
        "displayName":"Titre",
        "class":"h1",
        "attributes":[
            {"display":"Couleur", "name":"style.color", "input":"color"},
            {"display":"Texte", "name":"innerHTML", "input":"text"},
        ],
        "defaultValue" : [
            {"name" : "style.color", "value" : "black"},
            {"name" : "style.zIndex", "value" : "1"},
            {"name" : "innerHTML", "value" : "text"},
        ]
    },
    {
        "balise":"h2",
        "displayName":"Sous-Titre",
        "class":"h2",
        "attributes":[
            {"display":"Couleur", "name":"style.color", "input":"color"},
            {"display":"Texte", "name":"innerHTML", "input":"text"},
        ],
        "defaultValue" : [
            {"name" : "style.color", "value" : "black"},
            {"name" : "style.zIndex", "value" : "1"},
            {"name" : "innerHTML", "value" : "text"},
        ]
    },
    {
        "balise":"h3",
        "displayName":"Sous-Sous-Titre",
        "class":"h3",
        "attributes":[
            {"display":"Couleur", "name":"style.color", "input":"color"},
            {"display":"Texte", "name":"innerHTML", "input":"text"},
        ],
        "defaultValue" : [
            {"name" : "style.color", "value" : "black"},
            {"name" : "style.zIndex", "value" : "1"},
            {"name" : "innerHTML", "value" : "text"},
        ]
    },
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