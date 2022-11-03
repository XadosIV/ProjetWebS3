/////////////////////////////////////////////////////////////////////////
// difine global variables
const body = document.querySelector("body"); //#--
const God = document.querySelector("#God"); //#--
const nav = document.querySelector("#nav"); //#--
const main = document.querySelector("#main"); //#--
const leftbar = document.querySelector("#leftbar"); //#
const dropzone = document.querySelector("#dropzone"); //#
const rightbar = document.querySelector("#rightbar"); //#
const foot = document.querySelector("#foot"); //#--
/////////////////////////////////////////////////////////////////////////
// Import tools from tools
for (let tol of toolss){
    //create(tol.item,rightbar,tol.text,tol.classs,tol.id,tol.draggable)
    create_premium(tol,rightbar);
}

/////////////////////////////////////////////////////////////////////////
// drag and drop tools from tool bar to dropzone

//* css needed
const w_a_d = document.createElement("img");//#
w_a_d.src = "images/what_a_drag.jpeg";
//*

let tool = document.querySelectorAll(".tools");//#

for(let tlo of tool){
    drag(tlo,dropzone);
}

/////////////////////////////////////////////////////////////////////////
// function that makes the dropzone take stuff
location_drag(dropzone);

/////////////////////////////////////////////////////////////////////////


let cloned = document.querySelectorAll(".cloned");
