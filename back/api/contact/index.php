<?php
header("Access-Control-Allow-Origin: *");
header("Content-type: *");

$rest_json = file_get_contents ("php://input");
$_POST = json_decode ($rest_json, true);

if (empty (trim($_POST['inputName'])) || empty(trim($_POST['inputMail'])) || filter_var (trim($_POST['inputMail']), FILTER_VALIDATE_EMAIL) || empty(trim($_POST['inputText']))) {
    $has_error = true;
}

if (!isset($has_error)) {

    http_response_code (200);
    $name = trim($_POST['inputName']);
    $email_from = trim($_POST['inputMail']);
    $form_subject = trim($_POST['inputSubject']);
    $comments = trim($_POST['inputText']);

    $email_to = get_post_meta($post->ID, 'email', TRUE);
    $subject = 'The Fat Bastard official - ' . $form_subject;
    $message = "Name: $name \n\nEmail: $email_from \n\nMessage: $comments";
    $headers = "MIME-Version: 1.0\r\n";
	$headers.= "Content-type: text/html; charset=UTF-8\r\n";
    $headers.= 'De : <noreply@thefatbastardgangband.com>';

    mail($email_to, $subject, $message, $headers);

    echo json_encode(["sent" => true]);

} else {

    echo json_encode([
        "sent"    => false,
        "message" => "Une erreur est survenue lors de l'envoi de votre message"
        ]);
}
   