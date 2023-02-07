class PlanRMS extends Plan
{
	/* Constructeur */
	constructor(_nuage_)
	{
		super([1,0,0,0]);
		
		this._nuage = _nuage_ ;
		
		this.updateEquation()
	}
	
	
	/* ****************************
	 MEMBRES
	 **************************** */
	 
	 _nuage = null
	 
	 
	/* ****************************
	 GETTER / SETTER
	 **************************** */
	 
	  // couleur
	 nuage(n_,redessine_=true)
	 {
	 	if (n_ != undefined)
	 	{
	 		this._nuage = n_
	 		this.updateEquation(redessine_);
	 	}
	 	return this._nuage
	 }
	 
	
	 
	/* ****************************
	 AUTRES MEMBRES
	 **************************** */
	 
	 
	 
	 	// ******************************************
		// Fonction qui donne la somme des erreurs au carré du nuage de points
		// avec le plan. Si un tableau [a,b,c,d] est passé dans _param_plan, alors
		// l'erreur est calculée avec un plan d'équation ax+by+cz+d=0
		getSommeErreursCarre()
		{
	 		return getSommeErreursCarrePlan(this, this._nuage);
		}
	
	
	
	// Fonction qui recalcule l'équation du plan à partir de son nuage de points
	updateEquation(redessine_=true)
	{
		//Bricolage : on créer une fontion, un peu comme un objet, avec la référence vers le nuage de point en membre
		function erreur(_param_plan_) // _param_plan_ sera un ensemble de parametres [a,b,c,d] que l'algo va tester
		{
			return this.objetPlan.getSommeErreursCarre(_param_plan_)
		}
		erreur.objetPlan = this; // On sauve la référence vers le nuage de point
		// Vue que erreur n'est pas un objet, mais une fonction, il ne connait pas "this"
		erreur = erreur.bind(erreur) // Pour que "this" devienne la fonction elle meme (un pb de contexte...)
		
		var resultat =  GEN_algo_genetique([1,0,0,0], [1000,1000,1000,1000], erreur	,10000,100,0.1) // (nominal, IT, fecart, nb population, nb itérations, %meilleurs)
		//new Plan("plan",resultat[0]);
		return resultat[0];
	}
	 
	
	
	
	 
}

