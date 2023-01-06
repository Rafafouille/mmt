<html>
<head>


<!-- JAVASCRIPT ------------------------- -->
<!--<script src="./sources/JS/bibliotheques/threejs/three.min.js"></script> -->
<!--<script type="module" src="./sources/JS/bibliotheques/node_modules/three/build/three.js"></script>-->

<!--<script src="./three.js-master/three.js"></script>-->
<!-- <script src="https://stemkoski.github.io/Three.js/js/Detector.js"></script>-->
<!--<script src="sources/JS/bibliotheques/node_modules/three/examples/jsm/controls/OrbitControls.js"></script>-->
<!--<script src="./sources/JS/bibliotheques/threejs/ConvexGeometry.js"></script>-->
<!--<script src="./sources/JS/bibliotheques/ThreeCSG/THREE.CSG.js"></script>-->
<!--<script src="./sources/JS/bibliotheques/node_modules/three/examples/jsm/loaders/MTLLoader.js"></script>-->
<!--<script src="./sources/JS/bibliotheques/node_modules/three/examples/jsm/loaders/OBJLoader.js"></script>-->


<script src="./sources/JS/bibliotheques/jquery/jquery.min.js"></script>
<script src="./sources/JS/bibliotheques/jquery/jquery-ui.js"></script>
<!--<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script> -->

<script src="./sources/JS/fonctions.js"></script>
<script src="./sources/JS/CLASS_Item.js"></script>
<script src="./sources/JS/CLASS_Nuage.js"></script>
<script src="./sources/JS/init.js"></script>


<!-- CSS ------------------------------- -->
<!-- FONT -->
<link href="https://fonts.cdnfonts.com/css/seven-segment" rel="stylesheet">
<!--<link rel="stylesheet" type="text/css" href="./sources/style/checkbox.css">-->
<!--<link rel="stylesheet" type="text/css" href="./sources/style/style_tableau_de_bord.css">-->
<link rel="stylesheet" type="text/css" href="./sources/JS/bibliotheques/jquery/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="sources/style/style.css">


<script>
// Déclaration des variables globales
// ======================================
// CONSTANTES GLOBALES
// ======================================

// Three JS *********
THREE = null ; //Magouille pour se libérer des modules
THREEJS={}

SCENE = null;
ENVIRONNEMENT = null;
MARKERS = null;
RENDERER = null;
CAMERA = null;
BILLE = null;

material=null
materiau_rouge=null
materiau_jaune=null
materiau_orange=null

// Déplacement *******************
PAS_MAX = 0.005 // Pas de déplacement discret, en m
PAS_DEPLACEMENT_BOUTON = 0.01		// Pas de déplacement quand on clique sur le bouton "déplacer +"
PAS_DEPLACEMENT_BOUTON_PLUS = 0.1	// Pas de déplacement quand on clique sur le bouton "déplacer ++"
POSITION_CIBLE = null;


// PIECE *******************
CHARGEMENT_TERMINE = false;
NB_PIECES_CHARGEES = 0 ;

// MESURES *******************
RAYON_PALPEUR = 0.002 ; 	// Rayon de la pointe du palpeur
LISTE_MARKERS = [];
RAYON_MARKER = 0.003;
DISTANCE_MIN_MARKERS = 0.02	// Distance minimal pour autoriser à faire un autre marker
NUAGE_COURANT = null;		// Référence vers le nuage de points courant (null si aucun)
LISTE_COULEURS = ["#FF0000","#0000FF","#00AA00","#FFAA00","#FF00FF","#00FFFF","#00FF00","#000000"]


// Manettes *******************
COORDONNEES_INIALES_MANETTE_VR = null; // Position de la manette VR au début du déplacement
COORDONNEES_PALPEUR_INITIAL_VR = null; // Position du palpeur au début du déplacement VR
SUIVRE_MANETTE_VR = false;
CONTROLLER1 = null
CONTROLLER2 = null



// arbre *******************
LISTE_ITEMS = []
NUMERO_ITEM = 0;

v1 = null
v2 = null
</script>


<script src="./sources/JS/matomo.js"></script>
</head>


<body>
	<?php
	
		include("./sources/PHP/menu.php")
	?>
	
	<div id="ThreeJS" style="width=50%;display:inline-block;vertical-align:top;"></div><!--position: absolute; left:0px; top:0px-->
    

	<?php
	
		include("./sources/PHP/boites.php")
	?>

</body>

<script type="module" src="./sources/JS/main.js"></script>

</html>
