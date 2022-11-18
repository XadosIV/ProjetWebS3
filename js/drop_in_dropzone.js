//  make the workspace a dropzone
function drop(container){
    
    // works like hover
    // activates when hovering the dropzone with draggable
    // container.addEventListener('dragenter',e=>{});//--
    // works like hover:leave
    // activates when hover leaving the dropzone with draggable
    // container.addEventListener('dragleave',e=>{});//--
    // similar to fiering dragenter sith set interval of 50ms
    // activates when hovering the dropzone with draggable

    container.classList.add("dropzone")
    container.addEventListener('dragover',e=>{e.preventDefault();});
    // works when object has successfully been dragged 
    // activates on mouse remove
    container.addEventListener('drop',e=>{
        
        e.preventDefault();
        const tool_id =e.dataTransfer.getData('text/plain');//get element that is draged
        el=document.getElementById(tool_id);

        // location that needs to be taken
        var perX = e.offsetX/container.offsetWidth * 100;
        var perY = e.offsetY/container.offsetHeight * 100;
    
        // location in dropzone
        perXmain = e.pageX /(document.body.offsetWidth) * 100;
        perYmain = e.pageY /(document.body.offsetHeight)* 100;


        if (!container.contains(el)){
            let vz = clone_prime(el,container);//#
            style_it(vz,perYmain,perXmain)
        }else{
            style_it(el,perYmain,perXmain)
        }
    }); 
}