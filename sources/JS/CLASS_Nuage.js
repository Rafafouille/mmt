class Nuage extends Item
{
	/* Constructeur */
	constructor(nom_,_couleur_ )
	{
		super("Nuage "+String(NUMERO_ITEM+1),_couleur_);
		
		this.#couleur = _couleur_ ;
		
		// Ajout du nuage de point(graphique) sous forme de groupe sur la scene
		this.groupeMarkers = new THREE.Group();
		MARKERS.add(this.groupeMarkers);
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
	 groupeMarkers = null;
	 #rayon_marker = RAYON_MARKER;
	 #couleur = 0xff0000;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	  // Rayon des markers
	 rayon_marker(r_)
	 {
	 	if (r_ != undefined)
	 	{
	 		this.#rayon_marker = r_
	 	}
	 	return this.#rayon_marker
	 }
	 
	  // couleur
	 couleur(c_)
	 {
	 	if (c_ != undefined)
	 	{
	 		this.#couleur = c_
	 	}
	 	return this.#couleur
	 }
	 
	 // nombre de mesures déjà faite dans ce nuage
	 nbMesures()
	 {
	 	return this.groupeMarkers.children.length
	 }
	 
	 
	 // Renvoie le marker (objet géométrique) n°i
	 getMarker(_i_)
	 {
	 	return this.groupeMarkers.children[_i_];
	 }
	 
	 // Renvoie les coordonnées n°i sous la forme d'un vecteur3
	 getMesure(_i_)
	 {
	 	return this.getMarker(_i_).position;
	 }
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	 
	 
	 
	/** Renvoie le contenu HTML (en dessous du titre) pour le menu */
	contenuHTML()
	{
		var retour = `
			<div class="nuage-valeurs">
			</div>
		`;
		return retour;
	}
	
	
	/** Ajoute une mesure : met dans la this.liste_mesures, crée le marker, et ajoute la mesure dans l'arbre
	Prend un vecteur3 de threejs (coordonnées du point mesuré)*/
	ajouteMesure(_coord_)
	{
		this.placeMarker(_coord_);
		this.ajouteMesureDansArbre(_coord_);
	}
	
	// *******************************************
	// Fonction qui place un marker
	placeMarker(_coord_)
	{
		//Marker en tant que tel
		var geom = new THREE.DodecahedronGeometry(this.#rayon_marker,1);
		var mat = new  THREE.MeshLambertMaterial({
				color: this.#couleur,
				shading: THREE.SmoothShading
				})
		var sphere = new THREE.Mesh( geom, mat );
		sphere.position.copy(_coord_);
		this.groupeMarkers.add(sphere)
	//	LISTE_MARKERS.push(sphere)
		//MARKERS.add(sphere);
		
	}
	
	// *******************************************
	// Fonction qui ajoute une mesure dans l'arbre
	ajouteMesureDansArbre(_coord_)
	{
		// Coordonnées dans la liste
		// OBSOLETE :
		$("#liste_mesures").append("\n"+String(Math.round(_coord_.x*10000)/10000)+";"+String(-Math.round(_coord_.z*10000)/10000)+";"+String(Math.round(_coord_.y*10000)/10000))
		
		$("#item-"+String(this.id())+" .contenu-item").append("<div class=\"mesure\">"+String(Math.round(_coord_.x*10000)/10000)+";"+String(-Math.round(_coord_.z*10000)/10000)+";"+String(Math.round(_coord_.y*10000)/10000)+"</div>")
	}
	
	
	// ****************************************
	// Fonction qui renvoie true si un marker existe déjà dans les environs
	doublonMarker(_pos_)
	{
		for(var i=0; i<this.nbMesures();i++)
		{
			//var marker=LISTE_MARKERS[i];
			var mesure = this.getMesure(i);
			if(mesure.distanceTo(_pos_)<DISTANCE_MIN_MARKERS)
				return true
		}
		return false
	}
	 
}

