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
	
cercle1 = [[	0.5093	,	0.3	,	0.19	],
	[	0.3084	,	0.3	,	0.19	],
	[	0.4104	,	0.4101	,	0.19	],
	[	0.4104	,	0.2102	,	0.19	],
	[	0.4823	,	0.3802	,	0.19	],
	[	0.4803	,	0.2393	,	0.19	],
	[	0.3384	,	0.2413	,	0.19	],
	[	0.3387	,	0.381	,	0.19	]];
	
cercle2 = [[	0.409	,	0.4096	,	0.16	],
	[	0.409	,	0.209	,	0.16	],
	[	0.5114	,	0.311	,	0.16	],
	[	0.3065	,	0.311	,	0.16	],
	[	0.4805	,	0.3856	,	0.16	],
	[	0.4805	,	0.2371	,	0.16	],
	[	0.3405	,	0.2391	,	0.16	],
	[	0.3425	,	0.3847	,	0.16	]];
	
cercle3 = [[	0.3059	,	0.3087	,	0.13	],
	[	0.5101	,	0.3087	,	0.13	],
	[	0.4081	,	0.4078	,	0.13	],
	[	0.4081	,	0.2114	,	0.13	],
	[	0.4766	,	0.2374	,	0.13	],
	[	0.4746	,	0.3918	,	0.13	],
	[	0.3482	,	0.3898	,	0.13	],
	[	0.3502	,	0.2299	,	0.13	]];
	
cercle4 = [[	0.5084	,	0.3096	,	0.1	],
	[	0.306	,	0.3096	,	0.1	],
	[	0.408	,	0.4073	,	0.1	],
	[	0.408	,	0.2152	,	0.1	],
	[	0.4772	,	0.3852	,	0.1	],
	[	0.3442	,	0.3852	,	0.1	],
	[	0.3462	,	0.2331	,	0.1	],
	[	0.4703	,	0.2351	,	0.1	]];
	
cercle5 = [[	0.5088	,	0.3111	,	0.07	],
	[	0.3064	,	0.3111	,	0.07	],
	[	0.4084	,	0.4073	,	0.07	],
	[	0.4084	,	0.2172	,	0.07	],
	[	0.4808	,	0.3792	,	0.07	],
	[	0.3394	,	0.3792	,	0.07	],
	[	0.3414	,	0.2353	,	0.07	],
	[	0.4781	,	0.2373	,	0.07	]];
	
cercle6 = [[	0.5091	,	0.3126	,	0.04	],
	[	0.3077	,	0.3126	,	0.04	],
	[	0.4097	,	0.4083	,	0.04	],
	[	0.4097	,	0.216	,	0.04	],
	[	0.4797	,	0.38	,	0.04	],
	[	0.3391	,	0.378	,	0.04	],
	[	0.3411	,	0.236	,	0.04	],
	[	0.4805	,	0.238	,	0.04	]];
	
cercle7 = [[	0.4085	,	0.4092	,	0.02	],
	[	0.4085	,	0.2135	,	0.02	],
	[	0.5085	,	0.3115	,	0.02	],
	[	0.3087	,	0.3115	,	0.02	],
	[	0.4801	,	0.3795	,	0.02	],
	[	0.3389	,	0.3795	,	0.02	],
	[	0.3409	,	0.2374	,	0.02	],
	[	0.4799	,	0.2394	,	0.02	]];
	
	
	
NUAGE_COURANT.nom("Nuage face")
for(var i=0;i<nuage1.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(nuage1[i][0], nuage1[i][2], -nuage1[i][1]))
	NUAGE_COURANT.rayon_marker(0.01);
ajouteNuage("Nuage coté")
for(var i=0;i<nuage2.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(nuage2[i][0], nuage2[i][2], -nuage2[i][1]))
	NUAGE_COURANT.rayon_marker(0.01);
	
ajouteNuage("Cercle 1")
for(var i=0;i<cercle1.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(cercle1[i][0], cercle1[i][2], -cercle1[i][1]))
	NUAGE_COURANT.rayon_marker(0.005);
ajouteNuage("Cercle 2")
for(var i=0;i<cercle2.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(cercle2[i][0], cercle2[i][2], -cercle2[i][1]))
	NUAGE_COURANT.rayon_marker(0.005);
ajouteNuage("Cercle 3")
for(var i=0;i<cercle3.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(cercle3[i][0], cercle3[i][2], -cercle3[i][1]))
	NUAGE_COURANT.rayon_marker(0.005);
ajouteNuage("Cercle 4")
for(var i=0;i<cercle4.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(cercle4[i][0], cercle4[i][2], -cercle4[i][1]))
	NUAGE_COURANT.rayon_marker(0.005);
ajouteNuage("Cercle 5")
for(var i=0;i<cercle5.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(cercle5[i][0], cercle5[i][2], -cercle5[i][1]))
	NUAGE_COURANT.rayon_marker(0.005);
ajouteNuage("Cercle 6")
for(var i=0;i<cercle6.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(cercle6[i][0], cercle6[i][2], -cercle6[i][1]))
	NUAGE_COURANT.rayon_marker(0.005);
ajouteNuage("Cercle 7")
for(var i=0;i<cercle7.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(cercle7[i][0], cercle7[i][2], -cercle7[i][1]))
	NUAGE_COURANT.rayon_marker(0.005);
