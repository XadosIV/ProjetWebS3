function modifName(projectNameView, nameProj, mainPage) {
    createFormName(projectNameView, nameProj)
    var newName = document.getElementById('newNameForm');  
    newName.addEventListener("submit", (e) => {
        e.preventDefault();
        var paramsCheck = {
            name : newName.elements["newName"].value,
            ownerId : sessionStorage.getItem('id')
        };
        axios.post("php/projectsCruds/checkIfName.php", paramsCheck).then(response => {
            var textProject = nameProj + " <button id='changeName' onclick=modifName("+projectNameView.id+",'"+nameProj+"',"+mainPage+")><i class='fa-solid fa-pen'></i></button>" 
            if (response.data["exists"]) {
                if (nameProj != paramsCheck["name"]) {
                    popUp("Warning","Project name already used !", null, null, popUpTime=2000);
                }
                if (!mainPage) {
                    projectNameView.innerHTML = textProject
                } else {
                    projectNameView.innerHTML = "Project : <br>" + textProject
                }
            } else {
                popUp("Warning","Do you really want to change this project name to '" + newName.elements["newName"].value + "' ?","Yes","No");
                document.querySelector("#true").addEventListener('click',(f) => {
                    validChangeName(projectNameView, nameProj, newName, mainPage) 
                }); 
                if (!mainPage) {
                    projectNameView.innerHTML = textProject
                } else {
                    projectNameView.innerHTML = "Project : <br>" + textProject
                }
            }
            });
        })
}

function validChangeName(projectNameView, lastName, newName, mainPage) {
    var projectId = projectNameView.id.split("id")[1];
    var paramsChange = {
        id : projectId,
        newProjectName : newName.elements["newName"].value,
    };
    
    axios.post("php/projectsCruds/modifNameProject.php", paramsChange).then(response => {
        textProject = newName.elements["newName"].value + " <button id='changeName' onclick=modifName("+projectNameView.id+",'"+newName.elements["newName"].value+"',"+mainPage+")><i class='fa-solid fa-pen'></i></button>" 
        if (!mainPage) {
            projectNameView.innerHTML = textProject
        } else {
            projectNameView.innerHTML = "Project : <br>" + textProject
        }
        
        document.querySelector("#pop").remove();
    })
}

function createFormName(projectNameView, nameProj) {
    projectNameView.innerHTML = ""
    
    var formNewName = document.createElement("form")
    formNewName.action = "#";
    formNewName.id = "newNameForm";
    formNewName.name = "newNameForm";

    var labelName = document.createElement("input")
    labelName.name = "newName";
    labelName.value = nameProj
    labelName.required = true;

    var buttonChangeName = document.createElement("button");
    buttonChangeName.type = 'submit'
    buttonChangeName.innerHTML = `<i class='fa-solid fa-check'></i>`;   
    buttonChangeName.setAttribute("id", "changeName")

    formNewName.appendChild(labelName)
    formNewName.appendChild(buttonChangeName)
    projectNameView.appendChild(formNewName)
}