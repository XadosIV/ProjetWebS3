var slideMenuProject = document.querySelector("#project");  
var profileId = sessionStorage.getItem('id');

function previewProject() {
    axios.post("php/projectsCruds/getAllProject.php", {
        ownerId : profileId
    })
    .then(response => {
        var projects = response.data;
        var projectPages = 0;
        projectId = parseInt((new URLSearchParams(query)).get("id"));
        for(let project of projects){
            if(project.id == projectId) {
                projectName = project.name
                if (project.json!=null) {
                    var projectPages = eval(project.json).length
                }
            }
        }

        var projectId = parseInt((new URLSearchParams(query)).get("id"));
        
        var titre = document.createElement("h1")
        titre.innerHTML = "Project : <br>"
        titre.style.position = "absolute"
        titre.style.color = "black"
        titre.style.top = "2%"
        titre.style.left = "10%"
        titre.style.textDecoration = "underline"
        slideMenuProject.appendChild(titre)
        
        var projectNameLabel = document.createElement("h1");
        projectNameLabel.setAttribute("id", "id"+projectId);
        projectNameLabel.style.position = "absolute"
        projectNameLabel.style.color = "black"
        projectNameLabel.style.top = "7%"
        projectNameLabel.style.left = "10%"
        projectNameLabel.innerHTML = projectName + "  <button id='changeName' onclick=modifName("+projectNameLabel.id+",'"+projectName+"',true"+")><i class='fa-solid fa-pen'></i></button>";
        
        //console.log(projectName)
        //console.log(projectNameLabel.innerHTML)
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