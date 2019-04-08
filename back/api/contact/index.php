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

    $contact = get_posts([
        'post_type' => 'contact'
    ]);
    $email_from = get_post_meta($contact[0]->ID, 'email', true);
    $name_from = get_post_meta($contact[0]->ID, 'name', true);
    $server_SMTP = get_post_meta($contact[0]->ID, 'server_SMTP', true);
    $type_of_encription = get_post_meta($contact[0]->ID, 'type_of_encription', true);
    $port_SMTP = get_post_meta($contact[0]->ID, 'port_SMTP', true);
    $username = get_post_meta($contact[0]->ID, 'username', true);
    $password = get_post_meta($contact[0]->ID, 'password', true);
    $email_to = get_post_meta($contact[0]->ID, 'first_recipient', true);
    $second_email_to = get_post_meta($contact[0]->ID, 'second_recipient', true);
    $third_email_to = get_post_meta($contact[0]->ID, 'third_recipient', true);



    $mail = new PHPMailer;
    $mail->CharSet = 'UTF-8';

    $mail->isSMTP();					    // Active l'envoi via SMTP
    $mail->Host = $server_SMTP;			    // À remplacer par le nom de votre serveur SMTP
    $mail->SMTPAuth = true;				    // Active l'authentification par SMTP
    $mail->Username = $username;            // Nom d'utilisateur SMTP (votre adresse email complète)
    $mail->Password = $password;			// Mot de passe de l'adresse email indiquée précédemment
    $mail->Port = $port_SMTP;			    // Port SMTP
    $mail->SMTPSecure = $type_of_encription;// Utiliser SSL
    $mail->isHTML(true);					// Format de l'email en HTML

    $mail->From = $email_from;	            // L'adresse mail de l'emetteur du mail (en général identique à l'adresse utilisée pour l'authentification SMTP)
    $mail->FromName = $name_from;           // Le nom de l'emetteur qui s'affichera dans le mail
    $mail->addAddress($email_to);	        // Un premier destinataire
    if(!empty($second_email_to)){ 
    $mail->addAddress($second_email_to);
    }
    if(!empty($third_email_to)){		    // Un second destinataire (facultatif)
    $mail->addAddress($third_email_to);
    }                                       // Possibilité de répliquer la ligne pour plus de destinataires
    $mail->addReplyTo($email);			    // Pour ajouter l'adresse à laquelle répondre (en général celle de la personne ayant rempli le formulaire)
    //$mail->addCC('cc@example.com');	    // Pour ajouter un champ Cc
    //$mail->addBCC('bcc@example.com');	    // Pour ajouter un champ Cci

    $mail->Subject = 'The Fat Bastard official - ' . $form_subject;			    // Le sujet de l'email
    $mail->Body    = "Name: $name \n\n<br>Email: $email \n\n<br>Message: $comments";	// Le contenu du mail en HTML
    $mail->AltBody = "Name: $name \n\n<br>Email: $email \n\n<br>Message: $comments";	// Le contenu du mail au format texte


        if(!$mail->send()) { 
            echo 'Une erreur est survenue : le message ne peut être envoyé.';
            echo 'Erreur: ' . $mail->ErrorInfo;
        } else {
            echo 'Message envoyé';
        }
}
   