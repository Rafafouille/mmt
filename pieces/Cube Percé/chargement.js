// Chargement de la PIECE (materiau puis géométrie) ***************
var materialLoader = new THREEJS.MTLLoader();
materialLoader.load("./pieces/Cube Percé/trou_localisation.mtl", function(materials)
	{
	    	materials.preload();
		var objLoader = new THREEJS.OBJLoader();
		objLoader.setMaterials(materials); // Affecte (d'avance) le matériau
		objLoader.load('./pieces/Cube Percé/trou_localisation.obj', function ( object ) {
					PIECE = object;
					//On déplace la géométrie de la piece (les vertices, et pas la piece elle meme)
					var echelle = 0.1
					PIECE.children[0].geometry.scale(echelle,echelle,echelle)
					PIECE.children[0].geometry.translate(0.4,0,-0.3)
					//CONTROLS.target = PIECE.position  // Camera vise la piece
			 		ENVIRONNEMENT.add( object );
			 		NB_PIECES_CHARGEES += 1
				},
				function (progression){},
				function (error){console.log(error);});
	});
	
	
nuage1 = [[	0.24	,	0.1246	,	0.014	],
	[	0.34	,	0.124	,	0.014	],
	[	0.44	,	0.1283	,	0.014	],
	[	0.54	,	0.1262	,	0.014	],
	[	0.54	,	0.135	,	0.114	],
	[	0.44	,	0.1345	,	0.114	],
	[	0.34	,	0.1313	,	0.114	],
	[	0.24	,	0.1267	,	0.114	],
	[	0.24	,	0.1271	,	0.188	],
	[	0.34	,	0.1326	,	0.188	],
	[	0.44	,	0.1373	,	0.188	],
	[	0.54	,	0.1418	,	0.188	]];
	
nuage2 = [[	0.217	,	0.1398	,	0.188	],
	[	0.228	,	0.2398	,	0.188	],
	[	0.2382	,	0.3398	,	0.188	],
	[	0.2466	,	0.4397	,	0.188	],
	[	0.245	,	0.4397	,	0.088	],
	[	0.2374	,	0.3397	,	0.088	],
	[	0.2359	,	0.2397	,	0.088	],
	[	0.2235	,	0.1397	,	0.088	],
	[	0.2239	,	0.1397	,	0.026	],
	[	0.2347	,	0.2396	,	0.026	],
	[	0.2361	,	0.3396	,	0.026	],
	[	0.2425	,	0.4396	,	0.026	]];
	
NUAGE_COURANT.nom("Plan face")
for(var i=0;i<nuage1.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(nuage1[i][0], nuage1[i][2], -nuage1[i][1]))
	NUAGE_COURANT.rayon_marker(0.01);
ajouteNuage("Plan coté")
for(var i=0;i<nuage2.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(nuage2[i][0], nuage2[i][2], -nuage2[i][1]))
	NUAGE_COURANT.rayon_marker(0.01);
