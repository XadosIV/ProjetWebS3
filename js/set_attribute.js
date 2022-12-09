//BOUTON DE SUPPRESSION D ELEMENT
const delete_button_attribute = document.createElement("button")
delete_button_attribute.id = "delete_button_attribute"
delete_button_attribute.innerHTML = "Supprimer"
delete_button_attribute.addEventListener("click", e => e.target.parentNode.remove())

//BOUTON POUR ANNULER LA SELECTION
const quitter_button_attribute = document.createElement("button")
quitter_button_attribute.id = "quitter_button_attribute"
quitter_button_attribute.innerHTML = "X"
quitter_button_attribute.addEventListener("click", e => select(null))

function select(element){
	var selected = document.querySelector(".selector") // récupère l'ancien élément sélectionné
	if (selected != null){
		//lui retire la sélection
		selected.classList.remove("selector")
		selected.removeChild(delete_button_attribute)
		selected.removeChild(quitter_button_attribute)
	}
	if (element != null){
		// l'ajoute au nouvel element
		element.classList.add("selector")
		element.appendChild(delete_button_attribute)
		element.appendChild(quitter_button_attribute)
		loadAttributes(element)
	}
}

function loadAttributes(element){
	//charge les attributs dans la page de modification, prend en paramètre l'élément cliqué.
	var tool = elementToTool(element) // récupère les données du tool
	var editDiv = document.querySelector("#editingContainer")
	editDiv.innerHTML = "" //Retire tout les anciens attributs

	for (let attrData of tool.attributes){
		/*
		Chaque attribut : 
		<div>
			<span>NAME</span>
			<input></input>
		</div>
		*/
		var div = document.createElement("div")
		
		var name = document.createElement("span")
		name.innerHTML = attrData["displayName"]
		div.appendChild(name)

		var input = document.createElement("input")
		input.type = attrData["inputtype"]
		input.addEventListener("change", e => {
			var data = e.target.value
			if (attrData["style"]){
				element.style[attrData["style"]] = data
			}else{
				//Exception pour 'texte', on ne veut pas supprimer le bouton de sélection s'il existe, donc on prend
				//non pas l'innerhtml mais le node de texte pour le modifier.
				if (attrData["name"] == "innerHTML"){
					element.childNodes[0].nodeValue = data
				}else{
					element[attrData["name"]] = data
				}
			}
		})
		div.appendChild(input)

		editDiv.appendChild(div)
	}
}