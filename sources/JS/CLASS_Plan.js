class Plan extends Item
{
	/* Constructeur */
	constructor(nom_,param_)
	{
		var _couleur_ = "#00FF00";
		super("Plan "+String(NUMERO_ITEM+1),_couleur_,"plan");
		
		this._couleur = _couleur_ ;
		this._parametres = param_;
		this._centre = this.getProjection(new THREE.Vector3(0, 0, 0)) // centre arbitraire
		this.updateBase();
		
		// Ajout du nuage de point(graphique) sous forme de groupe sur la scene
		this.groupePlan = new THREE.Group();
		ENVIRONNEMENT.add(this.groupePlan);
		
		this.redessine()
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
	 _couleur = ""
	 groupePlan = null;
	 _parametres = null;
	 _marges = 0.1	// Marge autour de la pièce
	 _centre = null;	//Point dont la projection sur le plan sera le centre du plan
	 _base = null; // Base attachée au plan [xP,yP,n] ou n est la normale
	 _rayon = 1;	// demi-diagonale du carré qui va dessiner le plan
	 PLAN = null;	//Objet graphique
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	  // couleur
	 couleur(c_)
	 {
	 	if (c_ != undefined)
	 	{
	 		this._couleur = c_
	 	}
	 	return this._couleur
	 }
	 
	 // Renvoie les parametres [a,b,c,d] du plan
	 parametres()
	 {
	 	return this._parametres;
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
	 
	 // Point dont la projection sera le centre du plan
	 // Si x = undefined : getter
	 // Si x = THREE.vector3() : setter
	 // Si x, y z dont des flottant : setter
	 centre(_x_,_y_,_z_,redessine=true)
	 {
	 	if(_x_ != undefined)
	 	{
	 		if(typeof(_x_)=="number" && typeof(_y_)=="number" && typeof(_z_)=="number")
	 		{
	 			this._centre.set(_x_,_y_,_z_);
	 		}
	 		else if(_x_.constructor.name=="Vector3")
	 		{
	 			this._centre = _x_;
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
	 
	  // Rayon
	 rayon(r_,redessine=true)
	 {
	 	if (r_ != undefined)
	 	{
	 		this._rayon = r_
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return this._rayon
	 }
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 // Renvoie la 3ème coordonnées d'un point en fonction des deux autres
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
	 
	 
	 
	 // Renvoie la projection (THREE.Vector3) d'un point _P_ (idem)
	 // sur le plan
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
 		this.groupePlan.clear();
			 	
	 	var geometry = new THREE.PlaneGeometry( 1, 1 );
		this.PLAN = new THREE.Mesh( geometry, MATERIAU_PLAN );
		this.groupePlan.add(this.PLAN);
		
		var a = this._parametres[0]
		var b = this._parametres[1]
		var c = this._parametres[2]
		var d = this._parametres[3]
		
		
		//Mise à jour des coordonnées
		/*var x=0
		var z=0
		plan.geometry.attributes.position.array[0] = x
		plan.geometry.attributes.position.array[1] = -(d-a*x-c*z)/b
		plan.geometry.attributes.position.array[2] = z
		
		var x=1
		var z=0
		plan.geometry.attributes.position.array[3] = x
		plan.geometry.attributes.position.array[4] = -(d-a*x-c*z)/b
		plan.geometry.attributes.position.array[5] = z
		
		var x=1
		var z=1
		plan.geometry.attributes.position.array[6] = x
		plan.geometry.attributes.position.array[7] = -(d-a*x-c*z)/b
		plan.geometry.attributes.position.array[8] = z
		
		var x=0
		var z=1
		plan.geometry.attributes.position.array[9] = x
		plan.geometry.attributes.position.array[10] = -(d-a*x-c*z)/b
		plan.geometry.attributes.position.array[11] = z*/
		
			var O = this._centre;
			var i = (this._base.ex).clone().multiplyScalar(this._rayon/Math.sqrt(2))
			var j = (this._base.ey).clone().multiplyScalar(this._rayon/Math.sqrt(2))
			var diag1 = i.clone().add(j)
			var diag2 = i.clone().sub(j)
		
		
			/*
			geometry.attributes.position.array[0] = O.clone().add(diag1).x
			geometry.attributes.position.array[1] = O.clone().add(diag1).y
			geometry.attributes.position.array[2] = O.clone().add(diag1).z
			
			geometry.attributes.position.array[3] = O.clone().add(diag2).x
			geometry.attributes.position.array[4] = O.clone().add(diag2).y
			geometry.attributes.position.array[5] = O.clone().add(diag2).z
			
			geometry.attributes.position.array[6] = O.clone().sub(diag1).x
			geometry.attributes.position.array[7] = O.clone().sub(diag1).y
			geometry.attributes.position.array[8] = O.clone().sub(diag1).z
			
			geometry.attributes.position.array[9] = O.clone().sub(diag2).x
			geometry.attributes.position.array[10] = O.clone().sub(diag2).y
			geometry.attributes.position.array[11] = O.clone().sub(diag2).z*/
		
		       const v3Array = [
				O.clone().add(diag1),
				O.clone().add(diag2),
				O.clone().sub(diag2),
				O.clone().sub(diag1),
				/*
				O.clone().sub(diag1),
				O.clone().sub(diag2),
				O.clone().add(diag1),
				/*
				O.clone().add(diag2),
				O.clone().add(diag1),
				O.clone().sub(diag1),
				//
				O.clone().sub(diag2),
				O.clone().sub(diag1),
				O.clone().add(diag1),*/
			    ];
			geometry.setFromPoints(v3Array);
			// Mise à jour de la taille du plan
			geometry.computeBoundingBox();
			geometry.computeBoundingSphere();
			// Prise en compte de la mise à jour des coordonnées
			geometry.attributes.position.needUpdate=true;
			
	 }
	 
	
	
	
	 
}

