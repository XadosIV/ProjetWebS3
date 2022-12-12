//saveProject([id du projet])  pour save
//loadProject([id du projet]) pour load

//un projet doit deja etre creer dans la base de donné
//de forme [id : int, name : char, json : text]

//login modifiable dans le fichier ./PHP/connectionSQL.php


/**
 * Save le projet dans une base de donnée.
 * @param {number} projectId Id du projet ou va etre save projet.
 */
function saveProject(){

    try {
        query = window.location.search.substring(1);
        projectId = parseInt((new URLSearchParams(query)).get("id"));

        
    
        const workspace = document.querySelector("#website");
        var siteSave = getSiteData(workspace);

        axios.post('php/projectsCruds/saveProject.php', {
            id: projectId,
            json: JSON.stringify(siteSave)
        })

        console.log(siteSave)

    } catch(e) {
        console.log(e)
    }
}





/**
 * Convertie un projet en json.
 * @param {projectElement} project projet a convertir en json.
 * @param {json} JSON JSON a modifier.
 * @returns Le json modifié.
 */
function getSiteData(project){

    const JSON = [];

    const tabs = document.querySelectorAll("#tabs>div");

    for(var i = 0;i < project.children.length; i++){
        var page = project.children[i];

        var pageJSON = {
            name : tabs[i].children[0].innerText,
            elements : []
        };

        for(element of page.children){         

            classs = element.classList[1];

            var elementJSON = {
                type : classs,
                x : 0,
                y : 0,
                attributes : [],
                balise : element.tagName,
            }
            
            if(getToolByClass(classs).style){
                elementJSON.style = getToolByClass(classs).style;
            }

            elementJSON.x = parseFloat(element.style.left);
            elementJSON.y = parseFloat(element.style.top);

            elementJSON.attributes = getAllAttributes(element, classs);

            pageJSON.elements.push(elementJSON);
        }

        JSON.push(pageJSON);
    }

    return JSON
}

function getAttribute(element, attributeJSON) {

    var name;
    var value;

    if (attributeJSON.name.startsWith("style.")){
        name = attributeJSON.name.split("style.")[1]
        value = element.style[name];
    }
    else {
        name = attributeJSON.name;

        if (name == "innerHTML"){ 
            value = element.childNodes[0].nodeValue;
        }else{
            value = element[name];
        }
    }

    if(attributeJSON.style) {
        style = attributeJSON.style;
    }
    else {
        style = "";
    }

    return {"name" : attributeJSON.name, "value" : value, "style" : style};
}


function getAllAttributes(element, classs) {
    var attributes = [];

    for(let defaultAttribute of attributesAll) {
        attributes.push(getAttribute(element, defaultAttribute));
    }

    for(let attribute of getToolByClass(classs).attributes){
        attributes.push(getAttribute(element, attribute));
    }

    return attributes;
}



/**
 * Suprime toute les pages et leurs contenue.
 */
function resetWorkspace(){
    const tabs = document.querySelector("#tabs");
    const workspace = document.querySelector("#website");

    while(workspace.children[0]){
        workspace.children[0].remove();
    }

    while(tabs.children.length > 1){
        tabs.children[0].remove();
    }

}




function loadAllAttributes(element, attributesJSON){

    for(let attribute of attributesJSON) {

        

        var name;
    
        if ((attribute.name).startsWith("style.")){
            name = (attribute.name).split("style.")[1]
            element.style[name] = attribute.value;
        }
        else {
            name = attribute.name;
    
            if (name == "innerHTML"){
                element.innerText = attribute.value;
            }else{
                element[name] = attribute.value;
            }
        }
    }
}




/**
 * Ouvre un projet.
 * @param {number} projectId Id du projet a ouvrir.
 */
function loadProject(projectId){
    resetWorkspace();

    axios.post('php/projectsCruds/loadProject.php', {
        id: projectId
    })
    .then(async response => {

        const project = response.data;
        const json = JSON.parse(project.json);

        for(var pageIndex = 0;pageIndex < json.length; pageIndex++){
            pageJSON = json[pageIndex];

            create_tab(false);

            const tabs = document.querySelector("#tabs");
            const workspace = document.querySelector("#website");

            var tabButton = tabs.children[tabs.children.length-2];
            var page = workspace.children[pageIndex];
            
            tabButton.children[0].innerText = pageJSON.name

            for(let elementJSON of pageJSON.elements){

                var tool = getToolByClass(elementJSON.type);
                
                let element = document.createElement(tool.balise);

                element.classList.add("toolElement")
                element.classList.add(tool.class);
                element.classList.add("draggable")
                element.draggable = true;



                element.addEventListener('dragstart', e=>{
                    dragData = e.target
                    hideAllMenu()
                    element.style.opacity = 0.3;
                });
                element.addEventListener('dragend',e=>{
                    element.style.opacity = 1;
                });

                var x = elementJSON.x;
                var y = elementJSON.y;

                style_dropped_element(element, y, x);
                loadAllAttributes(element, elementJSON.attributes);               

                element.addEventListener("click", e => {
                    //g lu la doc dog
                    e.stopPropagation();
                    select(element);
                })
                page.appendChild(element)
            }
        }

    })
    .catch(error => {
        console.log(error);
    });

}