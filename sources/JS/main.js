import * as THREE_ from './bibliotheques/threejs/three.module.js';
THREE = THREE_ // Magouille pour se libérer des modules

import { OrbitControls } from './bibliotheques/threejs/OrbitControls.js';
THREEJS.OrbitControls = OrbitControls;// Magouille pour se libérer des modules

import { MTLLoader }	from './bibliotheques/threejs/MTLLoader.js';
THREEJS.MTLLoader = MTLLoader;// Magouille pour se libérer des modules
import { OBJLoader }	from './bibliotheques/threejs/OBJLoader.js';
THREEJS.OBJLoader = OBJLoader;// Magouille pour se libérer des modules
import { VRButton } from './bibliotheques/threejs/VRButton.js';
THREEJS.VRButton = VRButton;// Magouille pour se libérer des modules
import { XRControllerModelFactory } from './bibliotheques/threejs/XRControllerModelFactory.js';
THREEJS.XRControllerModelFactory = XRControllerModelFactory;// Magouille pour se libérer des modules

// ======================================
// CONSTANTES GLOBALES
// ======================================
POSITION_CIBLE = new THREE.Vector3( 0, 0, 0 ) ; 
v1 = new THREE.Vector3(30,30,-30) ;
v2 = new THREE.Vector3(30,0,-30) ;




// SCENE *************************************
SCENE = new THREE.Scene();
SCENE.background = new THREE.Color( 0xffffAA );

// Calque regroupant le contenu de la scene, sauf pour la camera
ENVIRONNEMENT = new THREE.Group();
SCENE.add(ENVIRONNEMENT);
ENVIRONNEMENT.position.set(0,0.73,-0.5)

DECORS = new THREE.Group();
ENVIRONNEMENT.add(DECORS);

MARKERS = new THREE.Group();
ENVIRONNEMENT.add(MARKERS);

// Des axes pour aider
/*const axesHelper = new THREE.AxesHelper( 5 );
SCENE.add( axesHelper );*/



// RENDERER ****************************
RENDERER = new THREE.WebGLRenderer();
RENDERER.setSize( window.innerWidth-320, window.innerHeight);
document.body.appendChild( RENDERER.domElement );
RENDERER.xr.enabled = true;	// Autorise la VR



// CAMERA *************************************
CAMERA = new THREE.PerspectiveCamera( 75, (window.innerWidth-300) / window.innerHeight, 0.01, 1000 );
const CONTROLS = new OrbitControls( CAMERA, RENDERER.domElement );

window.addEventListener( 'resize', resizeFenetre, false );



CAMERA.position.set(2,2,2)

// LUMIERE ************************************
var light = new THREE.DirectionalLight(0xFFFFFF, 1);
	light.position.set(1, 2, 3).normalize();
	ENVIRONNEMENT.add(light);
var light2 = new THREE.DirectionalLight(0xAAAAAA, 1);
	light2.position.set(-30, 20, -10).normalize();
	ENVIRONNEMENT.add(light2);


// **********************************************
// Ajout premier nuage de points
ajouteNuage("Nuage 1")

// MODELES *************************************

	//MATERIAUX communs
	material = new THREE.MeshLambertMaterial({
		color: 0x9a9b9c,
		shading: THREE.SmoothShading
		})

	materiau_rouge = new THREE.MeshLambertMaterial({
		color: 0xFF0000,
		shading: THREE.SmoothShading
		})


	materiau_jaune = new THREE.MeshLambertMaterial({
		color: 0xFFFF00,
		shading: THREE.SmoothShading
		})
  
	materiau_orange = new THREE.MeshLambertMaterial({
		color: 0xFFAA00,
		shading: THREE.SmoothShading
		})
	MATERIAU_PLAN = new THREE.MeshLambertMaterial({
		color: 0x00FF00,
		transparent :true,
		opacity:0.5
		})
		MATERIAU_PLAN.side = THREE.DoubleSide;

	// IMPORTE LES MODELES
	creeMachine();
	creePiece();
	creeDecors();



// *****************************************************
// Sons (beep)
	BEEP = new Audio('https://mmt.allais.eu/develop/sources/sons/beep.mp3')
	BEEP.volume = 0.1;

// *******************************************
// VR
	// Voir : https://ada.is/blog/2020/05/18/using-vr-controllers-and-locomotion-in-threejs/
	// Ajout du bouton VR
	$("#conteneur_vrbouton").html( VRButton.createButton( RENDERER ) );
	$("#VRButton").css("position","static");//Replace le bouton à une meilleure place
	$("#VRButton").css("background-color","black");//Replace le bouton à une meilleure place
	// Crée les controleurs
	creeControllers()
	
	



// BOUCLE *********************************************
function animate() {
	//requestAnimationFrame( animate );<<--- Anciennement pour faire la boucle, mais c'était avant la VR
	CONTROLS.update(); // Mise à jour de la caméra, en fonction des actions de l'utilisateur
	if(CHARGEMENT_TERMINE)
	{
		if(SUIVRE_MANETTE_VR)
		{
			var p = new THREE.Vector3();
			var pp = new THREE.Vector3();
			POSITION_CIBLE = p.add(COORDONNEES_PALPEUR_INITIAL_VR).add(CONTROLLER2.position).sub(COORDONNEES_INIALES_MANETTE_VR)
		}
		
		deplacePalpeur();
	}
	else
	{
		checkChargement();
	}
	RENDERER.render( SCENE, CAMERA );
}
// animate();  <<--- Anciennement pour faire la boucle, mais c'était avant la VR
RENDERER.setAnimationLoop(animate);



// Init HTML *************************************************
updateX(0)
updateY(0)
updateZ(0)
