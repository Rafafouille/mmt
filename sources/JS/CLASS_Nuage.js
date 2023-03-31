class Nuage extends Item
{
	/* Constructeur */
	constructor(nom_,_couleur_ )
	{
		super(nom_,_couleur_,"nuage");
		
		this._couleur = _couleur_ ;
		
		// Ajout du nuage de point(graphique) sous forme de groupe sur la scene
		this.groupeMarkers = new THREE.Group();
		MARKERS.add(this.groupeMarkers);
		
		
	
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
			
	 _type = "nuage"
	 groupeMarkers = null;
	 _rayon_marker = RAYON_MARKER;
	 _couleur = 0xff0000;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	  // Rayon des markers
	 rayon_marker(r_)
	 {
	 	if (r_ != undefined)
	 	{
	 		this._rayon_marker = r_
	 	}
	 	return this._rayon_marker
	 }
	 
	  // couleur
	 couleur(c_)
	 {
	 	if (c_ != undefined)
	 	{
	 		this._couleur = c_
	 	}
	 	return this._couleur
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
			<div class="menu_item">
				<img class = "bouton_item" src="sources/images/supprime.svg" alt="[X]" title="Supprimer le nuage de point" onclick="ouvreBoiteDeleteItem(`+String(this.id())+`)"/>
			</div>
			<div class="nuage-valeurs">
				<table style="margin:auto;">
					<tr>
						<th scope="col">X</th>
						<th></th>
						<th scope="col">Y</th>
						<th></th>
						<th scope="col">Z</th>
						<th></th>
					</tr>
				</table>
			</div>
		`;
		return retour;
	}
	
	
	/** Ajoute une mesure : met dans la this.liste_mesures, crée le marker, et ajoute la mesure dans l'arbre
	Prend un vecteur3 de threejs (coordonnées du point mesuré)*/
	ajouteMesure(_coord_)
	{
		var marker = this.placeMarker(_coord_);
		this.ajouteMesureDansArbre(marker);
	}
	
	
	/** Supprime une mesure (_id_ = index de THREEJS !!!!!!!)*/
	supprimeMesure(_id_)
	{
		// Supprime dans TREEJS
		var marker = SCENE.getObjectById(_id_)
		marker.removeFromParent();
		
		// Supprime de la liste du menu
		$("#arbre .mesure[data-id='"+String(_id_)+"']").remove();
		
	}
	
	// *******************************************
	// Fonction qui place un marker
	placeMarker(_coord_)
	{
		//Marker en tant que tel
		var geom = new THREE.DodecahedronGeometry(this._rayon_marker,1);
		var mat = new  THREE.MeshLambertMaterial({
				color: this._couleur,
				shading: THREE.SmoothShading
				})
		var sphere = new THREE.Mesh( geom, mat );
		// On ajoute une référence vers cet objet
		sphere.nuage = this;
		sphere.position.copy(_coord_);
		this.groupeMarkers.add(sphere)	
		return sphere;
	}
	
	// *******************************************
	// Fonction qui ajoute une mesure dans l'arbre
	ajouteMesureDansArbre(_marker_)
	{
		var _coord_ = _marker_.position;
		// Coordonnées dans la liste
		// OBSOLETE :
		$("#liste_mesures").append("\n"+String(Math.round(_coord_.x*10000)/10000)+";"+String(-Math.round(_coord_.z*10000)/10000)+";"+String(Math.round(_coord_.y*10000)/10000))
		
		
		$("#item-"+String(this.id())+" .contenu-item .nuage-valeurs table").append("<tr data-id=\""+String(_marker_.id)+"\"class=\"mesure\"><td>"+String(Math.round(_coord_.x*10000)/10000)+"</td><td>;</td><td>"+String(-Math.round(_coord_.z*10000)/10000)+"</td><td>;</td><td>"+String(Math.round(_coord_.y*10000)/10000)+"</td><td><img style=\"height:20px;cursor:pointer;\" src=\"sources/images/supprime.svg\" onclick=\"supprimeMarker("+String(_marker_.id)+")\"</td></tr>")
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
	
	
	// ******************************************
	// Fonction qui donne la somme des erreurs au carré du nuage de points
	// avec un plan d'équation ax+by+cz+d=0
	// du marker i
	getBarycentre()
	{
		if(this.nbMesures()==0)
			return null;
			
		var bar = new THREE.Vector3(0,0,0);
		for(var i=0; i<this.nbMesures(); i++)
		{
			bar.add(this.getMesure(i))
		}
		bar.divideScalar(this.nbMesures());
		return bar;
	}
	
	// ******************************************
	// Fonction qui donne la somme des erreurs au carré du nuage de points
	// avec un plan d'équation ax+by+cz+d=0
	// du marker i
	getErreurCarre(_param_plan_, _i_)
	{
		var a=_param_plan_[0]
		var b=_param_plan_[1]
		var c=_param_plan_[2]
		var d=_param_plan_[3]
		var P = this.getMesure(_i_)
		
		//https://www.cuemath.com/geometry/distance-between-point-and-plane/
		return Math.pow(a*P.x+b*P.y+c*P.z+d,2)/(a*a+b*b+c*c)
	}
	
	// ******************************************
	// Fonction qui donne la somme des erreurs au carré du nuage de points
	// avec un plan d'équation ax+by+cz+d=0
	getSommeErreursCarre(_param_plan_)
	{
		var s=0
		for(var i=0;i<this.nbMesures();i++)
		{
			s += this.getErreurCarre(_param_plan_, i)
		}
		return s
	}
	
	
	// *******************************************
	// Fonction qui renvoie la liste [a,b,c,d] de l'équation du plan
	// des moindres carré : ax+by+cz+d=0
	getPlanRMS()
	{
		//Bricolage : on créer une fontion, un peu comme un objet, avec la référence vers le nuage de point en membre
		function erreur(_param_plan_) // _param_plan_ sera un ensemble de parametres [a,b,c,d] que l'algo va tester
		{
			return this.nuage.getSommeErreursCarre(_param_plan_)
		}
		erreur.nuage = this; // On sauve la référence vers le nuage de point
		// Vue que erreur n'est pas un objet, mais une fonction, il ne connait pas "this"
		erreur = erreur.bind(erreur) // Pour que "this" devienne la fonction elle meme (un pb de contexte...)
		
		
		var resultat =  GEN_algo_genetique([1,0,0,0], [1000,1000,1000,1000], erreur	,10000,100,0.1) // (nominal, IT, fecart, nb population, nb itérations, %meilleurs)
		console.log(resultat[0])
		//new Plan("plan",resultat[0]);
		return resultat[0];
	}
	
	
	
	// *******************************************
	/* Fonction (écrase la précédente) qui fait le ménage dans les éléments THREEJS au moment de la suppression */
	supprimeElementsGeometriques()
	{
		this.groupeMarkers.removeFromParent();

	}
	 
}

