// function that create clones
/*
It is used to duplicate the draged objects from the elementbar:
 -Some caractaristics of this function is that every clone 
  gets a different id 
*/

function clone(deep=true){
    clone_elem = this.cloneNode(deep)
    clone_elem.id = this.id + "-" + this.cpt
    this.cpt++
    return clone_elem
}