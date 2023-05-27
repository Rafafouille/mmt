// Chargement de la PIECE (materiau puis géométrie) ***************
var materialLoader = new THREEJS.MTLLoader();
materialLoader.load("./pieces/Doshydro Crosse/crosse.mtl", function(materials)
	{
	    	materials.preload();
		var objLoader = new THREEJS.OBJLoader();
		objLoader.setMaterials(materials); // Affecte (d'avance) le matériau
		objLoader.load('./pieces/Doshydro Crosse/crosse.obj', function ( object ) {
					PIECE = object;
					//On déplace la géométrie de la piece (les vertices, et pas la piece elle meme)
					var echelle = 0.003
					PIECE.children[0].geometry.scale(echelle,echelle,echelle)
					PIECE.children[0].geometry.translate(0.4,0,-0.1)
					//CONTROLS.target = PIECE.position  // Camera vise la piece
			 		ENVIRONNEMENT.add( object );
			 		NB_PIECES_CHARGEES += 1
				},
				function (progression){},
				function (error){console.log(error);});
	});
