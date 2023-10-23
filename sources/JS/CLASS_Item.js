class Item
{
	/* Constructeur */
	constructor(nom_,couleur_,type_="item", _groupe_=null)
	{
		this._nom = nom_;
		this._couleur = couleur_;
		this._id = NUMERO_ITEM++ + 1;
		this._type = type_
		this.GROUPE = null;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
	 
	 _type = ""
	 _nom = "";	// Nom
	 _couleur = "#000000"; // Couleur
	 _id = 0 ;	// N° de l'item
	 _icone = "";
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
	 
	 
	 
	 // Nom de l'item de l'item
	 icone(i_)
	 {
	 	if (i_ != undefined)
	 	{
	 		this._icone = i_;
	 	}
	 	return this._icone;
	 }
	 
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	
	/** Renvoie le contenu HTML dans un Item */
	getHTML()
	{
		var retour = `
			<div class="item" id="item-`+String(this._id)+`">
				<div class="icone_item"><img src="`+this.icone()+`" alt=""/></div>
				<div class="titre-item" style="background-color:`+this._couleur+`" onclick="ouvreFermeItem(`+String(this._id)+`)">
					`+this._nom+`
				</div>
				<div class="contenu-item">
					<div class="menu_item">
						<!-- BOUTONS COMMUNS -- -->`;
			if(this.GROUPE)
				{retour += `
						<div class="bouton_item bouton_visible `+(this.GROUPE.visible?"visible":"invisible")+`" onclick="afficheCache(`+String(this._id)+`)"  title="Rendre Visible/Invisible"></div>
						<div class="range_visible_item"><label for="curseur_alpha_item_`+String(this._id)+`">&#945; :</a><input type="range" id="curseur_alpha_item_`+String(this._id)+`" name="curseur_alpha_item_`+String(this._id)+`" min="0" max="1" step="0.2" value="1" oninput="changeAlpha(`+String(this._id)+`,$(this).val())"/></div>`;}
			retour += `
						<div class="bouton_item bouton_supprimer" title="Supprimer l'item" onclick="ouvreBoiteDeleteItem(`+String(this.id())+`)"></div>
						<!-- BOUTONS SPECIFIQUES A L'ITEM ---- -->`+this.menuItemHTML()+`
					</div>
					<div class="donnees_item">
						`+this.donneesItemHTML()+`
					</div>
				</div>
			</div>`;
		return retour;
	}
	
	/** Renvoie le contenu HTML (en dessous du titre) pour le menu */
	menuItemHTML()
	{
		return "";
	}
	
	/** Renvoie le contenu HTML (en dessous du titre) pour les donnees (coordonnées points) */
	donneesItemHTML()
	{
		return "Données l'item";
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
	
	// Fonction qui affiche le groupe
	afficheGROUPE()
	{
		if(this.GROUPE)
		{
			this.GROUPE.visible = true;
			$("#item-"+String(this.id())+" .bouton_visible").removeClass("invisible")
			$("#item-"+String(this.id())+" .bouton_visible").addClass("visible")
		}
	}
	
	// Fonction qui affiche le groupe
	cacheGROUPE()
	{
		if(this.GROUPE)
		{
			this.GROUPE.visible = false;
			$("#item-"+String(this.id())+" .bouton_visible").removeClass("visible")
			$("#item-"+String(this.id())+" .bouton_visible").addClass("invisible")
		}
	}
	// Si GROUPE n'est pas null, il affiche ou cache l'élement graphique
	afficheCacheGROUPE()
	{
		if(this.GROUPE)
		{
			if(this.GROUPE.visible)
			{
				this.cacheGROUPE();
				$("#item-"+String(this._id)+" .icone_item img").css("opacity","0.3");
			}
			else
			{
				this.afficheGROUPE();
				$("#item-"+String(this._id)+" .icone_item img").css("opacity","1");
			}
		}
		
	}
	
	 
	 // Change la transparence 
	 setTransparence(_alpha_)
	 {
	 
	 	if(_alpha_==0)
	 	{
	 		this.cacheGROUPE()
	 	}
	 
	 	this.afficheGROUPE()
	 	
	 	for(var i=0; i< this.GROUPE.children.length; i++)
	 	{
	 		if(_alpha_==1)
		 		this.GROUPE.children[i].material.transparent = false;
		 	else
		 		this.GROUPE.children[i].material.transparent = true;
	 		this.GROUPE.children[i].material.opacity = _alpha_;
	 		this.GROUPE.children[i].material.needsUpdate = true;
	 	}
	 }
	
}

