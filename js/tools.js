let tools =[
    {
        "item":"button", // create element tag
        "draggable":"true", // if draggable
        "classs":"tool",
        "id":"button",
        "text":"button",
        "idNbr":0, // this will increase when clones are created
        "styles":[{"color":"black"},{"cursor":"pointer"}], // style added by admin deafult
        "attributes":[],  // attributes added by admin defult
        "childs":"true"  // if able to be parent for childs set to false
    },{
        "item":"p",
        "draggable":"true",
        "classs":"tool",
        "id":"paragraph",
        "text":"paragraph",
        "idNbr":0,
        "styles":[{"color":"gray"},{"cursor":"pointer"}],
        "attributes":[],
        "childs":"true"
    },{
        "item":"a",
        "draggable":"true",
        "classs":"tool",
        "id":"link",
        "text":"link",
        "idNbr":0,
        "styles":[{"color":"red"},{"cursor":"pointer"}],
        "attributes":[],
        "childs":"true"
    },{
        "item":"table",
        "draggable":"true",
        "classs":"tool",
        "id":"table",
        "text":"table",
        "idNbr":0,
        "styles":[{"color":"purple"},{"cursor":"pointer"}],
        "attributes":[],
        "childs":"true"
    },{
        "item":"input",
        "draggable":"true",
        "classs":"tool",
        "id":"input",
        "text":"",
        "idNbr":0,
        "styles":[{"color":"blue"},{"border":"10px solid pink"},{"cursor":"pointer"}],
        "attributes":[{"placeholder":"fuck you granny"}],
        "childs":"false" 
    }
]