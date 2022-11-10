/////////////////////////////////////////////////////////////////////////
// difine global variables
const body = document.querySelector("body"); //#--
const God = document.querySelector("#God"); //#--
const nav = document.querySelector("#nav"); //#--
const main = document.querySelector("#main"); //#--
const leftbar = document.querySelector("#leftbar"); //#
const dropzone = document.querySelector("#dropzone0"); //#
const rightbar = document.querySelector("#rightbar"); //#
const foot = document.querySelector("#foot"); //#--
const tabs = document.querySelector("#tabs"); //#--

/////////////////////////////////////////////////////////////////////////
// Import tools from toolss
for (let tool of tools){
    //create(tol.item,rightbar,tol.text,tol.classs,tol.id,tol.draggable)
    create_premium(tool,rightbar);
}

/////////////////////////////////////////////////////////////////////////
// drag and drop tools from tool bar to dropzone

//* css needed
//const w_a_d = document.createElement("img");//#
//w_a_d.src = "images/what_a_drag.jpeg";
//*

let tool = document.querySelectorAll(".tool");//#

for(let tlo of tool){
    drag(tlo);
}
/////////////////////////////////////////////////////////////////////////
drop(dropzone);
/////////////////////////////////////////////////////////////////////////