// function that drags elements from toolbar to workspace

function drag(element,location){
    // the object is starting to get draged
    // activates on mouse hold
    element.addEventListener('dragstart', e=>{
        const H=w_a_d.height/2;
        const W=w_a_d.width/2;
        e.dataTransfer.setData('text/plain',e.target.id);
        e.dataTransfer.setDragImage(w_a_d,H,W)// css
        e.target.style.opacity =0.3;// css 
        w_a_d.style.display="block";// css 
        location.style.border="5px dashed grey";// css
    });
    // the user stoped dragging the object
    // activates on mouse remove
    element.addEventListener('dragend',e=>{
        e.target.style.opacity =1;// css needed
        location.style.border="5px solid black";// css needed
    });
}



