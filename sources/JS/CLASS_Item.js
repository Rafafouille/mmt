class Item
{
	/* Constructeur */
	constructor(nom_,couleur_,type_="item")
	{
		this.#nom = nom_;
		this.#couleur = couleur_;
		this.#id = NUMERO_ITEM++ + 1;
		this.#type = type_
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
	 
	 #type = ""
	 #nom = "";	// Nom
	 #couleur = "#000000"; // Couleur
	 #id = 0 ;	// N° de l'item
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	 // Nom de l'item de l'item
	 id()
	 {
	 	return this.#id;
	 }
	 
	 // Nom de l'item de l'item
	 nom(n_)
	 {
	 	if (n_ != undefined)
	 	{
	 		this.#nom = n_
	 	}
	 	return this.#nom
	 }
	 
	 
	 // Nom de l'item de l'item
	 type()
	 {
	 	return this.#type
	 }
	 
	 // Couleur d'affichage de l'item
	 couleur(c_)
	 {
	 	if (c_ != undefined)
	 	{
	 		this.#couleur = c_
	 		$("#item-"+String(this.id())+" .titre-item").css("background-color",this.#couleur)
	 		console.log("#item-"+String(this.id())+" .titre-item")
	 	}
	 	return this.#couleur
	 }
	 
	 
	 
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	
	/** Renvoie le bouton HTML pour le menu */
	getHTML()
	{
		var retour = `
			<div class="item" id="item-`+String(this.#id)+`">
				<div class="titre-item" style="background-color:`+this.#couleur+`" onclick="ouvreFermeItem(`+String(this.#id)+`)">
					`+this.#nom+`
				</div>
				<div class="contenu-item">
					`+this.contenuHTML()+`
				</div>
			</div>`;
		return retour;
	}
	
	/** Renvoie le contenu HTML (en dessous du titre) pour le menu */
	contenuHTML()
	{
		return "contenu de l'item";
	}
	
	
	/** Fonction qui se met en évidence quand on sélectionne l'item dans le menu */
	selectionne()
	{
		$("#item-"+String(this.#id)+" .titre-item").css("box-shadow","inset 0px 0px 5px #000000");
		$("#item-"+String(this.#id)+" .titre-item").css("color","yellow");
		$("#item-"+String(this.#id)+" .titre-item").css("font-weight","bold");
	}
	
	/* Fonction qui se remet avec le CSS "de base" quand on désélectionne */
	deselectionne()
	{
		$("#item-"+String(this.#id)+" .titre-item").css("box-shadow","none");
		$("#item-"+String(this.#id)+" .titre-item").css("color","white");
		$("#item-"+String(this.#id)+" .titre-item").css("font-weight","normal");
	}
}

