<div id="menu">
		<div id="form_coordonnees">
			<label for="input_coord_X">X :</label>
			<input type="number" id="input_coord_X" name="input_coord_X" placeholder="X" value="0" onchange="updateX(Number(this.value))"/>
			<br/>
			<label for="input_coord_Y">Y :</label>
			<input type="number" id="input_coord_Y" name="input_coord_Y" placeholder="Y" value="0" onchange="updateY(Number(this.value))"/>
			<br/>
			<label for="input_coord_Z">Z :</label>
			<input type="number" id="input_coord_Z" name="input_coord_Z" placeholder="Z" value="0" onchange="updateZ(Number(this.value))"/>
		</div>
	
		<div class="bouton bouton_deplacement gauche" onclick="updateX(X()-PAS_DEPLACEMENT_BOUTON_PLUS)">-<br/>-</div>
		<div class="bouton bouton_deplacement gauche" onclick="updateX(X()-PAS_DEPLACEMENT_BOUTON)">-</div>
		<div class="bouton bouton_deplacement centre"><img src="./sources/images/depX.svg" alt="X"/></div>
		<div class="bouton bouton_deplacement droite" onclick="updateX(X()+PAS_DEPLACEMENT_BOUTON)">+</div>
		<div class="bouton bouton_deplacement droite" onclick="updateX(X()+PAS_DEPLACEMENT_BOUTON_PLUS)">+<br/>+</div>
		<br/>
		<div class="bouton bouton_deplacement gauche" onclick="updateY(Y()-PAS_DEPLACEMENT_BOUTON_PLUS)">-<br/>-</div>
		<div class="bouton bouton_deplacement gauche" onclick="updateY(Y()-PAS_DEPLACEMENT_BOUTON)">-</div>
		<div class="bouton bouton_deplacement centre"><img src="./sources/images/depY.svg" alt="Y"/></div>
		<div class="bouton bouton_deplacement droite" onclick="updateY(Y()+PAS_DEPLACEMENT_BOUTON)">+</div>
		<div class="bouton bouton_deplacement droite" onclick="updateY(Y()+PAS_DEPLACEMENT_BOUTON_PLUS)">+<br/>+</div>
		<br/>
		<div class="bouton bouton_deplacement gauche" onclick="updateZ(Z()-PAS_DEPLACEMENT_BOUTON_PLUS)">-<br/>-</div>
		<div class="bouton bouton_deplacement gauche" onclick="updateZ(Z()-PAS_DEPLACEMENT_BOUTON)">-</div>
		<div class="bouton bouton_deplacement centre"><img src="./sources/images/depZ.svg" alt="Y"/></div>
		<div class="bouton bouton_deplacement droite" onclick="updateZ(Z()+PAS_DEPLACEMENT_BOUTON)">+</div>
		<div class="bouton bouton_deplacement droite" onclick="updateZ(Z()+PAS_DEPLACEMENT_BOUTON_PLUS)">+<br/>+</div>
		<br/>
		<div class="bouton" onclick="PIECE.visible=!PIECE.visible">Affiche/Cache pièce</div>
		<div class="bouton" onclick="afficheCacheMachine()">Affiche/Cache machine</div>
		<div id="vrbouton">[Bouton VR]</div>
		<textarea readonly id="liste_mesures" rows="10">
		</textarea>
	</div>
