// function that drags elements from toolbar to workspace

function drag(element){
    // the object is starting to get draged
    // activates on mouse hold
    element.addEventListener('dragstart', e=>{
        //const H=w_a_d.height/2;//css
        //const W=w_a_d.width/2;//css
        e.dataTransfer.setData('text/plain',e.target.id);// get data to be transfered
        //e.dataTransfer.setDragImage(w_a_d,H,W)// css
        //w_a_d.style.display="block";// css 
        element.style.opacity =0.3;// css 
    });
    // the user stoped dragging the object
    // activates on mouse remove
    element.addEventListener('dragend',e=>{
        element.style.opacity =1;// css needed
    });
}



