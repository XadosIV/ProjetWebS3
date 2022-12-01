const tools = [
    {
        "balise":"p",
        "displayName":"Texte",
        "class":"text"
    },
    {
        "balise":"button",
        "displayName":"Bouton",
        "class":"button"
    },
    {
        "balise":"a",
        "displayName":"Lien",
        "class":"link"
    },
    {
        "balise":"input",
        "displayName":"Champ d'écriture",
        "class":"input"
    }
]

function nameToTool(name){
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