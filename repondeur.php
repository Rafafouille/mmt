<?php
// Init PHPmailer
use \PHPMailer as PHPMailer;
use \SMTP as SMTP;
use \Exception as Exception;
require './sources/PHP/PHPmailer/src/Exception.php';
require './sources/PHP/PHPmailer/src/PHPMailer.php';
require './sources/PHP/PHPmailer/src/SMTP.php';



$action = isset($_POST['action'])?$_POST['action']:"";


 



// ENVOIE LA LISTE DES PIECES A OUVRIR **************************************************
if($action=="getPieces")
{

	$liste=array();
	$dossiers_pieces = scandir("pieces");
	for($i=0;$i<sizeof($dossiers_pieces);$i++)
	{
		if($dossiers_pieces[$i]!="." && $dossiers_pieces[$i]!=".." && substr($dossiers_pieces[$i],0,1)!="_")
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





if($action == "envoieDonneeMail")
{
	// Variable à renvoyer
	$reponse = array(
			'OK'=>false,
			'message'=>"",
			'debug'=>""
			);
			
	// Récupération des données depuis le client
	$donnees = isset($_POST['donnees'])?$_POST['donnees']:0;
	$adresseMail = isset($_POST['mail'])?$_POST['mail']:"";

	//print_r($donnees);
	
	$TXT = "Mesures enregistrées le ".date('d/m/y')." à ".date('H:i')."\n";
						
	// Vérifions qu'il n'y ai pas d'entête dans les variables
	$regex_head = '/[\n\r]/';  
	if (!preg_match($regex_head, $adresseMail))
	{
		if(substr($_SERVER['HTTP_REFERER'],0,22) == "https://mmt.allais.eu/") // Origin locale du mail (?)
		{
			if(filter_var($adresseMail, FILTER_VALIDATE_EMAIL))// Le mail est-il au bon format ?
			{
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
								//echo "<<<<<".sizeof($item["donnees"]).">>>>>>>>>>>>";
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



						// Envoie par mail
						/*$headers = 'From: mmt@allais.eu'."\r\n";
						$headers .= "\r\n";
						
						$success = mail($mail, "[MMT] Export mesures", $TXT, $headers);
						
						if($success)
						{
							$reponse['OK']=true;
						}
						else
						{
							$reponse['message'] = "Erreur d'envoi de mail : ".print_r($error_get_last());
						}*/
						try {
							// Tentative de création d’une nouvelle instance de la classe PHPMailer, avec les exceptions activées
							$mail = new PHPMailer\PHPMailer\PHPMailer (true);
					
							// VOIR LA CONFIG ==>  https://www.ionos.fr/digitalguide/email/aspects-techniques/phpmailer/
					
							$mail->isSMTP();
							$mail->SMTPAuth = true;
							// Informations personnelles
							$mail->Host = "smtp.gmail.com";
							$mail->Port = 587;
							$mail->Username = "site.allais.eu@gmail.com";//"raph.allais@gmail.com";

							$mdp=""; // <-- Mot de passe par défaut (pour ne pas le sauver sur Github)
							if(file_exists("./sources/PHP/passPHPMailer.php"))
								{include "./sources/PHP/passPHPMailer.php";}

							$mail->Password = $mdp;
							$mail->SMTPSecure = 'tls';//PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
					
					
							// Expéditeur
							$mail->setFrom('site.allais.eu@gmail.com', 'MMT Virtuelle allais.eu');
							// Destinataire dont le nom peut également être indiqué en option
							$mail->addAddress($adresseMail);//, "nom");
							// Copie
							//$mail->addCC('allais.raphael@free.fr');
							// Copie cachée
							$mail->addBCC('allais.raphael@free.fr', 'Raphaël ALLAIS');
					
							$mail->isHTML(false);
							// Objet
							$mail->Subject = "[MMT] Export mesures";
							// HTML-Content
							$mail->Body = $TXT;
							//$mail->AltBody = 'Le texte comme simple élément textuel';
							// Ajouter une pièce jointe
							//$mail->addAttachment("/home/user/Desktop/image.png", "image.png");
					
							$mail->CharSet = 'UTF-8';
							$mail->Encoding = 'base64';
							$mail->send();
							
							$reponse['OK']=true;
						// (…)
						} catch (Exception $e) {
								//echo "Mailer Error: ".$e->getMessage();
								$reponse['message'] = "Erreur d'envoi de mail : ".$e->getMessage();
						}
				}
				else
				{
					$reponse['message']="Erreur : Pas de données envoyées";
				}
			}
			else
			{
				$reponse['message']="Erreur : Mail au mauvais format";
			}
		}
		else
		{
			$reponse['message']="Erreur : Origine non-locale : ".$_SERVER['HTTP_REFERER'] ;
		}
	}
	else
	{
		$reponse['message']="Erreur : Message non-conforme";
	}
	
	$reponse['debug'] = $TXT;
	$reponseJSON = json_encode($reponse);
	echo $reponseJSON;
}

?>
