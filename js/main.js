setUpSlideMenu();

init_tabs();


let query;
try {
    query = window.location.search.substring(1);
    projectID = parseInt((new URLSearchParams(query)).get("id"));
    console.log(projectID);
    loadProject(projectID);
} catch(e) {
    console.log(e)
}



var toolsContainer = document.querySelector("#toolsContainer")

function main(){
    for(var tool of tools){
        create_tool(tool,toolsContainer)
    }
}
main();