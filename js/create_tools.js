/////////////////////////////////////////////////////////////////////////
function create_tool(toolData,container) {
    var tool = document.createElement("div");
    tool.innerText = toolData.displayName
    tool.classList.add("toolInMenu")
    drag(tool)
    container.appendChild(tool)
    return tool
}   
/////////////////////////////////////////////////////////////////////////