<div id="boite_new_item" title="Ajouter un élément">

	<div id="tab_new_item">
		<!-- Liste des onglets "new items" -->
		<ul>
			<li><a href="#tab_new_item_nuage"><img width="50px;" src="./sources/images/bouton_nuage.svg" alt="***"/><br/>Nuage</a></li>
			<li><a href="#tab_new_item_plan"><img width="50px;" src="./sources/images/bouton_plan.svg" alt="/_/"/><br/>Plan</a></li>
			<li><a href="#tab_new_item_cylindre"><img width="50px;" src="./sources/images/bouton_cylindre.svg" alt="C_O"/><br/>Cylindre</a></li>
		</ul>
		
		<!-- Onglets "nouveau nuage" -->
		<div id="tab_new_item_nuage">
			<p>Créer un nouveau nuage de mesures de points.</p>
			<form>
				<label for="tab_new_item_nuage_nom">Nom du nouveau : </label>
				<input type="text" name="tab_new_item_nuage_nom" id="tab_new_item_nuage_nom"/>
				<br/>
				<label for="tab_new_item_nuage_couleur">Couleur : </label>
				<input type="color" name="tab_new_item_nuage_couleur" id="tab_new_item_nuage_couleur" value="#FF0000"/>
			</form>
			<!-- Liste des manière de définir le nuage de point -->
			<div id="tab_new_item_nuage_methode">
				<ul>
					<li><a href="#tab_new_item_nuage_vierge">Nuage vierge</a></li>
					<li><a href="#tab_new_item_nuage_assemblage">Fusionner nuages</a></li>
				</ul>
				<div id="tab_new_item_nuage_vierge">
					(Rien à faire)
				</div>
				<div id="tab_new_item_nuage_assemblage">
					<!--<form>
					 	<label for="tab_new_item_nuage_assemblage_nuage1">Nuage 1 : </label>
							<select id="tab_new_item_nuage_assemblage_nuage1">
							</select>
						<label for="tab_new_item_nuage_assemblage_nuage2">Nuage 2 : </label>
							<select id="tab_new_item_nuage_assemblage_nuage2">
							</select>
					</form>-->
					<div id="tab_new_item_bouton_assemble_ajoute_nuages" onclick="tab_new_item_assemble_ajoute_nuage()">Ajouter un nuage à fusionner</div>
					<div id="tab_new_item_liste_assemble_nuage"></div>
				</div>
			</div>
		</div>
		
		<!-- Onglets "nouveau plan" ----------------------------------- -->
		<div id="tab_new_item_plan">
			<p>Créer un nouveau plan à partir d'une équation ou d'autres éléments.</p>
			<form>
				<label for="tab_new_item_plan_nom">Nom : </label>
				<input type="text" name="tab_new_item_plan_nom" id="tab_new_item_plan_nom"/>
				<br/>
				<label for="tab_new_item_nuage_couleur">Couleur : </label>
				<input type="color" name="tab_new_item_nuage_couleur" id="tab_new_item_nuage_couleur" value="#00FF00"/>
			</form>
			
			<!-- Liste des manière de définir le plan -->
			<div id="tab_new_item_plan_methode">
				<ul>
					<li><a href="#tab_new_item_plan_equation">Équation</a></li>
					<li><a href="#tab_new_item_plan_contraintes">Contraintes de position</a></li>
				</ul>
				<!-- Plan par équation -->
				<div id="tab_new_item_plan_equation">
					<form>
						Équation du plan :<br/>
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_plan_A" placeholder="a" name="tab_new_item_plan_A" value="0"/><label for="tab_new_item_plan_A"> × X</label>
						+
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_plan_B" placeholder="b" name="tab_new_item_plan_B" value="0"/><label for="tab_new_item_plan_B"> × Y</label>
						+
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_plan_C" placeholder="c" name="tab_new_item_plan_C" value="1"/><label for="tab_new_item_plan_C"> × Z</label>
						+
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_plan_D" placeholder="d" name="tab_new_item_plan_D" value="0"/><label for="tab_new_item_plan_D"> </label>
						=0
					</form>
				</div>
				<!-- Plan par contraintes -->
				<div id="tab_new_item_plan_contraintes">
					<div id="tab_new_item_bouton_add_contrainte_plan" onclick="tab_new_item_ajouteContrainte_plan()">Ajouter une contrainte à respecter</div>
					<div id="tab_new_item_liste_contraintes_plan"></div>
				</div>
			</div>
			
		</div>
		
		
		
		<!-- Onglets "nouveau nuage" ------------------------------------ -->
		<div id="tab_new_item_cylindre">
			<p>Créer un nouveau cylindre.</p>
			<form>
				<label for="tab_new_item_cylindre_nom">Nom : </label>
				<input type="text" name="tab_new_item_cylindre_nom" id="tab_new_item_cylindre_nom"/>
				<br/>
				<label for="tab_new_item_cylindre_couleur">Couleur : </label>
				<input type="color" name="tab_new_item_cylindre_couleur" id="tab_new_item_cylindre_couleur" value="#00FF00"/>
			</form>
			
			
			<!-- Liste des manière de définir le cylindre -->
			<div id="tab_new_item_cylindre_methode">
				<ul>
					<li><a href="#tab_new_item_cylindre_equation">Coordonnées</a></li>
					<li><a href="#tab_new_item_cylindre_contraintes">Contraintes de position</a></li>
				</ul>
				<div id="tab_new_item_cylindre_equation">
					<form>
						<label for="tab_new_item_cylindre_Px">Point central du cylindre :</label> ( 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cylindre_Px" placeholder="x" name="tab_new_item_cylindre_Px" value="0"/>
						;
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cylindre_Py" placeholder="y" name="tab_new_item_cylindre_Py" value="0"/>
						;
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cylindre_Pz" placeholder="z" name="tab_new_item_cylindre_Pz" value="0"/>
						)
						<br/><label for="tab_new_item_cylindre_Vx">Vecteur directeur :</label> ( 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cylindre_Vx" placeholder="V.x" name="tab_new_item_cylindre_Vx" value="1"/>
						; 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cylindre_Vy" placeholder="V.y" name="tab_new_item_cylindre_Vy" value="0"/>
						; 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cylindre_Vz" placeholder="V.z" name="tab_new_item_cylindre_Vz" value="0"/>
						)
						<br/>
						<label for="tab_new_item_cylindre_R">Rayon : </label> 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cylindre_R" placeholder="R" name="tab_new_item_cylindre_R" value="0.3"/>
					</form>
				</div>
				<!-- Cylindre par contraintes -->
				<div id="tab_new_item_cylindre_contraintes">
					<div id="tab_new_item_bouton_add_contrainte_cylindre" onclick="tab_new_item_ajouteContrainte_cylindre()">Ajouter une contrainte à respecter</div>
					<div id="tab_new_item_liste_contraintes_cylindre"></div>
				</div>
			</div>
		</div>
	</div>
</div>
	
	

<script>
	$("#boite_new_item").dialog({
					autoOpen:false,
					width: "800px",
					buttons:{
						Annuler: function() {$(this).dialog("close")},
						Ajouter : function()	{
										$(this).dialog("close");
										ouvreModal("Calcul...");
										// Ci dessous : astuce pour laisser le temps à l'écran de se mettre à jour
										setTimeout(function()
												{ajouterItemFromDialog();fermeModal();}
												,100);
									}
						}
				});
				
				
	$("#tab_new_item").tabs();
	$("#tab_new_item_nuage_methode").tabs();
	$("#tab_new_item_plan_methode").tabs({ active: 1 });
	$("#tab_new_item_cylindre_methode").tabs({ active: 1 });
</script>







<!-- SUPPRESSION D'UN ITEM ----------------------- -->
<div id="boite_delete_item" title="Supprimer un élément" data-id="-1">
	<p>Voulez-vous vraiment supprimer l'item "<strong style="font-weight:bold" id="boite_delete_nom_item"></strong>" ?</p>
</div>
	
	

<script>
	$("#boite_delete_item").dialog({
					autoOpen:false,
					width: "800px",
					buttons:{
						Annuler: function() {$(this).dialog("close")},
						Supprimer : function(){supprimeItemFromDialog();$(this).dialog("close")}
						}
				});
</script>




<!-- MESURE D'ÉLÉMENTS PAR RAPPORT AU PLAN ----------------------- -->
<div id="boite_mesure_plan" title="Mesures à partir d'un plan" data-id="-1">
	<p>
		<label for="boite_mesure_plan_choix_item">Réaliser des mesures entre le plan et :</label>
		<select name="boite_mesure_plan_choix_item" id="boite_mesure_plan_choix_item" onchange="updateCalculMesurePlan();">
		</select>
	</p>
	<div id="boite_mesure_plan_mesures">
	</div>
</div>
	
	

<script>
	$("#boite_mesure_plan").dialog({
					autoOpen:false,
					width: "800px",
					modal: true,
					buttons:{
						Annuler: function() {$(this).dialog("close")}
						}
				});
</script>




<!-- MESURE D'ÉLÉMENTS PAR RAPPORT AU CYLINDRE ----------------------- -->
<div id="boite_mesure_cylindre" title="Mesures à partir d'un cylindre" data-id="-1">
	<p>
		<label for="boite_mesure_cylindre_choix_item">Réaliser des mesures entre le cylindre et :</label>
		<select name="boite_mesure_cylindre_choix_item" id="boite_mesure_cylindre_choix_item" onchange="updateCalculMesureCylindre();">
		</select>
	</p>
	<div id="boite_mesure_cylindre_mesures">
	</div>
</div>
	
	

<script>
	$("#boite_mesure_cylindre").dialog({
					autoOpen:false,
					width: "800px",
					modal: true,
					buttons:{
						Annuler: function() {$(this).dialog("close")}
						}
				});
</script>







<!-- OUVRIR UNE PIECE ----------------------- -->
<div id="boite_ouvrir_piece" title="Ouvrir une pièce">
	<div id="boite_ouvrir_piece_contenu">
	</div>
</div>
	
	

<script>
	$("#boite_ouvrir_piece").dialog({
					autoOpen:false,
					width: "800px",
					modal: true,
					buttons:{
						Fermer: function() {$(this).dialog("close")}
						}
				});
</script>







<!-- SAUVEGARDES LES DONNEES SUR LE SERVEUR (VALIDATION) ----------------------- -->
<div id="boite_valider_enregistrer_depuis_Occulus" title="Enregistrement des données sur le serveur">
	<p>Les données ont été enregistrées sur le serveur (l'ancien fichier a été écrasé).</p>
	<p>Le fichier est accessible dans <a href="https://<?php echo  $_SERVER['HTTP_HOST'].parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);?>/sauvegardes">https://<?php echo  $_SERVER['HTTP_HOST'].parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);?>sauvegardes</a>.</p>
</div>
	
	

<script>
	$("#boite_valider_enregistrer_depuis_Occulus").dialog({
					autoOpen:false,
					width: "800px",
					modal: true,
					buttons:{
						Fermer: function() {$(this).dialog("close")}
						}
				});
</script>
