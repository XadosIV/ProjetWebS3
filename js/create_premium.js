function create_premium(object,container) {
    let element = document.createElement(object.item);//#
    container.appendChild(element)
    if (object.text !=""){
        element.appendChild(document.createTextNode(object.text))}
    if (object.classs !=""){
        element.classList.add(object.classs)}
    if (object.id !=""){
        element.id = object.id
    }
    if (object.draggable !=""){
        element.setAttribute("draggable",object.draggable)
    }
    if (object.styles.length != 0){//apply all styles to element
        for(let stl of object.styles){
            for(u in stl){
                element.style[u]=stl[u];
            }
        }
    }
    if (object.attributes.length != 0){//apply all attributes to element
        for(let attr of object.attributes){
            for(a in attr){
                element.setAttribute(a,attr[a]);
            }
        }
    }
    return element
}   