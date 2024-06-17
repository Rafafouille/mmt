			<div class="paragraphe" id="intro">
				<img class="boutonDeveloppe" alt="[ -> ]" src="./sources/images/boutonTop.png"/>
				<h2><img src="./sources/images/question.png" alt=""/> Introduction</h2>
				<div class="contenuParagraphe">


					<!-- ================================================================================= -->

					<h3>Qu'est ce que c'est ?</h3>
						<div class="boite_Ouvrable">
							L'application <a href="https://mmt.allais.eu">https://mmt.allais.eu</a> est une <strong>machine à mesurer tridimensionnelle</strong> (MMT) <strong>virtuelle</strong>,
							destinée à illustrer certains concepts fondamentaux dans la métrologie et l'analyse de nuages de points de mesure.
							
							<div style="text-align:center;">
								<img src="./sources/images/MMT.png" height="200" title="La MMT virtuelle"/>
							</div>
							
							Elle a été développée pour des élèves de classe préparatoire aux grandes écoles (CPGE) "Physique et Technologie" (PT), suite à la réforme de 2021
							pour laquelle le <a href="https://prepas.org/ups.php?document=19">nouveau programme de SI</a> indique les compétences suivantes :
							
							<table class="bordure" style="margin-top:20px;">
								<tr>
									<td style="width:200px;text-align:center;">Contrôler la conformité géométrique et dimensionnelle d’un produit.</td>
									<td style="width:200px;text-align:center;">Dispositifs de contrôle.<br/>Nuages de points.<br/>Méthodes d'association.</td>
									<td style="width:200px;text-align:center;">S3</td>
								</tr>
							</table>
						</div>
						
					<!-- ================================================================================= -->
					
					<h3>Rappel : c'est quoi une MMT ?</h3>
						<div class="boite_Ouvrable">
							<div style="float:left;text-align:center;margin:10px;">
									<img height="150" src="https://www.mesures.com/app/uploads/sites/6/2021/02/Hexagon11-1536x1021.jpg"/>
									<br/>
									<span class="legend">(Crédit : mesure.com)</span>
								</div>
							<img src=""
							<p>
								Dans l'industrie, il est nécessaire de contrôler la qualité des pièces que l'on fabrique.
								En effet, les procédés de fabrications ne sont pas parfaits : ils ont une limite de précision, ils peuvent s'user, se dérégler...
								Il en résulte des <strong>défauts géométriques</strong> plus ou moins importants, qu'il convient de quantifier par des mesures.
							</p>
							<p>
								Parmi les matériels utilisés pour caractériser les défauts géométriques,
								la <strong>machine à mesurer tridimensionnelle</strong> est l'un des outils les plus connus.
								Après initialisation, les "MMT" permettent de relever les coordonnées 3D de points de la surface d'une pièce, en venant <em>toucher</em> (<em>palper</em>) cette surface avec un palpeur.
								La machine analyse ensuite l'ensemble des coordonnées pour dire si une spécification géométrique est respectée ou non.
							</p>
							<p>
								Il est à noter que d'autres moyens de mesure existent, allant du plus classique (<a href="https://fr.wikipedia.org/wiki/Pied_%C3%A0_coulisse">pied à coulisse</a>, <a href="https://fr.wikipedia.org/wiki/Microm%C3%A8tre_(appareil_de_mesure)">micromètre</a>, <a href="https://fr.wikipedia.org/wiki/Jauge_de_profondeur">jauge de profondeur</a>, <a href="https://fr.wikipedia.org/wiki/Comparateur_(appareil_de_mesure)">comparateur</a>, ...) au plus moderne (<a href="https://fr.wikipedia.org/wiki/Scanner_tridimensionnel">scanners optiques ou laser</a>, et même <a href="https://fr.wikipedia.org/wiki/Tomographie">tomographie</a> pour mesurer l'intérieur)
							</p>
							<div style="margin:auto;text-align:center;">
								<div style="display:inline-block;text-align:center;">
									<img height="100" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/2020_Suwmiarka_cyfrowa.jpg/330px-2020_Suwmiarka_cyfrowa.jpg"/>
									<br/>
									<span class="legend">Pied à coulisse<br/>(Crédit : Wikipédia)</span>
								</div>
								
								<div style="display:inline-block;text-align:center;">
									<img height="100" src="./sources/images/MMT_optique.png"/>
									<br/>
									<span class="legend">Nuage de points par mesure optique<br/>(Crédit : Metrologic Group)</span>
								</div>
								
							</div>
						</div>
						
					<!-- ================================================================================= -->
					
					<h3>Quelles sont les fonctionnalités ? (en gros)</h3>
						<div class="boite_Ouvrable">
							Cette application est a but pédagogique pour réaliser des démonstrations <strong>qualitatives</strong> sur le procédé de mesure.
							Elle permet de :
							<ul>
								<li><strong>Mesurer des nuages points</strong> en déplaçant le palpeur, sur plusieurs surfaces fonctionnelles ;
								</li>
								<li><strong>Récupérer les listes de coordonnées des points</strong> pour un traitement externe (programme Python...) ;</li>
								<li><strong>Placer des éléments géométriques</strong> à partir de contraintes (plan/droite/cylindre des moindres carrés, avec contraintes de d'orientation, extérieur/intérieur matière, ... ;</li>
								<li><strong>Vérifier une spécification</strong> à partir de mesures d'écarts, ou d'analyses zones de tolérance ;</li>
							</ul>
						
							<table class="centre">
								<tr>
									<td>
										<img height="200" src="./sources/images/mesure_points.png"/>
									</td>
									<td>
										<img height="200" src="./sources/images/liste_coordonnees.png"/>
									</td>
								</tr>
								<tr>
									<td>
										<img height="200" src="./sources/images/elements_geometriques.png"/>
									</td>
									<td>
										<img height="200" src="./sources/images/ZT_coaxialite.png"/>
									</td>
								</tr>
							</table>
						</div>
				</div>
			</div>
