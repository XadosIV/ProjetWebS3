// function to create elements
function create(tagName, container, text=null, classs=null, id=null,draggable=false) {
    let element = document.createElement(tagName)
    container.appendChild(element)
    if (text)
        element.appendChild(document.createTextNode(text))
    if (classs)
        element.classList.add(classs)
    if (id)
        element.id = id
    if (draggable)
        element.setAttribute("draggable",draggable)
    return element
}   