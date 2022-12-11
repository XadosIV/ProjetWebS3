setUpSlideMenu();


plus_button()

let query;
if(sessionStorage.getItem('id')){
    query = window.location.search.substring(1);
    projectId = parseInt((new URLSearchParams(query)).get("id"));
    try {
        loadProject(projectId);
    } catch(e) {
    }
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