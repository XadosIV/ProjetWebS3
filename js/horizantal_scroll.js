
/*
//dont delete YET working on it

let template=document.querySelector("#template");

function max_scroll_lenght(element){
    return element.children.length*element.firstElementChild.offsetWidth;
}

var n =0; 
template.addEventListener('mouseover',()=>{
    template.addEventListener('wheel', (e) => {
        console.log(e)
        disableScroll()
        if(e.deltaY>0){
            test();
            //template.style.transform = `translateX(-${n}px)`;
            console.log(n)
            n = (n<max_scroll_lenght(template)) ? n=n+template.firstElementChild.offsetWidth : n=max_scroll_lenght(template);//value =(question)?(result if true):(result is false)
        }
        else if (e.deltaY<0){   
            test();
            //template.style.transform = `translateX(-${n}px)`;
            n = (n>0) ? n=n-template.firstElementChild.offsetWidth : n=0;
            console.log(n);
        }
    })
});
template.addEventListener('mouseleave',()=>{
    enableScroll()
});*/
