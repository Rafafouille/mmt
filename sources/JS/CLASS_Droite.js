class Droite extends Item
{
	/* Constructeur */
	// Param = [xp, yp, zp, vdx, vdy, vdz]
	constructor(nom_,param_=[0, 0, 0, 1, 0, 0])
	{
		var _couleur_ = "#0000FF";
		
		super(nom_,_couleur_,"droite");

		this._couleur = _couleur_ ;
		
		// Normalisation de l'axe
		var normeVDir = Math.sqrt(param_[3]*param_[3]+param_[4]*param_[4]+param_[5]*param_[5])
		param_[3] /= normeVDir;
		param_[4] /= normeVDir;
		param_[5] /= normeVDir;
		this._parametres = param_;
		
		
		this._longueur = 2;	// Longueur de la droite à afficher
		this._epaisseur = 3;	// Epaisseur du trait
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
	 _epaisseur = 10;
	 GROUPE = null;
	 _parametres = null;	// [a,b,c,d] dans l'équation ax+by+cz+d=0

	 _base = null; // Base attachée au plan [xP,yP,n] ou n est la normale

	 _longueur = 0.5; // Longueur visible du cylindre (centrée sur le centre)

	 DROITE = null;	//Objet graphique
	 
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
	 
	
	// longueur
	epaisseur(e_,redessine=true)
	{
	 	if (e_ != undefined)
	 	{
	 		this._epaisseur = e_;
	 		if(redessine)
	 			this.redessine()
	 	}
	 	return this._epaisseur
	}
	
	
	 
	 // Renvoie les parametres [xc,yc,zc,vdx,vdy,vdz] du plan
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
	 
	 // Point qui sera le centre de la droite visible
	 // Si _proj_=true, Si ce point n'est pas sur l'axe, c'est son projeté qui sera le centre
	 // Si x = undefined : getter
	 // Si x = THREE.vector3() : setter
	 // Si x, y z dont des flottant : setter
	 centre(_x_,_y_,_z_,_proj_=true,redessine=true)
	 {
	 	if(_x_ != undefined)
	 	{
	 		if(typeof(_x_)=="number" && typeof(_y_)=="number" && typeof(_z_)=="number")
	 		{
	 			if(_proj_)
		 			var c = this.getProjectionSurDroite(new THREE.Vector3(_x_,_y_,_z_));
		 		else
		 			var c = new THREE.Vector3(_x_,_y_,_z_);
	 			this._parametres[0] = c.x;
	 			this._parametres[1] = c.y;
	 			this._parametres[2] = c.z;
	 			
	 		}
	 		else if(_x_.constructor.name=="Vector3")
	 		{
	 			if(_proj_)
	 				var c = this.getProjectionSurDroite(_x_);
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
	 			var normee = Math.sqrt(_x_*_x_+_y_*_y_+_z_*_z_)
	 			_xx_ = _x_/normee
	 			_yy_ = _y_/normee
	 			_zz_ = _z_/normee
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
		return `
				<div class="bouton_item bouton_calculette" title="Mesures sur la droite" onclick="ouvreBoiteMesureDroite(`+String(this.id())+`)"></div>`;
	}
	
	
	/** Renvoie le contenu HTML (en dessous du titre) pour les donnees (coordonnées points) */
	donneesItemHTML()
	{
		var retour = `
			<div style="text-align:left;">
			<strong>Centre :</strong> ( `+String(this.centre().x)+` ; `+String(-this.centre().z)+` ; `+String(this.centre().y)+` )
			<br/>
			<strong>Vec. Directeur :</strong> ( `+String(this.vDirecteur().x)+` ; `+String(-this.vDirecteur().z)+` ; `+String(this.vDirecteur().y)+` )
			</div>`;
		return retour;
	}
	
	 
	 
	 // Fonction qui renvoie la distance d'un point _P_ (Three.Vector3)
	 // à la droite
	 getRayonPoint(_P_)
	 {
		var C = this.centre()
		var vDir = this.vDirecteur().normalize() // Au cas où : on normalise
		var CP = _P_.clone().sub(C)
		// R = || vDir ^ CP ||
		return vDir.cross(CP).length()
	 }
	 
	 
	 
	 
	 
	 
	 // Renvoie la projection (THREE.Vector3) d'un point _P_ (idem)
	 // sur la droite
	 getProjectionSurDroite(_P_)
	 {
		var centre = this.centre()
		var vDir = this.vDirecteur().normalize() // Au cas où : on normalise
		
		var l = vDir.dot(_P_.clone().sub(centre))
		
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
 		
 		
		
		var material_Ligne = new THREE.LineBasicMaterial({
								color: this.couleur(),
								linewidth: 10
								});

		var points = [];
		points.push(this.centre().add(this.vDirecteur().multiplyScalar(this.longueur()/2)));
		points.push(this.centre().sub(this.vDirecteur().multiplyScalar(this.longueur()/2)));
		
		var geometry_Ligne = new THREE.BufferGeometry().setFromPoints( points );

		this.AXE = new THREE.Line( geometry_Ligne, material_Ligne );
		this.GROUPE.add( this.AXE );
 	}
 		
 		
	
	
	
	
	// ******************************
	// MEMBRES relatifs à l'optimisation
	
	
	
	
	// ********************************************************************************
	// Fonction qui recherche les meilleurs paramètres de droite
	// En accord avec les contraintes renseignées dans this.liste_contraintes
	optimiseDroite()
	{
		// On crée la fonction globale qui somme toutes les fonctions erreurs
		// Il s'agit de faire une fonction autonome, qui embarque toutes les infos utiles à son calcul
		function erreur(_param_droite_) // _param_cyl_ sera un ensemble de parametres [xp, yp, zp, vx, vy, vz, r] que l'algo va tester
		{
			var e = 0
			for(var i=0; i<this.listeContraintes.length; i++)	// Pour chaque contrainte
			{
				var contrainte = this.listeContraintes[i];
				e += contrainte.exec(_param_droite_);
			}
			return e
		}
		erreur.listeContraintes = this.liste_contraintes;
		erreur = erreur.bind(erreur)
	
		var resultat =  GEN_algo_genetique([0.5,0.,-0.2,0,0,0,0.01], [0.5,0.5,0.5,1,1,1,0.1], erreur ,10000,20,0.2) // (nominal, IT, fecart, nb population, nb itérations, %meilleurs)

		console.log(resultat)
		this.parametres(resultat[0]);
		
		return resultat[0];
		
	}
	
	
	// *****************************************
	/* Fonction qui cherche le meilleur centre (projeté sur l'axe) et longueur, par rapport aux nuages associés*/
	optimiseGraphismes()
	{		
		// Borne graphique de la droite
		var s_min = 0;
		var s_max = 0;
		var vDir = this.vDirecteur().normalize();
		for(var i=0; i<this.liste_contraintes.length;i++) // Pour chaque contrainte
		{
			var contrainte = this.liste_contraintes[i]
			if(typeof(contrainte.nuage) != "undefined") // Si c'est lié à un nuage de point
			{
				for(var k=0; k<contrainte.nuage.nbMesures(); k++) // Pour chaque point
				{
					var s = vDir.dot(contrainte.nuage.getMesure(k).sub(this.centre()))
					if(s<s_min)
						s_min = s;
					else if(s>s_max)
						s_max = s;
				}
			}
		}
		var L=(s_max-s_min)
		this.longueur(L,false)
		this.centre( this.centre().add(this.vDirecteur().multiplyScalar((s_max+s_min)/2)) )
		
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

