var dragData; // if string => tool à créer / if element => element à déplacer

function drag(element){
    element.draggable = true
    element.classList.add("draggable")
    element.addEventListener('dragstart', e=>{
        dragData = e.target
        hideAllMenu()
        element.style.opacity = 0.3;
    });
    element.addEventListener('dragend',e=>{
        element.style.opacity = 1;
    });
}


function drop(container){
    container.classList.add("dropzone")
    container.addEventListener('dragover',e=>{e.preventDefault();});
    container.addEventListener('drop',e=>{
        e.preventDefault();
        var element = dragData  //voir drag.js <=> l'élément qui est drag
        
        if (element.classList.contains("toolInMenu")){
            //create
            var toolData = displayNameToTool(element.innerText)
            if (toolData){
                var element = document.createElement(toolData.balise)
                element.classList.add("toolElement")
                element.classList.add(toolData.class)
                element.innerText = toolData.displayName
                drag(element)
                element.addEventListener("click", e => {
                    if (e.target == element){
                        select(e.target);
                    }
                })
                get_current_dropzone().appendChild(element)
            }
        }

        //à partir d'ici, element = l'élément créé par le tool, ou l'élément drag, donc on le place bien.

        var perXmain = e.pageX /(document.body.offsetWidth) * 100;
        var perYmain = e.pageY /(document.body.offsetHeight)* 100;
        style_dropped_element(element, perYmain, perXmain)

        saveProject();
    }); 
}