//BOUTON DE SUPPRESSION D ELEMENT
const delete_button_attribute = document.createElement("button")
delete_button_attribute.id = "delete_button_attribute"
delete_button_attribute.innerHTML = "X"
delete_button_attribute.addEventListener("click", (e) =>  {
	e.target.parentNode.remove()
	saveProject();
})

function select(element){
	var selected = document.querySelector(".selector") // récupère l'ancien élément sélectionné
	if (selected != null){
		//lui retire la sélection
		selected.classList.remove("selector")
		selected.removeChild(delete_button_attribute)
	}
	if (element != null){
		// l'ajoute au nouvel element
		element.classList.add("selector")
		element.appendChild(delete_button_attribute)
		loadAttributes(element)

		openMenuByID("editingContainer");
	}
}

function loadAttributes(element){
	//charge les attributs dans la page de modification, prend en paramètre l'élément cliqué.
	var tool = elementToTool(element) // récupère les données du tool
	var editDiv = document.querySelector("#editingContainer")
	editDiv.innerHTML = "" //Retire tout les anciens attributs
	var titre = document.createElement("h1")
	titre.innerHTML = "Attributes"
	titre.style.textAlign = "center"
	titre.style.color = "black"
	titre.style.marginBottom = "20%"
	editDiv.appendChild(titre)

	var attributes = attributesAll.concat(tool.attributes)

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
		if (attrData["min"]) input.min = attrData["min"]
		if (attrData["max"]) input.max = attrData["max"]

		value = getValue(attrData, element)
		if (attrData["default"]){
			if (input.type == "number"){
				input.value = value?parseInt(value):attrData["default"]
			}else{
				input.value = value?value:attrData["default"]
			}
			
		}else{
			if (input.type == "number"){
				input.value = value?parseInt(value):0
			}else{
				input.value = value?value:null
			}
			
		}		

		input.addEventListener("change", e => {
			var data = e.target.value
			setValue(attrData, element, data)
			saveProject();
		})
		div.appendChild(input)

		editDiv.appendChild(div)
	}
}

function getValue(attrData, element){
	if (attrData["unit"]){
		value = value + attrData["unit"]
	}

	if (attrData["name"].startsWith("style.")){
		property = attrData["name"].split("style.")[1]
		return element.style[property]
	}else{
		property = attrData["name"]
		//Exception pour 'texte', on ne veut pas supprimer le bouton de sélection s'il existe, donc on prend
		//non pas l'innerhtml mais le node de texte pour le modifier.
		if (property == "innerHTML"){
			return element.childNodes[0].nodeValue
			
		}else{
			return element[property]
		}
	}
}

function setValue(attrData, element, value){
	if (attrData["unit"]){
		value = value + attrData["unit"]
	}

	if (attrData["name"].startsWith("style.")){
		property = attrData["name"].split("style.")[1]
		element.style[property] = value
	}else{
		property = attrData["name"]
		//Exception pour 'texte', on ne veut pas supprimer le bouton de sélection s'il existe, donc on prend
		//non pas l'innerhtml mais le node de texte pour le modifier.
		if (property == "innerHTML"){
			element.childNodes[0].nodeValue = value
			
		}else{
			element[property] = value
		}
	}
}