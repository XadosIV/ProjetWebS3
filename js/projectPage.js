/**
 * fonction classic de creation d'element,
 * probablement remplacé par un import plus tard.
 *
 * @param {string} type type de l'element crée.
 * @param {element} parent parent de l'element crée, parametre optionnel.
 * @param {arrayDeString} classs liste des classes de l'element, parametre optionnel.
 * @param {String} text text contenue par l'element, parametre optionnel.
 * @returns {element} element créé.
 */
function createElement(type, parent = null, classs = null, text = null){
    let obj = document.createElement(type);

    if(parent){
        parent.appendChild(obj);
    }
    if(classs) {
        for(c of classs) {
        obj.classList.add(c);
        }
    } 
    if(text){
        obj.textContent = text;
    }
    return(obj);
}


/////////////////////////////////////////////////////////////////
//code executé au chargement du script :
if(sessionStorage.getItem('id')){

    //utilisateur connecté :

    const id = sessionStorage.getItem('id')

    const NewProjectButton = document.querySelector("#newProject");

    NewProjectButton.addEventListener("click", (e) => {
        e.preventDefault()
        nameProjectToPost = popUpForm("Project name","Give a name to your project",null,null,"Project");
        document.querySelector("#true").addEventListener('click',(f) => {
            f.preventDefault()
            var projectNameSetSplit = postProjectName.elements["nameProjectToPost"].value.split(" ")
            var postName = ""
            for (i=0; i<projectNameSetSplit.length; i++) {
                postName += strUcFirst(projectNameSetSplit[i])
            }
            if (postName == "") {
                postName = "Project"
            }
            var paramsCheck = {
                name : postName,
                ownerId : sessionStorage.getItem('id')
            };
            axios.post("php/projectsCruds/checkIfName.php", paramsCheck).then(response => {
                if (response.data["exists"]) {
                    popUp("Warning","Project name already used !", null, null, popUpTime=2000);
                    closePopUp(wait=2000)
                } else {
                    axios.post("php/projectsCruds/setProjectName.php", {nameProjectToPost : postName}).then(response2 => {
                        var projectNameSetSplit = response2.data.split(" ")
                        var projectNameSet = ""
                        for (i=0; i<projectNameSetSplit.length; i++) {
                            projectNameSet += strUcFirst(projectNameSetSplit[i])
                        }
                        axios.post("php/projectsCruds/createProject.php", {
                            ownerId : id,
                            name : projectNameSet
                        }).then(r => {
                            closePopUp()
                            document.location.href = "create_website.html?id=" + r.data;
                        })        
                    })
                } 
            })
        })
    })
    const projectsMain = document.querySelector("body>main")
    createAllProjectsDiv(projectsMain, id);
} else {
    //utilisateur non conencté
    document.location.href = "index.html";
}
/////////////////////////////////////////////////////////////////


//fonction :

/**
 * crée tout les div projet.
 */
function createAllProjectsDiv(projectsMain, id) {
    axios.post("php/projectsCruds/getAllProject.php", {
        ownerId : id
    })
    .then(response => {
        var projects = response.data;

        for(let project of projects){
            createProjectDiv(project, projectsMain);
        }
    });
}

/**
 * crée un div projet avec tout les events "click" correspondant.
 * @param {ObjetProjet} project projet associé au div qui va etre creer. 
 */
function createProjectDiv(project, projectsMain){
    const projectDiv = createElement("div",  projectsMain, ["project"]);
    
    //ordre de creation des elements important.

    //bouton de supression de projet.
    const delButton = createElement("div",  projectDiv, ["delButton"], "x");
    delButton.addEventListener("click", (e) => {
        popUp("Warning","Do you really want to delete the project named : '" + project.name + "' ?","Yes","No");
        document.querySelector("#true").addEventListener('click',(f) => {
            e.stopPropagation();
            axios.post("php/projectsCruds/deleteProject.php", {
                id : project.id
            })
            .then(() => location.reload());
        }); 
    });

    //apercu du projet (rien pour le moment dedans(pas de iframe pitié)).
    const projectApercu = createElement("div",  projectDiv, ["display"]);
    projectApercu.addEventListener("click", () => {
        document.location.href = "create_website.html?id=" + project.id;
    });

    //nom du projet.
    var projectNameView = createElement("h3",  projectDiv, [".name"]);
    projectNameView.id = "id"+project.id.toString()
    projectNameView.innerHTML = project.name + " <button id='changeName' onclick=modifName("+projectNameView.id+",'"+project.name+"',false"+")><i class='fa-solid fa-pen'></i></button>" 

    //bouton pour la creation du .zip et le telechargement du projet.
    //pour le moment ecrit juste un truc dans la console.
    const exportButton = createElement("div",  projectDiv, ["exportButton"], "Export Project");
    exportButton.addEventListener("click", (e) => {
        e.stopPropagation();
        axios.post("php/compresse.php", {
            id: project.id
        })
        .then(response => {
            const fileName = response.data;
    
            //console.log(fileName)
    
            const aLink = document.createElement('a');
            aLink.href = "projects/" + fileName + ".zip";
            aLink.download = fileName;
            document.body.appendChild(aLink);
            aLink.click();
            aLink.innerHTML ="aaaaaaaaaaah";
            document.body.removeChild(aLink);
        })

    });
}

var header = document.querySelector("#nav")
var deconnectionButton = document.createElement("button");
deconnectionButton.innerHTML = "Deconnection";
deconnectionButton.style.marginRight = "5%";
deconnectionButton.className = "button";
deconnectionButton.addEventListener("click", deconnection)
header.append(deconnectionButton);
