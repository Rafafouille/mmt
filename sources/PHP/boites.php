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
	
	
<!--
	<form id="dialog_new_item">
		<label for="new_item_liste">Choix de l'élément à ajouter</label>
		<select name="new_item_liste" id="new_item_liste" onchange="update_boite_new_item()">

		    <option value="nuage">Nouveau nuage de point</option>
		    <option value="plan_RMS">Plan des moindres carrés</option>
		</select>
		<div id="boite_new_plan_RMS">
			Nuage de point (de 3 points ou plus)
			<select name="new_plan_RMS_nuage" id="new_plan_RMS_nuage">
			</select>
		</div>
	</form>
	-->
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
