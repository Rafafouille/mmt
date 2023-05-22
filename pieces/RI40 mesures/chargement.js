// Chargement de la PIECE (materiau puis géométrie) ***************
var materialLoader = new THREEJS.MTLLoader();
materialLoader.load("./pieces/RI40 mesures/RI40_CORPS_deforme.mtl", function(materials)
	{
	    	materials.preload();
		var objLoader = new THREEJS.OBJLoader();
		objLoader.setMaterials(materials); // Affecte (d'avance) le matériau
		objLoader.load('./pieces/RI40/RI40_CORPS_deforme.obj', function ( object ) {
					PIECE = object;
					//On déplace la géométrie de la piece (les vertices, et pas la piece elle meme)
					var echelle = 1
					PIECE.children[0].geometry.scale(echelle,echelle,echelle)
					PIECE.children[0].geometry.translate(0.4,0,-0.15)
					//CONTROLS.target = PIECE.position  // Camera vise la piece
			 		ENVIRONNEMENT.add( object );
			 		NB_PIECES_CHARGEES += 1
				},
				function (progression){},
				function (error){console.log(error);});
	});
	
nuage1 = [[0.41851719948537214	,	0.23381495583647	,	0.11750362136466008],
[0.4281962035487668	,	0.21413204721139	,	0.11811006412400485],
[0.43838502135311547	,	0.22567220149715	,	0.11795230921260295],
[0.44327976854928497	,	0.20968873540605	,	0.11866223738747704],
[0.45551346703472256	,	0.21560850579942	,	0.11824927608317191],
[0.45417554676216454	,	0.19563075461479	,	0.118321631057599],
[0.46691496545949873	,	0.20187982411771	,	0.118989082940031],
[0.46227482484791066	,	0.1870724279747	,	0.1189025058669695],
[0.4787733273038207	,	0.18839652249944	,	0.11932420126022039],
[0.4705410600732716	,	0.17767210040116	,	0.1191892238896865],
[0.4848073757282064	,	0.17327742301633	,	0.11973001184138558],
[0.4741214131752733	,	0.164912742403	,	0.11963158562994591],
[0.4876485952415845	,	0.16101398380139	,	0.12021919552013025],
[0.47508218505508065	,	0.15363866336788	,	0.12011595440021931],
[0.4934493736992245	,	0.14324958182975	,	0.11984724517559482],
[0.4766189593166088	,	0.13775876500395	,	0.11951558170576344],
[0.48925421558834437	,	0.13245915980132	,	0.12043837446621501],
[0.47429875372817104	,	0.12786102220734	,	0.12058982859739106],
[0.48431849306878644	,	0.12003308497308	,	0.12083436781731427],
[0.47042324191758994	,	0.11643795319732	,	0.1204091122434816],
[0.480593433343803	,	0.10512048174825	,	0.12052230831609073],
[0.4674656226965904	,	0.10605302250618	,	0.12071265226055651],
[0.4722237376054638	,	0.092144771011857	,	0.12125118764639425],
[0.46061151576180903	,	0.098801349051706	,	0.12063285412922603],
[0.4633505327551743	,	0.085414109184234	,	0.12103354002712337],
[0.4533675422067455	,	0.089648789175394	,	0.12055099914252229],
[0.46041252663289367	,	0.074922574706097	,	0.12093952399735242],
[0.45037047296032523	,	0.080196132913662	,	0.12100371183930625],
[0.4397954881337034	,	0.080309266899875	,	0.12083184235130102],
[0.445024311882222	,	0.069187299133213	,	0.12120211222691667],
[0.4304633513689874	,	0.072321080404677	,	0.12115711269260064],
[0.4344486063801527	,	0.060892670084889	,	0.12136924960864073],
[0.4233619905670223	,	0.05671726410119	,	0.1208986136819835],
[0.42327595470408214	,	0.064772605310768	,	0.12090391309624146],
[0.4158547517563439	,	0.069314774427089	,	0.12063523127913546],
[0.4117400137639958	,	0.056470116194284	,	0.12055587775210404],
[0.40800882005951267	,	0.06803686657131	,	0.12068179834885846],
[0.3905346898036794	,	0.052990481034346	,	0.12046100058251989],
[0.3907249709539002	,	0.068158211238005	,	0.12019513721824467],
[0.37922835458436016	,	0.056854540387676	,	0.12055919293325318],
[0.3745521761320154	,	0.070664309097402	,	0.12032874798964786],
[0.3624293557171298	,	0.060092502323493	,	0.12039823964220182],
[0.370838154001888	,	0.064837187824829	,	0.12071858322318638],
[0.3602248269598934	,	0.075055430774518	,	0.12037505257831767],
[0.35231272253622103	,	0.068728401688339	,	0.12015796351225608],
[0.3503251251143825	,	0.082241043724204	,	0.11972911901283917],
[0.3398359967579333	,	0.073970861196216	,	0.12031612700077116],
[0.3402081263593661	,	0.088287292644425	,	0.11938225046681955],
[0.3293957086359865	,	0.085709604318499	,	0.11902493655307665],
[0.33568256229608523	,	0.096852990025417	,	0.11912534232583998],
[0.318868828103101	,	0.095013721766034	,	0.11901358704342535],
[0.3273193175680342	,	0.10236195127815	,	0.11903715094209252],
[0.3155729443860047	,	0.10579647369802	,	0.11881399485507751],
[0.3263149213014677	,	0.11133418853669	,	0.11922221991798888],
[0.3130948743685327	,	0.11541007201606	,	0.11902445253636301],
[0.32156678185064386	,	0.11957098383151	,	0.11894468307695029],
[0.30992823967197214	,	0.12675989968205	,	0.11848448803043951],
[0.32103423888167093	,	0.12919748751078	,	0.11819485043346367],
[0.3076976337826196	,	0.13901503143223	,	0.11819364361582792],
[0.3204285848312784	,	0.15189657176632	,	0.11769815822644338],
[0.3064095603984333	,	0.15331429096715	,	0.11778763399410086],
[0.31419743725506977	,	0.15915156511855	,	0.11792686999276597],
[0.32080764412767654	,	0.16405335757316	,	0.11795925208331212],
[0.31124415032705294	,	0.17025345282875	,	0.1180070534207924],
[0.3135937396175389	,	0.17890945256555	,	0.11809352835711243],
[0.32200664884417324	,	0.17882458064841	,	0.11844201250161308],
[0.330240679466977	,	0.18325262631973	,	0.11785486697195713],
[0.3261322983167329	,	0.19702856880834	,	0.11756402623173075],
[0.3396320141755344	,	0.1989046116833	,	0.11703860533167013],
[0.33729468616039293	,	0.21035199332668	,	0.11742118458424129],
[0.3501902916846379	,	0.20577025171906	,	0.11719741141223956],
[0.3508138272748243	,	0.22043215834664	,	0.11746542221537098],
[0.3629441319355207	,	0.2144687316247	,	0.11679769342491157],
[0.36333680062577994	,	0.22612957781905	,	0.11721356498265678],
[0.3758707609974707	,	0.21966273699166	,	0.11758025780175739],
[0.3814081271880524	,	0.23341400984034	,	0.11707195567745467],
[0.3872571187252666	,	0.22102920266888	,	0.11803841757821855],
[0.4222679185116745	,	0.22355699810256	,	0.11808363258349365],
[0.40665953864914134	,	0.21925788232565	,	0.11779806877110689],
[0.4069307076648384	,	0.23454445135455	,	0.11731622335950952],
[0.3905361871706888	,	0.2338973225863	,	0.11729188669281584]];	


nuage2 = [[0.3754306843488856	,	0.21182801988793	,	0.11046408307197464],
[0.36759274064606823	,	0.20881351837647	,	0.10909613754333504],
[0.3581716880238019	,	0.20355254103517	,	0.10880992675522257],
[0.3484820112850626	,	0.19628950975594	,	0.1087414047354087],
[0.34048761482347567	,	0.18693065778057	,	0.11127183437542698],
[0.3338018732353921	,	0.17680942019219	,	0.1107282018814167],
[0.32857249405224387	,	0.16362860381533	,	0.1117813566808984],
[0.3262450482284799	,	0.15263277678163	,	0.1114214988002344],
[0.38342745416410634	,	0.21363031275563	,	0.11270205274149922],
[0.39162735584133485	,	0.21475876354072	,	0.11177609232817096],
[0.3977908743060712	,	0.21506941122045	,	0.11112971192713252],
[0.405144866095641	,	0.21432859491186	,	0.11227990504786681],
[0.4138467563561898	,	0.21319559770058	,	0.11089272531140645],
[0.42149503959366225	,	0.21079694077781	,	0.11085736999849222],
[0.42791059484519	,	0.20802940843948	,	0.1100110064901767],
[0.43372815561562933	,	0.20483801316552	,	0.1091164489822718],
[0.44102350601154383	,	0.19998840189512	,	0.10866280822462415],
[0.44809926411416506	,	0.19429207615416	,	0.11099813909875439],
[0.45425365779591365	,	0.1868324354745	,	0.10989439912055605],
[0.4588721456897244	,	0.17932900829994	,	0.1109748985727882],
[0.46335510452872436	,	0.16971031539077	,	0.10962522618291977],
[0.4664256417479918	,	0.15940598030574	,	0.11348750160216645],
[0.4674998625684522	,	0.15323204842714	,	0.10758922739849143],
[0.4680118627900426	,	0.14894901795323	,	0.11119178329893208],
[0.4682206254691292	,	0.1420253774263	,	0.10813556539925415],
[0.46632665358613257	,	0.12943725730846	,	0.1101836145911385],
[0.4634857453409471	,	0.1209882289977	,	0.11005840032940574],
[0.45946884119588594	,	0.11142302889097	,	0.10968663689552627],
[0.4550752232214747	,	0.10379444526687	,	0.1071339814466209],
[0.44893012178658026	,	0.097254303419629	,	0.10882482705744065],
[0.4432566090448565	,	0.092146465145938	,	0.10979288524802475],
[0.4363356461322872	,	0.086636197627398	,	0.11253843337076186],
[0.42754840023209995	,	0.082191851552961	,	0.10897806603914241],
[0.41879387878682084	,	0.07829844195575	,	0.11186042949326998],
[0.40639016322655064	,	0.076269441876696	,	0.10994641083386661],
[0.39203650159236375	,	0.075489033358603	,	0.11138721799496655],
[0.3812265673700247	,	0.07672251882171	,	0.10984796682265865],
[0.3704983956307687	,	0.080607205203497	,	0.10899306879199244],
[0.3580810929568186	,	0.086568901504441	,	0.10995315423535149],
[0.3484887581975131	,	0.093922894461593	,	0.11281823596419334],
[0.34441748669233535	,	0.09766685853161	,	0.112246082289768],
[0.3414306855596237	,	0.10165014226584	,	0.11345962076261087],
[0.3355527133080377	,	0.10989269619022	,	0.11419812289301305],
[0.3315051425264059	,	0.1182444041436	,	0.11038841946805726],
[0.3284484841710689	,	0.12515974513346	,	0.10892291244458069],
[0.32682677980167135	,	0.13162585158623	,	0.1126352845632669],
[0.3264890932494005	,	0.13711989348398	,	0.10918366596810268],
[0.3265304461179708	,	0.1434691343015	,	0.1111389795735135]];

nuage3 = [[0.4081750090086083	,	0.21355396699	,	0.006792132335837193],
[0.4163011455786643	,	0.21232411108189	,	0.005190640925498892],
[0.4312055081978971	,	0.20695121867357	,	0.006881273595973712],
[0.4430417476173615	,	0.19951392468639	,	0.006660818671648782],
[0.4505512438762962	,	0.19251691230919	,	0.006222989873852136],
[0.45597398239609277	,	0.18646129841236	,	0.002843354797563863],
[0.45859694140020457	,	0.1826036967894	,	0.005326721434778418],
[0.4630474800813682	,	0.17406059183875	,	0.005223039829444143],
[0.3976785687296187	,	0.21408837338304	,	0.007951215095872698],
[0.3874672472113043	,	0.21326729066044	,	0.004174250368637183],
[0.3762815202368556	,	0.20996561111271	,	0.005040982643179514],
[0.36872991472954825	,	0.20672840187668	,	0.0056931896483084915],
[0.360486522270959	,	0.2021967200432	,	0.005705264191528498],
[0.3525444295193269	,	0.19635672461673	,	0.007464540427102203],
[0.3470991564195464	,	0.19003204097698	,	0.007128779372753301],
[0.34270185448179513	,	0.1842820874923	,	0.007609881604583095],
[0.33760301510906426	,	0.17621402000866	,	0.007431944255553811],
[0.33368051589182374	,	0.16625849468487	,	0.007841598234126345],
[0.3310250558602616	,	0.15784788029414	,	0.006706148729607477],
[0.3306451941795437	,	0.14980269664818	,	0.007695260281077787],
[0.330375496177329	,	0.14295636037404	,	0.007699741142989772],
[0.3304702970987635	,	0.1347649994261	,	0.007805701120439677],
[0.33278582944237634	,	0.1260901881895	,	0.006094395317383993],
[0.3357653509948629	,	0.11726874856062	,	0.006553390753738794],
[0.46672644961776205	,	0.16511885535138	,	0.0056061417877701],
[0.46961780488847216	,	0.15392620854232	,	0.007537720115663846],
[0.4700953407948034	,	0.14404588815994	,	0.005428843003925757],
[0.4687645378836867	,	0.13137914170385	,	0.007406118000472723],
[0.46605441059856495	,	0.12145015457949	,	0.007611544216356909],
[0.46234738594825	,	0.1147828574837	,	0.005026481698033283],
[0.4582887888098757	,	0.10536580380989	,	0.008510843904783901],
[0.45381479357479887	,	0.099497724518261	,	0.007752252052675373],
[0.4479046063892859	,	0.093901772461232	,	0.006306360346993],
[0.4420325539383873	,	0.088478638000834	,	0.007626345152091674],
[0.43082956310458664	,	0.081400421508115	,	0.008656450661328688],
[0.42307589949154356	,	0.078055111507234	,	0.00896656844528806],
[0.4148520293748335	,	0.075843294910644	,	0.007465045917510614],
[0.40675238216448284	,	0.074723348587527	,	0.008178096318630576],
[0.3963461721601372	,	0.074456432052854	,	0.006047598968623953],
[0.385093905521196	,	0.076291294009556	,	0.006288288619951028],
[0.3752108376768365	,	0.078314225678463	,	0.00506204819239759],
[0.3678981155618192	,	0.082714858941734	,	0.006192845810117773],
[0.3598269558762671	,	0.086466667228125	,	0.0041674742479510495],
[0.35353226651048497	,	0.092102278017923	,	0.006651340400875329],
[0.347378169915113	,	0.09847120610415	,	0.004517881645587391],
[0.3423549873363735	,	0.1049683697387	,	0.007704444245163882],
[0.3392819796996719	,	0.11005655789298	,	0.005308508470792303]];

nuage4 = [[0.296452211329374	,	0.25928249219296	,	0.0892877592885029],
[0.2961714603582245	,	0.25594116690456	,	0.08130194161734439],
[0.2965081717084633	,	0.26500914381406	,	0.07725822570975875],
[0.29623957730905437	,	0.25903547677547	,	0.06922466631135185],
[0.2960278986243779	,	0.26146830452122	,	0.04957638238685688],
[0.2963372972744604	,	0.27049727925036	,	0.0466612190268757],
[0.2962401085203105	,	0.26517172732297	,	0.038022295881149165],
[0.29628820318582866	,	0.25928866551958	,	0.03896054235630341],
[0.29655469480423535	,	0.26061641437228	,	0.029407413102502188],
[0.29601909100243473	,	0.25321746212485	,	0.03242352778674913],
[0.2967858949085535	,	0.25942662582573	,	0.05788551370053452],
[0.2981205275031282	,	0.27129695561067	,	0.06070739365597323],
[0.29703942459297145	,	0.24878194832236	,	0.08109545609350678],
[0.29682513200508986	,	0.25244391642625	,	0.09360575131524569],
[0.29639533197367407	,	0.23705179127737	,	0.1042193970324636],
[0.2958763011292531	,	0.23423169309343	,	0.09570555783478427],
[0.29524326867551276	,	0.22959931680771	,	0.10275744318997178],
[0.29527400345628646	,	0.22368060592238	,	0.09717135156501887],
[0.2951606362362587	,	0.21862355380227	,	0.10344051513021264],
[0.29488603576715894	,	0.21533243555804	,	0.09686126830062422],
[0.2947909906710439	,	0.20975230037309	,	0.10150599226082672],
[0.29420876420889264	,	0.20778956618948	,	0.09568269908727506],
[0.29483303475093053	,	0.20374610255283	,	0.09907530078041812],
[0.2944273624440075	,	0.19230411949947	,	0.09297538575908937],
[0.2951105508237383	,	0.19515223253291	,	0.08548135057200189],
[0.2939807350848852	,	0.18529066682206	,	0.08801560736236358],
[0.2942385631509812	,	0.18544374546726	,	0.07735514053268794],
[0.2937401828963918	,	0.17682423617822	,	0.07356437192676199],
[0.2937762250874334	,	0.18117639365115	,	0.06600856228622771],
[0.2940052232389175	,	0.17958821659252	,	0.08128899911548798],
[0.2936546823378314	,	0.18224578325671	,	0.04561451201659346],
[0.2935654995601845	,	0.17572597582871	,	0.04784366575032295],
[0.29422132924022404	,	0.17803388519327	,	0.0346995407028457],
[0.29400542373288363	,	0.1852335823292	,	0.03282154623647523],
[0.29432716308897267	,	0.19372288229196	,	0.02800445187266321],
[0.29444410410912025	,	0.18923292877102	,	0.021873049598489357],
[0.2946837746410796	,	0.20737786278488	,	0.01884022653095029],
[0.2949185882176495	,	0.20321720313849	,	0.0119033242146888],
[0.29515739646576966	,	0.2143529395471	,	0.008763732151950093],
[0.29479764962861305	,	0.21504048005769	,	0.01478295567490937],
[0.29521934954775375	,	0.22316153297288	,	0.013948996898361661],
[0.29549374091921055	,	0.22980370663834	,	0.013416607397378807],
[0.2956337952798411	,	0.23681626688255	,	0.013566153793281419],
[0.2963037927991461	,	0.23469279125318	,	0.020131705409155327],
[0.29632934526540716	,	0.24784040630108	,	0.027903946505278533],
[0.29770238153051365	,	0.25340757685851	,	0.02018159446181532]];

nuage5 = [[0.5025765895873777	,	0.25829198104952	,	0.09423964879622683],
[0.5042520526042622	,	0.25030085854465	,	0.08676935869165368],
[0.5040415919134258	,	0.26534290558152	,	0.08284498500191174],
[0.5046961019369207	,	0.25995874646484	,	0.07844644517298306],
[0.5046337833047291	,	0.25918169517642	,	0.07059894657255734],
[0.5048055114092651	,	0.27000030356214	,	0.0709257998645187],
[0.5044400556306977	,	0.27163882174838	,	0.06341091458648647],
[0.5046037198965863	,	0.25942963329018	,	0.06194127167036418],
[0.5051101676415621	,	0.26183235788501	,	0.05054658415424503],
[0.5054389146773436	,	0.26784415463399	,	0.04619594665630433],
[0.5052587602872666	,	0.26681690124805	,	0.03590398621635518],
[0.5051610961455494	,	0.26155727864341	,	0.04267596739987258],
[0.5054729848341828	,	0.25664377290041	,	0.037225386916508924],
[0.5056047826756737	,	0.25823266778893	,	0.02676716394593709],
[0.5057556450877547	,	0.24869527390147	,	0.028200503710784766],
[0.5049464148749164	,	0.25145393839567	,	0.021975087844970823],
[0.5057904679633163	,	0.23534360869684	,	0.020342906791204592],
[0.5060519729089976	,	0.23356915628323	,	0.01105343939574123],
[0.5057317937954957	,	0.22732216070809	,	0.018080775349295235],
[0.505826385697675	,	0.22456764059932	,	0.01127957625389694],
[0.5051318821195806	,	0.21678266917833	,	0.009601853578155729],
[0.5056154827233337	,	0.21741705927976	,	0.017715155608037006],
[0.5057373899412801	,	0.21102343423487	,	0.01983635404545438],
[0.5055370950948587	,	0.2073295926971	,	0.011564405499919331],
[0.5045471160662748	,	0.23308585681154	,	0.10400369036994044],
[0.5043860557709472	,	0.2264993657792	,	0.0959660837682179],
[0.5033894071564993	,	0.22481529576511	,	0.1063490173041437],
[0.5032340393401861	,	0.21756228568025	,	0.09413430018633626],
[0.5042057079126666	,	0.21649266883637	,	0.10323898108554211],
[0.5026827159314301	,	0.20439410608549	,	0.10355768037046727],
[0.5038291973165303	,	0.20928208345757	,	0.09639720197331064],
[0.5024900666424338	,	0.19719653318093	,	0.08851221360215951],
[0.5032993091073836	,	0.18874803758531	,	0.09480907212052679],
[0.5040206508985078	,	0.19081143444859	,	0.08602055997792057],
[0.5041388447544346	,	0.18442811189394	,	0.0854985304504641],
[0.5030507662269496	,	0.19006345790982	,	0.07804951487143613],
[0.5041991047508207	,	0.18112597902143	,	0.08156676978258451],
[0.5045977007583345	,	0.18318759165837	,	0.07312072495934473],
[0.5047697380179488	,	0.17400679870246	,	0.07021896766393694],
[0.5047750167307727	,	0.18106709811416	,	0.06669514064492701],
[0.5049005844889866	,	0.18123835671115	,	0.0504930679537952],
[0.5047368594636005	,	0.17617421606118	,	0.04793775488444565],
[0.5053819724449244	,	0.17651027557258	,	0.03896375137818327],
[0.5058749400392863	,	0.18531434073196	,	0.039895387546944674],
[0.5051963451999661	,	0.18003131710847	,	0.03267705870141764],
[0.5059065770958722	,	0.19028795324712	,	0.03081262577574241],
[0.5055005999471227	,	0.18600007600047	,	0.024992618669639918],
[0.5051385962789452	,	0.19919483992041	,	0.026157611300704157],
[0.504974507267102	,	0.19292913979939	,	0.01597207810751707]];

nuage6 = [[0.3229602863195501	,	0.25520913184988	,	0.054164278009437315],
[0.31194190042895015	,	0.25437573004893	,	0.05429429273445833],
[0.30313481507398743	,	0.25454462296867	,	0.054446332819051944],
[0.302779736329612	,	0.25366244530649	,	0.06683473957597064],
[0.31189354763788263	,	0.25377715905376	,	0.06705685185838609],
[0.32192485803456267	,	0.25404562330384	,	0.06752881418017632],
[0.3192872385110262	,	0.24838344017217	,	0.07906649065910636],
[0.3116749911593322	,	0.24628833577406	,	0.08155631747765216],
[0.3042904264758176	,	0.24643541849657	,	0.0802673543385809],
[0.3019819991344346	,	0.23803337211005	,	0.08730478445693242],
[0.3094805284830858	,	0.23628672345574	,	0.08861137960608484],
[0.31802846970162724	,	0.23416109212395	,	0.08989482736214956],
[0.31994061139157026	,	0.22291699530355	,	0.09402992512562766],
[0.30819670869171345	,	0.21937720327733	,	0.09285190685215407],
[0.30244576597430095	,	0.22172650810426	,	0.09266293515138745],
[0.3031302160749965	,	0.20971844154448	,	0.09107580799504701],
[0.31391567333880965	,	0.20754556031153	,	0.09093786485718412],
[0.32044146985791777	,	0.20716027766652	,	0.09176083268086066],
[0.31326610572531316	,	0.19802928037772	,	0.08546772904721951],
[0.3046327176712895	,	0.19899348109466	,	0.08552918811388603],
[0.3221351410975727	,	0.19249903134328	,	0.08028475759182424],
[0.3131039750423631	,	0.19298641491546	,	0.08116995881333833],
[0.3064967964222582	,	0.19212220485274	,	0.07886475881745243],
[0.304865728081825	,	0.186755418185	,	0.06825877194721634],
[0.3197473415480827	,	0.18778550727243	,	0.07064905621723436],
[0.30297111105700403	,	0.18499768136446	,	0.06258699054798209],
[0.31270231526054765	,	0.18549505262968	,	0.06137176908546476],
[0.31934366409805354	,	0.18560170287397	,	0.06145050105731089],
[0.32370999765846065	,	0.18637625648992	,	0.05177364450561849],
[0.3125854480112707	,	0.18696042044857	,	0.047420655365886404],
[0.3025593480294486	,	0.18582684392548	,	0.05085054420976689],
[0.3017559284358418	,	0.19261196438898	,	0.035933354721426336],
[0.3111592723637949	,	0.19187828300041	,	0.03780525241196118],
[0.32226411985087655	,	0.19212697696729	,	0.03876386274024382],
[0.32453308403429376	,	0.20182319371713	,	0.03037889692573896],
[0.3156642403688803	,	0.20264660616422	,	0.028930497808235672],
[0.30052382558966767	,	0.20133155733008	,	0.02810014160645037],
[0.3198547168864855	,	0.2167577676764	,	0.024813451174814607],
[0.3140685074227616	,	0.21479765706124	,	0.024164217966110083],
[0.30682903295764735	,	0.21839519022982	,	0.02350048682857034],
[0.3075659494868747	,	0.23431056889767	,	0.02664113144260335],
[0.32363847604558105	,	0.22991082744451	,	0.026041775553047146],
[0.3118493811882917	,	0.2318648938528	,	0.0257293855345775],
[0.32283826896232903	,	0.23890967889252	,	0.029497904122432663],
[0.31325205916698534	,	0.23998143450222	,	0.030340968397167253],
[0.3025271277958586	,	0.24266600524896	,	0.031850092249376766],
[0.3005958780642689	,	0.24972856100305	,	0.039409863717901276],
[0.31527366001411367	,	0.24697984008771	,	0.03688206909592496],
[0.32343578436298764	,	0.24372356213669	,	0.033987189271026445],
[0.3208357919625491	,	0.25193119292598	,	0.044704205830498896],
[0.30791767291731265	,	0.25272795248157	,	0.04751434033234841]];

nuage7 = [[0.47916894726615794	,	0.22813142073398	,	0.023421358063677292],
[0.49016699629435906	,	0.22687054305753	,	0.02387046592235447],
[0.4991150587304154	,	0.22747492035218	,	0.024336813353027374],
[0.501232450084168	,	0.24124825517896	,	0.029803934719776246],
[0.4885221750553559	,	0.24073032312461	,	0.02862690974484688],
[0.47805677170362004	,	0.23957815169563	,	0.027532905929964227],
[0.4865860160446968	,	0.25017715480224	,	0.037531801861587895],
[0.4971803199286466	,	0.25086244130498	,	0.039445977459157754],
[0.498443918025945	,	0.25546264869772	,	0.05200367944230302],
[0.48620336215447446	,	0.25570530031766	,	0.05003369689238268],
[0.47679541272775666	,	0.25627098710619	,	0.051930811488922445],
[0.47854742384347254	,	0.25479180059043	,	0.06848222010590065],
[0.48555872423201785	,	0.25528477063534	,	0.06708830118071003],
[0.4955422324014295	,	0.2548587601718	,	0.06731928798754366],
[0.5000018793684464	,	0.24696382278712	,	0.081489194842073],
[0.48343919789933487	,	0.24782776315676	,	0.08023663171592949],
[0.4747010228721906	,	0.25079887164468	,	0.0776572613638014],
[0.4770008691652461	,	0.23821263883656	,	0.08731822926701896],
[0.48203665487653213	,	0.23578963269349	,	0.08881520921807155],
[0.49249962609200365	,	0.23367133214509	,	0.0894902284298444],
[0.49335099512796277	,	0.22349134822402	,	0.0916661615799101],
[0.48498353829529317	,	0.22328700038589	,	0.09123514184078202],
[0.4781117171545768	,	0.22430371739998	,	0.09157429027611891],
[0.4970489688728878	,	0.21533756208815	,	0.09163167625354202],
[0.49586085308381755	,	0.24083276503166	,	0.08636335007417684],
[0.4879086262844496	,	0.2066120455711	,	0.08813822175923271],
[0.48100800816056855	,	0.21253842267792	,	0.08999532306602159],
[0.49710282686098195	,	0.19903236175749	,	0.08435642908458064],
[0.48779468903996664	,	0.20029994315171	,	0.08448899910251909],
[0.479304319112546	,	0.19827391124002	,	0.08182765506206965],
[0.4813874703950883	,	0.19480700983429	,	0.07794086686383202],
[0.4902890830818341	,	0.19360959948241	,	0.07720361081378331],
[0.49896668534686756	,	0.19039896260326	,	0.07262776013297054],
[0.48458949357354364	,	0.18899376355061	,	0.06856743534082617],
[0.49509289656718736	,	0.18764049380931	,	0.06358245849628984],
[0.48106468366287514	,	0.18767750005124	,	0.05939467813322826],
[0.49738633612121713	,	0.18725828966438	,	0.05447122986276097],
[0.4888664747673659	,	0.18745416382875	,	0.05406832372598156],
[0.47813727051539806	,	0.18885050807963	,	0.04825163567989103],
[0.47793373355903496	,	0.19243469408731	,	0.03972159706542817],
[0.4880399396968902	,	0.19232387233501	,	0.04015794420615887],
[0.4983704797908548	,	0.19156053941404	,	0.04049265359457991],
[0.4979957354433942	,	0.20179648840277	,	0.0294200353109272],
[0.4875179904559378	,	0.20197993727676	,	0.030191268858290623],
[0.47828497245099266	,	0.20147593595667	,	0.03009458852838729],
[0.48459003473405166	,	0.21693572155999	,	0.023901678071203573],
[0.5005420365709581	,	0.21433765508396	,	0.024547100163253066]];

for(var i=0;i<nuage1.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(nuage1[i][0], nuage1[i][2], -nuage1[i][1]))
ajouteNuage("Nuage 2")
for(var i=0;i<nuage2.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(nuage2[i][0], nuage2[i][2], -nuage2[i][1]))
ajouteNuage("Nuage 3")
for(var i=0;i<nuage3.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(nuage3[i][0], nuage3[i][2], -nuage3[i][1]))
ajouteNuage("Nuage 4")
for(var i=0;i<nuage4.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector3(nuage4[i][0], nuage4[i][2], -nuage4[i][1]))
ajouteNuage("Nuage 5")
for(var i=0;i<nuage5.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector4(nuage5[i][0], nuage5[i][2], -nuage5[i][1]))
ajouteNuage("Nuage 6")
for(var i=0;i<nuage6.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector4(nuage6[i][0], nuage6[i][2], -nuage6[i][1]))
ajouteNuage("Nuage 7")
for(var i=0;i<nuage7.length;i++)
	NUAGE_COURANT.ajouteMesure(new THREE.Vector4(nuage7[i][0], nuage7[i][2], -nuage7[i][1]))
