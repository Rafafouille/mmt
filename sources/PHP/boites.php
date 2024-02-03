<div id="boite_new_item" title="Ajouter un élément">

	<div id="tab_new_item">
		<!-- Liste des onglets "new items" -->
		<ul>
			<li><a href="#tab_new_item_nuage"><img width="50px;" src="./sources/images/bouton_nuage.svg" alt="***"/><br/>Nuage</a></li>
			<li><a href="#tab_new_item_plan"><img width="50px;" src="./sources/images/bouton_plan.svg" alt="/_/"/><br/>Plan</a></li>
			<li><a href="#tab_new_item_cylindre"><img width="50px;" src="./sources/images/bouton_cylindre.svg" alt="C_O"/><br/>Cylindre</a></li>
			<li><a href="#tab_new_item_droite"><img width="50px;" src="./sources/images/bouton_droite.svg" alt="---"/><br/>Droite</a></li>
			<li><a href="#tab_new_item_biplan"><img width="50px;" src="./sources/images/bouton_biplan.svg" alt="---"/><br/>Biplan</a></li>
			<li><a href="#tab_new_item_cercle"><img width="50px;" src="./sources/images/bouton_cercle.svg" alt="---"/><br/>Cercle</a></li>
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
					<div class="new_item_bouton_add_contrainte" id="tab_new_item_bouton_assemble_ajoute_nuages" onclick="tab_new_item_assemble_ajoute_nuage()">Ajouter un nuage à fusionner</div>
					<div class="new_item_liste_contraintes" id="tab_new_item_liste_assemble_nuage"></div>
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
				<label for="tab_new_item_plan_couleur">Couleur : </label>
				<input type="color" name="tab_new_item_plan_couleur" id="tab_new_item_plan_couleur" value="#00FF00"/>
			</form>
			
			<!-- Liste des manière de définir le plan -->
			<div id="tab_new_item_plan_methode">
				<ul>
					<li><a href="#tab_new_item_plan_equation">Équation</a></li>
					<li><a href="#tab_new_item_plan_contraintes">Contraintes de position</a></li>
					<li><a href="#tab_new_item_plan_decale">Copie décalée</a></li>
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
					<div class="new_item_bouton_add_contrainte" id="tab_new_item_bouton_add_contrainte_plan" onclick="tab_new_item_ajouteContrainte_plan()">Ajouter une contrainte à respecter</div>
					<div class="new_item_liste_contraintes" id="tab_new_item_liste_contraintes_plan"></div>
				</div>
				<!-- Plan à partir d'un autre plan -->
				<div id="tab_new_item_plan_decale">
					Crée une copie d'un plan, décalé par rapport à sa normale.
					<form>
						<label for="tab_new_item_plan_decale_reference">Plan de référence : </label>
							<select name="tab_new_item_plan_decale_reference" id="tab_new_item_plan_decale_reference">
							</select>
						<br/>
						<label for="tab_new_item_plan_decale_distance">Distance (en m) : </label>
							<input type="number" id="tab_new_item_plan_decale_distance" name="tab_new_item_plan_decale_distance" value="0">
							<div class="bouton_infobulle" title="Positif pour s'éloigner de l'origine ; négatif pour s'en rapprocher."></div>
					</form>
				</div>
			</div>
			
		</div>
		
		
		
		<!-- Onglets "nouveau cylindre" ------------------------------------ -->
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
					<li><a href="#tab_new_item_cylindre_contraintes">Contraintes</a></li>
					<li><a href="#tab_new_item_cylindre_droite">À partir d'une droite</a></li>
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
					<div class="new_item_bouton_add_contrainte" id="tab_new_item_bouton_add_contrainte_cylindre" onclick="tab_new_item_ajouteContrainte_cylindre()">Ajouter une contrainte à respecter</div>
					<div class="new_item_liste_contraintes" id="tab_new_item_liste_contraintes_cylindre"></div>
				</div>
				<!-- Cylindre depuis un axe -->
				<div id="tab_new_item_cylindre_droite">
					<p>Créer un cylindre à partir d'une droite qui servira d'axe.</p>
					<span for="tab_new_item_cylindre_droite_choix">Droite servant d'axe : </span>
						<select id="tab_new_item_cylindre_droite_choix">
						</select>
					</br>
					<span for="tab_new_item_cylindre_droite_rayon">Rayon : </span>
						<input type="number" name="tab_new_item_cylindre_droite_rayon" id="tab_new_item_cylindre_droite_rayon" min="0" value="0.1" placeholder="Rayon"/>
				</div>
			</div>
		</div>
		
		
		
		<!-- Onglets "nouvelle droite" ------------------------------------ -->
		<div id="tab_new_item_droite">
			<p>Créer une nouvelle droite.</p>
			<form>
				<label for="tab_new_item_droite_nom">Nom : </label>
				<input type="text" name="tab_new_item_droite_nom" id="tab_new_item_droite_nom"/>
				<br/>
				<label for="tab_new_item_droite_couleur">Couleur : </label>
				<input type="color" name="tab_new_item_droite_couleur" id="tab_new_item_droite_couleur" value="#0000FF"/>
			</form>
			
			
			<!-- Liste des manière de définir la droite -->
			<div id="tab_new_item_droite_methode">
				<ul>
					<li><a href="#tab_new_item_droite_equation">Coordonnées</a></li>
					<li><a href="#tab_new_item_droite_contraintes">Contraintes</a></li>
					<li><a href="#tab_new_item_droite_intersection">Intersection plans</a></li>
					<li><a href="#tab_new_item_droite_cylindre">Axe cylindre</a></li>
				</ul>
				<!-- Doite par équation -->
				<div id="tab_new_item_droite_equation">
					<form>
						<label for="tab_new_item_droite_Px">Point central de la droite :</label> ( 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_droite_Px" placeholder="x" name="tab_new_item_droite_Px" value="0"/>
						;
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_droite_Py" placeholder="y" name="tab_new_item_droite_Py" value="0"/>
						;
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_droite_Pz" placeholder="z" name="tab_new_item_droite_Pz" value="0"/>
						)
						<br/><label for="tab_new_item_cylindre_Vx">Vecteur directeur :</label> ( 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_droite_Vx" placeholder="V.x" name="tab_new_item_droite_Vx" value="1"/>
						; 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_droite_Vy" placeholder="V.y" name="tab_new_item_droite_Vy" value="0"/>
						; 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_droite_Vz" placeholder="V.z" name="tab_new_item_droite_Vz" value="0"/>
						)
					</form>
				</div>
				<!-- droite par contraintes -->
				<div id="tab_new_item_droite_contraintes">
					<div class="new_item_bouton_add_contrainte" id="tab_new_item_bouton_add_contrainte_droite" onclick="tab_new_item_ajouteContrainte_droite()">Ajouter une contrainte à respecter</div>
					<div class="new_item_liste_contraintes" id="tab_new_item_liste_contraintes_droite"></div>
				</div>
				<!-- droite par intersection -->
				<div id="tab_new_item_droite_intersection">
					<span for="tab_new_item_droite_intersection_plan1">Plan 1 : </span>
						<select id="tab_new_item_droite_intersection_plan1">
						</select>
					<br/>
					<span for="tab_new_item_droite_intersection_plan2">Plan 2 : </span>
						<select id="tab_new_item_droite_intersection_plan2">
						</select>
				</div>
				<!-- droite à partir d'un cylindre -->
				<div id="tab_new_item_droite_cylindre">
					<p>Extraire l'axe d'un cylindre</p>
					<span for="tab_new_item_droite_cylindre_choix">Cylindre de référence : </span>
						<select id="tab_new_item_droite_cylindre_choix">
						</select>
				</div>
			</div>
		</div>
		
		
		
		<!-- Onglets "nouveau biplan" ------------------------------------ -->
		<div id="tab_new_item_biplan">
			<p>Créer un nouveau biplan.</p>
			<form>
				<label for="tab_new_item_biplan_nom">Nom : </label>
				<input type="text" name="tab_new_item_biplan_nom" id="tab_new_item_biplan_nom"/>
				<br/>
				<label for="tab_new_item_biplan_couleur">Couleur : </label>
				<input type="color" name="tab_new_item_biplan_couleur" id="tab_new_item_biplan_couleur" value="#0000FF"/>
			</form>
			
			
			<!-- Liste des manière de définir le biplan -->
			<div id="tab_new_item_biplan_methode">
				<ul>
					<li><a href="#tab_new_item_biplan_equation">Coordonnées</a></li>
					<li><a href="#tab_new_item_biplan_plan">Plan médian</a></li>
				</ul>
				<!-- biplan par équation -->
				<div id="tab_new_item_biplan_equation">
					<form>
						Équation du plan médian :<br/>
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_biplan_A" placeholder="a" name="tab_new_item_biplan_A" value="0"/><label for="tab_new_item_biplan_A"> × X</label>
						+
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_biplan_B" placeholder="b" name="tab_new_item_biplan_B" value="0"/><label for="tab_new_item_biplan_B"> × Y</label>
						+
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_biplan_C" placeholder="c" name="tab_new_item_biplan_C" value="1"/><label for="tab_new_item_biplan_C"> × Z</label>
						+
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_biplan_D" placeholder="d" name="tab_new_item_biplan_D" value="0"/><label for="tab_new_item_biplan_D"> </label>
						=0
						<br/>
						<label for="tab_new_item_biplan_equation_ecart">Écart entre plans (en m) : </label>
							<input type="number" name="tab_new_item_biplan_equation_ecart" id="tab_new_item_biplan_equation_ecart" placeholder="ex : 0.01" value="0.01"/>
					</form>
				</div>
				<!-- biplan par plan médian -->
				<div id="tab_new_item_biplan_plan">
					<form>
						<label for="tab_new_item_biplan_planMedian">Plan médian : </label>
							<select name="tab_new_item_biplan_planMedian" id="tab_new_item_biplan_planMedian">
							</select>
						<br/>
						<label for="tab_new_item_biplan_plan_ecart">Écart entre plans (en m) : </label>
							<input type="number" name="tab_new_item_biplan_plan_ecart" id="tab_new_item_biplan_plan_ecart" placeholder="ex : 0.01" value="0.01"/>
					</form>
				</div>
			</div>
		</div>
		
		
		
		<!-- Onglets "nouveau cercle" ------------------------------------ -->
		<div id="tab_new_item_cercle">
			<p>Créer un nouveau cercle.</p>
			<form>
				<label for="tab_new_item_cercle_nom">Nom : </label>
				<input type="text" name="tab_new_item_cercle_nom" id="tab_new_item_cercle_nom"/>
				<br/>
				<label for="tab_new_item_cercle_couleur">Couleur : </label>
				<input type="color" name="tab_new_item_cercle_couleur" id="tab_new_item_cercle_couleur" value="#00FF00"/>
			</form>
			
			
			<!-- Liste des manière de définir le cercle -->
			<div id="tab_new_item_cercle_methode">
				<ul>
					<li><a href="#tab_new_item_cercle_equation">Coordonnées</a></li>
					<li><a href="#tab_new_item_cercle_contraintes">Contraintes</a></li>
				</ul>
				<div id="tab_new_item_cercle_equation">
					<form>
						<label for="tab_new_item_cercle_Px">Centre du cercle :</label> ( 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cercle_Px" placeholder="x" name="tab_new_item_cercle_Px" value="0"/>
						;
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cercle_Py" placeholder="y" name="tab_new_item_cercle_Py" value="0"/>
						;
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cercle_Pz" placeholder="z" name="tab_new_item_cercle_Pz" value="0"/>
						)
						<br/><label for="tab_new_item_cercle_Vx">Vecteur normal :</label> ( 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cercle_Vx" placeholder="V.x" name="tab_new_item_cercle_Vx" value="1"/>
						; 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cercle_Vy" placeholder="V.y" name="tab_new_item_cercle_Vy" value="0"/>
						; 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cercle_Vz" placeholder="V.z" name="tab_new_item_cercle_Vz" value="0"/>
						)
						<br/>
						<label for="tab_new_item_cylindre_R">Rayon : </label> 
						<input type="number" style="width: 80px;text-align:center;" id="tab_new_item_cercle_R" placeholder="R" name="tab_new_item_cercle_R" value="0.3"/>
					</form>
				</div>
				<!-- Cercle par contraintes -->
				<div id="tab_new_item_cercle_contraintes">
					<div class="new_item_bouton_add_contrainte" id="tab_new_item_bouton_add_contrainte_cercle" onclick="tab_new_item_ajouteContrainte_cercle()">Ajouter une contrainte à respecter</div>
					<div class="new_item_liste_contraintes" id="tab_new_item_liste_contraintes_cercle"></div>
				</div>
			</div>
		</div>
		
	</div>
</div>
	
	

<script>
	$("#boite_new_item").dialog({
					autoOpen:false,
					width: 800,
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
	$("#tab_new_item_droite_methode").tabs();
	$("#tab_new_item_biplan_methode").tabs({ active: 1 });
	$("#tab_new_item_cercle_methode").tabs({ active: 1 });
	
	
	
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




<!-- MESURE D'ÉLÉMENTS PAR RAPPORT A UNE DROITE ----------------------- -->
<div id="boite_mesure_droite" title="Mesures à partir d'une droite" data-id="-1">
	<p>
		<label for="boite_mesure_droite_choix_item">Réaliser des mesures entre la droite et :</label>
		<select name="boite_mesure_droite_choix_item" id="boite_mesure_droite_choix_item" onchange="updateCalculMesureDroite();">
		</select>
	</p>
	<div id="boite_mesure_droite_mesures">
	</div>
</div>
	
	

<script>
	$("#boite_mesure_droite").dialog({
					autoOpen:false,
					width: "800px",
					modal: true,
					buttons:{
						Annuler: function() {$(this).dialog("close")}
						}
				});
</script>




<!-- MESURE D'ÉLÉMENTS PAR RAPPORT AU BIPLAN ----------------------- -->
<div id="boite_mesure_biplan" title="Mesures à partir d'un biplan" data-id="-1">
	<p>
		<label for="boite_mesure_biplan_choix_item">Réaliser des mesures entre le biplan et :</label>
		<select name="boite_mesure_biplan_choix_item" id="boite_mesure_biplan_choix_item" onchange="updateCalculMesureBiplan();">
		</select>
	</p>
	<div id="boite_mesure_biplan_mesures">
	</div>
</div>
	
	

<script>
	$("#boite_mesure_biplan").dialog({
					autoOpen:false,
					width: "800px",
					modal: true,
					buttons:{
						Annuler: function() {$(this).dialog("close")}
						}
				});
</script>




<!-- MESURE D'ÉLÉMENTS PAR RAPPORT AU CERCLE ----------------------- -->
<div id="boite_mesure_cercle" title="Mesures à partir d'un cercle" data-id="-1">
	<p>
		<label for="boite_mesure_cercle_choix_item">Réaliser des mesures entre le cercle et :</label>
		<select name="boite_mesure_cercle_choix_item" id="boite_mesure_cercle_choix_item" onchange="updateCalculMesureCercle();">
		</select>
	</p>
	<div id="boite_mesure_cercle_mesures">
	</div>
</div>
	
	

<script>
	$("#boite_mesure_cercle").dialog({
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
					width: 800,
					maxHeight: 600,
					modal: true,
					buttons:{
						Fermer: function() {$(this).dialog("close")}
						}
				});
</script>





<!-- SAUVEGARDES LES DONNEES SUR LE SERVEUR (VALIDATION) ----------------------- -->

<div id="boite_envoie_vers_mail" title="Envoi des donnéespar mail">
	<p>Les mesures vont être envoyées par mail. (Il est possible qu'il soit catégoriser comme "spam")</p>
	<p><label for="input_email_envoi">Adresse mail :</label> <input type="email" id="input_email_envoi" name="input_email_envoi"/></p>
	<p id="message_erreur_mail"></p>
</div>
<script>
	$("#boite_envoie_vers_mail").dialog({
					autoOpen:false,
					width: "800px",
					modal: true,
					buttons:{
						Fermer: function() {$(this).dialog("close")},
						Envoyer: function() {envoieDonneesVersMail();}
						}
				});
</script>
<!-- SAUVEGARDES LES DONNEES SUR LE SERVEUR (VALIDATION) ----------------------- -->
<!--<div id="boite_valider_enregistrer_depuis_Occulus" title="Enregistrement des données sur le serveur">
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
</script>-->
