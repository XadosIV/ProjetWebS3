const workspace = document.querySelector("#website");

function saveProject(projectId){

    var siteSave  = [];
    siteSave = getSiteData(workspace, siteSave);

    axios.post('http://localhost/www/WEB/ProjetWebS3/php/projectsCruds/saveProject.php', {
        id: projectId,
        json: JSON.stringify(siteSave)
    })

    console.log(siteSave)
}

function getActivePageIndex(site){
    for(var i = 1;i < site.children.length; i++){
        if(!(site.children[i].classList.contains("invisible"))){
            return i;
        }
    }

    return -1;
}

function getSiteData(site, JSON){

    const tabs = site.children[0].children
    const activePageIndex = getActivePageIndex(site);


    site.children[activePageIndex].classList.add("invisible");

  

    for(var i = 1;i < site.children.length; i++){
        var page = site.children[i];
        page.classList.remove("invisible");

        var pageJSON = {
            name : tabs[i-1].innerText,
            elements : []
        };

        for(element of page.children){
            
            

            var elementJSON = {
                type : element.id.substr(0, element.id.length-2),
                x : 0,
                y : 0
            }


            elementJSON.x = (element.offsetLeft - page.offsetLeft)/page.clientWidth;
            elementJSON.y = (element.offsetTop - page.offsetTop)/page.clientHeight;

            pageJSON.elements.push(elementJSON);
        }

        JSON.push(pageJSON);

        page.classList.add("invisible")
    }

    site.children[activePageIndex].classList.remove("invisible");

    return JSON
}


function resetWorkspace(){
    const tabs = workspace.children[0].children

    while(workspace.children[1]){
        workspace.children[1].remove()
    }

    while(tabs.length > 1){
        tabs[0].remove()
    }

    pages = []
}



function loadProject(projectId){
    resetWorkspace();

    axios.post('http://localhost/www/WEB/ProjetWebS3/php/projectsCruds/loadProject.php', {
        id: projectId
    })
    .then(async response => {

        const project = response.data;
        const json = JSON.parse(project.json);

        for(var pageIndex = 0;pageIndex < json.length; pageIndex++){
            pageJSON = json[pageIndex];

            create_tab();

            var tabButton = workspace.children[0].children[pageIndex]
            var page = workspace.children[pageIndex + 1]
            
            tabButton.innerText = pageJSON.name

            for(elementJSON of pageJSON.elements){
                var element = document.querySelector("#"+ clone_prime({id :elementJSON.type}, page).id);
                

                var x = (page.clientWidth * elementJSON.x + page.offsetLeft)/document.body.clientWidth * 100
                var y = (page.clientHeight * elementJSON.y + page.offsetTop)/document.body.clientHeight * 100
                style_it(element, y, x);
            }
        }

    })
    .catch(error => {
        console.log(error);
    });

}



//const workspaceObserver = new MutationObserver(saveProject);
//workspaceObserver.observe(workspace , {subtree : true, attributes : true})