$(document).ready(function()
{

	// On empêche de pouvoir valider les formulaires avec la touche [ENTER]
	jQuery.each($("#boite_new_item").find('input'), function(){
		$(this).bind('keypress keydown keyup', function(e){
		   if(e.keyCode == 13)
			{
				e.preventDefault();
				
			}
		});
	});
	
	
}); // Fin de l'initialisation