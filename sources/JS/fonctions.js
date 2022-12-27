
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
						BATI.scale.set(0.04/3,0.04/3,0.04/3);
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
						AXE1.scale.set(0.04/3,0.04/3,0.04/3);
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
						AXE2.scale.set(0.04/3,0.04/3,0.04/3);
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
						AXE3.scale.set(0.04/3,0.04/3,0.04/3);
				 		ENVIRONNEMENT.add( object );
				 		NB_PIECES_CHARGEES += 1
					},
					function (progression){},
					function (error){console.log(error);});
		});
	

 

}


function creePiece()
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
		


// **********************************************
// DEPLACEPALPEUR
// Fonction qui déplace le palpeur, éventuellement bridé
// vers la position enregistrée dans POSITION_CIBLE
// ************************************************
function deplacePalpeur(bride=true)
{	
	var position = new THREE.Vector3( AXE2.position.x, AXE3.position.y, AXE1.position.z)
	var dep = POSITION_CIBLE.clone().sub(position).multiplyScalar(0.5)
	
	dx = dep.x*0.5
	dy = dep.y*0.5
	dz = dep.z*0.5
	
	if(dep.length() > PAS_MAX)
	{
		dep.normalize()
	}
	
	var newPosition = position.clone().add(dep)
	
	collision = detectCollision(position,newPosition)
	if(collision)
		{
		POSITION_CIBLE.copy(collision)
		updateAffichageCoordonnees();
		AXE1.position.z = collision.z

		AXE2.position.z = collision.z
		AXE2.position.x = collision.x

		AXE3.position.z = collision.z
		AXE3.position.x = collision.x
		AXE3.position.y = collision.y
		if(!doublonMarker(collision))
			{
			placeMarker(collision)
			}
		}
	else 
		{
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
function placeMarker(P)
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
}



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
	POSITION_CIBLE.x = X;
	$("#input_coord_X").val(X)
}
function updateY(Y)
{
	POSITION_CIBLE.z = -Y;
	$("#input_coord_Y").val(Y)
}
function updateZ(Z)
{
	POSITION_CIBLE.y = Z;
	$("#input_coord_Z").val(Z)
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
	CONTROLLER1.addEventListener('selectstart', function(){
					COORDONNEES_INIALES_MANETTE_VR = CONTROLLER1.position.clone() ;  // Position de la manette VR au début du déplacement
					COORDONNEES_PALPEUR_INITIAL_VR = POSITION_CIBLE.clone() ;
					SUIVRE_MANETTE_VR = true;
				});
	CONTROLLER1.addEventListener('selectend', function(){
					SUIVRE_MANETTE_VR = false;
				});
	
	CONTROLLER2 = RENDERER.xr.getControllerGrip(1);
	var model2 = controllerModelFactory.createControllerModel( CONTROLLER2 );
	CONTROLLER2.add(model2);
	SCENE.add(CONTROLLER2);
}
// *****************************************
// Fabrique les modèles des controleurs 
// (issu de :  https://codingxr.com/articles/getting-started-with-webxr-and-threejs/)
/*function buildControllers() {
  const controllerModelFactory = new THREEJS.XRControllerModelFactory();

  const geometry = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 0, -1)
  ]);

  const line = new THREE.Line(geometry);
  line.scale.z = 10;

  const controllers = [];

  for (let i = 0; i < 2; i++) {
    const controller = RENDERER.xr.getController(i);
    controller.add(line.clone());
    controller.userData.selectPressed = false;
    controller.userData.selectPressedPrev = false;
    SCENE.add(controller);
    controllers.push(controller);

    const grip = RENDERER.xr.getControllerGrip(i);
    grip.add(controllerModelFactory.createControllerModel(grip));
    SCENE.add(grip);
  }

  return controllers;
}*/


