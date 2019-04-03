<?php

/* 
Plugin Name: The Fat Bastard Contact form
Author: TANK
Version: 1.0
*/

if ( ! defined( 'WPINC' ) ) {
    http_response_code( 404 );
    exit;
}

add_action('init', 'the_fat_contact_register_post_type');

function the_fat_contact_register_post_type()
{
    register_post_type(
        'contact',
        [
            'labels' => [ 
                'name'               => 'Contact',
            ],
            'exclude_from_search' => true, 
            'publicly_queryable'  => true, 
            'show_ui'             => true,
            'show_in_nav_menus'   => true, 
            'show_in_admin_bar'   => true,
            'menu_position'       => 10,
            'menu_icon'           => 'dashicons-email',
            'hierarchical'        => false, 
            'supports'            => [
                'title'
            ],
            'has_archive'         => false, 
            'can_export'          => false, 
            'delete_with_user'    => false,
            'show_in_rest'        => true,
        ]
    ); 
}  

add_action( 'add_meta_boxes', 'fat_contact_custom_box' );

function fat_contact_custom_box()
{
    add_meta_box(
        'fat_contact_box_id',          
        'Personne à contacter', 
        'fat_contact_custom_box_html',  
        'contact'                   
    );
}

function fat_contact_custom_box_html( $post )
{
    $email = get_post_meta(
        $post->ID,
        'email',
        true
    );


?>

    <div style="margin:30px 0px 20px;">
        <label for="email" style="font-weight:bold;font-size:1.2rem;margin-right:17px;">Email</label>
        <input type="email" name="email" id="email" value="<?= $email; ?>"" style="height: 30px;" />
    </div>

    
<?php
}

add_action( 'save_post', 'fat_contact_save_postdata' );

function fat_contact_save_postdata( $post_ID )
{

    if ( isset($_POST['email']) ) {
        update_post_meta(
            $post_ID,
            'email',
            $_POST['email']
        );
    }

}

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
    $headers = 'De : <noreply@thefatbastardgangband.com>';

    mail($email_to, $subject, $message, $headers);

    echo json_encode(["sent" => true]);

} else {

    echo json_encode([
        "sent"    => false,
        "message" => "Une erreur est survenue lors de l'envoi de votre message"
        ]);
}
    
    

