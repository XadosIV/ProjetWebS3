//  make the workspace a dropzone
/////////////////////////////////////////////////////////////////////////
function drop(container){
    
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
            let vz = clone_tools(el,container);//#
            style_dropped_element(vz,perYmain,perXmain);//put some css /function in style_dropped_element.js
        }else{
            style_dropped_element(el,perYmain,perXmain);//put some css /function in style_dropped_element.js
        }
    }); 
}
/////////////////////////////////////////////////////////////////////////