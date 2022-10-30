/////////////////////////////////////////////////////////////////////////
// drag and drop tools from tool bar

const dropzone = document.querySelector("#workspace"); //#
//* css needed
const w_a_d = document.createElement("img");//#
w_a_d.src = "images/what_a_drag.jpeg";
//*

let tools = document.querySelectorAll(".tools");

for(let tool of tools){
	tool.cpt = 0;
    tool.clone = clone;
    drag(tool,dropzone);
}
location_drag(dropzone);

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
/*let cloned = document.querySelectorAll(".cloned");

for(let cln of cloned){
    console.log("yo");
    moveAround(cln,dropzone);
}*/
