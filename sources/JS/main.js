import * as THREE_ from './bibliotheques/threejs/three.module.js';
THREE = THREE_ // Magouille pour se libérer des modules

import { OrbitControls } from './bibliotheques/threejs/OrbitControls.js';
THREEJS.OrbitControls = OrbitControls;// Magouille pour se libérer des modules

import { MTLLoader }	from './bibliotheques/threejs/MTLLoader.js';
THREEJS.MTLLoader = MTLLoader;// Magouille pour se libérer des modules
import { OBJLoader }	from './bibliotheques/threejs/OBJLoader.js';
THREEJS.OBJLoader = OBJLoader;// Magouille pour se libérer des modules




// ======================================
// CONSTANTES GLOBALES
// ======================================
POSITION_CIBLE = new THREE.Vector3( 0, 0, 0 ) ; 
v1 = new THREE.Vector3(30,30,-30) ;
v2 = new THREE.Vector3(30,0,-30) ;




// SCENE *************************************
const SCENE = new THREE.Scene();
SCENE.background = new THREE.Color( 0xffffAA );

// Calque regroupant le contenu de la scene, sauf pour la camera
ENVIRONNEMENT = new THREE.Group();
SCENE.add(ENVIRONNEMENT);

MARKERS = new THREE.Group();
ENVIRONNEMENT.add(MARKERS);

// Des axes pour aider
const axesHelper = new THREE.AxesHelper( 5 );
SCENE.add( axesHelper );



// RENDERER ****************************
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth-300, window.innerHeight);
document.body.appendChild( renderer.domElement );



// CAMERA *************************************
const CAMERA = new THREE.PerspectiveCamera( 75, (window.innerWidth-300) / window.innerHeight, 0.1, 1000 );
const CONTROLS = new OrbitControls( CAMERA, renderer.domElement );

CAMERA.position.set(100,100,100)

// LUMIERE ************************************
var light = new THREE.DirectionalLight(0xFFFFFF, 1);
	light.position.set(1, 2, 3).normalize();
	ENVIRONNEMENT.add(light);
var light2 = new THREE.DirectionalLight(0xAAAAAA, 1);
	light2.position.set(-30, 20, -10).normalize();
	ENVIRONNEMENT.add(light2);

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
	// IMPORTE LES MODELES
	creeMachine();
	creePiece();
	


function animate() {
	requestAnimationFrame( animate );
	CONTROLS.update(); // Mise à jour de la caméra, en fonction des actions de l'utilisateur
	if(CHARGEMENT_TERMINE)
	{
		deplacePalpeur();
	}
	else
	{
		checkChargement();
	}
	renderer.render( SCENE, CAMERA );
}
animate();

