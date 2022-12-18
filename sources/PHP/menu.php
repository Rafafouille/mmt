<div id="menu">
		<div id="form_coordonnees">
			<input type="number" id="input_coord_X" name="input_coord_X" placeholder="X" value="0" onchange="updateX(Number(this.value))"/>
			<input type="number" id="input_coord_Y" name="input_coord_Y" placeholder="Y" value="0" onchange="updateY(Number(this.value))"/>
			<input type="number" id="input_coord_Z" name="input_coord_Z" placeholder="Z" value="0" onchange="updateZ(Number(this.value))"/>
		</div>
	
		<div class="bouton bouton_deplacement gauche">--</div>
		<div class="bouton bouton_deplacement gauche">-</div>
		<div class="bouton bouton_deplacement centre"><img src="./sources/images/depX.svg" alt="X"/></div>
		<div class="bouton bouton_deplacement droite">+</div>
		<div class="bouton bouton_deplacement droite">++</div>
	
		<div class="bouton bouton_deplacement" onclick="updateX(X()-PAS_DEPLACEMENT_BOUTON_PLUS)">--</div>
		<div class="bouton bouton_deplacement" onclick="updateX(X()-PAS_DEPLACEMENT_BOUTON)">X-</div>
		<div class="bouton bouton_deplacement" onclick="updateX(X()+PAS_DEPLACEMENT_BOUTON)">X+</div>
		<div class="bouton bouton_deplacement" onclick="updateX(X()+PAS_DEPLACEMENT_BOUTON_PLUS)">++</div>
		<br/>
		<div class="bouton bouton_deplacement" onclick="updateY(Y()-PAS_DEPLACEMENT_BOUTON_PLUS)">--</div>
		<div class="bouton bouton_deplacement" onclick="updateY(Y()-PAS_DEPLACEMENT_BOUTON)">Y-</div>
		<div class="bouton bouton_deplacement" onclick="updateY(Y()+PAS_DEPLACEMENT_BOUTON)">Y+</div>
		<div class="bouton bouton_deplacement" onclick="updateY(Y()+PAS_DEPLACEMENT_BOUTON_PLUS)">++</div>
		<br/>
		<div class="bouton bouton_deplacement" onclick="updateZ(Z()-PAS_DEPLACEMENT_BOUTON_PLUS)">--</div>
		<div class="bouton bouton_deplacement" onclick="updateZ(Z()-PAS_DEPLACEMENT_BOUTON)">Z-</div>
		<div class="bouton bouton_deplacement" onclick="updateZ(Z()+PAS_DEPLACEMENT_BOUTON)">Z+</div>
		<div class="bouton bouton_deplacement" onclick="updateZ(Z()+PAS_DEPLACEMENT_BOUTON_PLUS)">++</div>
		<br/>
		<div class="bouton" onclick="PIECE.visible=!PIECE.visible">Affiche/Cache pièce</div>
		<div class="bouton" onclick="afficheCacheMachine()">Affiche/Cache machine</div>
		
		<textarea readonly id="liste_mesures"></textarea>
	</div>
