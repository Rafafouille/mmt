			<div class="paragraphe" id="mesures">
				<img class="boutonDeveloppe" alt="[ -> ]" src="./sources/images/boutonTop.png"/>
				<h2><img src="./sources/images/icone_mesures.png" alt=""/> Faire des mesures</h2>
				<div class="contenuParagraphe">
				
				
					<!-- ================================================================================= -->

					<h3>Déplacer le palpeur</h3>
						<div class="boite_Ouvrable">
							<img class="image_centre" src="./sources/images/commande_palpeur.png" height="300px" style="float:left;"/>
							<p>
								Le palpeur se déplace en translation sur 3 axes X, Y et Z.
								Son déplacement est borné dans un volume parallélépipédique correspondnant aux dimensions de la machine (0,8m × 0,8m × 0,4m).
								L'origine du repère est l'un des coins (celui où est positionné le palpeur par défaut).
							</p>
							
							<img class="image_centre" src="./sources/images/repere.png" height="300px;">
									
							<p>
								Il s'arrête dès qu'il entre en interaction avec une surface de la pièce.
								Sa vitesse est bridée afin de ne pas "sauter" de polygone de la pièce pendant la translation.
								L'écran "à cristaux liquides" affiche la position du <strong>centre du palpeur</strong> (et non pas celle d'un éventuel palpage).
							</p>	
							<p>
								Il existe 4 manières de déplacer le palpeur :
							</p>
							<ul>
								<li>En modifiant directement les coordonnées dans l'affichage "à cristaux liquides"</li>
								<li>En appuyant sur les boutons "+" et "-" (déplacement de 2mm)</li>
								<li>En appuyant sur les boutons "++" et "--" (déplacement de 100cm)</li>
								<li>En modifiant le curseur linéaire.</li>
							</ul>	
						</div>
					
					<h3>Ajouter un point de mesure</h3>
						<div class="boite_Ouvrable">
							Un point de mesure est automatiquement ajouté au nuage de point actif au moment du contact du palpeur avec la surface de la pièce.
							Un marqueur (sphère) de la couleur du nuage apparaît, dont le centre est le point de mesure.
							
							<img class="image_centre" src="./sources/images/exemple_point.png" height="200"/>
							
							La liste des coordonnées des points est disponible dans le menu des items, en cliquant sur le nuage de points actif.
							Les points sont classés par ordre chronologique de la mesure.
							
							<img class="image_centre" src="./sources/images/liste_points.png" height="300"/>
							
							<div class="remarque">
								Pour savoir si un nuage de points est "<strong>actif</strong>", il apparaît dans la liste des items en <strong>écriture jaune</strong>.
								Pour changer de nuage actif, il vous suffit de cliquer sur le nuage voulu, dans ce même menu.
							</div>
							
							<div class="remarque">
								Le programme détecte la collision du palpeur avec la pièce, le long de la droite passant par le centre du palpeur et de <strong>vecteur directeur son vecteur vitesse</strong>.
								Cela peut amener à des imperfections lorsque le palpeur se déplace "presque" parallèlement à la surface de la pièce (le palpeur va rentrer partiellement dans la pièce).
								<img class="image_centre" src="./sources/images/probleme_penetration.svg" height="200"/>
							</div>
						</div>
					
					<h3>Supprimer un point de mesure</h3>
						<div class="boite_Ouvrable">
							Pour supprimer un point, vous devez ouvrir le nuage de points, dans le menu des items.
							Une croix rouge en face de chaque point vous permet de supprimer le point (attention : sans demande de confirmation !)
							<img class="image_centre" src="./sources/images/supprimer_mesure.svg" height="200"/>
							
							<div class="remarque">
								En cas d'erreur de mesure, il est conseillé de supprimer la-dite mesure immédiatement (elle sera en bas de la liste, et donc plus facile à repérer).
							</div>
						</div>
						
					<h3>Plusieurs campagnes de mesures</h3>
						<div class="boite_Ouvrable">
							Il est possible de réaliser plusieurs campagnes de mesures.
							À chaque fois, une seule campagne est "active" (c'est à dire que les nouvelles mesures seront enregistrées cette campagne-ci)
							<ul>
								<li><strong>Créer une nouvelle campagne :</strong>
									Cliquer sur le bouton [<strong>Ajouter un élément</strong>] <img src="./sources/images/plus.svg" height="30" alt="(+)"/>, onglet <strong>Nuage</strong> puis <strong>Nuage vierge</strong>. Il vous est possible de donner un nom et de choisir une couleur pour votre nouveau nuage. Cliquer ensuite sur [<strong>OK</strong>]
									La nouvelle campagne est automatiquement "active".
								</li>
								<li><strong>Sélectionner une autre campagne active :</strong>
									Il suffit de cliquer sur le nom du nuage de point qui vous intéresse, dans la liste des items (il se peut que cette action "déroule" la liste des mesures, mais ce n'est pas grave).
								</li>
							</ul>
						</div>
				</div>
			</div>
