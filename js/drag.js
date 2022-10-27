// function that drags elements from toolbar to workspace

function drag(element,location){
    element.addEventListener('dragstart', e=>{
        e.dataTransfer.setData('text/plain',e.target.id);
        e.dataTransfer.setDragImage(w_a_d,w_a_d.width/2,w_a_d.height/2)// css
        e.target.style.opacity =0.3;// css 
        w_a_d.style.display="block";// css 
        location.style.border="5px dashed grey";// css
    });
    element.addEventListener('dragend',e=>{
        e.target.style.opacity =1;// css needed
        location.style.border="5px solid black";// css needed
    });
}

function location_drag(location){
    location.addEventListener('dragenter',e=>{
    });
    location.addEventListener('dragleave',e=>{
        // css needed 
    });
    location.addEventListener('drop',e=>{
        e.preventDefault();
        const tool_id =e.dataTransfer.getData('text/plain');
        elem=document.getElementById(tool_id)
        elem.cpt = 0
        elem.clone = clone
        console.log(elem.clone)
        e.target.appendChild(elem.clone())
        
    });
    location.addEventListener('dragover',e=>{
        e.preventDefault();
    });
}