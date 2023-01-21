
/** *******************************************************Fonction qui cherche les composantes de V (liste de paramètres)
    pour minimiser f(V).
    * Vnominal = vecteur nominal (point de départ) = array.
    * VIT = liste d'intervalles de tolérance dans lequel chercher = array.
    * nGens = taille de la population (ex : 100 ou 1000)
    * nGenerations est le nombre de générations (boucles).
    * ratioSurvivants = part de la population de la sélection naturelle (ex : 0.1 pour 10%)
    Renvoi le vecteur qui donne le min de f, et la valeur de f"""
*/
function GEN_algo_genetique(Vnominal, VIT, f, nGens, nGenerations, ratioSurvivants)
{
    var population = GEN_nouvellePopulationAleatoire(nGens, Vnominal, VIT) ;
    //console.log("=============================== DEBUT");
    //console.log("Population initiale :")
    //console.log(population);
    for(var i=0; i<nGenerations;i++)//#A chaque génération...
    {
        var evaluations = GEN_getEvaluations(population,f)  //On évalue chaque vecteur d'une population
        //console.log("evaluations")
        //console.log(evaluations)
        var champion = GEN_getPositionChampion(evaluations)
        
        
        if(i%10 == 0)
            console.log("GÉNERATION : "+String(i+1)+"/ "+String(nGenerations)+"  (err = "+String(f(population[champion]))+")")
        
        if(i==nGenerations-1)
        {
            break //Pas la peine de refaire une population à la fin
        }
        var elus = GEN_killPopulation(population, evaluations, ratioSurvivants);	// Supprime les solutions les plus éloignées
        //console.log("elus")
        //console.log(elus)
        population = GEN_renouvellePopulation(elus, population.length-elus.length,Vnominal,VIT)	//Supprime les 
        //console.log("nouvelle population")
        //console.log(population)
    }
    return [population[champion], evaluations[champion]]
}
    
    

/** *******************************************************
	Créer une collection de n vecteur de paramètres V, autour de Vnominal,
	avec un intervalle de tolérance VIT
*/
function GEN_nouvellePopulationAleatoire(n,Vnominal,VIT)
{
    var population=[]
    for(var i=0; i<n; i++)
        population.push(GEN_nouveauVecteur_aleatoire(Vnominal,VIT))
    return population
}

/** **********************************************************
    Crée un nouveau vecteur dont les composantes sont prises autour de Vnominal,
    avec un IT dans VIT
*/
function GEN_nouveauVecteur_aleatoire(Vnominal,VIT)
{
    var vecteur = []
    for(k=0; k<Vnominal.length; k++) // On construit le vecteur aleatoire
            vecteur.push(Vnominal[k]+(Math.random()-0.5)*VIT[k])
    return vecteur
}


/** **********************************************************
    Fonction qui évalue chaque vecteur de la population avec la fonction f (censée être minimum)
    Renvoie une liste d'évaluation
*/
function GEN_getEvaluations(population,f)
{
	var evaluations=[]
	for(var i=0; i<population.length;i++)
	{
		var vecteur = population[i];
		evaluations.push(f(vecteur))
	}
	return evaluations
}
 

/** **********************************************************
    Fonction qui sélectionne LE meilleur candidat (qui a la plus PETITE valeur), à partir de la liste des évaluations
*/
function GEN_getPositionChampion(evaluations)
{
    var champion=0
    var evalChampion=evaluations[0]
    for(var i=1; i<evaluations.length; i++)
    {
        if(evalChampion>evaluations[i])
        {
            champion=i
            evalChampion=evaluations[i]
        }
    }
    return champion
}



/** **********************************************************
Fonction qui tri une part (pourcentage) de la population qui a la meilleur note et qui se débarrasse des autres
*/
function GEN_killPopulation(popu,evaluations,pourcentage)
{
	var population = [].concat(popu) // Copie
	var nbPopulationEntiere = population.length
	elus = [] //Liste des solutions qui ont la meilleure note
	while(elus.length<nbPopulationEntiere*pourcentage)
	{
		var elu = GEN_getPositionChampion(evaluations)
		elus.push(population[elu])
		population.splice(elu,1)	//Supprime l'élu
		evaluations.splice(elu,1)
	}
	return elus
}



/** **********************************************************
    Fonction qui recree n vecteurs. Le programme accouple les vecteurs 2 à 2 au hasard
*/
function GEN_renouvellePopulation(parents,n,Vnominal,VIT)
{
	var enfants=[]
	for(i=0; i<n; i++)
    	{
		var i1 = Math.floor( Math.random()*parents.length );  //Parent 1
		var i2 = Math.floor( Math.random()*parents.length );  //Parent 2
		enfants.push(GEN_accouplement(parents[i1],parents[i2],Vnominal,VIT))
	}
    return parents.concat(enfants)
}

/** **********************************************************
    Fonction qui crée un vecteur enfant en prenant aléatoirement les valeurs entre v1 et v2
*/
function GEN_accouplement(v1,v2,Vnominal,VIT)
{
	if(Math.random()<0.1) // Erreur génétique 
	{
		//console.log("Erreur génétique");
		return GEN_nouveauVecteur_aleatoire(Vnominal,VIT)
	}
	var vEnfant=[]
	for (var i=0; i<v1.length; i++) // Pour chaque composante
	{
		var ppp=Math.random(); //#On choisi la part du pere et de la mere
		vEnfant.push(v1[i]*ppp+v2[i]*(1-ppp))  // On fait la moyenne des solutions du pere et de la mere
	}
	return vEnfant
}


