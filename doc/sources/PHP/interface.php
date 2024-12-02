			<div class="paragraphe" id="intro">
				<img class="boutonDeveloppe" alt="[ -> ]" src="./sources/images/boutonTop.png"/>
				<h2><img src="./sources/images/icone_interface.png" alt=""/> L'interface</h2>
				<div class="contenuParagraphe">

					L'écran se divise en deux zones :
					<ul>
						<li><strong>La vue 3D</strong> où apparaît la machine, la pièce, les nuages de points et tout autre objet géométrique. Cette vue est controlable avec la souris (déplacement, zoom, rotation)</li>
						<li><strong>Le menu</strong> permettant de voir les mesures d'ouvrir des pièces existantes ou d'ajouter des éléments</li>
					</ul>
					
					<div style="text-align:center">
						<img style="max-width:500px;" src="./sources/images/fenetre.svg"/>
					</div>

					<h3>La fenêtre 3D</h3>
						<div class="boite_Ouvrable">
							La fenêtre 3D présente la MMT en tant que telle, ainsi que la pièce à mesurer.
							Au premier affichage, un temps de chargement peut être nécessaire pour faire apparaître chaque éléments.
							
							<h4>Pilotage de la vue</h4>
						
									
							
								<p>
									Le pilotage se fait à la souris de PC (ou avec les doigts pour les écrans tactiles, bien que l'application n'ai pas été développée pour ça).
									Il est géré par l'extension Javascript <strong>OrbitControls</strong> de bibliothèque Threejs qui permet de <strong>tourner</strong> autour de la machine, <strong>zoomer</strong> ou se <strong>translater</strong> :
								</p>
								
								<div style="text-align:center;">
									<div style="display:inline-block;width:180px;text-align:center;">
										<strong>Clic gauche maintenu :</strong><br/> Rotation de la vue<br/>
										<img src="./sources/images/clic_gauche.svg" height="50"/>
									</div>
									<div style="display:inline-block;width:180px;text-align:center;">
										<strong>Clic droit maintenu :</strong><br/>Translation de la vue<br/>
										<img src="./sources/images/clic_droit.svg" height="50"/>
									</div>
									<div style="display:inline-block;width:220px;text-align:center;">
										<strong>Clic milieu (molette) maintenu :</strong><br/>Zoom<br/>
										<img src="./sources/images/clic_milieu.svg" height="50"/>
									</div>
								</div>
								
								<table>
									<tr>
										<td style="padding-right:20px;"><img src="./sources/images/casque_VR.png"/></td>
										<td>À noter qu'il est également possible de "rentrer" dans l'interface 3D grâce à un casque de réalité virtuel (voir la section associée)</td>
									</tr>
								</table>
								<p style="text-align:center;"><img style="border:solid;" src="./sources/images/apercu_VR.png" height="200px;"/></p>
						</div>
						
					<h3>Le menu</h3>
						<div class="boite_Ouvrable">
							<h4>Commandes du palpeur</h4>
								<div class="boite_Ouvrable">
								
									<img class="image_centre" src="./sources/images/commande_palpeur.png" height="300px"/>
									<p>
										Le haut du menu permet de déplacer le palpeur et de voir les coordonnées de son centre (voir le paragraphe "Faire une mesure")
									</p>									
								</div>
							<h4>Ouvrir une pièce existante</h4>
							
								<div class="boite_Ouvrable">
									<p>Par défaut une pièce est présente sur le marbre (le corps du réducteur RI40).
									Mais l'application propose d'autres pièces (soit sur des pièces connus des salles de TP de SI, ou non).
									Ces pièces sont toutes exagérément déformées.</p>
									
									<p>Pour ouvrir une pièce, il suffit de cliquer sur le bouton :</p>
									<img class="image_centre" src="./sources/images/bouton_ouvrir.png">
									
									<p>La liste des pièces apparait, après un éventuel temps de chargement (la liste des pièces est chargée en direct depuis le serveur)</p>
									
									<img class="image_centre" src="./sources/images/fenetre_ouvrir.png" height="400px;"/>
									
								</div>
							<h4>Afficher/Cacher les principaux éléments</h4>
							
								<div class="boite_Ouvrable">
									<table>
										<tr>
											<td><img src="./sources/images/bouton_afficher_machine.png"/><img src="./sources/images/bouton_cacher_machine.png"/></td>
											<td>Permet d'afficher/cacher la machine (sauf le palpeur).</td>
											<td style="text-align:center;"><img src="./sources/images/afficher_cacher_machine.png" height="100px;"/></td>
										</tr>
										<tr>
											<td><img src="./sources/images/bouton_afficher_piece.png"/><img src="./sources/images/bouton_cacher_piece.png"/></td>
											<td>Permet d'afficher/cacher la pièce.</td>
											<td style="text-align:center;"><img src="./sources/images/afficher_cacher_piece.png" height="100px;"/></td>
										</tr>
										<tr>
											<td><img src="./sources/images/bouton_alpha_piece.png" width="130px;"/></td>
											<td>Permet de modifier la transparence de la pièce.</td>
											<td style="text-align:center;"><img src="./sources/images/alpha_piece.gif" height="100px;"/></td>
										</tr>
										<tr>
											<td><img src="./sources/images/bouton_afficher_axes.png"/><img src="./sources/images/bouton_cacher_axes.png"/></td>
											<td>Permet d'afficher/cacher les axes du palpeur.</td>
											<td style="text-align:center;"><img src="./sources/images/afficher_cacher_axes.png" height="100px;"/></td>
										</tr>
									</table>
								</div>
							<h4>Ajouter un élément</h4>
							
								<div class="boite_Ouvrable">
									<table>
										<tr>
											<td><img src="./sources/images/bouton_ajouter_element.png" title="Bouton 'Ajouter un élément'"/></td>
											<td>Ce bouton permet d'ajouter des éléments géométriques sur la scène.
											La plupart de ces éléments peut être positionné à partir de leurs caractéristiques (rayon, coordonnées d'un centre, etc.), où à partir de contraintes (moindre carré, perpendicularité, etc.)</td>
										</tr>
									</table>
									<p>Les éléments ajoutables sont :</p>
									<div style="text-align:center;">
										<div style="display:inline-block;width:150px;text-align:center;">
											<img src="./sources/images/icone_nuage.png"/>
											<br/>
											Ajouter un nouveau nuage de points
										</div>
										<div style="display:inline-block;width:150px;text-align:center;">
											<img src="./sources/images/icone_plan.png"/>
											<br/>
											Ajouter un nouveau plan
										</div>
										<div style="display:inline-block;width:150px;text-align:center;">
											<img src="./sources/images/icone_cylindre.png"/>
											<br/>
											Ajouter un nouveau cylindre
										</div>
										<div style="display:inline-block;width:150px;text-align:center;">
											<img src="./sources/images/icone_droite.png"/>
											<br/>
											Ajouter une nouvelle droite
										</div>
										<div style="display:inline-block;width:150px;text-align:center;">
											<img src="./sources/images/icone_biplan.png"/>
											<br/>
											Ajouter un nouveau biplan
										</div>
										<div style="display:inline-block;width:150px;text-align:center;">
											<img src="./sources/images/icone_cercle.png"/>
											<br/>
											Ajouter un nouveau cercle
										</div>
									</div>
									<p>Le détail de ces ajouts est donné plus loin, dans un paragraphe dédié.</p>
								</div>
							<h4>Activer la VR</h4>
								<div class="boite_Ouvrable">
									<p>Quand cela est disponible, l'application permet de rentrer dans la vue 3D en "réalité virtuelle" (VR) et de piloter le déplacement du palpeur avec les manettes :</p>
									<ul>
										<li>Soit avec un casque de réalité virtuelle (ici : testé seulement avec un <a href="https://www.meta.com/fr/quest/products/quest-2/">Occulus Quest 2</a>),</li>
										<li>Soit en simulant la VR sur votre navigateur (en utilisant éventuellement des addons).</li>
									</ul>
									
									<img class="image_centre" src="./sources/images/illustration_VR.png" height="200"/> 
									
									<table>
										<tr>
											<td><img src="./sources/images/bouton_VR.png"/></td>
											<td>Quand c'est possible, le bouton "VR" apparait pour entrer dans la vue 3D.</td>
										</tr>
									</table>
								</div>
								
							<h4>Exporter les données</h4>
								<div class="boite_Ouvrable">
								
									<table>
										<tr>
											<td><img src="./sources/images/bouton_export.png"/></td>
											<td>Ce bouton permet d'exporter de données se fait par email les données par email.</td>
										</tr>
									</table>
									<p>Rentrer votre adresse mail, et appuyer sur <strong>[Envoyer]</strong></p>
									
									<img class="image_centre" src="./sources/images/boite_mail.png" width="400"/>
									
									<p><strong>Attention :</strong> Cette application est sur un serveur dédié, configuré manuellement.
									Le serveur mail associé n'est peut être pas configuré de manière optimal, et certains mails peuvent passer pour des <strong>spams</strong>.
									Vérifiez bien le dossier "indésirables" de votre boîte mail.</p>
									
									<p>Une fois reçues, les données se présentent sous forme de texte (type csv) directement rédigé dans le corps du mail.</p>
									
									<div style="font-family:Courier;width:600px;border:solid;font-size:small;margin:auto;">
									Mesures enregistrées le 03/02/24 à 22:57<br/>
<br/>
 Données n°1 ------------------------------------------<br/>
<br/>
Nuage de points : Nuage face<br/>
<br/>
<table style="margin-left:0;">
<tr><td style="width:50px;">X</td><td style="width:50px;">;</td><td style="width:50px;">Y</td><td style="width:50px;">;</td><td style="width:50px;">Z</td></tr>
<tr><td>0.24</td><td>;</td><td>0.1246</td><td>;</td><td>0.014</td></tr>
<tr><td>0.34</td><td>;</td><td>0.124</td><td>;</td><td>0.014</td></tr>
<tr><td>0.44</td><td>;</td><td>0.1283</td><td>;</td><td>0.014</td></tr>
<tr><td>0.54</td><td>;</td><td>0.1262</td><td>;</td><td>0.014</td></tr>
<tr><td>0.54</td><td>;</td><td>0.135</td><td>;</td><td>0.114</td></tr>
<tr><td>0.44</td><td>;</td><td>0.1345</td><td>;</td><td>0.114</td></tr>
<tr><td>0.34</td><td>;</td><td>0.1313</td><td>;</td><td>0.114</td></tr>
<tr><td>0.24</td><td>;</td><td>0.1267</td><td>;</td><td>0.114</td></tr>
<tr><td>0.24</td><td>;</td><td>0.1271</td><td>;</td><td>0.188</td></tr>
<tr><td>0.34</td><td>;</td><td>0.1326</td><td>;</td><td>0.188</td></tr>
<tr><td>0.44</td><td>;</td><td>0.1373</td><td>;</td><td>0.188</td></tr>
<tr><td>0.54</td><td>;</td><td>0.1418</td><td>;</td><td>0.188</td></tr>
</table>
<br/>
<br/>
 Données n°2 ------------------------------------------<br/>
<br/>
Nuage de points : Nuage coté<br/>
<br/>
<table style="margin-left:0">
<tr><td style="width:50px;">X</td><td style="width:50px;">;</td><td style="width:50px;">Y</td><td style="width:50px;">;</td><td style="width:50px;">Z</td/></tr>
<tr><td>0.217</td><td>;</td><td>0.1398</td><td>;</td><td>0.188</td/></tr>
<tr><td>0.228</td><td>;</td><td>0.2398</td><td>;</td><td>0.188</td/></tr>
<tr><td>...</td><td></td><td></td><td></td><td></td/></tr>
</table>
</div>
								</div>
							<h4>Aide</h4>
								<div class="boite_Ouvrable">
									<table>
										<tr>
											<td><img src="./sources/images/bouton_aide.png"/></td>
											<td>Affiche l'aide que vous êtes en train de consulter.</td>
										</tr>
									</table>
								</div>
							<h4>Lister et modifier les élements</h4>
							
							<div class="boite_Ouvrable">
									<table>
										<tr>
											<td><img src="./sources/images/liste_items.png" width="150"/></td>
											<td>Les éléments géométriques (autres que la machine, l'environnement et la pièce à mesurer) sont listés dans la section ci-contre. Il est possible de sélectionner/modifier chacun de ces éléments en cliquant dessus, ce qui ouvre les détails de l'élément. On y trouve ainsi :
											<ul><li><strong>Des boutons standard</strong> que l'on retrouve dans chaque item,</li><li><strong>des boutons sépcifiques</strong> à certains items,</li><li><strong>Des informations propre à l'item</strong> (coordonnées, rayons, etc.)</li></ul></td>
										</tr>
									</table>
									<table>
										<tr>
											<img class="image_centre" src="./sources/images/item_develop.png"/>
										</tr>
										<tr>
											<table>
												<tr>
													<td><img src="./sources/images/afficher_item.png"/><img src="./sources/images/cacher_item.png"/></td>
													<td>Afficher/Cacher l'objet.</td>
												</tr>
												<tr>
													<td><img src="./sources/images/reglage_alpha_item.png"/></td>
													<td>Régler la transparence de l'objet.</td>
												</tr>
												<tr>
													<td><img src="./sources/images/supprimer_item.png"/></td>
													<td>Régler la transparence de l'objet.</td>
												</tr>
												<tr>
													<td><img src="./sources/images/calculette.png"/></td>
													<td>Faire des mesures avec cet objet (distance max à un nuage de point, ...).</td>
												</tr>
											</table>
										</tr>
									</table>
								</div>
						</div>
				</div>
			</div>
