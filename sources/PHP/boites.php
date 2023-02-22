<div id="boite_new_item" title="Ajouter un élément">

	<div id="tab_new_item">
		<ul>
			<li><a href="#tab_new_item_nuage"><img width="50px;" src="./sources/images/bouton_nuage.svg" alt="***"/><br/>Nuage</a></li>
			<li><a href="#tab_new_item_plan"><img width="50px;" src="./sources/images/bouton_plan.svg" alt="***"/><br/>Plan</a></li>
		</ul>
		<div id="tab_new_item_nuage">
			<p>Créer un nouveau nuage de mesures de points.</p>
			<form>
				<label for="tab_new_item_nuage_nom">Nom : </label>
				<input type="text" name="tab_new_item_nuage_nom" id="tab_new_item_nuage_nom"/>
				<br/>
				<label for="tab_new_item_nuage_couleur">Couleur : </label>
				<input type="color" name="tab_new_item_nuage_couleur" id="tab_new_item_nuage_couleur" value="#FF0000"/>
			</form>
		</div>
		<div id="tab_new_item_plan">
			<p>Créer un nouveau plan à partir d'une équation ou d'autres éléments.</p>
			<form>
				<label for="tab_new_item_plan_nom">Nom : </label>
				<input type="text" name="tab_new_item_plan_nom" id="tab_new_item_plan_nom"/>
				<br/>
				<label for="tab_new_item_nuage_couleur">Couleur : </label>
				<input type="color" name="tab_new_item_nuage_couleur" id="tab_new_item_nuage_couleur" value="#00FF00"/>
			</form>
			
			<div id="tab_new_item_bouton_add_contrainte_plan" onclick="tab_new_item_ajouteContrainte_plan()">Ajouter une contrainte à respecter</div>
			<div id="tab_new_item_liste_contraintes_plan">
			</div>
			
		</div>
	</div>
	
	

<script>
	$("#boite_new_item").dialog({
					autoOpen:false,
					width: "800px",
					buttons:{
						Annuler: function() {$(this).dialog("close")},
						Ajouter : function(){ajouterItemFromDialog();$(this).dialog("close")}
						}
				});
				
				
	$("#tab_new_item").tabs()
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
				
				
	$("#tab_new_item").tabs()
</script>
