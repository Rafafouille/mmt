<!DOCTYPE html>
<html lang="fr">
	<head>
		<!-- En-tête de la page -->
		<meta charset="utf-8" />
		<meta name="description" content="Documentation de la Machine à Mesurée Virtuelle."/>
		<title>MMT Virtuelle - Documentation</title>
		<link rel="stylesheet" href="./sources/style/style.css" />
		<link rel="icon" type="image/png" href="favicon.ico" />
		<meta name="author" lang="fr" content="Raphaël ALLAIS">
		<link rel="stylesheet" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css">
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
		<script src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
		<script>


		function ouvreFerme(cont,bouton)
		{
					if(!cont.is(":visible"))
						bouton.css("transform",'rotate(0deg)');
					else
						bouton.css("transform",'rotate(180deg)');
					cont.slideToggle("slow");
		}
		
		function ouvreFermeSuivant(obj)
		{
			
		}


		$(document).ready(function(){
				$(".paragraphe h2, .paragraphe .boutonDeveloppe").click(function(){
					var cont=$(this).parent().children(".contenuParagraphe");
					var bouton=$(this).parent().children(".boutonDeveloppe");
					ouvreFerme(cont,bouton);
				});
				$('#boutonAnciennesVersions').click(function(){
					$('#anciennesVersions').slideToggle('slow');
				})
				$("h3, h4").click(function(){
					$(this).next().slideToggle("slow");
				});

		});
		</script>


	</head>
	<body>
		<div id="contenu">
			<h1 style="text-align:center;font-family:'arial'">Documentation pour la MMT Virtuelle</h1>
			
			<?php include("./sources/PHP/intro.php");?>
			<?php include("./sources/PHP/interface.php");?>
			<?php include("./sources/PHP/mesures.php");?>
			<?php include("./sources/PHP/analyse.php");?>
			<?php include("./sources/PHP/VR.php");?>
			<?php include("./sources/PHP/prog.php");?>
			<?php include("./sources/PHP/aPropos.php")?>
		
		</div>
		
		<script>
			$("a").attr("target","_blank")
		</script>
	</body>
</html>
