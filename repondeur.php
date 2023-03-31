<?php

$action = isset($_POST['action'])?$_POST['action']:"";


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

?>
