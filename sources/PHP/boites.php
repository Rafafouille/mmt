<div id="boite_new_item" title="Ajouter un élément">
	<form id="dialog_new_item">
		<label for="new_item_liste">Choix de l'élément à ajouter</label>
		<select name="new_item_liste" id="new_item_liste">
		    <!--<option value="base">Item de base</option>-->
		    <option value="nuage">Nouveau nuage de point</option>
		</select>
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
