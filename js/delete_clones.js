// here are all the functions that deletes clones

const dele = document.querySelector("#deletion");//#
// works like hover
// activates when hovering the conzone with draggable
dele.addEventListener('dragenter',e=>{});//--
// works like hover:leave
// activates when hover leaving the dropzone with draggable
dele.addEventListener('dragleave',e=>{});//--
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
    if (dropzone.contains(el)){
        el.remove();
        dragend();
    }
});

// function that deletes all elements in dropzone
// error need urgent modification
function delete_all_clones(){
    let clones = document.querySelectorAll(".cloned");
    for(let clone of clones){
        clone.remove();
    }
}