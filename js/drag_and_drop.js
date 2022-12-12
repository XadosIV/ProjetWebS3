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


function drop(container){ // transforme le container en dropzone
    container.classList.add("dropzone")
    container.addEventListener('dragover',e=>{e.preventDefault();});

    //deselect ;)
    container.addEventListener("click", e => {
        e.stopPropagation();
        hideAllMenu();
        select(null);
    });

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
                //element.innerText = toolData.displayName

                loadAllAttributes(element, toolData.defaultValue);

                drag(element)

                element.addEventListener("click", e => {
                    //g lu la doc dog
                    e.preventDefault();
                    e.stopPropagation();
                    select(element);
                })

                get_current_dropzone().appendChild(element)
            }
        }

        //à partir d'ici, element = l'élément créé par le tool, ou l'élément drag, donc on le place bien.
        var nav = document.querySelector("#nav")

        console.log(nav.offsetWidth)


        var perXmain = ((e.clientX - nav.offsetWidth) / (document.body.offsetWidth- nav.offsetWidth)) * 100
        var perYmain = ((e.clientY) / document.body.offsetHeight)  * 100

        console.log(perXmain, perYmain)

        style_dropped_element(element, perYmain, perXmain)

        saveProject();
    }); 
}