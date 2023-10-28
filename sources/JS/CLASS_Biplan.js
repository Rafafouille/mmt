class Biplan extends Item
{
	/* Constructeur */
	constructor(nom_,param_=[0,0,1,0,.01])
	{
		var _couleur_ = "#00FF00";
		
		super(nom_,_couleur_,"biplan");

		this._couleur = _couleur_ ;
		this._parametres = param_;
		this._centre = this.getProjection(new THREE.Vector3(0, 0, 0)) // centre arbitraire
		this.updateBase();
		
		// Ajout du nuage de point(graphique) sous forme de groupe sur la scene
		this.GROUPE = new THREE.Group();
		ENVIRONNEMENT.add(this.GROUPE);
		
		this.redessine()
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
	 
	 _type = "biplan"
	 _couleur = ""
	 _icone= "./sources/images/bouton_biplan.svg"
	 GROUPE = null;
	 _parametres = null;	// [a,b,c,d] dans l'équation ax+by+cz+d=0
	 _marges = 0.1	// Marge autour de la pièce
	 _centre = null;	//Point dont la projection sur le plan sera le centre du plan
	 _base = null; // Base attachée au plan [xP,yP,n] ou n est la normale
	 //_rayon = 0.5;	// demi-diagonale du carré qui va dessiner le plan
	 _largeur = 0.5; // Dimension du rectangle
	 _longueur = 0.5;
	 PLAN1 = null;	//Objet graphique
	 PLAN2 = null;	//Objet graphique
	 
	 liste_contraintes = [];  // Liste des fonctions qui permettent de calculer les "erreurs" à optimiser
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	  // couleur
	 couleur(c_, redessine=true)
	 {
	 	if (c_ != undefined)
	 	{
	 		this._couleur = c_
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return this._couleur
	 }
	 
	// largeur
	largeur(l_,redessine=true)
	{
	 	if (l_ != undefined)
	 	{
	 		this._largeur = l_;
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return this._largeur
	}
	
	// longueur
	longueur(l_,redessine=true)
	{
	 	if (l_ != undefined)
	 	{
	 		this._longueur = l_;
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return this._longueur
	}
	 
	 // Renvoie les parametres [a,b,c,d,ecart] du plan
	 parametres(p_,redessine=true)
	 {
		 if (p_ != undefined)
		 {
		 	this._parametres = p_
		 	this.updateBase();
			this.updateCentre();
	 		if(redessine)
	 			this.redessine()
		 }
	 	return this._parametres.slice();
	 }
	 
	 // renvoie l'écart entre les deux plans
	 ecart(e_,redessine=true)
	 {
		 if (e_ != undefined)
		 {
		 	this._parametres[4] = e_
	 		if(redessine)
	 			this.redessine()
		 }
	 	return this._parametres[4];
	 }
	 
	 // Renvoie la base
	 base()
	 {
	 	return this._base;
	 }

	 // Renvoie le 1er vecteur de la base
	 ex()
	 {
	 	return this._base.ex;
	 }
	 // Renvoie le 2eme vecteur de la base
	 ey()
	 {
	 	return this._base.ey;
	 }
	 // Renvoie le 3eme vecteur de la base (qui est censé etre la normale)
	 ez()
	 {
	 	return this._base.ez;
	 }
	 
	 // Point qui sera le centre du plan
	 // Si ce point n'est pas sur le plan, c'est son projeté qui sera le centre
	 // Si x = undefined : getter
	 // Si x = THREE.vector3() : setter
	 // Si x, y z dont des flottant : setter
	 centre(_x_,_y_,_z_,redessine=true)
	 {
	 	if(_x_ != undefined)
	 	{
	 		if(typeof(_x_)=="number" && typeof(_y_)=="number" && typeof(_z_)=="number")
	 		{
	 			this._centre = this.getProjection(new THREE.Vector3(_x_,_y_,_z_));
	 			
	 		}
	 		else if(_x_.constructor.name=="Vector3")
	 		{
	 			this._centre = this.getProjection(_x_);
	 		}
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return this._centre;
	 }
	 
	 
	 // getter qui renvoie le vecteur normal unitaire
	 normale()
	 {
		var a = this._parametres[0]
		var b = this._parametres[1]
		var c = this._parametres[2]
	 	var V = new THREE.Vector3(a,b,c)
	 	V.normalize()
	 	return V
	 }
	 
	
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	

	
	/** Renvoie le contenu HTML (en dessous du titre) pour le menu */
	menuItemHTML()
	{
		return `
				<div class="bouton_item bouton_calculette" title="Mesures par rapport au biplan" onclick="ouvreBoiteMesureBiplan(`+String(this.id())+`)"></div>`;
	}
	
	/** Renvoie le contenu HTML (en dessous du titre) pour les donnees (coordonnées points) */
	donneesItemHTML()
	{
		var retour = `
			<span style="font-size:small;"><strong>Équation du plan médian : </strong><br/>
				`+this.getEquation()+`
				<br/>
				<strong>Écart =</strong> `+String(this.ecart())+`</span>`;
		return retour;
	}
	
	
	
	// Renvoie une forme littérale mise en forme de l'équation
	// renvoie un STR
	getEquation(_precision_=3)
	{
		var p = Math.pow(10,_precision_)
		var a = Math.round(this._parametres[0]*p)/p
		var b = Math.round(this._parametres[1]*p)/p
		var c = Math.round(this._parametres[2]*p)/p
		var d = Math.round(this._parametres[3]*p)/p
		
		
		var res = ""
		
		// X
		if(a!=0)
			 res += String(a)+" × <strong>x</strong>"
			 
		// Y
		if(a!=0 && c!=0)
		{
			if(c>0)
				res += " - "; // Attention, le y = -z
			if(c<0)
				res += " + ";
		}
		if(c!=0)
			res += String(c)+" × <strong>y</strong>"
			
		// Z
		if((a!=0 || b!=0) && c!=0)
		{
			if(b>0)
				res += " + "; // Attention, le z = y
			if(b<0)
				res += " - ";
		}
		if(b!=0)
			res += String(b)+" × <strong>z</strong>"
			
		// Constante
		if(d>0)
			res += " + "+String(d)
		if(d<0)
			res += " - "+String(Math.abs(d))
		res += " = 0"
		
		return res;
	}
	
	
	 // Renvoie la 3ème coordonnées d'un point en fonction des deux autres, sur le plan médian
	 getXFromOthers(_y_, _z_)
	 {
		var a = this._parametres[0]
		var b = this._parametres[1]
		var c = this._parametres[2]
		var d = this._parametres[3]
	 	return -(d+c*_z_+b*_y_)/a
	 }
	 getYFromOthers(_x_, _z_)
	 {
		var a = this._parametres[0]
		var b = this._parametres[1]
		var c = this._parametres[2]
		var d = this._parametres[3]
	 	return -(d+c*_z_+a*_x_)/b
	 }
	 getZFromOthers(_x_, _y_)
	 {
		var a = this._parametres[0]
		var b = this._parametres[1]
		var c = this._parametres[2]
		var d = this._parametres[3]
	 	return -(d+b*_y_+a*_x_)/c
	 }
	
	
	
	 
	 // Fonction qui renvoie la distance d'un point _P_ (Three.Vector3)
	 // au plan médian
	 getDistancePoint(_P_)
	 {
		var a = this._parametres[0]
		var b = this._parametres[1]
		var c = this._parametres[2]
		var d = this._parametres[3]
		
		//https://www.cuemath.com/geometry/distance-between-point-and-plane/
		return (a*_P_.x+b*_P_.y+c*_P_.z+d)/(Math.sqrt(a*a+b*b+c*c))
	 }
	 
	 

	 
	 
	 // Renvoie la projection (THREE.Vector3) d'un point _P_ (idem)
	 // sur le plan médian
	 getProjection(P)
	 {
		var a = this._parametres[0]
		var b = this._parametres[1]
		var c = this._parametres[2]
		var d = this._parametres[3]
		
		var n = this.normale()	//Normale
		var O = new THREE.Vector3(0,0,0) // Point du plan
		
		// On cherche un premier point du plan qui servira d'origine
		if(c)	// Si pas parallèle à z
		 	O = new THREE.Vector3(0,0,this.getZFromOthers(0,0))
		else if(a)	// Si pas parallèle à x
		 	O = new THREE.Vector3(this.getXFromOthers(0,0),0,0)
		else	//Sinon (=pas parallèle à y)
		 	O = new THREE.Vector3(0,this.getYFromOthers(0,0),0)
		 	
		 var PO = O.clone().sub(P)
		 var distance = n.dot(PO)
		 n.multiplyScalar(distance)
		 var result = P.clone().add(n)
		 return result
	 }
	
	 
	 
	 /* Fonction qui recalcule la position du centre (si jamais on a changé l'équation, par exemple)*/
	 updateCentre()
	 {
	 	this._centre = this.getProjection(this._centre)
	 }
	 
	 /* Fonction qui calcul le triplet de vecteur orthonormé, dont la 3ème est n*/
	 updateBase()
	 {
	 	var ez = this.normale()
	 	if( ((new THREE.Vector3(1,0,0)).cross(ez)).length()    ) 	// Si (1,0,0) et ez ne sont pas colinéaire
	 	{
		 	var ex = (new THREE.Vector3(1,0,0).sub(
		 				 this.normale().multiplyScalar(
		 				 	(new THREE.Vector3(1,0,0)).dot(this.normale())
		 				 )
		 		)).normalize()  //  (ex - ex.n * n).normalize
		 	var ey = ez.clone().cross(ex)
		 }
		 else	// Si (1,0,0)) et ez sont colinéaires (on prendra (0,1,0) pour l'orthonormalisation)
		 {
		 	var ex = (new THREE.Vector3(0,1,0).sub(
		 				 this.normale().multiplyScalar(
		 				 	(new THREE.Vector3(0,1,0)).dot(this.normale())
		 				 )
		 		)).normalize()  //  (ey - ey.n * n).normalize
		 	var ey = ez.clone().cross(ex)
		 }
	 	
	 	this._base = {"ex":ex,"ey":ey,"ez":ez}
	 	return this._base
	 }
	 
	 
	 // Efface (le cas échéant) puis redessine le plan. Il s'agit d'un rectangle, centré sur la projection de this.centre
	 redessine()
	 {
	 	// On retire l'éventuel plan (et autre) qu'il y a dans le groupe
 		this.GROUPE.clear();
			 	
	 	var geometry1 = new THREE.PlaneGeometry( 1, 1 );
	 	var geometry2 = new THREE.PlaneGeometry( 1, 1 );
	 	
		var materiau =  new THREE.MeshLambertMaterial({
							color: this.couleur(),
							transparent :true,
							opacity:0.5
							})
			materiau.side = THREE.DoubleSide;
		this.PLAN1 = new THREE.Mesh( geometry1, materiau );
		this.PLAN2 = new THREE.Mesh( geometry2, materiau );
		
		this.GROUPE.add(this.PLAN1);
		this.GROUPE.add(this.PLAN2);
		
		
		
			var O1 = this._centre.clone().add(this._base.ez.clone().multiplyScalar(this.ecart()/2));
			var O2 = this._centre.clone().sub(this._base.ez.clone().multiplyScalar(this.ecart()/2));
			
			var i = (this._base.ex).clone().multiplyScalar(this._largeur/2);
			var j = (this._base.ey).clone().multiplyScalar(this._longueur/2);
			var diag1 = i.clone().add(j)
			var diag2 = i.clone().sub(j)
		
		
		       const v3Array1 = [
				O1.clone().add(diag1),
				O1.clone().add(diag2),
				O1.clone().sub(diag2),
				O1.clone().sub(diag1)
			    ];
		       const v3Array2 = [
				O2.clone().add(diag1),
				O2.clone().add(diag2),
				O2.clone().sub(diag2),
				O2.clone().sub(diag1)
			    ];

			geometry1.setFromPoints(v3Array1);
			geometry2.setFromPoints(v3Array2);
			// Mise à jour de la taille du plan
			geometry1.computeBoundingBox();
			geometry1.computeBoundingSphere();
			geometry2.computeBoundingBox();
			geometry2.computeBoundingSphere();
			// Prise en compte de la mise à jour des coordonnées
			geometry1.attributes.position.needUpdate=true;
			geometry2.attributes.position.needUpdate=true;
			
	 }
	 
	
	
	

	
	
	
	// *******************************************
	/* Fonction (écrase la précédente) qui fait le ménage dans les éléments THREEJS au moment de la suppression */
	supprimeElementsGeometriques()
	{
		this.GROUPE.removeFromParent();

	}
	
	
	
	/* Fonction qui prépare les données pour les mettre sous forme de tableau 
	(écrase la fonction abstraite) */
	export()
	{
		var tab = {
			type : "biplan",
			nom : this.nom(),
			donnees : {"a":this._parametres[0],"b":this._parametres[1],"c":this._parametres[2],"d":this._parametres[3],"e":this._parametres[4]}
		};
		
		return tab
	}
	 
}

