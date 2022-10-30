// when the user clicks down on the element
function moveAround(element,location){
    var X,Y=0;
    element.addEventListener('mousedown',e=>{
        console.log("1")

        location.addEventListener('dragover',e=>{
            e.preventDefault();
            X=e.pageX;
            Y=e.pageY;
            console.log(X,Y)

        });

        document.addEventListener('mouseup', function(){
            console.log("2")
            element.style.top=`${Y}px`;// convertion modification
            element.style.left=`${X}px`;// convertion modification        });
        });
    });
}
