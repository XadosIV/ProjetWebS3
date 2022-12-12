setUpSlideMenu();


plus_button()

let query;
if(sessionStorage.getItem('id')){

    query = window.location.search.substring(1);
    projectId = parseInt((new URLSearchParams(query)).get("id"));

    axios.post("php/projectsCruds/checkIfUserHaveProject.php", {
        id: projectId,
        ownerId : sessionStorage.getItem('id')
    })
    .then(res => {
        console.log(res.data.good)
        if(res.data.good)
            try {
                loadProject(projectId);
            } catch(e) {
                console.log(e)
            }
        else{
            document.location.href = "index.html";
        }
    })
    .catch(error => {
        console.log(error);
    });
    
}
else {
    document.location.href = "index.html";
}



var toolsContainer = document.querySelector("#toolsContainer")

function main(){
    for(var tool of tools){
        create_tool(tool,toolsContainer)
    }
}

    


main();