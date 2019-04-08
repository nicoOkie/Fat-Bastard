<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require '../../PHPMailer/Exception.php';
require '../../PHPMailer/PHPMailer.php';
require '../../PHPMailer/SMTP.php'; 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$rest_json = file_get_contents ("php://input");
$_POST = json_decode ($rest_json, true);


if (empty (trim($_POST['inputName'])) || empty(trim($_POST['inputMail'])) || !filter_var (trim($_POST['inputMail']), FILTER_VALIDATE_EMAIL) || empty(trim($_POST['inputText']))) {
    $has_error = true;
}
if (!isset($has_error)) {
    http_response_code (200);
    $name = trim($_POST['inputName']);
    $email = trim($_POST['inputMail']);
    $form_subject = trim($_POST['inputSubject']);
    $comments = trim($_POST['inputText']);

    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';
    $mail->isSMTP();					            // Active l'envoi via SMTP
    $mail->Host = 'smtp.gmail.com';			        // À remplacer par le nom de votre serveur SMTP
    $mail->SMTPAuth = true;				        // Active l'authentification par SMTP
    $mail->Username = 'chapon.nicola@gmail.com';         // Nom d'utilisateur SMTP (votre adresse email complète)
    $mail->Password = '79trompette';			        // Mot de passe de l'adresse email indiquée précédemment
    $mail->Port = 465;					            // Port SMTP
    $mail->SMTPSecure = 'SSL';				        // Utiliser SSL
    $mail->isHTML(true);					        // Format de l'email en HTML
    $mail->From = 'chapon.nicola@gmail.com';			    // L'adresse mail de l'emetteur du mail (en général identique à l'adresse utilisée pour l'authentification SMTP)
    $mail->FromName = 'The Fat Bastard GangBand';   // Le nom de l'emetteur qui s'affichera dans le mail
    $mail->addAddress('chapon.nicola@gmail.com');		// Un premier destinataire
    //$mail->addAddress('ellen@example.com');		// Un second destifataire (facultatif)
                                                    // Possibilité de répliquer la ligne pour plus de destinataires
    $mail->addReplyTo($email);			            // Pour ajouter l'adresse à laquelle répondre (en général celle de la personne ayant rempli le formulaire)
    //$mail->addCC('cc@example.com');				// Pour ajouter un champ Cc
    //$mail->addBCC('bcc@example.com');			    // Pour ajouter un champ Cci
    $mail->Subject = 'The Fat Bastard official - ' . $form_subject;			        // Le sujet de l'email
    $mail->Body    = "Name: $name \n\nEmail: $email \n\nMessage: $comments";	// Le contenu du mail en HTML
    $mail->AltBody = "Name: $name \n\nEmail: $email \n\nMessage: $comments";	// Le contenu du mail au format texte
    //$email_to = get_post_meta($post->ID, 'email', TRUE);
        if(!$mail->send()) {
            echo 'Une erreur est survenue : le message ne peut être envoyé.';
            echo 'Erreur: ' . $mail->ErrorInfo;
        } else {
            echo 'Message envoyé';
        }
}