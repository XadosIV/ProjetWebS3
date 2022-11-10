/////////////////////////////////////////////////////////////////////////
// get elements from the site
const body = document.querySelector("body"); //#
const God = document.querySelector("#app"); //#--
const nav = document.querySelector("#nav"); //#
const main = document.querySelector("#main"); //#--
const leftbar = document.querySelector("#leftbar"); //#
const rightbar = document.querySelector("#rightbar"); //#
const foot = document.querySelector("#foot"); //#--
var tabs = document.querySelector("#tabs"); //#

/////////////////////////////////////////////////////////////////////////
// Load tools on the rightbar
for (let tool of tools){
    create_premium(tool,rightbar);
}

/////////////////////////////////////////////////////////////////////////
// drag and drop tools from tool bar to dropzone

let tool = document.querySelectorAll(".tool");//#

for(let tlo of tool){
    drag(tlo);
}
/////////////////////////////////////////////////////////////////////////
