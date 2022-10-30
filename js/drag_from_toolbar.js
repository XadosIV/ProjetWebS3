// function that drags elements from toolbar to workspace

function drag(element,location){
    // the object is starting to get draged
    // activates on mouse hold
    element.addEventListener('dragstart', e=>{
        console.log("fart")
        const H=w_a_d.height/2;
        const W=w_a_d.width/2;
        e.dataTransfer.setData('text/plain',e.target.id);
        e.dataTransfer.setDragImage(w_a_d,W,H)// css
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
    var X,Y=0;
    // works like hover
    // activates when hovering the dropzone with draggable
    location.addEventListener('dragenter',e=>{});
    // works like hover:leave
    // activates when hover leaving the dropzone with draggable
    location.addEventListener('dragleave',e=>{});
    // similar to fiering dragenter sith set interval of 50ms
    // activates when hovering the dropzone with draggable
    location.addEventListener('dragover',e=>{
        e.preventDefault();
        X=e.pageX;
        Y=e.pageY;
    });
    // works when object has successfully been dragged 
    // activates on mouse remove
    location.addEventListener('drop',e=>{
        e.preventDefault();
        const tool_id =e.dataTransfer.getData('text/plain');
        el=document.getElementById(tool_id);
        console.log(dropzone.contains(el))
        if (!dropzone.contains(el)){
            console.log("in")
            let vz = document.querySelector("#"+clone_prime(el).id)
            drag(vz,dropzone)
            vz.style.opacity =1;// css 
            vz.style.position="absolute";// convertion modification
            vz.style.top=`${Y}px`;// convertion modification
            vz.style.left=`${X}px`;// convertion modification  
        }else{

            console.log("out")
            console.log(el)
            el.style.opacity =1;// css 
            el.style.position="absolute";// convertion modification
            el.style.top=`${Y}px`;// convertion modification
            el.style.left=`${X}px`;// convertion modification  
        }  
    });
}
