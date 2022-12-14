function create(tagName, container,classs=null, id=null,text=null) {
    let element = document.createElement(tagName)
    container.appendChild(element)
    if (text)
        element.appendChild(document.createTextNode(text))
    if (classs)
        element.classList.add(classs)
    if (id)
        element.id = id
    return element
}   
/////////////////////////////////////////////////////////////////////////
function createPopElement(textTitle,text,trueButtonName=null,falseButtonName=null, label=null){

    const mainElement = create("div",document.body,"pop","pop");

    create("div",document.querySelector("#pop"),"popBackground","popBackground");
    create("div",document.querySelector("#popBackground"),"popEvent","popEvent");

    if (trueButtonName!=null && falseButtonName!=null && label==null) {
        popEventItem =`<div id="title">${textTitle}</div>\t\n
            <div id="text">${text}</div>\t\n
            <div id="answer">\t\n
                    <p id="true">${trueButtonName}</p>\t\t\n
                    <p id="false">${falseButtonName}</p>\t\t\n
            </div>`;
        document.querySelector("#popEvent").innerHTML =popEventItem;

    } else if (trueButtonName==null && falseButtonName==null && label==null) {
        popEventItem =`<div id="title">${textTitle}</div>\t\n
            <div id="text">${text}</div>\t\n`;
        document.querySelector("#popEvent").innerHTML =popEventItem;

    }

    if(label!=null) {
        popEvent = document.querySelector("#popEvent")

        var formNewName = document.createElement("form")
        formNewName.action = "#";
        formNewName.id = "postProjectName";
        formNewName.name = "postProjectName";
    
        var labelName = document.createElement("input")
        labelName.name = "nameProjectToPost";
        labelName.pattern = "[a-zA-Z0-9]*"
        labelName.value = label
        labelName.required = true;
    
        var buttonSubmit = document.createElement("button");
        buttonSubmit.type = 'submit'
        buttonSubmit.innerHTML = `Create Project`
        buttonSubmit.id = "true"
        buttonSubmit.classList.add("button")

        popEventItem = `<div id="title">${textTitle}</div>\t\n
            <div id="text">${text}</div>`
        document.querySelector("#popEvent").innerHTML =popEventItem;
        popEvent.appendChild(formNewName)
        formNewName.appendChild(labelName)
        formNewName.appendChild(buttonSubmit)
        
    }

    displayPopElement(document.querySelector("#popEvent"));
    return mainElement
}
/////////////////////////////////////////////////////////////////////////
function displayPopElement(element){
    element.classList.add("popEventDisplay");

}
/////////////////////////////////////////////////////////////////////////

function closePopUp(wait=null){
    if(wait!=null){
        setTimeout(time,parseInt(popUpTime));
    } else {
        document.querySelector("#pop").remove();
    }
}

/////////////////////////////////////////////////////////////////////////
function time(){
    closePopUp();
}

/////////////////////////////////////////////////////////////////////////
function popUp(textTitle,text,trueButtonName=null,falseButtonName=null,popUpTime="permanant",positionInSpaceZ="positionInSpaceZ"){

    const mainElement = createPopElement(textTitle,text,trueButtonName,falseButtonName);

    mainElement.classList.add(positionInSpaceZ);

    if(popUpTime!="permanant"){
        setTimeout(time,parseInt(popUpTime));
    }

    if (falseButtonName!=null) {
        document.querySelector("#false").addEventListener('click', (e) => closePopUp());
    }
    
}

function popUpForm(textTitle,text,trueButtonName=null,falseButtonName=null,labelName=null,popUpTime="permanent",positionInSpaceZ="positionInSpaceZ") {

    const mainElement = createPopElement(textTitle,text,trueButtonName,falseButtonName,labelName);

    mainElement.classList.add(positionInSpaceZ);

    if(popUpTime!="permanent"){
        setTimeout(time,parseInt(popUpTime));
    }

    if (falseButtonName!=null) {
        document.querySelector("#false").addEventListener('click', (e) => closePopUp());
    }
}
/////////////////////////////////////////////////////////////////////////