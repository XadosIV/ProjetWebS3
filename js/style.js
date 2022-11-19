//header
var header_toggler=false;
var app =document.querySelector("#app");
function header_show(){
    if(header_toggler){
        app.style.left="";
        header_toggler=false;
    }else{
        app.style.left="0";
        header_toggler=true;
    }
}
//leftbar
var leftbar_toggler=true;
var leftbar =document.querySelector("#leftbar");
function leftBar_show(){
    if(leftbar_toggler){
        leftbar.style.display='flex';
        leftbar_toggler=false;
    }else{
        leftbar.style.display='none';
        leftbar_toggler=true;
    }
}

//rightbar
var rightbar_toggler=true;
var rightbar =document.querySelector("#rightbar");
function rightBar_show(){
    if(rightbar_toggler){
        rightbar.style.display='flex';
        rightbar_toggler=false;
    }else{
        rightbar.style.display='none';
        rightbar_toggler=true;
    }
}

//nav
var nav_toggler=true;
var nav =document.querySelector("#nav");
function nav_show(){
    if(nav_toggler){
        nav.style.display='flex';
        nav_toggler=false;
    }else{
        nav.style.display='none';
        nav_toggler=true;
    }
}

