// function to change the position of an object and update it in clones
function style_it(element,Y,X){
    element.style.opacity =1;// css 
    element.style.position="absolute";// convertion modification
    element.style.top=`${Y}%`;// convertion modification
    element.style.left=`${X}%`;// convertion modification  
    /* //modification needed
    for(let cln of clones){
        if(element.id==cln.id){
            cln.styles.push({"position":"absolute"})
            cln.styles.push({"top":`${Y}px`})
            cln.styles.push({"left":`${X}px`})
        }
    } */
}