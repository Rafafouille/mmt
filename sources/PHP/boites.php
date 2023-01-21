<div id="boite_new_item" title="Ajouter un élément">
	<form id="dialog_new_item">
		<label for="new_item_liste">Choix de l'élément à ajouter</label>
		<select name="new_item_liste" id="new_item_liste" onchange="update_boite_new_item()">
		    <!--<option value="base">Item de base</option>-->
		    <option value="nuage">Nouveau nuage de point</option>
		    <option value="RMS">Plan des moindres carrés</option>
		</select>
		<div id="boite_new_plan_RMS">
			Nuage de point (de 3 points ou plus)
			<select name="new_plan_RMS" id="new_plan_RMS">
			</select>
		</div>
	</form>
</div>

<script>
	$("#boite_new_item").dialog({
					autoOpen:false,
					buttons:{
						Annuler: function() {$(this).dialog("close")},
						Ajouter : function(){ajouterItemFromDialog();$(this).dialog("close")}
						}
				});
</script>
