// function that will allow the user to create pages in his/her website
let website =document.querySelector("#website");
// function that create new canvas
function create_local_link(object,tool){
    if(true){
        new_button = create("button",tabs,object.id,null,tool.idNbr);
        new_button.setAttribute("onclick","z_index_depth(this.id,this)");

        new_div = create("div",website,null,"dropzone","dropzone"+tool.idNbr);
        new_div.style.zIndex=-tool.idNbr;
        drop(new_div);
    }
}
// 2 functions that creates switching between tabs
var compteur=0;
function z_index_depth(id_button,button){
    let box = document.querySelectorAll(".dropzone");//#
    for(let drp of box){
        if("dropzone"+id_button==drp.id && drp.style.zIndex==-id_button && compteur==0){

            drp.style.zIndex=id_button;//css 
            drp.style.display="block";//css
            button.style.backgroundColor="white";//css

            res=button;
            res_id=id_button;
            res_page=drp;

            compteur++;
        }else if("dropzone"+id_button==drp.id && drp.style.zIndex==-id_button && compteur>0){
            reverse(res_id,res_page,res);
            compteur=0;
            return z_index_depth(id_button,button);
        }
    }
}

function reverse(id_button,object,item){
    object.style.zIndex=-id_button;//css
    object.style.display="none";//css
    item.style.backgroundColor="buttonface";//css
}