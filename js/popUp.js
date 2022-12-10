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
function createPopElement(textTitle,text,trueButtonName,falseButtonName){

    const mainElement = create("div",document.body,"pop","pop");

    create("div",document.querySelector("#pop"),"popBackground","popBackground");
    create("div",document.querySelector("#popBackground"),"popEvent","popEvent");

    popEventItem =`<div id="title">${textTitle}</div>\t\n
           <div id="text">${text}</div>\t\n
           <div id="answer">\t\n
                <p id="true">${trueButtonName}</p>\t\t\n
                <p id="false">${falseButtonName}</p>\t\t\n
           </div>`;

    document.querySelector("#popEvent").innerHTML =popEventItem;
    displayPopElement(document.querySelector("#popEvent"));
    return mainElement
}
/////////////////////////////////////////////////////////////////////////
function displayPopElement(element){
    element.classList.add("popEventDisplay");

}

/////////////////////////////////////////////////////////////////////////
function time(){
    answerReturnFalse();
}
/////////////////////////////////////////////////////////////////////////

function closePopUp(){
    document.querySelector("#pop").remove();
}

/////////////////////////////////////////////////////////////////////////
function popUp(textTitle,text,trueButtonName,falseButtonName,popUpTime="permanant",positionInSpaceZ="positionInSpaceZ"){

    const mainElement =createPopElement(textTitle,text,trueButtonName,falseButtonName);

    mainElement.classList.add(positionInSpaceZ);

    if(popUpTime!="permanant"){
        setTimeout(time,parseInt(popUpTime));
    }

    document.querySelector("#false").addEventListener('click', (e) => closePopUp());

    
}
/////////////////////////////////////////////////////////////////////////