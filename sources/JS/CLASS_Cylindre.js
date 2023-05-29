class Cylindre extends Item
{
	/* Constructeur */
	// Param = [xp, yp, zp, vx, vy, vz, r]
	constructor(nom_,param_=[0, 0, 0, 0, 0, 1, 0.1])
	{
		var _couleur_ = "#00FF00";
		
		super(nom_,_couleur_,"cylindre");

		this._couleur = _couleur_ ;
		
		// Normalisation de l'axe
		var normeAxe = Math.sqrt(param_[3]*param_[3]+param_[4]*param_[4]+param_[5]*param_[5])
		param_[3] /= normeAxe;
		param_[4] /= normeAxe;
		param_[5] /= normeAxe;
		this._parametres = param_;
		
		// Centre du cylindre (projeté sur l'axe, si le point n'y est pas)
		//this._centre = this.getProjectionSurAxe(new THREE.Vector3(0, 0, 0)) // centre arbitraire
		this._longueur = 1;	// Longueur de cylindre à afficher
		this.updateBase();
		
		// Ajout du nuage de point(graphique) sous forme de groupe sur la scene
		this.GROUPE = new THREE.Group();
		ENVIRONNEMENT.add(this.GROUPE);
		
		this.redessine()
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
	 
	 _couleur = "";
	 GROUPE = null;
	 _parametres = null;	// [a,b,c,d] dans l'équation ax+by+cz+d=0

	 _base = null; // Base attachée au plan [xP,yP,n] ou n est la normale

	 _longueur = 1; // Longueur visible du cylindre (centrée sur le centre)
	 _longueurAxe = 3; // Longueur de l'axe
	 _nbFaces = 50 ;
	 CYLINDRE = null;	//Objet graphique
	 AXE = null		// Objet graphique
	 
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
	
	// longueur de l'axe
	longueurAxe(l_,redessine=true)
	{
	 	if (l_ != undefined)
	 	{
	 		this._longueurAxe = l_;
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return this._longueurAxe
	}
	 
	 
	 // Renvoie les parametres [a,b,c,d] du plan
	 parametres(p_,redessine=true)
	 {
		 if (p_ != undefined)
		 {
		 	this._parametres = p_
		 	this.normalizevDirecteur();
		 	this.updateBase();
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
	 			var V = _x_.clone().normalize();
	 			this._parametres[3] = V.x;
	 			this._parametres[4] = V.y;
	 			this._parametres[5] = V.z;
	 		}
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return new THREE.Vector3(this._parametres[3],this._parametres[4],this._parametres[5]).normalize();
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
	
	// Fonction qui met les paramètres assciées au vecteur directeur, tel que ca fasse un vecteur normé
	normalizevDirecteur()
	{
	 	var norme = Math.sqrt(this._parametres[3]*this._parametres[3]+this._parametres[4]*this._parametres[4]+this._parametres[5]*this._parametres[5]);
	 	this._parametres[3] /= norme;
	 	this._parametres[4] /= norme;
	 	this._parametres[5] /= norme;
	
	}
	
	
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	
	 /** Renvoie le contenu HTML (en dessous du titre) pour le menu */
	menuItemHTML()
	{
		return ``;
	}
	
	
	/** Renvoie le contenu HTML (en dessous du titre) pour les donnees (coordonnées points) */
	donneesItemHTML()
	{
		var retour = `
			<div style="text-align:left;">
			<strong>Centre :</strong> ( `+String(this.centre().x)+` ; `+String(-this.centre().z)+` ; `+String(this.centre().y)+` )
			<br/>
			<strong>Vec. Directeur :</strong> ( `+String(this.vDirecteur().x)+` ; `+String(-this.vDirecteur().z)+` ; `+String(this.vDirecteur().y)+` )
			<br/>
			<strong>R :</strong> `+String(this.rayon())+`
			</div>`;
		return retour;
	}
	 
	/** Renvoie le contenu HTML (en dessous du titre) pour le menu */
	/*contenuHTML()
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
	}*/
	
	 
	 
	 // Fonction qui renvoie la distance d'un point _P_ (Three.Vector3)
	 // à l'axe du cylindre
	 getRayonPoint(_P_)
	 {
		var C = this.centre()
		var vDir = this.vDirecteur().normalize() // Au cas où : on normalise
		var CP = _P_.clone().sub(C)
		// R = || vDir ^ CP ||
		return vDir.cross(CP).length()
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
		
		var l = vDir.dot(P.clone().sub(centre))
		
		 return centre.clone().add(vDir.multiplyScalar(l))
	 }
	 
	 
	 
	 
	 /* Fonction qui calcul le triplet de vecteur orthonormé, dont la 3ème est n*/
	 updateBase()
	 {
	 	var e3 = this.vDirecteur();
	 	if( ((new THREE.Vector3(1,0,0)).cross(e3)).length()    ) 	// Si (1,0,0) et ez ne sont pas colinéaire
	 		var Vint = new THREE.Vector3(1,0,0) // Vecteur intermédiaire pour l'orthonormalisation
	 	else
	 		var Vint = new THREE.Vector3(0,1,0)
	 		
	 
	 	var e1 = (Vint.sub( this.vDirecteur().multiplyScalar(this.vDirecteur().dot(Vint)) )).normalize()
	 	var e2 = e3.clone().cross(e1)
	 	
	 	
	 	this._base = {"ex":e1,"ey":e2,"ez":e3}
	 	return this._base
	 }
	 
	 
	 // Efface (le cas échéant) puis redessine le plan. Il s'agit d'un rectangle, centré sur la projection de this.centre
	 redessine()
	 {
	 
	 	// Au début, je regardai ça (obsolete) Voir : https://dustinpfister.github.io/2018/04/14/threejs-geometry/
	 	//https://threejs.org/manual/#en/custom-buffergeometry
	 	// On retire l'éventuel cylindre (et autre) qu'il y a dans le groupe
 		this.GROUPE.clear();
 		
 		
 		//Quelques constantes
 		var dtheta = 2*Math.PI/this._nbFaces;
 		var ex = this.base().ex.clone();
 		var ey = this.base().ey.clone();
 		var ez = this.base().ez.clone();
 		var R = this.rayon();
 		
 		
 		// POSITION DES SOMMETS
 		var positions = [];
 		for(var i=0;i< this._nbFaces; i++)
 		{
 			// Une des faces du cylindre :
 			// P2 --- P1
 			// |      |
 			// PC2    PC1
 			// |      |
 			// P4 --- P3
 		
 		
 			var theta = i * dtheta;
 			// Point milieu
 			var PC1 = this.centre().add((ex.clone().multiplyScalar(Math.cos(theta))).add(ey.clone().multiplyScalar(Math.sin(theta))).multiplyScalar(R))
 			var PC2 = this.centre().add((ex.clone().multiplyScalar(Math.cos(theta+dtheta))).add(ey.clone().multiplyScalar(Math.sin(theta+dtheta))).multiplyScalar(R))
 			
 			
 			// P1
 			var P1 = PC1.clone().add(ez.clone().multiplyScalar(this._longueur/2))
 			// P2
 			var P2 = PC2.clone().add(ez.clone().multiplyScalar(this._longueur/2))
 			// P3
 			var P3 = PC1.clone().sub(ez.clone().multiplyScalar(this._longueur/2))
 			// P4
 			var P4 = PC2.clone().sub(ez.clone().multiplyScalar(this._longueur/2))

 			positions.push(P1.x,P1.y,P1.z)
 			positions.push(P3.x,P3.y,P3.z)
 			positions.push(P2.x,P2.y,P2.z)
 			
 			positions.push(P3.x,P3.y,P3.z)
 			positions.push(P4.x,P4.y,P4.z)
 			positions.push(P2.x,P2.y,P2.z)
 		}
 		//console.log(positions)
 		
 		// Normales
 		var normals = [];
 		for(var i=0;i< this._nbFaces; i++)
 		{
 			var theta = i * dtheta - dtheta/2;
 			// rayons (on met un biai pour faire un dégradé
 			var R1 = (ex.clone().multiplyScalar(Math.cos(theta-dtheta/2))).add(ey.clone().multiplyScalar(Math.sin(theta-dtheta/2))).normalize()
 			var R2 = (ex.clone().multiplyScalar(Math.cos(theta+dtheta/2))).add(ey.clone().multiplyScalar(Math.sin(theta+dtheta/2))).normalize()
			//var R2 = (ex.clone().multiplyScalar(Math.cos(theta-dtheta/2))).add(ey.clone().multiplyScalar(Math.sin(theta-dtheta/2))).normalize()
			
 			normals.push(R1.x,R1.y,R1.z) // P1
 			normals.push(R1.x,R1.y,R1.z) // P3
 			normals.push(R2.x,R2.y,R2.z) // P2
 			
 			normals.push(R1.x,R1.y,R1.z) // P3
 			normals.push(R2.x,R2.y,R2.z) // P4
 			normals.push(R2.x,R2.y,R2.z) // P2
 		}
 		//console.log(normals)
 		
 		// UV
 		var uvs = []
 		for(var i=0;i< this._nbFaces; i++)
 		{
 			uvs.push(0,0)
 			uvs.push(0,1)
 			uvs.push(1,0)
 			
 			uvs.push(0,1)
 			uvs.push(1,1)
 			uvs.push(1,0)
 		}
 		//console.log(uvs)
 		
 		
 		var geometry = new THREE.BufferGeometry()
 		
 		const positionNumComponents = 3;
		const normalNumComponents = 3;
		const uvNumComponents = 2;
 		geometry.setAttribute(
		      'position',
		      new THREE.BufferAttribute(new Float32Array(positions), positionNumComponents));
		geometry.setAttribute(
		      'normal',
		      new THREE.BufferAttribute(new Float32Array(normals), normalNumComponents));
		geometry.setAttribute(
		      'uv',
		      new THREE.BufferAttribute(new Float32Array(uvs), uvNumComponents));
 		
 		
		
		this.CYLINDRE = new THREE.Mesh(geometry,MATERIAU_PLAN);//new THREE.MeshNormalMaterial({side: THREE.DoubleSide}));
		this.GROUPE.add(this.CYLINDRE)
		
		
		var material_Ligne = new THREE.LineBasicMaterial({color: this.couleur()});

		var points = [];
		points.push(this.centre().add(this.vDirecteur().multiplyScalar(this.longueurAxe()/2)));
		points.push(this.centre().sub(this.vDirecteur().multiplyScalar(this.longueurAxe()/2)));
		
		var geometry_Ligne = new THREE.BufferGeometry().setFromPoints( points );

		this.AXE = new THREE.Line( geometry_Ligne, material_Ligne );
		this.GROUPE.add( this.AXE );
 	}
 		
 		
	
	
	
	
	// ******************************
	// MEMBRES relatifs à l'optimisation
	
	
	
	
	// ********************************************************************************
	// Fonction qui recherche la meilleure équation ax+by+cz+d=0,
	// En accord avec les contraintes renseignées dans this.liste_contraintes
	optimiseCylindre()
	{
		// On crée la fonction globale qui somme toutes les fonctions erreurs
		// Il s'agit de faire une fonction autonome, qui embarque toutes les infos utiles à son calcul
		function erreur(_param_cyl_) // _param_cyl_ sera un ensemble de parametres [xp, yp, zp, vx, vy, vz, r] que l'algo va tester
		{
			var e = 0
			for(var i=0; i<this.listeContraintes.length; i++)	// Pour chaque contrainte
			{
				var contrainte = this.listeContraintes[i];
				e += contrainte.exec(_param_cyl_);
			}
			return e
		}
		erreur.listeContraintes = this.liste_contraintes;
		erreur = erreur.bind(erreur)
	
		var resultat =  GEN_algo_genetique([0.5,0.,-0.2,0,0,0,0.01], [0.5,0.5,0.5,1,1,1,0.1], erreur ,10000,30,0.2) // (nominal, IT, fecart, nb population, nb itérations, %meilleurs)

		console.log(resultat)
		this.parametres(resultat[0]);
		
		console.log(this.vDirecteur());
		
		return resultat[0];
		
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
			type : "cyl",
			nom : this.nom(),
			donnees : {"xp":this._parametres[0],"yp":this._parametres[1],"zp":this._parametres[2],"vx":this._parametres[3],"vy":this._parametres[4],"vz":this._parametres[5],"r":this._parametres[6]}
		};
		
		return tab
	}
	 
}

