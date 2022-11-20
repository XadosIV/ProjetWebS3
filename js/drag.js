// Element in args while be draggable
var rightbar = document.querySelector("#rightbar");
function drag(element){
    // the object is starting to get dragged
    // activates on mouse hold
    element.addEventListener('dragstart', e=>{
        e.dataTransfer.setData('text/plain',e.target.id);// get data to be transfered
        element.style.opacity =0.3;// css 
    });
    // the user stoped dragging the object
    // activates on mouse remove
    element.addEventListener('dragend',e=>{
        element.style.opacity = 1;// css needed
    });
}



