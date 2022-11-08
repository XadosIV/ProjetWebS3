// From line 2 to 159 the code will work to all lists of dictionaties
// creating variables 
const body = document.querySelector("body")
const srch_inpt = document.getElementById("srch_inpt");
const srch = document.getElementById("srch");
// function to creat elements
function create(tagName, container, text=null, classs=null, id=null) {
    let element = document.createElement(tagName)
    container.appendChild(element)
    if (text)
        element.appendChild(document.createTextNode(text))
    if (classs)
        element.classList.add(classs)
    if (id)
        element.id = id
    return element
}


// function that search for name and returns object
srch_inpt.addEventListener("keyup",function(event){
    if(event.keyCode == 13){
        const named_enter = srch_inpt.value;
        // print all objects
        if(named_enter =="All"){
            bidoille2(srch,search_container,"div","search_container","search_container");//clear content of old search
            bidoille(ele_father,container,"div","container","container")//clear content of old search
            affich_menu(people,container)
            manageObjects(container,"table","AllObjects","tr","tr","td",people);
        }else if(named_enter =="" || named_enter=="clear".toLowerCase() || named_enter=="clear".toUpperCase()){
            bidoille2(srch,search_container,"div","search_container","search_container");
            bidoille(ele_father,container,"div","container","container")
        }
        else{
            bidoille2(srch,search_container,"div","search_container","search_container");
            bidoille(ele_father,container,"div","container","container")
            affich_menu(people,container)//when element not in list it priint itself , position error
            var j =0;
            for(let peop of people){
                const superVar =lit_split(peop.name,named_enter.length);
                // list objects with matching name
                if(named_enter == superVar || named_enter ==
                    superVar.toLowerCase() || named_enter == 
                    superVar.toUpperCase()){
                    console.log(peop)
                    sort_object(peop,container)
                    j++
                }
            }
            if(j==0){
                bidoille2(srch,search_container,"div","search_container","search_container");
                bidoille(ele_father,container,"div","container","container")
            }
        }
    }
});

function search(){

    const named_enter = srch_inpt.value;
    // print all objects
    if(named_enter =="All"){
        bidoille2(srch,search_container,"div","search_container","search_container");
        for(let peop of people){
 
            let ele_name = `<button id="${peop.name}" onclick="addElement(this.id)">${peop.name}</button>`;
            search_container.insertAdjacentHTML("beforeend", ele_name);
        }
    }else if(named_enter ==""){
        bidoille2(srch,search_container,"div","search_container","search_container");
    }
    else{
        bidoille2(srch,search_container,"div","search_container","search_container");
        for(let peop of people){
            const superVar =lit_split(peop.name,named_enter.length);
            // list objects with matching name
            if(named_enter == superVar || named_enter ==
                superVar.toLowerCase() || named_enter == 
                superVar.toUpperCase()){
                    let ele_name = `<button id="${peop.name}" onclick="addElement(this.id)">${peop.name}</button>`;
                    search_container.insertAdjacentHTML("beforeend", ele_name);
                    console.log(peop.name)

            }
        }
    }
}
// function that is needed for adding chosen element from name suggestion

function addElement(id){
    bidoille(ele_father,container,"div","container","container")
    bidoille2(srch,search_container,"div","search_container","search_container");
    for(let peop of people)
        if (id==peop.name){
            sort_object(peop,container);}
}
// function to fasilitate the search 
/* 
-the result is a variable equal to the name lenght of the
input.value.lenght 
-take the first caracters of a name as a function of number
*/
function lit_split(name,number){
    var result ="";
    for (var i = 0; i < number; i++){
        result+=name[i];
    }
    return result;
}

// function to manage objects
/* function that loops around the list to extract all objects
and sorte them in a table */
// main and child should be differnt tags "doesn't work if main and child are both div or both span"
function manageObjects(container,child,child_class,child1,child1_class,lastchild,list){
    var i =0 ;

    create(child,container,tex=null,child_class)
    let subContainer = document.querySelector(child)
    var i =0;
    for(let peop of list){
        create(child1,subContainer,text=null,child1_class +`${i}`)// puting a smart class
        var sub2Container =document.querySelector("."+child1_class+`${i}`)// aplying the smart class
        for (caract in peop){
            create(lastchild,sub2Container,peop[caract])
        }
        i++;
    }
}

// function that return the selected object in a proper format
function sort_object(object,parent){
    var ele_id = Math.floor(Math.random()*1000000)
    create("table",parent, text=null,"tb"+ele_id)
    let table = document.querySelector(".tb"+ele_id)
    create("tr",table,text=null,"trs"+ele_id)
    var tri =document.querySelector(".trs"+ele_id)
    for (carac in object){
        create("td",tri,object[carac])
    }
}

//creat main container
function create_main_container(parent,main,main_class,main_id) {
    create(main,parent, text=null,main_class,main_id)
    let container = document.getElementById(main_id)
    return container;
}

// Mr JCMarty ;)
function bidoille(father,child,main,main_class,main_id){
    child.remove();
    create_main_container(father,main,main_class,main_id);
}

//creat search container
function create_srch_container(parent,main,main_class,main_id) {
    create(main,parent, text=null,main_class,main_id)
    let search_container = document.getElementById(main_id)
    return search_container;
}

// Mr JCMarty 2 ;)
function bidoille2(father,child,main,main_class,main_id){
    child.remove();
    create_srch_container(father,main,main_class,main_id);
}
function affich_menu(list,parent){
    let l =[];
    var ele_id = Math.floor(Math.random()*1000000)
    create("table",parent, text=null,"tb"+ele_id)
    let table = document.querySelector(".tb"+ele_id)
    create("tr",table,text=null,"trs"+ele_id)
    var tri =document.querySelector(".trs"+ele_id)
    for (object of list){
        for (carac in object){
            if(l.includes(carac)){
            }else{
                l.push(carac)
                create("td",tri,carac)
            }

        }
    }
}
//main program
/* can be created oh HTML but whatever */
//
create("div",body,text=null,classs=null,"GOD")
let ele_father = document.getElementById("GOD")
//
create_main_container(ele_father,"div","container","container");
//
create_srch_container(srch,"div","search_container","search_container");
//

//part 2

//exclusive part works only for the objects in swapi.js

