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

        var left =  parseInt(selected.style.left);
        var top = parseInt(selected.style.top);

        var leftMin = 0;
        var topMin = 0;

        if(selected.style.width){
            leftMin = (parseInt(selected.style.width))/-4;
        }

        if(selected.style.height){
            topMin = (parseInt(selected.style.height))/-4
        }

        switch (e.keyCode){
            case 37:
                left --;
                selected.style.left = Math.max(Math.min(left, 99), leftMin) + "%";
                saveProject();
                hideAllMenu();
                break

            case 38:
                top --;
                selected.style.top = Math.max(Math.min(top, 99), topMin) + "%";
                saveProject();
                hideAllMenu();

                break
            case 39:
                left ++;
                selected.style.left = Math.max(Math.min(left, 99), leftMin) + "%";
                saveProject();
                hideAllMenu();
                break;

            case 40:
                top ++;
                selected.style.top = Math.max(Math.min(top, 99), topMin) + "%";
                saveProject();
                hideAllMenu();
                break;

            case 46:
                selected.remove()
                saveProject();
                hideAllMenu();
                break;
        }
    }
})



var toolsContainer = document.querySelector("#toolsContainer")

function main(){
    var titre = document.createElement("h1")
    titre.innerHTML = "Tools"
    titre.style.position = "absolute"
    titre.style.color = "black"
    titre.style.top = "2%"
    titre.style.left = "10%"
    titre.style.textDecoration = "underline"
    toolsContainer.appendChild(titre)
    for(var tool of tools){
        create_tool(tool,toolsContainer)
    }
}

    


main();