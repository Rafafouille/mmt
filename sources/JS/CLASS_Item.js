class Item
{
	/* Constructeur */
	constructor(nom_,couleur_,type_="item")
	{
		this._nom = nom_;
		this._couleur = couleur_;
		this._id = NUMERO_ITEM++ + 1;
		this._type = type_
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
	 
	 _type = ""
	 _nom = "";	// Nom
	 _couleur = "#000000"; // Couleur
	 _id = 0 ;	// N° de l'item
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	 // Nom de l'item de l'item
	 id()
	 {
	 	return this._id;
	 }
	 
	 // Nom de l'item de l'item
	 nom(n_)
	 {
	 	if (n_ != undefined)
	 	{
	 		this._nom = n_
	 		$("#item-"+String(this._id)+" .titre-item").text(n_)
	 	}
	 	return this._nom
	 }
	 
	 
	 // Nom de l'item de l'item
	 type()
	 {
	 	return this._type
	 }
	 
	 // Couleur d'affichage de l'item
	 couleur(c_)
	 {
	 	if (c_ != undefined)
	 	{
	 		this._couleur = c_
	 		$("#item-"+String(this.id())+" .titre-item").css("background-color",this._couleur)
	 		console.log("#item-"+String(this.id())+" .titre-item")
	 	}
	 	return this._couleur
	 }
	 
	 
	 
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	
	/** Renvoie le bouton HTML pour le menu */
	getHTML()
	{
		var retour = `
			<div class="item" id="item-`+String(this._id)+`">
				<div class="titre-item" style="background-color:`+this._couleur+`" onclick="ouvreFermeItem(`+String(this._id)+`)">
					`+this._nom+`
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
		$("#item-"+String(this._id)+" .titre-item").css("box-shadow","inset 0px 0px 5px #000000");
		$("#item-"+String(this._id)+" .titre-item").css("color","yellow");
		$("#item-"+String(this._id)+" .titre-item").css("font-weight","bold");
	}
	
	/* Fonction qui se remet avec le CSS "de base" quand on désélectionne */
	deselectionne()
	{
		$("#item-"+String(this._id)+" .titre-item").css("box-shadow","none");
		$("#item-"+String(this._id)+" .titre-item").css("color","white");
		$("#item-"+String(this._id)+" .titre-item").css("font-weight","normal");
	}
	
	
	/* Fonction qui s'auto-supprime */
	remove()
	{
		// Supprime du menu
		$("#item-"+String(this.id())).remove()
		// supprime de la list des items
		LISTE_ITEMS.splice(LISTE_ITEMS.indexOf(this),1);
		// supprime les éléments créés dedans
		this.supprimeElementsGeometriques()
	}
	
	/* Fonction (abstraite) qui fait le ménage dans les éléments THREEJS au moment de la suppression */
	supprimeElementsGeometriques()
	{
		// rien
	}
	
	
	
	/* Fonction (abstraite) qui prépare les données pour les mettre sous forme de tableau */
	export()
	{
		var tab = {
			type : "item",
			nom : "Item abstrait",
			donnees : null
		};
		return tab
	}
}

