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
	
		<div class="bouton bouton_deplacement gauche" onclick="updateX(X()-PAS_DEPLACEMENT_BOUTON_PLUS)">-<br/>-</div>
		<div class="bouton bouton_deplacement gauche" onclick="updateX(X()-PAS_DEPLACEMENT_BOUTON)">-</div>
		<div class="bouton bouton_deplacement centre" style="background-color:#FFDDDD;"><img src="./sources/images/depX.svg" alt="X"/></div>
		<div class="bouton bouton_deplacement droite" onclick="updateX(X()+PAS_DEPLACEMENT_BOUTON)">+</div>
		<div class="bouton bouton_deplacement droite" onclick="updateX(X()+PAS_DEPLACEMENT_BOUTON_PLUS)">+<br/>+</div>
		<br/>
		<input type="range" id="input_range_X" name="input_range_X" min="0" max="0.8" step="0.001" oninput="updateX($(this).val())"/>
		<br/>
		<div class="bouton bouton_deplacement gauche" onclick="updateY(Y()-PAS_DEPLACEMENT_BOUTON_PLUS)">-<br/>-</div>
		<div class="bouton bouton_deplacement gauche" onclick="updateY(Y()-PAS_DEPLACEMENT_BOUTON)">-</div>
		<div class="bouton bouton_deplacement centre" style="background-color:#DDFFDD;"><img src="./sources/images/depY.svg" alt="Y"/></div>
		<div class="bouton bouton_deplacement droite" onclick="updateY(Y()+PAS_DEPLACEMENT_BOUTON)">+</div>
		<div class="bouton bouton_deplacement droite" onclick="updateY(Y()+PAS_DEPLACEMENT_BOUTON_PLUS)">+<br/>+</div>
		<br/>
		<input type="range" id="input_range_Y" name="input_range_Y" min="0" max="0.8" step="0.001" oninput="updateY($(this).val())"/>
		<br/>
		<div class="bouton bouton_deplacement gauche" onclick="updateZ(Z()-PAS_DEPLACEMENT_BOUTON_PLUS)">-<br/>-</div>
		<div class="bouton bouton_deplacement gauche" onclick="updateZ(Z()-PAS_DEPLACEMENT_BOUTON)">-</div>
		<div class="bouton bouton_deplacement centre" style="background-color:#DDDDFF;"><img src="./sources/images/depZ.svg" alt="Y"/></div>
		<div class="bouton bouton_deplacement droite" onclick="updateZ(Z()+PAS_DEPLACEMENT_BOUTON)">+</div>
		<div class="bouton bouton_deplacement droite" onclick="updateZ(Z()+PAS_DEPLACEMENT_BOUTON_PLUS)">+<br/>+</div>
		<br/>
		<input type="range" id="input_range_Z" name="input_range_Z" min="0" max="0.4" step="0.001" oninput="updateZ($(this).val())"/>
		<br/>
		<div class="bouton" onclick="ouvreBoiteOuvrirPiece()">Ouvrir une pièce</div>
		<div class="bouton" onclick="PIECE.visible=!PIECE.visible">Affiche/Cache pièce</div>
		<div class="bouton" onclick="afficheCacheMachine()">Affiche/Cache machine</div>
		<div class="bouton" onclick="REPERE_PALPEUR.visible=!REPERE_PALPEUR.visible">Affiche/Cache repere</div>
		<div id="vrbouton">[Bouton VR]</div>
		
		<div class="bouton" onclick="ouvreBoiteAjouterItem()">+ Ajouter</div>
		<div id="arbre">
		</div>
		
		<div id="mesures">
			Mesures :<br/>
			<textarea readonly id="liste_mesures" rows="30">
			</textarea>
		</div>
	</div>
