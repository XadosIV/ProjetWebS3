function location_drag(location){
    var X,Y=0;//*][*
    // works like hover
    // activates when hovering the dropzone with draggable
    location.addEventListener('dragenter',e=>{});//--
    // works like hover:leave
    // activates when hover leaving the dropzone with draggable
    location.addEventListener('dragleave',e=>{});//--
    // similar to fiering dragenter sith set interval of 50ms
    // activates when hovering the dropzone with draggable
    location.addEventListener('dragover',e=>{
        e.preventDefault();
        X=e.pageX;//*][*
        Y=e.pageY;//*][*
    });
    // works when object has successfully been dragged 
    // activates on mouse remove
    location.addEventListener('drop',e=>{
        e.preventDefault();
        const tool_id =e.dataTransfer.getData('text/plain');
        el=document.getElementById(tool_id);
        if (!dropzone.contains(el)){
            let vz = document.querySelector("#"+clone_prime(el).id);//#
            style_it(vz,Y,X)//*][*
        }else{
            style_it(el,Y,X)//*][*
        }  
    });
}