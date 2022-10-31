function clone_prime(elem){
    
    for(let er of tools){
        if(er.id==elem.id){
            er.idNbr++;
            sh = create_premium(er,dropzone)
            sh.id=sh.id+"_"+er.idNbr;
            sh.classList.replace("tools","cloned");
            clones.push(er);// all clones elements are stored here
            return sh
        }
    }
}