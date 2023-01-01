class Item
{
	/* Constructeur */
	constructor(nom_,couleur_)
	{
		this.#nom = nom_;
		this.#couleur = couleur_;
		this.#id = NUMERO_ITEM++ + 1;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
	 
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
				<div class="titre-item" style="background-color:`+this.#couleur+`" onclick="$(this).parent().find('.contenu-item').slideToggle('fast')">
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
}

