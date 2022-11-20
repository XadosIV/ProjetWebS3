// functions to put css whenever something is dragged
/////////////////////////////////////////////////////////////////////////
document.addEventListener('dragover',dragover);
document.body.addEventListener('dragend',dragend);
/////////////////////////////////////////////////////////////////////////
function dragover(){
    dele.style.display="block";// css
    let box = document.querySelectorAll(".dropzone");//#
    for(let drp of box){
        drp.style.border="5px dashed grey";// css
    }
    
}
/////////////////////////////////////////////////////////////////////////
function dragend(){
    dele.style.display="none";// css needed
    let box = document.querySelectorAll(".dropzone");//#
    for(let drp of box){
        drp.style.border="none";// css
    }
    

}
/////////////////////////////////////////////////////////////////////////