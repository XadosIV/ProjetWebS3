const draggable = document.querySelector("#test");
const dropzone = document.querySelector("#workspace");

//* css needed
const w_a_d = document.createElement("img")
w_a_d.src = "images/what_a_drag.jpeg"
//*

draggable.cpt = 0
draggable.clone = clone

/////////////////////////////////////////////////////////////////////////
// drag and drop -test

// the object is starting to get draged
// activates on mouse hold
draggable.addEventListener('dragstart', e=>{
    e.dataTransfer.setData('text/plain',e.target.id);
    e.dataTransfer.setDragImage(w_a_d,w_a_d.width/2,w_a_d.height/2)// css
    e.target.style.opacity =0.3;// css 
    w_a_d.style.display="block";// css 
    dropzone.style.border="5px dashed grey";// css
});

// the user stoped dragging the object
// activates on mouse remove
draggable.addEventListener('dragend',e=>{
    e.target.style.opacity =1;// css needed
    dropzone.style.border="5px solid black";// css needed
});

// works like hover
// activates when hovering the dropzone with draggable
dropzone.addEventListener('dragenter',e=>{
    // css needed
});

// works like hover:leave
// activates when hover leaving the dropzone with draggable
dropzone.addEventListener('dragleave',e=>{
    // css needed 
});

// works when object has successfully been dragged 
// activates on mouse remove
dropzone.addEventListener('drop',e=>{
    e.preventDefault();
    const draggable_id =e.dataTransfer.getData('text/plain');
    e.target.appendChild(document.getElementById(draggable_id).clone())
    // css needed
});

// similar to fiering dragenter sith set interval of 50ms
// activates when hovering the dropzone with draggable
dropzone.addEventListener('dragover',e=>{
    e.preventDefault();
});

/////////////////////////////////////////////////////////////////////////
