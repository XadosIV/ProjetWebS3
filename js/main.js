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

body = document.body
body.addEventListener("keydown", (e) => {
    //37 left
    //38 up
    //39 right
    //40 down
    var selected = document.querySelector(".selector")
    if (selected){
        console.log(e.keyCode)
        switch (e.keyCode){
            case 37:
                selected.style.left = parseInt(selected.style.left)-1 + "%"
                break
            case 38:
                selected.style.top = parseInt(selected.style.top)-1 + "%"
                break
            case 39:
                selected.style.left = parseInt(selected.style.left)+1 + "%"
                break;
            case 40:
                selected.style.top = parseInt(selected.style.top)+1 + "%"
                break;
            case 46:
                selected.remove()
                break;
        }
        saveProject();
    }
})



var toolsContainer = document.querySelector("#toolsContainer")

function main(){
    for(var tool of tools){
        create_tool(tool,toolsContainer)
    }
}

    


main();