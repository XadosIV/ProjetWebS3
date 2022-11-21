/////////////////////////////////////////////////////////////////////////
var app =document.querySelector("#app");
var leftbar =document.querySelector("#leftbar");
var rightbar =document.querySelector("#rightbar");
var nav =document.querySelector("#nav");
var header =document.querySelector("#header");
var navigation=document.querySelector(".navigation");
var draggable=document.querySelector(".draggable");
/////////////////////////////////////////////////////////////////////////
// header / leftbar
var toggler1=true;//change position of app
var toggler2;//used to get the element previously clicked
// 2 variables are used to determin the nature of the click
function show_header_leftbar(element_id){
    if(toggler1){
        //show the clicked elemenet
        toggler1=false;
        app.style.left="50px";
        //if
        element_id =="show_header"?
        toggler2=hide_Seek(leftbar,header,element_id):
        toggler2=hide_Seek(header,leftbar,element_id);
        //end if
    }
    else{
        //close element is clicked twice else reload the function
        toggler1=true;
        //if
        element_id==toggler2?
        app.style.left="-250px"://close element
        show_header_leftbar(element_id);//reload the function
        //end if
    }
}

function hide_Seek(hide,seek,id){
    seek.style.display='flex';
    hide.style.display='none';
    return id
}
/////////////////////////////////////////////////////////////////////////


//rightbar
var rightbar_toggler=true;
function rightBar_show(){
    if(rightbar_toggler){
        rightbar.style.display='flex';
        draggable.style.backgroundColor="#FF416C";
        rightbar_toggler=false;
    }else{
        rightbar.style.display='none';
        draggable.style.backgroundColor="";
        rightbar_toggler=true;
    }
}
/////////////////////////////////////////////////////////////////////////
//nav
var nav_toggler=true;
function nav_show(){
    if(nav_toggler){
        nav_toggler=false;
        app.style.left="-250px";
        nav.style.left="0px"
        nav.style.transition = "1s";
        navigation.style.transition = "1s";
        navigation.style.backgroundColor="rgb("+255+","+ 65+","+108+")";
    }else{
        nav_toggler=true;
        app.style.left="";
        nav.style.left="";
        nav.style.transition = "1s";
        navigation.style.transition = "1s";
        navigation.style.backgroundColor="";
        
    }
}
/////////////////////////////////////////////////////////////////////////

