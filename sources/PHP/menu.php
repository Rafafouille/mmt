<div id="menu">
		<div id="form_coordonnees">
			<label for="input_coord_X">X :</label>
			<input type="number" id="input_coord_X" name="input_coord_X" step="0.01" placeholder="X" value="0" onchange="updateX(Number(this.value))"/>
			<br/>
			<label for="input_coord_Y">Y :</label>
			<input type="number" id="input_coord_Y" name="input_coord_Y" step="0.01"  placeholder="Y" value="0" onchange="updateY(Number(this.value))"/>
			<br/>
			<label for="input_coord_Z">Z :</label>
			<input type="number" id="input_coord_Z" name="input_coord_Z" step="0.01"  placeholder="Z" value="0" onchange="updateZ(Number(this.value))"/>
		</div>
	
		<div class="bouton clicable bouton_deplacement gauche" onclick="updateX(X()-PAS_DEPLACEMENT_BOUTON_PLUS)">-<br/>-</div>
		<div class="bouton clicable bouton_deplacement gauche" onclick="updateX(X()-PAS_DEPLACEMENT_BOUTON)">-</div>
		<div class="bouton bouton_deplacement centre" style="background-color:#FFDDDD;"><img src="./sources/images/depX.svg" alt="X"/></div>
		<div class="bouton clicable bouton_deplacement droite" onclick="updateX(X()+PAS_DEPLACEMENT_BOUTON)">+</div>
		<div class="bouton clicable bouton_deplacement droite" onclick="updateX(X()+PAS_DEPLACEMENT_BOUTON_PLUS)">+<br/>+</div>
		<br/>
		<input type="range" id="input_range_X" name="input_range_X" min="0" max="0.8" step="0.001" oninput="updateX($(this).val())"/>
		<br/>
		<div class="bouton clicable bouton_deplacement gauche" onclick="updateY(Y()-PAS_DEPLACEMENT_BOUTON_PLUS)">-<br/>-</div>
		<div class="bouton clicable bouton_deplacement gauche" onclick="updateY(Y()-PAS_DEPLACEMENT_BOUTON)">-</div>
		<div class="bouton bouton_deplacement centre" style="background-color:#DDFFDD;"><img src="./sources/images/depY.svg" alt="Y"/></div>
		<div class="bouton clicable bouton_deplacement droite" onclick="updateY(Y()+PAS_DEPLACEMENT_BOUTON)">+</div>
		<div class="bouton clicable bouton_deplacement droite" onclick="updateY(Y()+PAS_DEPLACEMENT_BOUTON_PLUS)">+<br/>+</div>
		<br/>
		<input type="range" id="input_range_Y" name="input_range_Y" min="0" max="0.8" step="0.001" oninput="updateY($(this).val())"/>
		<br/>
		<div class="bouton clicable bouton_deplacement gauche" onclick="updateZ(Z()-PAS_DEPLACEMENT_BOUTON_PLUS)">-<br/>-</div>
		<div class="bouton clicable bouton_deplacement gauche" onclick="updateZ(Z()-PAS_DEPLACEMENT_BOUTON)">-</div>
		<div class="bouton bouton_deplacement centre" style="background-color:#DDDDFF;"><img src="./sources/images/depZ.svg" alt="Y"/></div>
		<div class="bouton clicable bouton_deplacement droite" onclick="updateZ(Z()+PAS_DEPLACEMENT_BOUTON)">+</div>
		<div class="bouton clicable bouton_deplacement droite" onclick="updateZ(Z()+PAS_DEPLACEMENT_BOUTON_PLUS)">+<br/>+</div>
		<br/>
		<input type="range" id="input_range_Z" name="input_range_Z" min="0" max="0.4" step="0.001" oninput="updateZ($(this).val())"/>
		<br/>
		<div class="bouton clicable carre" onclick="ouvreBoiteOuvrirPiece()"><img src="./sources/images/icone_ouvrir.svg" alt="[Ouvrir]" title="Ouvrir une pièce à mesurer"></div>
		<div class="bouton clicable carre affichePiece" id="boutonAfficheCachePiece" title="Afficher/Cacher la pièce" onclick="afficheCachePiece()"></div>
		<div class="bouton clicable carre afficheMachine" id="boutonAfficheCacheMachine" title="Affiche/Cacher machine" onclick="afficheCacheMachine()"></div>
		<div class="bouton clicable carre afficheReperePalpeur" id="boutonAfficheCacheReperePalpeur" title="Afficher/Cacher le repère du palpeur"onclick="afficheCacheReperePalpeur()"></div>
		<div class="bouton clicable carre" onclick="ouvreBoiteAjouterItem()"><img src="./sources/images/plus.svg" title="Ajouter un élément" alt="[ + ]"/></div>
		<div class="bouton clicable carre" style="display:none;" id="conteneur_vrbouton">[Bouton VR]</div>
		
		
		<!-- ARBRE DES ITEMS -------- -->
		<div id="arbre">
		</div>
		
		<div id="mesures" style="display:none;">
			Mesures :<br/>
			<textarea readonly id="liste_mesures" rows="30">
			</textarea>
		</div>
		
		<?php
		if(strpos($_SERVER['HTTP_USER_AGENT'],"Quest 2") != false)
		{
			echo '<div class="bouton" onclick="envoieDonneesVersServeur()">données --> Serveur</div>';
		}
		?>
		
		<a href="https://contact.allais.eu/?site=MMT" title="Contact" style="display:inline-block;margin-top:20px;"><img src="./sources/images/icone_mail.png" alt=Contact/></a>
		
	</div>
