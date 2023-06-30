
// ************************************************
// CREEGEOMETRIE
// Fonction qui crée les différentes pièces à l'initialisation
// ************************************************

function creeMachine()
{
	// Chargement du BATI (materiau puis géométrie) ***************
	var materialLoader = new THREEJS.MTLLoader();
	materialLoader.load("./sources/models/BATI.mtl", function(materials)
		{
		    	materials.preload();
			var objLoader = new THREEJS.OBJLoader();
			objLoader.setMaterials(materials); // Affecte (d'avance) le matériau
			objLoader.load('./sources/models/BATI.obj', function ( object ) {
						BATI = object;
						//BATI.scale.set(0.04/3,0.04/3,0.04/3);
				 		ENVIRONNEMENT.add( object );
				 		NB_PIECES_CHARGEES += 1
					},
					function (progression){},
					function (error){console.log(error);});
		});
	
	// Chargement du AXE1 (materiau puis géométrie) ***************
	materialLoader.load("./sources/models/AXE1.mtl", function(materials)
		{
		    	materials.preload();
			var objLoader = new THREEJS.OBJLoader();
			objLoader.setMaterials(materials); // Affecte (d'avance) le matériau
			objLoader.load('./sources/models/AXE1.obj', function ( object ) {
						AXE1 = object;
						//AXE1.scale.set(0.04/3,0.04/3,0.04/3);
				 		ENVIRONNEMENT.add( object );
				 		NB_PIECES_CHARGEES += 1
					},
					function (progression){},
					function (error){console.log(error);});
		});
	
	// Chargement du AXE2 (materiau puis géométrie) ***************
	materialLoader.load("./sources/models/AXE2.mtl", function(materials)
		{
		    	materials.preload();
			var objLoader = new THREEJS.OBJLoader();
			objLoader.setMaterials(materials); // Affecte (d'avance) le matériau
			objLoader.load('./sources/models/AXE2.obj', function ( object ) {
						AXE2 = object;
						//AXE2.scale.set(0.04/3,0.04/3,0.04/3);
				 		ENVIRONNEMENT.add( object );
				 		NB_PIECES_CHARGEES += 1
					},
					function (progression){},
					function (error){console.log(error);});
		});
	
	// Chargement du AXE3 (materiau puis géométrie) ***************
	materialLoader.load("./sources/models/AXE2.mtl", function(materials)
		{
		    	materials.preload();
			var objLoader = new THREEJS.OBJLoader();
			objLoader.setMaterials(materials); // Affecte (d'avance) le matériau
			objLoader.load('./sources/models/AXE3.obj', function ( object ) {
						AXE3 = object;
						//AXE3.scale.set(0.04/3,0.04/3,0.04/3);
				 		ENVIRONNEMENT.add( object );
				 		NB_PIECES_CHARGEES += 1
				 		
				 		
						// Bille
						var geom = new THREE.DodecahedronGeometry(RAYON_PALPEUR,1);
				 		BILLE =  new THREE.Mesh( geom, materiau_rouge );
						object.add(BILLE)
						
						
						// Repere palpeur
						REPERE_PALPEUR = new THREE.Group();
						object.add(REPERE_PALPEUR);
						var material_axesX_palpeur = new THREE.LineBasicMaterial({color: 0xFF0000})
						var material_axesY_palpeur = new THREE.LineBasicMaterial({color: 0x00FF00})
						var material_axesZ_palpeur = new THREE.LineBasicMaterial({color: 0x0000FF})
						
						const geometryX = new THREE.BufferGeometry().setFromPoints( [new THREE.Vector3(-1,0,0),new THREE.Vector3(1,0,0)] );
						const geometryY = new THREE.BufferGeometry().setFromPoints( [new THREE.Vector3(0,0,-1),new THREE.Vector3(0,0,1)] );
						const geometryZ = new THREE.BufferGeometry().setFromPoints( [new THREE.Vector3(0,-1,0),new THREE.Vector3(0,1,0)] );
						
						var axeX = new THREE.Line( geometryX, material_axesX_palpeur );
						var axeY = new THREE.Line( geometryY, material_axesY_palpeur );
						var axeZ = new THREE.Line( geometryZ, material_axesZ_palpeur );
						REPERE_PALPEUR.add(axeX);
						REPERE_PALPEUR.add(axeY);
						REPERE_PALPEUR.add(axeZ);
					},
					function (progression){},
					function (error){console.log(error);});
		});
		
	
	

 

}


function creePiece_OLD_A_SUPPRIMER()
{
	
	// Chargement de la PIECE (materiau puis géométrie) ***************
	var materialLoader = new THREEJS.MTLLoader();
	materialLoader.load("./sources/models/T_Parallelisme.mtl", function(materials)
		{
		    	materials.preload();
			var objLoader = new THREEJS.OBJLoader();
			objLoader.setMaterials(materials); // Affecte (d'avance) le matériau
			objLoader.load('./sources/models/T_Parallelisme.obj', function ( object ) {
						PIECE = object;
						//On déplace la géométrie de la piece (les vertices, et pas la piece elle meme)
						var echelle = 0.1
						PIECE.children[0].geometry.scale(echelle,echelle,echelle)
						PIECE.children[0].geometry.translate(0.4,0,-0.4)
						//CONTROLS.target = PIECE.position  // Camera vise la piece
				 		ENVIRONNEMENT.add( object );
				 		NB_PIECES_CHARGEES += 1
					},
					function (progression){},
					function (error){console.log(error);});
		});
}
	
	
	
	
	// DECORS
function creeDecors()
{
	var geometry = new THREE.BoxGeometry( 3, 10, 3 );
	var material = new THREE.MeshLambertMaterial({color : 0x0000AA});//   MeshBasicMaterial( {color: 0x00ff00} );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.set(0.3,-5,-0.5);
	cube.position.sub(ENVIRONNEMENT.position) // Recentre par rapport à l'origine principale
	DECORS.add(cube);
	
	
	
	geometry = new THREE.BoxGeometry( 10, 20, 10 );
	material = new THREE.MeshLambertMaterial({color : 0xFFFFFF});//   MeshBasicMaterial( {color: 0x00ff00} );
	material.side = THREE.BackSide;
	cube = new THREE.Mesh( geometry, material );
	cube.position.sub(ENVIRONNEMENT.position) // Recentre par rapport à l'origine principale
	DECORS.add(cube);

}
	


// **********************************************
// DEPLACEPALPEUR
// Fonction qui déplace le palpeur, éventuellement bridé
// vers la position enregistrée dans POSITION_CIBLE
// ************************************************


function deplacePalpeur(bride=true)
{	
	var position = new THREE.Vector3( AXE2.position.x, AXE3.position.y, AXE1.position.z)
	var dep = POSITION_CIBLE.clone().sub(position).multiplyScalar(0.5)
	
	/*dx = dep.x*0.5
	dy = dep.y*0.5
	dz = dep.z*0.5*/
	
	var n = dep.clone().normalize() // Vecteur directeur
	var decallage_boule_palpeur = n.clone().multiplyScalar(RAYON_PALPEUR) // Rayon de la boule du palper, dans le sens de n
	
	if(dep.length() > PAS_MAX)
	{
		dep = n.clone().multiplyScalar(PAS_MAX)
	}
	
	var newPosition = position.clone().add(dep) // Point d'arriver du centre du palper
	
	
		
	collision = detectCollision(position,newPosition.clone().add(decallage_boule_palpeur)) // Détecte une collision entre le centre actuel de la sphère et le point de contact tangent de la shère après déplacement
	if(collision)
		{
		// On repositionne le palper un peu en arriere (l'équivalent d'un rayon de sphere)
		POSITION_CIBLE = collision.clone().sub(decallage_boule_palpeur); // On revient d'un rayon en arrière
		
		// Mise à jour des coordonnées (du centre de la sphere) sur l'écran
		updateAffichageCoordonnees();
		
		// Mise à jour de la position de la machine
		AXE1.position.z = POSITION_CIBLE.z

		AXE2.position.z = POSITION_CIBLE.z
		AXE2.position.x = POSITION_CIBLE.x

		AXE3.position.z = POSITION_CIBLE.z
		AXE3.position.x = POSITION_CIBLE.x
		AXE3.position.y = POSITION_CIBLE.y
		if(NUAGE_COURANT && !NUAGE_COURANT.doublonMarker(collision))
			{
			NUAGE_COURANT.ajouteMesure(collision)
			if(AUTORISE_BEEP)
				BEEP.play();
			}
		}
	else 
		{
		// Mise à jour de la position de la machine
		AXE1.position.z = newPosition.z

		AXE2.position.z = newPosition.z
		AXE2.position.x = newPosition.x

		AXE3.position.z = newPosition.z
		AXE3.position.x = newPosition.x
		AXE3.position.y = newPosition.y
		}
}




// ***********************************
// Fonction qui vérifie si tout est chargé
function checkChargement()
{
	if(NB_PIECES_CHARGEES>=5)
		CHARGEMENT_TERMINE = true;
}




// **************************************
// Fonction qui détecte une collision sur un segment P1 P2
// P1 et P2 sont les vecteurs position des extrêmités d'un segment
// Renvoie la coordonnée de la colision. null sinon
function detectCollision(P1,P2)
{
	// Code issu de https://stackoverflow.com/questions/68473147/three-js-where-does-line-intersect-mesh
	// On définit un vecteur directeur de la droite (P1P2)
	var dir = new THREE.Vector3();
	dir.subVectors( P2, P1 ).normalize();
	dir.normalize();
	// On en fait un "rayon" (une droite)
	var ray = new THREE.Ray(P1, dir);

	
	// Boucle sur les polygones...
	vertices = PIECE.children[0].geometry.getAttribute("position").array; // Tableaux des vertices
	liste_intersections = [];
	for (var i = 0; i < vertices.length; i+=9) { // Pour chaque face triangulaire (elles le sont toutes, je crois)
	    var a = new THREE.Vector3(vertices[i], vertices[i+1], vertices[i+2]);
	    var b = new THREE.Vector3(vertices[i+3], vertices[i+4], vertices[i+5]);
	    var c = new THREE.Vector3(vertices[i+6], vertices[i+7], vertices[i+8]);
	    var intersection = new THREE.Vector3();
	    // On calcule l'intersection
	    ray.intersectTriangle(a, b, c, false, intersection);
	    // Si on en a trouvé, on les liste
	    if(intersection.length())
		    liste_intersections.push(intersection)
	 }
	 
	 // Pour chaque intersection trouvée
	 for(var i = 0 ; i<liste_intersections.length ; i++)
	 {
	 	inter = liste_intersections[i];
		// Si l'intersection est entre P1 et P2 (vecteur(inter,P1) scalaire vecteur(inter,P2) négatif)
		IP1 = new THREE.Vector3().subVectors(P1,inter)
		IP2 = new THREE.Vector3().subVectors(P2,inter)
		if(IP1.dot(IP2) < 0)
		{
			// On renvoie le point de collision avec un leger retour en arriere (pour ne pas passer à travers au prochain coup)
			return inter.add(IP1.normalize().multiplyScalar(0.0001));
		}
	}
	return null;
}






// *******************************************
// Fonction qui place un marker
// OBSOLETE
/*function placeMarker(P,_couleur_=0x000000)
{
	//Marker en tant que tel
	var geom = new THREE.DodecahedronGeometry(RAYON_MARKER,1);
	var mat = new  THREE.MeshLambertMaterial({
			color: 0x0000ff,
			shading: THREE.SmoothShading
			})
	var sphere = new THREE.Mesh( geom, mat );
	sphere.position.copy(P);
	LISTE_MARKERS.push(sphere)
	MARKERS.add(sphere);
	
	// Coordonnées dans la liste
	$("#liste_mesures").append("\n"+String(Math.round(P.x*1000)/1000)+";"+String(-Math.round(P.z*1000)/1000)+";"+String(Math.round(P.y*1000)/1000))
}*/



// ****************************************
// Fonction qui renvoie true si un marker existe déjà dans les environs
function doublonMarker(pos)
{
	for(var i=0; i<LISTE_MARKERS.length;i++)
	{
		var marker=LISTE_MARKERS[i];
		if(marker.position.distanceTo(pos)<DISTANCE_MIN_MARKERS)
			return true
	}
	return false
}


// **********************************************
// Fonction qui met à jour X (utilisateur)
function updateX(X)
{
	X = Number(X)
	if(X<0)
		X=0;
	if(X>0.8)
		X=0.8;
	POSITION_CIBLE.x = X;
	$("#input_coord_X").val(X)
	$("#input_range_X").val(X)
}
function updateY(Y)
{
	Y = Number(Y)
	if(Y<0)
		Y=0;
	if(Y>0.8)
		Y=0.8;
	POSITION_CIBLE.z = -Y;
	$("#input_coord_Y").val(Y)
	$("#input_range_Y").val(Y)
}
function updateZ(Z)
{
	Z = Number(Z)
	if(Z<0)
		Z=0;
	if(Z>0.4)
		Z=0.4;
	POSITION_CIBLE.y = Z;
	$("#input_coord_Z").val(Z)
	$("#input_range_Z").val(Z)
}


// ************************************
// Fonction qui renvoie les coordonnées dans le repere utilisateur
function X()
{
	return POSITION_CIBLE.x
}
function Y()
{
	return -POSITION_CIBLE.z
}
function Z()
{
	return POSITION_CIBLE.y
}

// *************************************
// Fonction qui met à jour l'affichage des coordonnées
function updateAffichageCoordonnees()
{
	$("#input_coord_X").val(X())
	$("#input_coord_Y").val(Y())
	$("#input_coord_Z").val(Z())
}


// **************************************
// Fonction qui affiche/cache la machine
function afficheCacheMachine()
{
	BATI.visible = !BATI.visible
	AXE1.visible = BATI.visible
	AXE2.visible = BATI.visible
}




// *****************************************
// Fonction qui créer les controlleurs
function creeControllers()
{
	// Controllers
	CONTROLLER1 = RENDERER.xr.getControllerGrip(0);
	var controllerModelFactory = new THREEJS.XRControllerModelFactory();
	var model1 = controllerModelFactory.createControllerModel( CONTROLLER1 );
	CONTROLLER1.add(model1);
	SCENE.add(CONTROLLER1);
	
	
	
	CONTROLLER2 = RENDERER.xr.getControllerGrip(1);
	var model2 = controllerModelFactory.createControllerModel( CONTROLLER2 );
	CONTROLLER2.add(model2);
	SCENE.add(CONTROLLER2);
	
	
	
	// Evenements des mannettes ===
	
	
	CONTROLLER2.addEventListener('selectstart', function(){
					COORDONNEES_INIALES_MANETTE_VR = CONTROLLER2.position.clone() ;  // Position de la manette VR au début du déplacement
					COORDONNEES_PALPEUR_INITIAL_VR = POSITION_CIBLE.clone() ;
					SUIVRE_MANETTE_VR = true;
				});
	CONTROLLER2.addEventListener('selectend', function(){
					SUIVRE_MANETTE_VR = false;
				});
	
	CONTROLLER1.addEventListener('selectstart', function(){
					if(PIECE.visible && BATI.visible)
						PIECE.visible = false;
					else if(BATI.visible)
						afficheCacheMachine()
					else if(PIECE.visible)
						afficheCacheMachine()
					else
						PIECE.visible = true;
						
				});
	CONTROLLER1.addEventListener('selectend', function(){
					
				});
}
// *****************************************
// Redéfinit les paramètres de caméra quand on change la taille de la fenetre
function resizeFenetre()
{
    CAMERA.aspect = (window.innerWidth-300) / window.innerHeight;
    CAMERA.updateProjectionMatrix();
    RENDERER.setSize( window.innerWidth-300, window.innerHeight );
}



// *****************************************
// Ajoute un nouvel item, en accord avec la boite de dialogue
function ajouterItemFromDialog()
{
	// Choix du nouvel item   (type = "nuage" ou "plan", etc.)
	var type=["nuage","plan","cylindre"][$("#tab_new_item").tabs('option', 'active')];

	if(type == "nuage")
	{
		var methode = ["vierge","fusion"][$("#tab_new_item_nuage_methode").tabs('option', 'active')];
		var nom = $("#tab_new_item_nuage_nom").val();
		var couleur = $("#tab_new_item_nuage_couleur").val();
		var nuage =  ajouteNuage(nom,couleur);
		if(methode == "vierge")
		{
			
		}
		else if (methode == "fusion")
		{
			/*var nuage1 = getItemFromId(Number($("#tab_new_item_nuage_assemblage_nuage1").val())) ; 
			var nuage2 = getItemFromId(Number($("#tab_new_item_nuage_assemblage_nuage2").val())) ;*/
/*			copyMesuresFromFusion(nuage1,nuage)
			copyMesuresFromFusion(nuage2,nuage)*/
			for(var i=0; i<$("#tab_new_item_liste_assemble_nuage").children().length;i++ ) // Pour chaque nuage à copier
			{
				var htmlNuageAFusionner = $("#tab_new_item_liste_assemble_nuage").children()[i];
				var nNuage = Number($(htmlNuageAFusionner).find(".choix_assemblage_nuage_nuage select").val()); // A quel nuage doit-on s'attacher ?
				var nuageSource = getItemFromId(nNuage)
				
				var A_SUPPRIMER = $(htmlNuageAFusionner).find("input[name=suppr_source]").is(':checked') 
				var A_FUSIONNER = $(htmlNuageAFusionner).find("input[name=CdG]").is(':checked')
				
				if(A_FUSIONNER)
				{
					var CdG = nuageSource.getBarycentre()
					nuage.ajouteMesure(CdG)
				}
				else
				{
					copyMesuresFromFusion(nuageSource,nuage)
				}
				if(A_SUPPRIMER)
				{
					nuageSource.remove()
				}
			}
		}
		return nuage;
	}
	else if(type == "plan")
	{
		var methode = ["equation","contraintes"][$("#tab_new_item_plan_methode").tabs('option', 'active')];
		var nom = $("#tab_new_item_plan_nom").val();
		var couleur = $("#tab_new_item_nuage_couleur").val();
		
		var centre = new THREE.Vector3(0,0,0); // Centre du plan (qui sera un éventuel barycentre de nuage de points)
		
		if(methode == "equation")
		{
			var A = Number($("#tab_new_item_plan_A").val());
			var B = Number($("#tab_new_item_plan_B").val());
			var C = Number($("#tab_new_item_plan_C").val());
			var D = Number($("#tab_new_item_plan_D").val());
			var plan = new Plan(nom,[ A , C , -B , D ])
		}
		else if(methode == "contraintes")
		{
			var plan = new Plan(nom);
			
			var nbNuages = 0; // Nombre de points (pour le barycentre)
			
			// Ajout des contraintes
			for(var i=0; i<$("#tab_new_item_liste_contraintes_plan").children().length;i++)
			{
				htmlContrainte = $("#tab_new_item_liste_contraintes_plan").children()[i];
				typeContrainte = $(htmlContrainte).find(".type-contrainte").val();
				if(typeContrainte=="RMS")
				{
					var nNuage = Number($(htmlContrainte).find(".choix_contrainte_nuage select").val()); // A quel nuage doit-on s'attacher ?
					var nuage = getItemFromId(nNuage)	// On recupere le nuage
					centre.add(nuage.getBarycentre())
					nbNuages+=1 // Pour faire la moyenne
					var contrainte = new ContrainteRMSPlan(nuage) // On créer la contrainte
					plan.liste_contraintes.push(contrainte)
				}
				else if(typeContrainte == "exterieurPlus")
				{
					var nNuage = Number($(htmlContrainte).find(".choix_contrainte_nuage select").val()); // A quel nuage doit-on s'attacher ?
					var nuage = getItemFromId(nNuage)	// On recupere le nuage
					centre.add(nuage.getBarycentre())
					nbNuages+=1 // Pour faire la moyenne
					var contrainte = new ContraintePlanExterieurPositif(nuage) // On créer la contrainte
					plan.liste_contraintes.push(contrainte)
				}
				else if(typeContrainte == "exterieurMoins")
				{
					var nNuage = Number($(htmlContrainte).find(".choix_contrainte_nuage select").val()); // A quel nuage doit-on s'attacher ?
					var nuage = getItemFromId(nNuage)	// On recupere le nuage
					centre.add(nuage.getBarycentre())
					nbNuages+=1 // Pour faire la moyenne
					var contrainte = new ContraintePlanExterieurNegatif(nuage) // On créer la contrainte
					plan.liste_contraintes.push(contrainte)
				}
			}
			
			if(nbNuages)
				centre.divideScalar(nbNuages)
			plan.optimisePlan(); // si ce n'est pas des contraintes, il ne se passera rien
			
		}
		plan.couleur(couleur);
		plan.centre(centre);
		
		LISTE_ITEMS.push(plan);
		$("#arbre").append(plan.getHTML())
		return plan;
		
	}
	else if(type == "cylindre")
	{
		var methode = ["equation","contraintes"][$("#tab_new_item_cylindre_methode").tabs('option', 'active')];
		var nom = $("#tab_new_item_cylindre_nom").val();
		var couleur = $("#tab_new_item_cylindre_couleur").val();
		
		//var centre = new THREE.Vector3(0,0,0); // Centre du plan (qui sera un éventuel barycentre de nuage de points)
		
		
		if(methode == "equation")
		{
			var centre = {"x": Number($("#tab_new_item_cylindre_Px").val()) , "y" : Number($("#tab_new_item_cylindre_Pz").val()) , "z" : -Number($("#tab_new_item_cylindre_Py").val()) };
			var vDirecteur = {"x": Number($("#tab_new_item_cylindre_Vx").val()) , "y" : Number($("#tab_new_item_cylindre_Vz").val()) , "z" : -Number($("#tab_new_item_cylindre_Vy").val()) };
			var R = Number($("#tab_new_item_cylindre_R").val())
			
			var cylindre = new Cylindre(nom,[ centre.x , centre.y , centre.z , vDirecteur.x , vDirecteur.y , vDirecteur.z ,  R])
			
			cylindre.centre(centre);
		}
		else if(methode == "contraintes")
		{
			var cylindre = new Cylindre(nom);
			var nbNuages = 0; // Nombre de points (pour le barycentre)
			// Ajout des contraintes
			for(var i=0; i<$("#tab_new_item_liste_contraintes_cylindre").children().length;i++)
			{
				htmlContrainte = $("#tab_new_item_liste_contraintes_cylindre").children()[i];
				typeContrainte = $(htmlContrainte).find(".type-contrainte").val();
				if(typeContrainte=="RMS")
				{
					var nNuage = Number($(htmlContrainte).find(".choix_contrainte_nuage select").val()); // A quel nuage doit-on s'attacher ?
					var nuage = getItemFromId(nNuage)	// On recupere le nuage
					/*centre.add(nuage.getBarycentre())
					nbNuages+=1 // Pour faire la moyenne*/
					var contrainte = new ContrainteRMSCylindre(nuage) // On créer la contrainte
					cylindre.liste_contraintes.push(contrainte)
				}
				else if(typeContrainte == "inscrit")
				{
					var nNuage = Number($(htmlContrainte).find(".choix_contrainte_nuage select").val()); // A quel nuage doit-on s'attacher ?
					var nuage = getItemFromId(nNuage)	// On recupere le nuage
					/*centre.add(nuage.getBarycentre())
					nbNuages+=1 // Pour faire la moyenne*/
					var contrainte = new ContrainteCylindreInscrit(nuage) // On créer la contrainte
					cylindre.liste_contraintes.push(contrainte)
				}
				else if(typeContrainte == "circonscrit")
				{
					var nNuage = Number($(htmlContrainte).find(".choix_contrainte_nuage select").val()); // A quel nuage doit-on s'attacher ?
					var nuage = getItemFromId(nNuage)	// On recupere le nuage
					/*centre.add(nuage.getBarycentre())
					nbNuages+=1 // Pour faire la moyenne*/
					var contrainte = new ContrainteCylindreCirconscrit(nuage) // On créer la contrainte
					cylindre.liste_contraintes.push(contrainte)
				}
				
			}
			
			
			/*if(nbNuages)
				centre.divideScalar(nbNuages)*/
			cylindre.optimiseCylindre(); // Trouves la meilleure équationsi ce n'est pas des contraintes, il ne se passera rien
			cylindre.optimiseGraphismes(); // Trouves les meilleurs paramètres d'affichage (centre, ...)
		}
		
		
		cylindre.couleur(couleur);
		
		LISTE_ITEMS.push(cylindre);
		$("#arbre").append(cylindre.getHTML())
		return cylindre;
	}
	else
	{
		item = new Item("item", "#000000");
		// Ajout à la liste des items
		LISTE_ITEMS.push(item);
		// Ajout dans le menu "arbre"
		$("#arbre").append(item.getHTML())
	}
}


// *****************************************
// Supprime un nouveau nuage de point
function supprimeItemFromDialog()
{
	var id = Number($("#boite_delete_item").attr("data-id"))
	getItemFromId(id).remove();
}



// *****************************************
// Supprime un marker à partir de son ID threeJS
function supprimeMarker(_idThree)
{
	var marker = SCENE.getObjectById(_idThree)
	var nuage = marker.nuage;
	nuage.supprimeMesure(_idThree)
}


// *****************************************
// Ajoute un nouveau nuage de point
function ajouteNuage(_nom_="nuage", _couleur_ = LISTE_COULEURS[ NUMERO_ITEM % LISTE_COULEURS.length ])
{
	if(NUAGE_COURANT)
		NUAGE_COURANT.deselectionne()
	var nuage = new Nuage(_nom_, _couleur_);
	NUAGE_COURANT = nuage;
	LISTE_ITEMS.push(nuage);
	$("#arbre").append(nuage.getHTML())
	nuage.selectionne()
	return nuage
}

// *****************************************
// Ajoute un nouveau plan
function ajoutePlan(_nom_="plan", _param_=[0,1,0,0])
{
	var plan = new Plan(_nom_, _param_);
	LISTE_ITEMS.push(plan);
	$("#arbre").append(plan.getHTML())
	return plan
}


// ****************************************
// Fonction qui renvoie une reference vers l'item, en fonction de son numéro
function getItemFromId(id_)
{
	id_ = Number(id_)
	for(i=0;i<LISTE_ITEMS.length;i++)
	{
		if(LISTE_ITEMS[i].id()==id_)
			return LISTE_ITEMS[i]
	}
	return null;
}

// ******************************************
// Fonction ouvre le contenu d'un item n°i dans l'abre,
// et sélectionne le nuage de point dans NUAGE_COURANT le cas échéant
function ouvreFermeItem(id_)
{
	// On ouvre dans l'arbre
	$("#item-"+String(id_)+" .contenu-item").slideToggle('fast');
	
	selectionneItem(id_);
		
}


// ***********************************************
// Fonction qui sélectionne un item (nuage de point, par exemple)
function selectionneItem(id_)
{
	if(NUAGE_COURANT)
		NUAGE_COURANT.deselectionne()
	
	NUAGE_COURANT = null; // Reset
	
	var item = getItemFromId(id_);
	if(item.type()=="nuage")
		{
			NUAGE_COURANT = item;
			item.selectionne();
		}
}



// ********************************************************
// Fonction qui met à jour la fenetre d'ajout d'item
function update_boite_new_item()
{
	var type = $("#new_item_liste").val();
	
	$("#boite_new_plan_RMS").hide()
	if(type=="plan_RMS")
	{
		$("#new_plan_RMS_nuage").empty()
		for(var i=0; i<LISTE_ITEMS.length;i++)
		{
			var item = LISTE_ITEMS[i];
			if(item.type()=="nuage" && item.nbMesures()>=3)
			{
//				Il faudrait vérifier que les 3 points ne sont pas alignés...
				$("#new_plan_RMS_nuage").append("<option value=\""+String(item.id())+"\">"+item.nom()+"</option>")
			}
		}
		$("#boite_new_plan_RMS").show();

	}
}





// ********************************************************
// Fonction qui calcule la distance au carré entre un plan d'équation ax+by+cz+d=0
// à un point P
// _param_plan_ = [a,b,c,d]
// _P_ = THREE.Vector3
function getDistancePlanCarre(_param_plan_,_P_)
{
	 			
	var a=_param_plan_[0]
	var b=_param_plan_[1]
	var c=_param_plan_[2]
	var d=_param_plan_[3]
	
	//https://www.cuemath.com/geometry/distance-between-point-and-plane/
	return Math.pow(a*_P_.x+b*_P_.y+c*_P_.z+d,2)/(a*a+b*b+c*c)
}

// ********************************************************
// Fonction qui calcule la distance au carré entre un cylindre de composante [Px, Py, Pz, Vx, Vy, Vz, R]
// à un point P
// _P_ = THREE.Vector3
function getDistanceCylindreCarre(_param_cylindre_,_P_)
{
	 			
	var C = new THREE.Vector3(_param_cylindre_[0], _param_cylindre_[1],_param_cylindre_[2]);
	var vDir = new THREE.Vector3(_param_cylindre_[3], _param_cylindre_[4],_param_cylindre_[5]).normalize();
	var R = _param_cylindre_[6];
	
	var CP = _P_.clone().sub(C)
	// R = || vDir ^ CP ||
	return Math.pow(vDir.cross(CP).length()-R , 2)
}


// *****************************************
// Ouvre boitre "ajouter item"
function ouvreBoiteAjouterItem()
{
	$("#tab_new_item_nuage_nom").val("Nuage "+String(NUMERO_ITEM+1))
	$("#tab_new_item_nuage_couleur").val(LISTE_COULEURS[ NUMERO_ITEM % LISTE_COULEURS.length ])
/*	$("#tab_new_item_nuage_assemblage_nuage1").empty();
	$("#tab_new_item_nuage_assemblage_nuage1").html(getHTMLNuagesInSelect());
	$("#tab_new_item_nuage_assemblage_nuage2").empty();
	$("#tab_new_item_nuage_assemblage_nuage2").html(getHTMLNuagesInSelect());
	$("#tab_new_item_nuage_assemblage_nuage2 option:nth-child(2)").prop('selected', true);*/
	$("#tab_new_item_liste_assemble_nuage").empty();
	
	$("#tab_new_item_plan_nom").val("Plan "+String(NUMERO_ITEM+1))
	$('#boite_new_item').dialog('open')
	$("#tab_new_item_liste_contraintes_plan").empty();
	
	$("#tab_new_item_cylindre_nom").val("Cylindre "+String(NUMERO_ITEM+1))
	$("#tab_new_item_cylindre_couleur").val(LISTE_COULEURS[ NUMERO_ITEM % LISTE_COULEURS.length ])
	$("#tab_new_item_liste_contraintes_cylindre").empty();
}



// *****************************************
// Ouvre boitre "supprime item"
function ouvreBoiteDeleteItem(_id)
{
	$("#boite_delete_item").attr("data-id",_id)
	var item = getItemFromId(_id)
	$("#boite_delete_nom_item").text(item.nom())
	
	$('#boite_delete_item').dialog('open')
}



// ********************************************
// Fonction qui ajoute un div pour lister les contrainte à inffliger au futur plan dans la boite de dialog
function tab_new_item_ajouteContrainte_plan()
{
	var html = `
		<div class=\"tab_new_item_contrainte_plan\">
			Contrainte : 
			<select class="type-contrainte">
				<option value="RMS">Plan des moindres carrés</option>
				<option value="exterieurPlus">Plan extérieur aux points (+)</option>
				<option value="exterieurMoins">Plan extérieur aux points (-)</option>
			</select>
			<div class="choix_contrainte_nuage">
				Nuage :
				<select>
					`+getHTMLNuagesInSelect()+`
				</select>
			</div>`;
			
	html += "</div>";
	
	$("#tab_new_item_liste_contraintes_plan").append(html)
}


// ********************************************
// Fonction qui ajoute un div pour lister les contrainte à inffliger au futur cylindre dans la boite de dialog
function tab_new_item_ajouteContrainte_cylindre()
{
	var html = `
		<div class=\"tab_new_item_contrainte_cylindre\">
			Contrainte : 
			<select class="type-contrainte">
				<option value="RMS">Cylindre des moindres carrés</option>
				<option value="inscrit">Inscrit dans le nuage</option>
				<option value="circonscrit">Circonscrit au nuage</option>
			</select>
			<div class="choix_contrainte_nuage">
				Nuage :
				<select>
					`+getHTMLNuagesInSelect()+`
				</select>
			</div>`;
			
	html += "</div>";
	
	$("#tab_new_item_liste_contraintes_cylindre").append(html)
}


// ********************************************
// Fonction qui ajoute un div pour lister nuages à fusionner
function tab_new_item_assemble_ajoute_nuage()
{
	var html = `
		<div class=\"tab_new_item_assemble_nuage\">
			<div class="choix_assemblage_nuage_nuage">
				Nuage :
				<select>
					`+getHTMLNuagesInSelect()+`
				</select>
			</div>
			<form style=\"display:inline-block;\">
				&nbsp;&nbsp;&nbsp;&nbsp;
				<img src=\"./sources/images/poubelle.svg\" alt=\"[Supprimer source]\" title=\"Supprimer le nuage de point original après fusion\" style=\"height:30px;vertical-align:middle;\"/>
				<input type="checkbox" name=\"suppr_source\">
				&nbsp;&nbsp;&nbsp;&nbsp;
				<img src=\"./sources/images/CdG.svg\" alt=\"[CdG]\" title=\"Ne prender que le barycentre des points\" style=\"height:30px;vertical-align:middle;\"/>
				<input type="checkbox" name=\"CdG\">
			</form>
		</div>`;
	
	$("#tab_new_item_liste_assemble_nuage").append(html)
}


// ******************************************
// Ouvre la boite d'analyse par rapport au plan dont l'item est le n°id
function ouvreBoiteMesurePlan(_id_)
{
	$("#boite_mesure_plan").attr("data-id",_id_);
	$("#boite_mesure_plan_choix_item").empty();
	$("#boite_mesure_plan_choix_item").append("<option value=\"\"></select>");
	for(var i=0;i<LISTE_ITEMS.length ;i++)
	{
		if(LISTE_ITEMS[i].id()!=_id_)
		{
			$("#boite_mesure_plan_choix_item").append("<option value=\""+String(LISTE_ITEMS[i].id())+"\">"+LISTE_ITEMS[i].nom()+"</select>")
		}
	}
	$("#boite_mesure_plan_mesures").empty();
	$("#boite_mesure_plan").dialog("open");
}

// ******************************************
// Ouvre la boite pour charger une nouvelle piece
function ouvreBoiteOuvrirPiece()
{
	//Supprime le contenu
	$("#boite_ouvrir_piece_contenu").empty();
	//met le'icone
	$("#boite_ouvrir_piece_contenu").append("<div style='text-align:center;'><img style='width:50px;' src='./sources/images/chargement.svg' alt='Chargement...'/></div>");
	$("#boite_ouvrir_piece").dialog("open");
	
	//Requete liste des mecanismes
	$.post(	"repondeur.php",
			{action:"getPieces"},
			getPiece_callback,
			"json"
	)
}
// *************************************************
// Fonction callback qui recoit la liste des 
getPiece_callback = function(data)
{
	var pieces = data.pieces
	//Supprime le contenu
	$("#boite_ouvrir_piece_contenu").empty();
	for(i=0;i<pieces.length;i++)
	{
		var piece = pieces[i];
		var nom = piece.nom;
		var image = piece.image;
		var lien = piece.lien;
		var code = "<a class='piece_a_ouvrir' href='?piece="+lien+"'><h1>"+nom+"</h1><div class='image_piece_a_ouvrir'><img src='"+image+"'/></div></div>"
		$("#boite_ouvrir_piece_contenu").append(code);
	}	
}


// *****************************************
function updateCalculMesurePlan()
{
	var plan = getItemFromId($("#boite_mesure_plan").attr("data-id"))
	var item = getItemFromId($("#boite_mesure_plan_choix_item").val())
	
	// NUAGES ========================
	if(item.type()=="nuage")
	{
		var dMin = 0
		var dMax = 0
		var Ra = 0
		for(var i=0;i<item.nbMesures();i++)
		{
			console.log(i);
			var mes = item.getMesure(i)
			var d = plan.getDistancePoint(mes);
			if(d>dMax)
				dMax = d;
			if(d<dMin)
				dMin = d;
			Ra += Math.abs(d);
		}
		if(item.nbMesures())
			Ra /= item.nbMesures();
	
		// Résultats
		$("#boite_mesure_plan_mesures").append(`
			<ul>
				<li><strong>Écart min :</strong> `+String(dMin)+`</li>
				<li><strong>Écart max :</strong> `+String(dMax)+`</li>
				<li><strong>R<sub>a</sub> :</strong> `+String(Ra)+`</li>
			</ul>
		`)
	}
	
}


// *****************************************
function getDonneesInTableau()
{
	var tab = [];
	
	LISTE_ITEMS.forEach(function(item){
		tab.push(item.export());
	});
	
	
	return tab;
}

// *****************************************
function envoieDonneesVersServeur()
{
	var donnees = getDonneesInTableau()
	
	$.post(
		"repondeur.php",
		{
			action:"sauvegardeDonnées",
			donnees:donnees
		},
		envoieDonneesVersServeur_callback,
		"json"
	);
}

// **********************************************
function envoieDonneesVersServeur_callback(data)
{
	if(data.OK)
	{
		$("#boite_valider_enregistrer_depuis_Occulus").dialog("open");
	}
}

// **********************************************
function afficheCache(_id_)
{
	var item = getItemFromId(_id_);
	item.afficheCacheGROUPE();
}

// **********************************************
function changeAlpha(_id_,_alpha_)
{
	var item = getItemFromId(_id_);
	item.setTransparence(_alpha_);
}

// *********************************************
// Fonction qui fait la liste des nuages pour mettre dans un select (form)
function getHTMLNuagesInSelect()
{
	var html = "";
	for(var i=0;i<LISTE_ITEMS.length;i++)
	{
		var item = LISTE_ITEMS[i];
		if(item.type()=="nuage")
		{
			html+=`
					<option value="`+String(item.id())+`">`+item.nom()+`</option>`;
		}
	}
	return html;
}


// **************************************************************************
// Fait une copie des mesures de l'un dans l'autre (utile pour les fusions)
function copyMesuresFromFusion(n_source,n_contenant)
{
	for(var i=0; i< n_source.nbMesures(); i++)
	{
		n_contenant.ajouteMesure(n_source.getMesure(i))
	}
}
