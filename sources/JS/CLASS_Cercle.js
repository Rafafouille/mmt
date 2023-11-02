class Cercle extends Item
{
	/* Constructeur */
	// Param = [xp, yp, zp, vx, vy, vz, r]
	constructor(nom_,param_=[0, 0, 0, 0, 0, 1, 0.1])
	{
		var _couleur_ = "#00FF00";
		
		super(nom_,_couleur_,"cercle");

		this._couleur = _couleur_ ;
		
		// Normalisation de l'axe
		var normeAxe = Math.sqrt(param_[3]*param_[3]+param_[4]*param_[4]+param_[5]*param_[5])
		param_[3] /= normeAxe;
		param_[4] /= normeAxe;
		param_[5] /= normeAxe;
		this._parametres = param_;
		
		// Centre du cercle (projeté sur l'axe normal, si le point n'y est pas)
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
	 _parametres = null;
	 _icone = "./sources/images/bouton_cercle.svg";

	 _base = null; // Base attachée au plan [xP,yP,n] ou n est la normale

	 _nbEdges = 200 ;
	 CERCLE = null;	//Objet graphique
	 AXE = null		// Objet graphique
	 
	 liste_contraintes = [];  // Liste des fonctions qui permettent de calculer les "erreurs" à optimiser
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	  // couleur
	 couleur(c_,redessine=true)
	 {
	 	if (c_ != undefined)
	 	{
	 		this._couleur = c_
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return this._couleur
	 }

	 // Renvoie les parametres [xc,yc,zc,vc,vy,vz,r] 
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
	 // Si _proj_=true, Si ce point n'est pas sur l'axe, c'est son projeté qui sera le centre
	 // Si x = undefined : getter
	 // Si x = THREE.vector3() : setter
	 // Si x, y z dont des flottant : setter
	 centre(_x_,_y_,_z_,_proj_=false,redessine=true)
	 {
	 	if(_x_ != undefined)
	 	{
	 		if(typeof(_x_)=="number" && typeof(_y_)=="number" && typeof(_z_)=="number")
	 		{
	 			if(_proj_)
		 			var c = this.getProjectionSurAxe(new THREE.Vector3(_x_,_y_,_z_));
		 		else
		 			var c = new THREE.Vector3(_x_,_y_,_z_);
	 			this._parametres[0] = c.x;
	 			this._parametres[1] = c.y;
	 			this._parametres[2] = c.z;
	 			
	 		}
	 		else if(_x_.constructor.name=="Vector3")
	 		{
	 			if(_proj_)
	 				var c = this.getProjectionSurAxe(_x_);
	 			else
	 				var c = _x_;
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
	 		if(r_<0)
	 			r_=0;
	 		this._parametres[6] = r_;
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return this._parametres[6]
	}
	 
	 // Diamètre du cylindre
	 // Si r_ = undefined : getter sinon, setter (flottant)
	 diametre(d_,redessine=true)
	{
	 	if (d_ != undefined)
	 	{
	 		return this.rayon(d_/2)*2
	 	}
	 	return this.rayon()*2
	}
	
	// Fonction qui met les paramètres assciées au vecteur directeur, tel que ca fasse un vecteur normé
	normalizevDirecteur()
	{
	 	var norme = Math.sqrt(this._parametres[3]*this._parametres[3]+this._parametres[4]*this._parametres[4]+this._parametres[5]*this._parametres[5]);
	 	this._parametres[3] /= norme;
	 	this._parametres[4] /= norme;
	 	this._parametres[5] /= norme;
	}
	 
	 // Nombre de segments qui trace le cercle
	 // Si n_ = undefined : getter sinon, setter (flottant)
	 nbEdges(n_,redessine=true)
	{
	 	if (n_ != undefined)
	 	{
	 		this._nbEdges = n_;
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return this._nbEdge;
	}
	
	
	
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	
	 /** Renvoie le contenu HTML (en dessous du titre) pour le menu */
	menuItemHTML()
	{
		return `
				<div class="bouton_item bouton_calculette" title="Mesures sur le cercle" onclick="ouvreBoiteMesureCercle(`+String(this.id())+`)"></div>`;
	}
	
	
	/** Renvoie le contenu HTML (en dessous du titre) pour les donnees (coordonnées points) */
	donneesItemHTML()
	{
		var retour = `
			<div style="text-align:left;">
			<strong>Centre :</strong> ( `+String(this.centre().x)+` ; `+String(-this.centre().z)+` ; `+String(this.centre().y)+` )
			<br/>
			<strong>Vec. normal :</strong> ( `+String(this.vDirecteur().x)+` ; `+String(-this.vDirecteur().z)+` ; `+String(this.vDirecteur().y)+` )
			<br/>
			<strong>R :</strong> `+String(this.rayon())+`
			</div>`;
		return retour;
	}
	
	 
	 
	 // Fonction qui renvoie la distance d'un point _P_ (Three.Vector3)
	 // à l'axe normal du cercle
	 getRayonPoint(_P_)
	 {
		var C = this.centre()
		var vDir = this.vDirecteur().normalize() // Au cas où : on normalise
		var CP = _P_.clone().sub(C)
		// R = || vDir ^ CP ||
		return vDir.cross(CP).length()
	 }
	 
	 
	 // Fonction qui renvoie la distance au carré d'un point _P_ (Three.Vector3)
	 // au cercle
	 getDistancePointCarre(_P_)
	 {
	 	var r = this.getRayonPoint(_P_);
	 	var dr = Math.abs(this.rayon()-r);
	 	var dz = _P_.clone().sub(this.centre()).dot(this.vDirecteur().normalize())
		return dr*dr+dz*dz
	 }
	 
	 
	 // Fonction qui renvoie la distance d'un point _P_ (Three.Vector3)
	 // au cercle
	 getDistancePoint(_P_)
	 {
		return Math.sqrt(this.getDistancePointCarre(_P_))
	 }
	 
	 
	 
	 
	 // Renvoie la projection (THREE.Vector3) d'un point _P_ (idem)
	 // sur le l'axe normal au cercle
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
 		var dtheta = 2*Math.PI/this._nbEdges;
 		var ex = this.base().ex.clone();
 		var ey = this.base().ey.clone();
 		var ez = this.base().ez.clone();
 		var R = this.rayon();


 		// LE CERCLE ========================
 		// POSITION DES SOMMETS
 		var positions = [];
		var points = [];
 		for(var i=0;i<= this._nbEdges; i++)
 		{
 			var theta = i * dtheta;
			points.push(  this.centre().add(  ex.clone().multiplyScalar(R*Math.cos(theta))  ).add(  ey.clone().multiplyScalar(R*Math.sin(theta))  )   );
 		}

		var material_Cercle = new THREE.LineBasicMaterial({
								color: this.couleur(),
								linewidth: 10
								});
 		
 		var geometry_Cercle = new THREE.BufferGeometry().setFromPoints( points );
 		this.CERCLE = new THREE.Line( geometry_Cercle, material_Cercle );
		this.GROUPE.add( this.CERCLE );
		
		
 		// LE CENTRE ========================
		var materialCentre = new THREE.MeshBasicMaterial( {color: this.couleur()} ); 
		
		var rayonTigeCroix = this.rayon()/200;
		var longueurTigeCroix = this.rayon()/8;
		
		var geometryCentreY = new THREE.CylinderGeometry( rayonTigeCroix, rayonTigeCroix, longueurTigeCroix, 4 ); 
		this.cylindreCentreY = new THREE.Mesh( geometryCentreY, materialCentre );
		
		var geometryCentreX = new THREE.CylinderGeometry( rayonTigeCroix, rayonTigeCroix, longueurTigeCroix, 4 ); 
		this.cylindreCentreX = new THREE.Mesh( geometryCentreX, materialCentre );
		this.cylindreCentreX.rotateZ(Math.PI/2)
		
		var geometryCentreZ = new THREE.CylinderGeometry( rayonTigeCroix, rayonTigeCroix, longueurTigeCroix, 4 ); 
		this.cylindreCentreZ = new THREE.Mesh( geometryCentreZ, materialCentre );
		this.cylindreCentreZ.rotateX(Math.PI/2)
		
		this.cylindreCentreX.position.set(this.centre().x, this.centre().y, this.centre().z)
		this.cylindreCentreY.position.set(this.centre().x, this.centre().y, this.centre().z)
		this.cylindreCentreZ.position.set(this.centre().x, this.centre().y, this.centre().z)
		
		this.GROUPE.add( this.cylindreCentreX );
		this.GROUPE.add( this.cylindreCentreY );
		this.GROUPE.add( this.cylindreCentreZ );
		
		
 	}
 		
 		
	
	
	
	
	// ******************************
	// MEMBRES relatifs à l'optimisation
	
	
	
	
	// ********************************************************************************
	// Fonction qui recherche les meilleurs parametres de cercle
	// En accord avec les contraintes renseignées dans this.liste_contraintes
	optimiseCercle()
	{
		// On crée la fonction globale qui somme toutes les fonctions erreurs
		// Il s'agit de faire une fonction autonome, qui embarque toutes les infos utiles à son calcul
		function erreur(_param_cercle_) // _param_cyl_ sera un ensemble de parametres [xp, yp, zp, vx, vy, vz, r] que l'algo va tester
		{
			var e = 0
			for(var i=0; i<this.listeContraintes.length; i++)	// Pour chaque contrainte
			{
				var contrainte = this.listeContraintes[i];
				e += contrainte.exec(_param_cercle_);
			}
			return e
		}
		erreur.listeContraintes = this.liste_contraintes;
		erreur = erreur.bind(erreur)
	
		var resultat =  GEN_algo_genetique([0.5,0.2,-0.2,0,0,0,0.01], [0.5,0.5,0.5,1,1,1,0.1], erreur ,10000,30,0.2) // (nominal, IT, fecart, nb population, nb itérations, %meilleurs)

		console.log(resultat)
		this.parametres(resultat[0]);
		
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
			type : "cercle",
			nom : this.nom(),
			donnees : {"xp":this._parametres[0],"yp":this._parametres[1],"zp":this._parametres[2],"vx":this._parametres[3],"vy":this._parametres[4],"vz":this._parametres[5],"r":this._parametres[6]}
		};
		
		return tab
	}
	 
}

