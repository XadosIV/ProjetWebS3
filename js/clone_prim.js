// function to create clones
function clone_prime(elem){//elem is an object "tool"
    for(let er of tools){
        if(er.id==elem.id){
            er.idNbr++;// track nbr of clones
            sh = create_premium(er,dropzone);// create a clone
            drag(sh,dropzone);// apply dragable on clone
            sh.id=sh.id+"_"+er.idNbr;// put unique id to eachy clone
            sh.classList.replace("tool","cloned");// make clones have a class of cloned
            store(er);
            return sh;
        }
    }
}