<?php

$action = isset($_POST['action'])?$_POST['action']:"";



// ENVOIE LA LISTE DES PIECES A OUVRIR **************************************************
if($action=="getPieces")
{

	$liste=array();
	$dossiers_pieces = scandir("pieces");
	for($i=0;$i<sizeof($dossiers_pieces);$i++)
	{
		if($dossiers_pieces[$i]!="." && $dossiers_pieces[$i]!="..")
		{
		
			$nom = $dossiers_pieces[$i];
			$image = "./pieces/".$dossiers_pieces[$i]."/icone.png";
			if(!file_exists($image))
				$image = "./sources/images/icone_engrenage.svg";
			$lien = $dossiers_pieces[$i];
		
		
			$infos = array(
					"nom"=>$nom,
					"image"=>$image,
					"lien"=>$lien
					);
			array_push($liste,$infos);
		}
	}
	$reponse=array(
		'pieces'=>$liste
		);
	
	$reponseJSON = json_encode($reponse);
	echo $reponseJSON;
}




// ENVOIE LA LISTE DES PIECES A OUVRIR **************************************************
if($action=="sauvegardeDonnées")
{
	// Variable à renvoyer
	$reponse = array(
			'OK'=>false,
			'message'=>"",
			'debug'=>""
			);
			
	$TXT = "Mesures enregistrées le ".date('d/m/y')." à ".date('H:i')."\n";
			
	// Récupération des données depuis le client
	$donnees = isset($_POST['donnees'])?$_POST['donnees']:0;
	

	if($donnees)
	{
			// Preparation des données dans une variable str =================
			for($i=0;$i<sizeof($donnees);$i++)
			{
				$item = $donnees[$i];
				$TXT .= "\n Données n°".strval($i+1)." ------------------------------------------\n\n";
				// NUAGE DE POINTS
				if($item["type"]=="nuage")
				{
					;
					$TXT .= "Nuage de points : ".$item['nom']."\n\n";
					$TXT .= "X	;	Y	;	Z\n";
					for($j=0;$j<sizeof($item['donnees']);$j++)
					{
						$mesure = $item['donnees'][$j];
						$TXT .= strval($mesure['x'])."	;	".strval(-$mesure['z'])."	;	".strval($mesure['y'])."\n";
					}
					$TXT .= "\n";
				}
				else if($item["type"]=="plan")// NUAGE DE POINTS
				{
					$TXT .= "Plan : ".$item['nom']."\n\n";
					$TXT .= "Equation : a.x + b.y + c.z + d = 0\n";
					$TXT .= "   a = ".strval($item["donnees"]["a"])."\n";
					$TXT .= "   b = ".strval($item["donnees"]["b"])."\n";
					$TXT .= "   c = ".strval($item["donnees"]["c"])."\n";
					$TXT .= "   d = ".strval($item["donnees"]["d"])."\n";
				}
			}
			// Enregistrement dans un fichier ==============================
				file_put_contents('sauvegardes/mesures.txt', $TXT);
			
			
			$reponse['OK']=true;
	}
	else
	{
			$reponse['message']="Pas de données envoyées";
	}
	
	
	$reponse['debug'] = $TXT;
	$reponseJSON = json_encode($reponse);
	echo $reponseJSON;
}

?>
