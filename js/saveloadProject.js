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
        projectID = parseInt((new URLSearchParams(query)).get("id"));
        console.log(projectID);

        var siteSave  = [];
    
        const workspace = document.querySelector("#website");
        siteSave = getSiteData(workspace, siteSave);

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
function getSiteData(project, JSON){

    const tabs = document.querySelectorAll("#tabs>div");

    for(var i = 0;i < project.children.length; i++){
        var page = project.children[i];

        var pageJSON = {
            name : tabs[i].children[0].innerText,
            elements : []
        };

        for(element of page.children){         

            var elementJSON = {
                type : element.classList[1],
                x : 0,
                y : 0
            }


            elementJSON.x = parseFloat(element.style.left);
            elementJSON.y = parseFloat(element.style.top);

            pageJSON.elements.push(elementJSON);
        }

        JSON.push(pageJSON);
    }

    return JSON
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

            create_tab();

            const tabs = document.querySelector("#tabs");
            const workspace = document.querySelector("#website");

            var tabButton = tabs.children[tabs.children.length-2];
            var page = workspace.children[pageIndex];
            
            tabButton.children[0].innerText = pageJSON.name

            for(elementJSON of pageJSON.elements){
                var tool = getToolByClass(elementJSON.type);
                
                var element = document.createElement(tool.balise);
                element.classList.add("toolElement")
                element.classList.add(tool.class);
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
                element.innerText = tool.displayName
                style_dropped_element(element, y, x);
                page.appendChild(element)

                element.addEventListener("click", e => {
                    if (e.target == element){
                        select(e.target);
                    }
                })
            }
        }

    })
    .catch(error => {
        console.log(error);
    });

}



//const workspaceObserver = new MutationObserver(saveProject);
//workspaceObserver.observe(workspace , {subtree : true, attributes : true})
