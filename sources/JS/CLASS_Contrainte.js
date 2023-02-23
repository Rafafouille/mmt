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
		return S
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
				S += 1000000000 //* getDistancePlanCarre(params_plan,this.nuage.getMesure(i));//Math.abs(a*P.x + b*P.y + c*P.z + d)/(Math.sqrt(a*a+b*b+c*c))
		}
		return S
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
				S += 100000000 //* getDistancePlanCarre(params_plan,this.nuage.getMesure(i));//Math.abs(a*P.x + b*P.y + c*P.z + d)/(Math.sqrt(a*a+b*b+c*c))
		}
		return S
	}	 
}

