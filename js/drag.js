// function that drags elements from toolbar to workspace

function drag(element,location){
    // the object is starting to get draged
    // activates on mouse hold
    element.addEventListener('dragstart', e=>{
        e.dataTransfer.setData('text/plain',e.target.id);
        e.dataTransfer.setDragImage(w_a_d,w_a_d.width/2,w_a_d.height/2)// css
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

function location_drag(location){
    // works like hover
    // activates when hovering the dropzone with draggable
    location.addEventListener('dragenter',e=>{
    });
    // works like hover:leave
    // activates when hover leaving the dropzone with draggable
    location.addEventListener('dragleave',e=>{
        // css needed 
    });
    // works when object has successfully been dragged 
    // activates on mouse remove
    location.addEventListener('drop',e=>{
        e.preventDefault();
        const tool_id =e.dataTransfer.getData('text/plain');
        elem=document.getElementById(tool_id)
        console.log(elem.clone)
        e.target.appendChild(elem.clone())
        
    });
    // similar to fiering dragenter sith set interval of 50ms
    // activates when hovering the dropzone with draggable
    location.addEventListener('dragover',e=>{
        e.preventDefault();
    });
}