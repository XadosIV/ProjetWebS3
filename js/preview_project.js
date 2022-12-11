var slideMenuProject = document.querySelector("#project");  
var profileId = sessionStorage.getItem('id');

function previewProject() {
    axios.post("php/projectsCruds/getAllProject.php", {
        ownerId : profileId
    })
    .then(response => {
        var projects = response.data;
        projectId = parseInt((new URLSearchParams(query)).get("id"));
        for(let project of projects){
            if(project.id == projectId) {
                projectName = project.name
                projectPages = eval(project.json).length
            }
        }

        var projectNameLabel = document.createElement("h1");
        projectNameLabel.innerHTML = "Project : <br>" + projectName + "  <button id='changePseudo' onclick=modifPseudo()><i class='fa-solid fa-pen'></i></button>";
        projectNameLabel.setAttribute("id", "projectLabel");
        slideMenuProject.appendChild(projectNameLabel);

        var pageNumber = document.createElement("h3");
        pageNumber.innerHTML = "You got "+projectPages+" pages in your project";
        pageNumber.setAttribute("id", "pageNumber");
        slideMenuProject.appendChild(pageNumber);
    });
}

previewProject()





