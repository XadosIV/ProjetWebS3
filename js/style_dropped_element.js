/////////////////////////////////////////////////////////////////////////
// function to change the position of an object and update it in clones
function style_dropped_element(element,y,x){
    /*element.style.opacity =1;// css 
    element.style.position="absolute";// convertion modification
    element.style.top=`${Y}%`;// convertion modification
    element.style.left=`${X}%`;// convertion modification*/
    element.style.position = "absolute"
    element.style.top = y+"%"
    element.style.left = x+"%"
}
/////////////////////////////////////////////////////////////////////////