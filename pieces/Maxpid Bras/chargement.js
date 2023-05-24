// Chargement de la PIECE (materiau puis géométrie) ***************
var materialLoader = new THREEJS.MTLLoader();
materialLoader.load("./pieces/Maxpid Bras/maxipid_bras.mtl", function(materials)
	{
	    	materials.preload();
		var objLoader = new THREEJS.OBJLoader();
		objLoader.setMaterials(materials); // Affecte (d'avance) le matériau
		objLoader.load('./pieces/Maxpid Bras/maxipid_bras.obj', function ( object ) {
					PIECE = object;
					//On déplace la géométrie de la piece (les vertices, et pas la piece elle meme)
					var echelle = 0.002
					PIECE.children[0].geometry.scale(echelle,echelle,echelle)
					PIECE.children[0].geometry.translate(0.2,0,-0.15)
					//CONTROLS.target = PIECE.position  // Camera vise la piece
			 		ENVIRONNEMENT.add( object );
			 		NB_PIECES_CHARGEES += 1
				},
				function (progression){},
				function (error){console.log(error);});
	});