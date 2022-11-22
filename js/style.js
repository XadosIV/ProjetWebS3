/////////////////////////////////////////////////////////////////////////
var nav =document.querySelector("#nav");
/////////////////////////////////////////////////////////////////////////
//var isContainerVisible=false;
function showHideSlideMenu(){
    const slideMenu =document.querySelector("#slideMenu");
    slideMenu.classList.toggle("hide");
}

function setUpSlideMenu(){
    const slideMenu = document.querySelector("#slideMenu");
    const nav = document.querySelector("#nav");


    const childNumber = nav.children.length

    for(let i = 0; i < childNumber ; i++){
        nav.children[i].addEventListener("click", ()=>{
            slideMenu.classList.remove("hide");
            hideAllMenu();
            slideMenu.children[i].classList.remove("hide");
        });
    }
}
function hideAllMenu(){
    const slideMenu =document.querySelector("#slideMenu");
    for(let menu of slideMenu.children){
        menu.classList.add("hide");
    }
}

setUpSlideMenu();


/* // header / leftbar
var toggler1=true;//change position of app
var toggler2;//used to get the element previously clicked
// 2 variables are used to determin the nature of the click
function show_header_leftbar(element_id){
    if(toggler1){
        //show the clicked elemenet
        toggler1=false;
        header_leftbar.style.left="300px";
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
        header_leftbar.style.left="-300px"://close element
        show_header_leftbar(element_id);//reload the function
        //end if
    }
}

function hide_Seek(hide,seek,id){
    seek.style.display='flex';
    hide.style.display='none';
    return id
} */
/////////////////////////////////////////////////////////////////////////

