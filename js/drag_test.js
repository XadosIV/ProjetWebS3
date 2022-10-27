const dropzone = document.querySelector("#workspace");

const w_a_d = document.createElement("img")
w_a_d.src = "images/what_a_drag.jpeg"


let tools = document.querySelectorAll(".tools");

for(let tool of tools){
    tool.cpt = 0
    tool.clone = clone;
    if(true){
        drag(tool,dropzone);
    }
}

/////////////////////////////////////////////////////////////////////////
