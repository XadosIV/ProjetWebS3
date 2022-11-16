let template=document.querySelector("#template");
let scrl1 = document.querySelector("#main_scorll_1"); 
let scrl2 = document.querySelector("#main_scorll_2");


function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        // if any scroll is attempted,
        // set this to the previous value
    window.onscroll = function() {
        window.scrollTo(scrollLeft, scrollTop);
    };
}
function enableScroll() {
    window.onscroll = function() {};
}

var n =0;
//var elem=document.querySelector("#on_scroll");
//var elem_width=elem.offsetWidth;

function max_scroll_lenght(element){
    return element.children.length*element.firstElementChild.offsetWidth;
}

template.addEventListener('mouseover',()=>{
    template.addEventListener('wheel', (e) => {
        disableScroll()
        if(e.deltaY>0){
            template.style.transform = `translateX(-${n}px)`;
            console.log(n)
            n = (n<max_scroll_lenght(template)) ? n=n+template.firstElementChild.offsetWidth : n=max_scroll_lenght(template);//value =(question)?(result if true):(result is false)
        }
        else if (e.deltaY<0){   
            template.style.transform = `translateX(-${n}px)`;
            n = (n>0) ? n=n-template.firstElementChild.offsetWidth : n=0;
            console.log(n);
        }
    })
});
template.addEventListener('mouseleave',()=>{
    enableScroll()
});
// we need