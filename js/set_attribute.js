//BOUTON DE SUPPRESSION D ELEMENT
const delete_button_attribute = document.createElement("button")
delete_button_attribute.id = "delete_button_attribute"
delete_button_attribute.innerHTML = "X"
delete_button_attribute.addEventListener("click", (e) =>  {
	popUp("Warning","Do you really want to delete this element ?","Yes","No");
	document.querySelector("#true").addEventListener('click',(f) => {
		e.target.parentNode.remove()
		closePopUp()
		
		saveProject();
	});
})

//BOUTON POUR ANNULER LA SELECTION
/*const quitter_button_attribute = document.createElement("button")
quitter_button_attribute.id = "quitter_button_attribute"
*/

//quitter_button_attribute.innerHTML = "X" //Bouton à delete ?
//quitter_button_attribute.addEventListener("click", e => select(null))

function select(element){
	var selected = document.querySelector(".selector") // récupère l'ancien élément sélectionné
	if (selected != null){
		//lui retire la sélection
		selected.classList.remove("selector")
		selected.removeChild(delete_button_attribute)
		//selected.removeChild(quitter_button_attribute)
	}
	if (element != null){
		// l'ajoute au nouvel element
		element.classList.add("selector")
		element.appendChild(delete_button_attribute)
		//element.appendChild(quitter_button_attribute)
		loadAttributes(element)
	}
}

function loadAttributes(element){
	//charge les attributs dans la page de modification, prend en paramètre l'élément cliqué.
	var tool = elementToTool(element) // récupère les données du tool
	var editDiv = document.querySelector("#editingContainer")
	editDiv.innerHTML = "" //Retire tout les anciens attributs

	var attributes = attributesAll.concat(tool.attributes)

	console.log(attributes)

	for (let attrData of attributes){
		/*
		Chaque attribut : 
		<div>
			<span>NAME</span>
			<input></input>
		</div>
		*/
		var div = document.createElement("div")
		
		var name = document.createElement("span")
		name.innerHTML = attrData["display"]
		div.appendChild(name)

		var input = document.createElement("input")
		input.type = attrData["input"]
		input.addEventListener("change", e => {
			var data = e.target.value

			if (attrData["unit"]){
				data = data + attrData["unit"]
			}

			if (attrData["name"].startsWith("style.")){
				property = attrData["name"].split("style.")[1]
				element.style[property] = data
			}else{
				property = attrData["name"]
				//Exception pour 'texte', on ne veut pas supprimer le bouton de sélection s'il existe, donc on prend
				//non pas l'innerhtml mais le node de texte pour le modifier.
				if (property == "innerHTML"){ 
					element.childNodes[0].nodeValue = data
				}else{
					element[property] = data
				}
			}

			saveProject();
		})
		div.appendChild(input)

		editDiv.appendChild(div)
	}
}