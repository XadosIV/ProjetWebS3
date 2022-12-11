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
                if (project.json!=null) {
                    projectPages = eval(project.json).length
                }
            }
        }

        var projectId = parseInt((new URLSearchParams(query)).get("id"));

        var projectNameLabel = document.createElement("h1");
        projectNameLabel.setAttribute("id", "id"+projectId);
        projectNameLabel.classList = "project"
        projectNameLabel.innerHTML = "Project : <br>" + projectName + "  <button id='changeName' onclick=modifName("+projectNameLabel.id+",'"+projectName+"',true"+")><i class='fa-solid fa-pen'></i></button>";
        slideMenuProject.appendChild(projectNameLabel);

        var pageNumber = document.createElement("h3");
        if (projectPages==1) {
            pageNumber.innerHTML = "You got "+projectPages+" page in your project";
        } else {
            pageNumber.innerHTML = "You got "+projectPages+" pages in your project";
        }
        pageNumber.setAttribute("id", "pageNumber");
        slideMenuProject.appendChild(pageNumber);
    });
}

previewProject()





