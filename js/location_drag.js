//  make the workspace a dropzone

// works like hover
// activates when hovering the dropzone with draggable
dropzone.addEventListener('dragenter',e=>{});//--
// works like hover:leave
// activates when hover leaving the dropzone with draggable
dropzone.addEventListener('dragleave',e=>{});//--
// similar to fiering dragenter sith set interval of 50ms
// activates when hovering the dropzone with draggable
dropzone.addEventListener('dragover',e=>{e.preventDefault();});
// works when object has successfully been dragged 
// activates on mouse remove
dropzone.addEventListener('drop',e=>{
    e.preventDefault();
    const tool_id =e.dataTransfer.getData('text/plain');//get element that is draged
    el=document.getElementById(tool_id);

        // location that needs to be taken
        var perX = e.offsetX/dropzone.offsetWidth * 100;
        var perY = e.offsetY/dropzone.offsetHeight * 100;
    
        // location in dropzone
        console.log(el.offsetWidth);
        console.log(el.offsetHeight);
        perXmain = e.pageX /(document.body.offsetWidth) * 100;
        perYmain = e.pageY /(document.body.offsetHeight)* 100;


    if (!dropzone.contains(el)){
        let vz = document.querySelector("#"+clone_prime(el).id);//#
        style_it(vz,perYmain,perXmain)//*][*
    }else{
        style_it(el,perYmain,perXmain)//*][*
    }  
});


