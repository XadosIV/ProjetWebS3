// function that hide or show templates
const iframe = document.querySelector("#iframe")
var toggler = true;
function on_click_template(element){
    if(toggler){
        iframe.classList.remove("invisible");
        toggler=false;
    }else{
        iframe.classList.add("invisible");
        toggler=true;
    }
}