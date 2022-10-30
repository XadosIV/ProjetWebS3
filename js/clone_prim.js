function clone_prime(elem){
    
    for(let er of tools){
        if(er.id==elem.id){
            er.idNbr++;
            return create(er.item,dropzone,er.text,"cloned",er.id+"_"+er.idNbr,er.draggable)
        }
    }
}