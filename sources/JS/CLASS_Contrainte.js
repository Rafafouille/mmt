class ContrainteRMSPlan
{
	/* Constructeur */
	constructor(_nuage_)
	{
		this.nuage = _nuage_;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
			
	nuage = null;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	/** Calcule la somme des erreurs au carré */
	exec(params_plan)
	{
		var S=0;
		for(var i=0;i<this.nuage.nbMesures();i++)//Pour chaque noeud du nuage
		{
			S+= getDistancePlanCarre(params_plan,this.nuage.getMesure(i))	// On calcule la distance entre le point i et le plan
		}
		return S/this.nuage.nbMesures(); // On normalise
	}	 
}



/** Les points doivent être du coté dit "positif" du plan, c'est à dire du coté opposé de l'origine (0,0,0)*/
class ContraintePlanExterieurPositif
{
	/* Constructeur */
	constructor(_nuage_)
	{
		this.nuage = _nuage_;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
			
	nuage = null;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	/** Calcule la somme des erreurs au carré */
	exec(params_plan)
	{
		var a = params_plan[0];
		var b = params_plan[1];
		var c = params_plan[2];
		var d = params_plan[3];
		
		//Point de référence (origine)
		var O = new THREE.Vector3(0,0,0)
		
		// Cas particuliers de l'origine (si le plan passe par l'origine)
		if(d == 0)
		{
			if(a!=0)
				O = new THREE.Vector3(1,0,0)
			else if(b!=0)
				O = new THREE.Vector3(0,1,0)
			else
				O = new THREE.Vector3(0,0,1)
		}
		
		
		var S=0;
		for(var i=0; i<this.nuage.nbMesures(); i++)//Pour chaque noeud du nuage
		{
			var P = this.nuage.getMesure(i);
			
			// coté positif ? ou négatif ?
			if ((a*O.x + b*O.y + c*O.z + d) * (a*P.x + b*P.y + c*P.z + d) > 0) // Si on est du bon coté
				S += 1000000000 * getDistancePlanCarre(params_plan,this.nuage.getMesure(i));//Math.abs(a*P.x + b*P.y + c*P.z + d)/(Math.sqrt(a*a+b*b+c*c))
		}
		return S/this.nuage.nbMesures();	// On normalise
	}	 
}





class ContraintePlanExterieurNegatif
{
	/* Constructeur */
	constructor(_nuage_)
	{
		this.nuage = _nuage_;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
			
	nuage = null;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	/** Calcule la somme des erreurs au carré */
	exec(params_plan)
	{
		var a = params_plan[0];
		var b = params_plan[1];
		var c = params_plan[2];
		var d = params_plan[3];
		
		//Point de référence (origine)
		var O = new THREE.Vector3(0,0,0)
		
		// Cas particuliers de l'origine (si le plan passe par l'origine)
		if(d == 0)
		{
			if(a!=0)
				O = new THREE.Vector3(1,0,0)
			else if(b!=0)
				O = new THREE.Vector3(0,1,0)
			else
				O = new THREE.Vector3(0,0,1)
		}
		
		
		var S=0;
		for(var i=0; i<this.nuage.nbMesures(); i++)//Pour chaque noeud du nuage
		{
			var P = this.nuage.getMesure(i);
			
			// coté positif ? ou négatif ?
			if ((a*O.x + b*O.y + c*O.z + d) * (a*P.x + b*P.y + c*P.z + d) < 0) // Si on est du bon coté
				S += 100000000 * getDistancePlanCarre(params_plan,this.nuage.getMesure(i));//Math.abs(a*P.x + b*P.y + c*P.z + d)/(Math.sqrt(a*a+b*b+c*c))
		}
		return S/this.nuage.nbMesures();	// On normalise
	}	 
}






class ContrainteRMSCylindre
{
	/* Constructeur */
	constructor(_nuage_)
	{
		this.nuage = _nuage_;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
			
	nuage = null;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	/** Calcule la somme des erreurs au carré */
	exec(params_cylindre)
	{
		var S=0;
		for(var i=0;i<this.nuage.nbMesures();i++)//Pour chaque noeud du nuage
		{
			S+= getDistanceCylindreCarre(params_cylindre,this.nuage.getMesure(i))	// On calcule la distance entre le point i et le plan
		}
		return S/this.nuage.nbMesures(); // On normalise l'erreur
	}	 
}



class ContrainteCylindreInscrit
{
	/* Constructeur */
	constructor(_nuage_)
	{
		this.nuage = _nuage_;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
			
	nuage = null;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	/** Calcule la somme des erreurs au carré */
	exec(params_cylindre)
	{
		var S=0;
		for(var i=0;i<this.nuage.nbMesures();i++)//Pour chaque noeud du nuage
		{
			var CP = this.nuage.getMesure(i).clone().sub(new THREE.Vector3(params_cylindre[0],params_cylindre[1],params_cylindre[2]))
			var vDir = (new THREE.Vector3(params_cylindre[3],params_cylindre[4],params_cylindre[5])).normalize();
			if(vDir.cross(CP).length()<params_cylindre[6])
				S+= 100000000*getDistanceCylindreCarre(params_cylindre,this.nuage.getMesure(i))	// On calcule la distance entre le point i et le plan
		}
		return S/this.nuage.nbMesures();	// On normalise
	}	 
}







class ContrainteCylindreCirconscrit
{
	/* Constructeur */
	constructor(_nuage_)
	{
		this.nuage = _nuage_;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
			
	nuage = null;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	/** Calcule la somme des erreurs au carré */
	exec(params_cylindre)
	{
		var S=0;
		for(var i=0;i<this.nuage.nbMesures();i++)//Pour chaque noeud du nuage
		{
			var CP = this.nuage.getMesure(i).clone().sub(new THREE.Vector3(params_cylindre[0],params_cylindre[1],params_cylindre[2]))
			var vDir = (new THREE.Vector3(params_cylindre[3],params_cylindre[4],params_cylindre[5])).normalize();
			if(vDir.cross(CP).length()>params_cylindre[6])
				S+= 100000000*getDistanceCylindreCarre(params_cylindre,this.nuage.getMesure(i))	// On calcule la distance entre le point i et le plan
		}
		return S/this.nuage.nbMesures();	// On normalise
	}	 
}






class ContrainteRMSDroite
{
	/* Constructeur */
	constructor(_nuage_)
	{
		this.nuage = _nuage_;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
			
	nuage = null;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	/** Calcule la somme des erreurs au carré */
	exec(params_droite)
	{
		var S=0;
		for(var i=0;i<this.nuage.nbMesures();i++)//Pour chaque noeud du nuage
		{
			S+= getDistanceDroiteCarre(params_droite,this.nuage.getMesure(i))	// On calcule la distance entre le point i et le plan
		}
		return S/this.nuage.nbMesures() ; // On normalise l'erreur
	}	 
}






class ContraintePlanParallelisme
{
	/* Constructeur */
	constructor(_plan_)
	{
		this.plan = _plan_;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
			
	plan = null;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	/** Calcule la somme des erreurs au carré */
	exec(params_plan)
	{
		var n1 = this.plan.normale() ; // normale de ref, Unitaire
		var n2 = new THREE.Vector3(params_plan[0], params_plan[1], params_plan[2]);
		n2.normalize();
		
		if(n1.dot(n2)==0) // S'ils sont orthogonaux (sinon, le calcul qui suit va rendre l'infini)
			return 100000000000000
		
		
		var S = Math.pow(  Math.tan((n1.cross(n2)).length() * Math.PI*0.5 )   ,2);
		
		return S*100;
	}	 
}






class ContraintePlanPerpendicularite
{
	/* Constructeur */
	constructor(_plan_)
	{
		this.plan = _plan_;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
			
	plan = null;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	/** Calcule la somme des erreurs au carré */
	exec(params_plan)
	{
		var n1 = this.plan.normale() ; // normale de ref, Unitaire
		var n2 = new THREE.Vector3(params_plan[0], params_plan[1], params_plan[2]);
		n2.normalize();
		
		if(Math.abs(n1.dot(n2))==1) // S'ils sont orthogonaux (sinon, le calcul qui suit va rendre l'infini)
			return 100000000000000
		
		
		var S = Math.pow(  Math.tan(Math.abs(n1.dot(n2)) * Math.PI*0.5 )   ,2);
		
		return S*100;
	}	 
}






class ContrainteRMSCercle
{
	/* Constructeur */
	constructor(_nuage_)
	{
		this.nuage = _nuage_;
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
			
	nuage = null;
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	/** Calcule la somme des erreurs au carré */
	exec(params_cercle)
	{
		var S=0;
		for(var i=0;i<this.nuage.nbMesures();i++)//Pour chaque noeud du nuage
		{
			S+= getDistanceCercleCarre(params_cercle,this.nuage.getMesure(i))	// On calcule la distance entre le point i et le plan
		}
		return S/this.nuage.nbMesures(); // On normalise
	}	 
}

