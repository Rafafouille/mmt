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


<script src="http://code.jquery.com/jquery.min.js"></script>
<script src="http://libs.allais.eu/jquery/jquery-ui/jquery-ui.js"></script>
<!--<script src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.8/jquery-ui.min.js"></script> -->

<script src="./sources/JS/fonctions.js"></script>
<script src="./sources/JS/init.js"></script>


<!-- CSS ------------------------------- -->
<!-- FONT -->
<link href="https://fonts.cdnfonts.com/css/seven-segment" rel="stylesheet">
<!--<link rel="stylesheet" type="text/css" href="./sources/style/checkbox.css">-->
<!--<link rel="stylesheet" type="text/css" href="./sources/style/style_tableau_de_bord.css">-->
<link rel="stylesheet" type="text/css" href="http://libs.allais.eu/jquery/jquery-ui/jquery-ui.css">
<link rel="stylesheet" type="text/css" href="sources/style/style.css">


<script>
// Déclaration des variables globales
// ======================================
// CONSTANTES GLOBALES
// ======================================
THREE = null ; //Magouille pour se libérer des modules
THREEJS={}
PAS_MAX = 0.5 // Pas de déplacement discret, en m

ENVIRONNEMENT = null;
MARKERS = null;

POSITION_CIBLE = null;

CHARGEMENT_TERMINE = false;
NB_PIECES_CHARGEES = 0 ;

LISTE_MARKERS = [];
DISTANCE_MIN_MARKERS = 1	// Distance minimal pour autoriser à faire un autre marker

PAS_DEPLACEMENT_BOUTON = 1
PAS_DEPLACEMENT_BOUTON_PLUS = 10



v1 = null
v2 = null
material=null
materiau_rouge=null
materiau_jaune=null
materiau_orange=null
</script>
</head>


<body>
	<?php
	
		include("./sources/PHP/menu.php")
	?>
	
	<div id="ThreeJS" style="width=50%;display:inline-block;vertical-align:top;"></div><!--position: absolute; left:0px; top:0px-->
    
    
</body>

<script type="module" src="./sources/JS/main.js"></script>
</html>
