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
    NewProjectButton.addEventListener("click", () => {
        console.log("a")
        axios.post("php/projectsCruds/createProject.php", {
            ownerId : id
        })
        .then(response => {
            document.location.href = "create_website.html?id=" + response.data;
        });
    });
    const projectsMain = document.querySelector("body>main")
    createAllProjectsDiv();
}
else {
    //utilisateur non conencté
    document.location.href = "index.html";
}
/////////////////////////////////////////////////////////////////


//fonction :

/**
 * crée tout les div projet.
 */
function createAllProjectsDiv() {
    axios.post("php/projectsCruds/getAllProject.php", {
        ownerId : 1
    })
    .then(response => {
        var projects = response.data;

        for(let project of projects){
            createProjectDiv(project);
        }
    });
}


/**
 * crée un div projet avec tout les events "click" correspondant.
 * @param {ObjetProjet} project projet associé au div qui va etre creer. 
 */
function createProjectDiv(project){
    const projectDiv = createElement("div",  projectsMain, ["project"]);
    projectDiv.addEventListener("click", () => {
        document.location.href = "create_website.html?id=" + project.id;
    });

    
    //ordre de creation des elements important.

    //bouton de supression de projet.
    const delButton = createElement("div",  projectDiv, ["delButton"], "x");
    delButton.addEventListener("click", (e) => {
        e.stopPropagation();
        axios.post("php/projectsCruds/deleteProject.php", {
            id : project.id
        })
        .then(() => location.reload());
    });

    //apercu du projet (rien pour le moment dedans(pas de iframe pitié)).
    createElement("div",  projectDiv, ["display"]);

    //nom du projet.
    createElement("h3",  projectDiv, null, project.name);


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
    
            console.log(fileName)
    
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
