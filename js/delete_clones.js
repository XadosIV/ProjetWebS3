// here are all the functions that deletes clones
/////////////////////////////////////////////////////////////////////////
const dele = document.querySelector("#deletion");//#
// similar to fiering dragenter sith set interval of 50ms
// activates when hovering the dropzone with draggable
dele.addEventListener('dragover',e=>{
    e.preventDefault();
});
// works when object has successfully been dragged 
// activates on mouse remove
dele.addEventListener('drop',e=>{
    e.preventDefault();
    const tool_id =e.dataTransfer.getData('text/plain');
    el=document.getElementById(tool_id);
    if (current_dropzone.contains(el)){
        el.remove();
        dragend();//Allow docuiment to be dragged / function in document_dragover_dragend.js
    }
});
/////////////////////////////////////////////////////////////////////////

// function that deletes all elements in dropzone
// error need urgent modification
function delete_all_clones(){
    while (current_dropzone.childNodes.length != 0){
        current_dropzone.removeChild(current_dropzone.childNodes[0])
    }
}
/////////////////////////////////////////////////////////////////////////