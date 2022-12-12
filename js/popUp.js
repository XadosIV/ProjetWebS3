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
    } else if (trueButtonName==null && falseButtonName==null && label==null) {
        popEventItem =`<div id="title">${textTitle}</div>\t\n
            <div id="text">${text}</div>\t\n`;
    }

    if(label!=null) {
        popEventItem =`<div id="title">${textTitle}</div>\t\n
            <div id="text">${text}</div>\t\n
            <form action="#" id="postProjectName" name="postProjectName"></div>\t\n
                <input type="nameProjectToPost" placeholder="${label}" name="nameProjectToPost" required/>
                <input type="submit" id="true" class="button" value="Create project"></button>
            </div>`;
        
    }

    document.querySelector("#popEvent").innerHTML =popEventItem;
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
        document.querySelector("#pop").remove();
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

    const mainElement = createPopElement(textTitle,text,trueButtonName,falseButtonName,null);

    mainElement.classList.add(positionInSpaceZ);

    if(popUpTime!="permanant"){
        setTimeout(time,parseInt(popUpTime));
    }

    if (falseButtonName!=null) {
        document.querySelector("#false").addEventListener('click', (e) => closePopUp());
    }
    
}

function popUpForm(textTitle,text,trueButtonName=null,falseButtonName=null,labelName=null,popUpTime="permanant",positionInSpaceZ="positionInSpaceZ") {

    const mainElement = createPopElement(textTitle,text,trueButtonName,falseButtonName,labelName);

    mainElement.classList.add(positionInSpaceZ);

    if(popUpTime!="permanant"){
        setTimeout(time,parseInt(popUpTime));
    }

    if (falseButtonName!=null) {
        document.querySelector("#false").addEventListener('click', (e) => closePopUp());
    }
}
/////////////////////////////////////////////////////////////////////////