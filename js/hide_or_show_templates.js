// function that hide or show templates
const iframe = document.querySelector("#iframe");//#
const icon = document.querySelector("#temp_menu");//#
var toggler = true;
function on_click_template(element){
    if(toggler){
        iframe.style.display="flex";
        icon.classList.add("invisible");
        toggler=false;
    }else{
        iframe.style.display="none";
        icon.classList.remove("invisible");
        toggler=true;
    }
}