/////////////////////////////////////////////////////////////////////////
// get elements from the site
const toolbar = document.querySelector("#rightbar"); //#
var tabs = document.querySelector("#tabs"); //#

/////////////////////////////////////////////////////////////////////////
// Load tools on the rightbar
for (let tool of tools){
    create_tools(tool,toolbar);// function in create_tools.js
}
/////////////////////////////////////////////////////////////////////////
// drag and drop tools from tool bar to dropzone

let tool = document.querySelectorAll(".tool");//#

for(let tlo of tool){
    drag(tlo);
}
/////////////////////////////////////////////////////////////////////////
