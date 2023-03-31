class Cylindre extends Item
{
	/* Constructeur */
	// Param = [xp, yp, zp, vx, vy, vz, r]
	constructor(nom_,param_=[0, 0, 0, 0, 0, 1, 0.1])
	{
		var _couleur_ = "#00FF00";
		
		super(nom_,_couleur_,"cylindre");

		this._couleur = _couleur_ ;
		this._parametres = param_;
		
		// Centre du cylindre (projeté sur l'axe, si le point n'y est pas)
		this._centre = this.getProjectionSurAxe(new THREE.Vector3(0, 0, 0)) // centre arbitraire
		this._longueur = 1;	// Longueur de cylindre à afficher
		this.updateBase();
		
		// Ajout du nuage de point(graphique) sous forme de groupe sur la scene
		this.groupeCylindre = new THREE.Group();
		ENVIRONNEMENT.add(this.groupePlan);
		
		this.redessine()
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
	 
	 _type = "plan"
	 _couleur = ""
	 groupeCylindre = null;
	 _parametres = null;	// [a,b,c,d] dans l'équation ax+by+cz+d=0

	 _base = null; // Base attachée au plan [xP,yP,n] ou n est la normale

	 _longueur = 1;
	 _nbFaces = 6 ;
	 CYLINDRE = null;	//Objet graphique
	 
	 liste_contraintes = [];  // Liste des fonctions qui permettent de calculer les "erreurs" à optimiser
	 
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
	 
	 // Renvoie les parametres [a,b,c,d] du plan
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
	 
	 // Point qui sera le centre du cylindre visible
	 // Si ce point n'est pas sur l'axe, c'est son projeté qui sera le centre
	 // Si x = undefined : getter
	 // Si x = THREE.vector3() : setter
	 // Si x, y z dont des flottant : setter
	 centre(_x_,_y_,_z_,redessine=true)
	 {
	 	if(_x_ != undefined)
	 	{
	 		if(typeof(_x_)=="number" && typeof(_y_)=="number" && typeof(_z_)=="number")
	 		{
	 			var c = this.getProjectionSurAxe(new THREE.Vector3(_x_,_y_,_z_));
	 			this._parametres[0] = c.x;
	 			this._parametres[1] = c.y;
	 			this._parametres[2] = c.z;
	 			
	 		}
	 		else if(_x_.constructor.name=="Vector3")
	 		{
	 			var c = this.getProjectionSurAxe(_x_);
	 			this._parametres[0] = c.x;
	 			this._parametres[1] = c.y;
	 			this._parametres[2] = c.z;
	 		}
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return new THREE.Vector3(this._parametres[0],this._parametres[1],this._parametres[2]);
	 }
	 
	 
	 // Vecteur directeur de l'axe
	 // Si x = undefined : getter
	 // Si x = THREE.vector3() : setter
	 // Si x, y z dont des flottant : setter
	 vDirecteur(_x_,_y_,_z_,redessine=true)
	 {
	 	if(_x_ != undefined)
	 	{
	 		if(typeof(_x_)=="number" && typeof(_y_)=="number" && typeof(_z_)=="number")
	 		{
	 			_xx_ = _x_/Math.sqrt(_x_*_x_+_y_*_y_+_z_*_z_)
	 			_yy_ = _y_/Math.sqrt(_x_*_x_+_y_*_y_+_z_*_z_)
	 			_zz_ = _z_/Math.sqrt(_x_*_x_+_y_*_y_+_z_*_z_)
	 			this._parametres[3] = _xx_;
	 			this._parametres[4] = _yy_;
	 			this._parametres[5] = _zz_;
	 			
	 		}
	 		else if(_x_.constructor.name=="Vector3")
	 		{
	 			_x_.normalize();
	 			this._parametres[3] = _x_.x;
	 			this._parametres[4] = _x_.y;
	 			this._parametres[5] = _x_.z;
	 		}
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return new THREE.Vector3(this._parametres[3],this._parametres[4],this._parametres[5]);
	 }
	 
	 // Rayon du cylindre
	 // Si r_ = undefined : getter sinon, setter (flottant)
	 rayon(r_,redessine=true)
	{
	 	if (r_ != undefined)
	 	{
	 		this._parametres[6] = r_;
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return this._parametres[6]
	}
	
	
	
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	
	 
	 
	/** Renvoie le contenu HTML (en dessous du titre) pour le menu */
	contenuHTML()
	{
		var retour = `
			<div class="menu_item">
				<img class = "bouton_item" src="sources/images/supprime.svg" alt="[X]" title="Supprimer le cylindre" onclick="ouvreBoiteDeleteItem(`+String(this.id())+`)"/>
				<img class = "bouton_item" src="sources/images/calculette.svg" alt="[%]" title="Mesures sur le cylindre" onclick="ouvreBoiteMesurePlan(`+String(this.id())+`)"/>
			</div>
			<div class="info_cylindre">
				<span style="font-size:small;"></span>
			</div>
		`;
		return retour;
	}
	
	 
	 
	 // Fonction qui renvoie la distance d'un point _P_ (Three.Vector3)
	 // à l'axe du cylindre
	 getRayonPoint(_P_)
	 {
		var a = this._parametres[0]
		var b = this._parametres[1]
		var c = this._parametres[2]
		var d = this._parametres[3]
		
		//https://www.cuemath.com/geometry/distance-between-point-and-plane/
		return (a*_P_.x+b*_P_.y+c*_P_.z+d)/(Math.sqrt(a*a+b*b+c*c))
	 }
	 
	 
	 // Fonction qui renvoie la distance d'un point _P_ (Three.Vector3)
	 // au cylindre (>0 = le point est à l'extérieur)
	 getDistancePoint(_P_)
	 {
		return this.getRayonPoint(_P_) - this.rayon()
	 }
	 
	 
	 
	 
	 // Renvoie la projection (THREE.Vector3) d'un point _P_ (idem)
	 // sur le plan
	 getProjectionSurAxe(P)
	 {
		var centre = this.centre()
		var vDir = this.vDirecteur().normalize() // Au cas où : on normalise
		
		l = vDir.dot(P.clone().sub(centre))
		
		 return centre.clone().vDir.multiplyScalar(l)
	 }
	 
	 
	 
	 
	 /* Fonction qui calcul le triplet de vecteur orthonormé, dont la 3ème est n*/
	 updateBase()
	 {
	 	var ez = this.vDirecteur();
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
	 
	 	// Voir : https://dustinpfister.github.io/2018/04/14/threejs-geometry/
	 	// On retire l'éventuel plan (et autre) qu'il y a dans le groupe
 		this.groupeCylindre.clear();
 		
 		var geometry = new THREE.Geometry();
 		
 		//Création des sommets
 		var dtheta = 2*Math.PI/this._nbFaces;
 		for(var i=0;i< this._nbFaces; i++)
 		{
 			
 		}
 		//Création des faces
 		var nbPt = this._nbFaces*2
 		for(var i=0;i< this._nbFaces; i++)
 		{
 			var theta = i * dtheta;
 			geometry.faces.push(
	 			new THREE.Face3((2*i)%nbPt, (2*i+1)%nbPt , (2*i+2)%nbPt ),
	 			new THREE.Face3((2*i+1)%nbPt, (2*i+2)%nbPt, (2*i+3)%nbPt),
	 		);
 		}
		geometry.computeVertexNormals();
		geometry.normalize();
		
		
		CYLINDRE = new THREE.Mesh(geometry,new THREE.MeshNormalMaterial({side: THREE.DoubleSide}));
		this.groupeCylindre.add(CYLINDRE)
 	}
 		
 		
	
	
	
	
	// ******************************
	// MEMBRES relatifs à l'optimisation
	
	
	// ******************************************************************************************
	// Fonction qui fabrique la fonction qui calcule les distances au carré d'un plan d'equation ax+by+cz+d=0
	// a un nuage de points
	/*addContrainteRMS(_nuage_)
	{
		var f = function(_param_plan_)
				{
					var S=0;
					for(var i=0;i<this.nuage.nbMesures();i++)//Pour chaque noeud
					{
						S+= getDistancePlanCarre(_param_plan_,this.nuage.getMesure(i))
					}
					return S
				}
		f.nuage = _nuage_ ;
		f.type = "RMS"
		f = f.bind(f)
		this.liste_contraintes.push(f); // On l'ajoute à la liste des contraintes
		return f;
	}*/
	
	
	// ********************************************************************************
	// Fonction qui recherche la meilleure équation ax+by+cz+d=0,
	// En accord avec les contraintes renseignées dans this.liste_contraintes
	optimisePlan()
	{
		// On crée la fonction globale qui somme toutes les fonctions erreurs
		// Il s'agit de faire une fonction autonome, qui embarque toutes les infos utiles à son calcul
		function erreur(_param_plan_) // _param_plan_ sera un ensemble de parametres [a,b,c,d] que l'algo va tester
		{
			var e = 0
			for(var i=0;i<this.listeContraintes.length;i++)	// Pour chaque contrainte
			{
				var contrainte = this.listeContraintes[i];
				e += contrainte.exec(_param_plan_);
			}
			return e
		}
		erreur.listeContraintes = this.liste_contraintes;
		erreur = erreur.bind(erreur)
	
		
		var resultat =  GEN_algo_genetique([1,0,0,0], [1000,1000,1000,10], erreur	,10000,100,0.1) // (nominal, IT, fecart, nb population, nb itérations, %meilleurs)


		


		this.parametres(resultat[0]);
		return resultat[0];
		
	}
	
	
	
	// *******************************************
	/* Fonction (écrase la précédente) qui fait le ménage dans les éléments THREEJS au moment de la suppression */
	supprimeElementsGeometriques()
	{
		this.groupePlan.removeFromParent();

	}
	 
}

