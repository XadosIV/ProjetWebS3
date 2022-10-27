const dropzone = document.querySelector("#workspace");

const w_a_d = document.createElement("img")
w_a_d.src = "images/what_a_drag.jpeg"


let tools = document.querySelectorAll(".tools");

for(let tool of tools){
    drag(tool,dropzone);
}
location_drag(dropzone)

/////////////////////////////////////////////////////////////////////////
