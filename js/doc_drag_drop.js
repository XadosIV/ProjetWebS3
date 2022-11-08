// to put css whenever something is draged

document.addEventListener('dragover',dragover);

document.body.addEventListener('dragend',dragend);

function dragover(){
    dele.style.display="block";// css
    dropzone.style.border="5px dashed grey";// css
}

function dragend(){
    dele.style.display="none";// css needed
    dropzone.style.border="5px solid black";// css
}