<?php

/* 
Plugin Name: The Fat Bastard Settings
Author: TANK
Version: 1.0
*/

if ( ! defined( 'WPINC' ) ) {
    http_response_code( 404 );
    exit;
}

add_action('init', 'the_fat_register_post_type');

function the_fat_register_post_type()
{
    register_post_type(
        'tourdates',
        [
            'labels' => [ 
                'name'               => 'Dates de concert',
                'singular_name'      => 'Date de concert',
                'add_new_item'       => 'Ajouter une nouvelle date de concert',
                'edit_item'          => 'Editer la date de concert',
                'new_item'           => 'Nouvelle date de concert',
                'view_item'          => 'Voir la date de concert',
                'view_items'         => 'Voir les dates de concert',
                'search_items'       => 'Rechercher des dates de concert',
                'not_found'          => 'Aucune date de concert trouvée',
                'not_found_in_trash' => 'Aucune date de concert trouvée dans la corbeille',
                'all_items'          => 'Toutes les dates de concert',
                'archives'           => 'Archives des dates de concert'
            ],
            'exclude_from_search' => false, 
            'publicly_queryable'  => true, 
            'show_ui'            => true,
            'show_in_nav_menus'   => true, 
            'show_in_admin_bar'   => true,
            'menu_position'       => 6,
            'menu_icon'           => 'dashicons-calendar-alt',
            'hierarchical'        => false, 
            'supports'            => [
                'title'
            ],
            'has_archive'         => true, 
            'can_export'          => true, 
            'delete_with_user'    => false,
            'show_in_rest'        => true,
        ]
    ); 
    
    register_post_type(
        'group', 
        [
            'labels' => [ 
                'name'               => 'Groupe',
                'singular_name'      => 'Musicien',
                'add_new_item'       => 'Ajouter un nouveau musicien',
                'edit_item'          => 'Editer le musicien',
                'new_item'           => 'Nouveau musicien',
                'view_item'          => 'Voir le musicien',
                'view_items'         => 'Voir le groupe',
                'search_items'       => 'Rechercher des musiciens',
                'not_found'          => 'Aucun musicien trouvé',
                'not_found_in_trash' => 'Aucun musicien trouvé dans la corbeille',
                'all_items'          => 'Tous les musiciens',
                'archives'           => 'Archives des musiciens'
            ], 
            'publicly_queryable'  => true, 
            'show_ui'             => true, 
            'show_in_nav_menus'   => true, 
            'show_in_admin_bar'   => true,
            'menu_position'       => 9,
            'menu_icon'           => 'dashicons-groups',
            'hierarchical'        => true, 
            'supports'            => [
                'title',
                'editor',
                'thumbnail',
                'page-attributes'
            ],
            'has_archive'         => true, 
            'can_export'          => true, 
            'delete_with_user'    => false,
            'show_in_rest'        => true 
        ]
    );

    register_post_type(
        'discography', 
        [
            'labels' => [ 
                'name'               => 'Discographie',
                'singular_name'      => 'Album',
                'add_new_item'       => 'Ajouter un nouvel album',
                'edit_item'          => 'Editer l\'album',
                'new_item'           => 'Nouvel album',
                'view_item'          => 'Voir l\'album',
                'view_items'         => 'Voir les albums',
                'search_items'       => 'Rechercher des albums',
                'not_found'          => 'Aucun album trouvé',
                'not_found_in_trash' => 'Aucun album trouvé dans la corbeille',
                'all_items'          => 'Tous les albums',
                'archives'           => 'Archives des albums'
            ], 
            'publicly_queryable'  => true, 
            'show_ui'             => true, 
            'show_in_nav_menus'   => true, 
            'show_in_admin_bar'   => true,
            'menu_position'       => 7,
            'menu_icon'           => 'dashicons-media-audio',
            'hierarchical'        => false, 
            'supports'            => [
                'title',
            ],
            'has_archive'         => true, 
            'can_export'          => true, 
            'delete_with_user'    => false,
            'show_in_rest'        => true 
        ]
    );

    register_post_type(
        'gallery', 
        [
            'labels' => [ 
                'name'               => 'Galerie photos',
                'singular_name'      => 'Galerie',
            ], 
            'publicly_queryable'  => true, 
            'show_ui'             => true, 
            'show_in_nav_menus'   => true, 
            'show_in_admin_bar'   => true,
            'menu_position'       => 8,
            'menu_icon'           => 'dashicons-format-gallery',
            'hierarchical'        => false, 
            'supports'            => [
                'title',
                'editor'
            ],
            'has_archive'         => true, 
            'can_export'          => true, 
            'delete_with_user'    => false,
            'show_in_rest'        => true 
        ]
    );

    register_post_type(
        'contact',
        [
            'labels'    => [ 
                'name'  => 'Contact',
            ],
            'exclude_from_search' => true, 
            'publicly_queryable'  => true, 
            'show_ui'             => true,
            'show_in_nav_menus'   => true, 
            'show_in_admin_bar'   => true,
            'menu_position'       => 12,
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

    // CPT pour le lecteur audio
    register_post_type(
        'player',
        [
            'labels' => [ 
                'name'               => 'Lecteur audio',
                'add_new_item'       => 'Ajouter une nouvelle musique',
                'edit_item'          => 'Editer la musique',
                'new_item'           => 'Nouvelle musique',
                'view_item'          => 'Voir la musique',
                'view_items'         => 'Voir les musiques',
                'search_items'       => 'Rechercher des musiques',
                'not_found'          => 'Aucune musique trouvée',
                'not_found_in_trash' => 'Aucune musique trouvée dans la corbeille',
                'all_items'          => 'Toutes les musiques',
                'archives'           => 'Archives des musiques'
            ],
            'exclude_from_search' => false, 
            'publicly_queryable'  => true, 
            'show_ui'            => true,
            'show_in_nav_menus'   => true, 
            'show_in_admin_bar'   => true,
            'menu_position'       => 11,
            'menu_icon'           => 'dashicons-controls-volumeon',
            'hierarchical'        => false, 
            'supports'            => [
                'title'
            ],
            'has_archive'         => true, 
            'can_export'          => true, 
            'delete_with_user'    => false,
            'show_in_rest'        => true,
        ]
    ); 
}

register_activation_hook(
    __FILE__,
    function() {
        the_fat_register_post_type();
        flush_rewrite_rules();
    }
);
register_deactivation_hook(
    __FILE__,
    function() {
        flush_rewrite_rules();
    }
);

/* 
 * Ajout de metabox au CPT tourdates
 */

add_action( 'add_meta_boxes', 'the_fat_custom_box' );
	
function the_fat_custom_box()
{
    add_meta_box(
        'the_fat_box_id',
        'Détails du concert',
        'the_fat_custom_box_html',
        'tourdates'
    );
}

function the_fat_custom_box_html( $post )
{
    $concert_dates = get_post_meta(
        $post->ID,
        'date',
        true
    );

    $concert_city = get_post_meta(
        $post->ID,
        'city',
        true
    );

    $concert_venue = get_post_meta(
        $post->ID,
        'venue',
        true
    );

    $url_google_maps = get_post_meta(
        $post->ID,
        'map',
        true
    );

    $url_billetterie = get_post_meta(
        $post->ID,
        'tickets',
        true
    );
    ?>

    <table>
        <tbody>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="date">Date de concert</label></th>
                <td style="padding:1.5rem;"><input type="date" name="date" id="date" value="<?= $concert_dates; ?>" /></td>
            </tr>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="city">Ville</label></th>
                <td style="padding:1.5rem;"><input type="text" name="city" id="city" value="<?= $concert_city; ?>" /></td>
            </tr>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="venue">Salle / Lieu</label></th>
                <td style="padding:1.5rem;"><input type="text" name="venue" id="venue" value="<?= $concert_venue; ?>" /></td>
            </tr>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="map">Lien Google Maps</label></th>
                <td style="padding:1.5rem;"><input type="url" name="map" id="map" value="<?= $url_google_maps; ?>" /></td>
            </tr>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="tickets">Billetterie</label></th>
                <td style="padding:1.5rem;"><input type="url" name="tickets" id="tickets" value="<?= $url_billetterie; ?>" /></td>
            </tr>
        </tbody>
    </table>
    <?php
}

add_action( 'save_post', 'the_fat_save_postdata' );
	
function the_fat_save_postdata( $post_id )
{
    if ( isset($_POST['date']) ) {
        update_post_meta(
            $post_id,
            'date',
            $_POST['date']
        );
    }

    if ( isset($_POST['city']) ) {
        update_post_meta(
            $post_id,
            'city',
            $_POST['city']
        );
    }

    if ( isset($_POST['venue']) ) {
        update_post_meta(
            $post_id,
            'venue',
            $_POST['venue']
        );
    }

    if ( isset($_POST['map']) ) {
        update_post_meta(
            $post_id,
            'map',
            $_POST['map']
        );
    }

    if ( isset($_POST['tickets']) ) {
        update_post_meta(
            $post_id,
            'tickets',
            $_POST['tickets']
        );
    }
}

/* 
 * Ajout de metabox au CPT discography
 */

add_action( 'add_meta_boxes', 'fat_discography_custom_box' );

function fat_discography_custom_box()
{
    add_meta_box(
        'fat_discography_box_id',          
        'Détail de l\'album', 
        'fat_discography_custom_box_html',  
        'discography'                   
    );
}

function fat_discography_custom_box_html( $post )
{
    $date = get_post_meta(
        $post->ID,
        'release_date',
        true
    );

    $producter = get_post_meta(
        $post->ID,
        'producter_name',
        true
    );

    $purchase_link = get_post_meta(
        $post->ID,
        'purchase_link',
        true
    );

?>
    <div style="margin:30px 0px 20px;">
        <label for="release_date" style="font-weight:bold; margin-right:17px;">Date de sortie</label>
        <input type="date" name="release_date" id="release_date" value="<?= $date; ?>"" style="height: 30px;" />
    </div>
    <div style="margin-bottom: 20px;">
        <label for="producter_name" style="font-weight:bold; margin-right:34px;">Producteur</label>
        <input type="text" name="producter_name" id="producter_name" value="<?= $producter; ?>"style="height:30px;" />
    </div>
    <div style="margin-bottom: 20px;">
        <label for="purchase_link" style="font-weight:bold; margin-right:34px;">Lien vers une boutique d'achat</label>
        <input type="url" name="purchase_link" id="purchase_link" value="<?= $purchase_link; ?>"style="height:30px;" />
    </div>

    
<?php
}

add_action( 'save_post', 'fat_discography_save_postdata' );

function fat_discography_save_postdata( $post_ID )
{

    if ( isset($_POST['release_date']) ) {
        update_post_meta(
            $post_ID,
            'release_date',
            $_POST['release_date']
        );
    }

    if ( isset($_POST['producter_name']) ) {
        update_post_meta(
            $post_ID,
            'producter_name',
            $_POST['producter_name']
        );
    }

    if ( isset($_POST['purchase_link']) ) {
        update_post_meta(
            $post_ID,
            'purchase_link',
            $_POST['purchase_link']
        );
    }

}

/* 
 * Ajout de metabox au CPT group
 */

add_action( 'add_meta_boxes', 'fat_group_custom_box' );

function fat_group_custom_box()
{
    add_meta_box(
        'fat_group_box_id',          
        'Informations sur le musicien', 
        'fat_group_custom_box_html',  
        'group'                   
    );
}

function fat_group_custom_box_html( $post )
{
    $first_name = get_post_meta(
        $post->ID,
        'first_name',
        true
    );

    $last_name = get_post_meta(
        $post->ID,
        'last_name',
        true
    );

    $nickname = get_post_meta(
        $post->ID,
        'last_name',
        true
    );

    $instruments = get_post_meta(
        $post->ID,
        'instruments',
        true
    );

?>

    <div style="margin:30px 0px 20px;">
        <label for="first_name" style="font-weight:bold;margin-right:37px;">Prénom</label>
        <input type="text" name="first_name" id="first_name" value="<?= $first_name; ?>"" style="height: 30px;" />
    </div>
    <div style="margin-bottom: 20px;">
        <label for="last_name" style="font-weight:bold;margin-right:56px;">Nom</label>
        <input type="text" name="last_name" id="last_name" value="<?= $last_name; ?>"style="height:30px;" />
    </div>
    <div style="margin-bottom: 20px;">
        <label for="nickname" style="font-weight:bold;margin-right:38px;">Surnom</label>
        <input type="text" name="nickname" id="nickname" value="<?= $nickname; ?>"style="height:30px;" />
    </div>
    <div style="margin-bottom: 20px;">
        <label for="instruments" style="font-weight:bold;margin-right:8px;">Instruments</label>
        <input type="text" name="instruments" id="instruments" value="<?= $instruments; ?>"style="height:30px;"  />
    </div>

    
<?php
}

add_action( 'save_post', 'fat_group_save_postdata' );

function fat_group_save_postdata( $post_ID )
{

    if ( isset($_POST['first_name']) ) {
        update_post_meta(
            $post_ID,
            'first_name',
            $_POST['first_name']
        );
    }

    if ( isset($_POST['last_name']) ) {
        update_post_meta(
            $post_ID,
            'last_name',
            $_POST['last_name']
        );
    }

    if ( isset($_POST['nickname']) ) {
        update_post_meta(
            $post_ID,
            'nickname',
            $_POST['nickname']
        );
    }

    if ( isset($_POST['instruments']) ) {
        update_post_meta(
            $post_ID,
            'instruments',
            $_POST['instruments']
        );
    }
}

/* 
 * Ajout de metabox au CPT contact
 */

add_action( 'add_meta_boxes', 'fat_contact_settings_custom_box' );

function fat_contact_settings_custom_box()
{
    add_meta_box(
        'fat_contact_box_id',          
        'Configuration', 
        'fat_contact_settings_custom_box_html',  
        'contact'                   
    );
}

function fat_contact_settings_custom_box_html( $post )
{
    $email = get_post_meta(
        $post->ID,
        'email',
        true
    );

    $name = get_post_meta(
        $post->ID,
        'name',
        true
    );

    $server = get_post_meta(
        $post->ID,
        'server_SMTP',
        true
    );

    $secure = get_post_meta(
        $post->ID,
        'type_of_encription',
        true
    );

    $port = get_post_meta(
        $post->ID,
        'port_SMTP',
        true
    );

    $username = get_post_meta(
        $post->ID,
        'username',
        true
    );

    $password = get_post_meta(
        $post->ID,
        'password',
        true
    );



?>

    <div style="margin:30px 0px 20px;">
        <label for="email" style="font-weight:bold; margin-right:56px;">Adresse email</label>
        <input type="email" name="email" id="email" value="<?= $email; ?>"" style="height: 30px;" />
    </div>
    <div style="margin:30px 0px 20px;">
        <label for="name" style="font-weight:bold; margin-right:26px;">Nom de l'émetteur</label>
        <input type="text" name="name" id="name" value="<?= $name; ?>"" style="height: 30px;" />
    </div>
    <div style="margin:30px 0px 20px;">
        <label for="server_SMTP" style="font-weight:bold; margin-right:54px;">Serveur SMTP</label>
        <input type="text" name="server_SMTP" id="server_SMTP" value="<?= $server; ?>"" style="height: 30px;" />
    </div>
    <div style="margin:30px 0px 20px;">
        <label for="type_of_encription" style="font-weight:bold; margin-right:8px;">Protocole de sécurité</label>
        <input type="text" name="type_of_encription" id="type_of_encription" value="<?= $secure; ?>"" style="height: 30px;" />
    </div>
    <div style="margin:30px 0px 20px;">
        <label for="port_SMTP" style="font-weight:bold; margin-right:74px;">Port SMTP</label>
        <input type="number" name="port_SMTP" id="port_SMTP" value="<?= $port; ?>"" style="height: 30px;" />
    </div>
    <div style="margin:30px 0px 20px;">
        <label for="username" style="font-weight:bold; margin-right:34px;">SMTP Utilisateur</label>
        <input type="email" name="username" id="username" value="<?= $username; ?>"" style="height: 30px;" />
    </div>
    <div style="margin:30px 0px 20px;">
        <label for="password" style="font-weight:bold; margin-right:17px;">SMTP Mot de passe</label>
        <input type="password" name="password" id="password" value="<?= $password; ?>"" style="height: 30px;" />
    </div>

    
<?php
}

add_action( 'save_post', 'fat_contact_settings_save_postdata' );

function fat_contact_settings_save_postdata( $post_ID )
{

    if ( isset($_POST['email']) ) {
        update_post_meta(
            $post_ID,
            'email',
            $_POST['email']
        );
    }

    if ( isset($_POST['name']) ) {
        update_post_meta(
            $post_ID,
            'name',
            $_POST['name']
        );
    }

    if ( isset($_POST['server_SMTP']) ) {
        update_post_meta(
            $post_ID,
            'server_SMTP',
            $_POST['server_SMTP']
        );
    }

    if ( isset($_POST['type_of_encription']) ) {
        update_post_meta(
            $post_ID,
            'type_of_encription',
            $_POST['type_of_encription']
        );
    }

    if ( isset($_POST['port_SMTP']) ) {
        update_post_meta(
            $post_ID,
            'port_SMTP',
            $_POST['port_SMTP']
        );
    }

    if ( isset($_POST['username']) ) {
        update_post_meta(
            $post_ID,
            'username',
            $_POST['username']
        );
    }

    if ( isset($_POST['password']) ) {
        update_post_meta(
            $post_ID,
            'password',
            $_POST['password']
        );
    }
}

add_action( 'add_meta_boxes', 'fat_contact_recipients_custom_box' );

function fat_contact_recipients_custom_box()
{
    add_meta_box(
        'fat_contact_recipients_box_id',          
        'Destinataires du formulaire de contact', 
        'fat_contact_recipients_custom_box_html',  
        'contact'                   
    );
}

function fat_contact_recipients_custom_box_html( $post )
{
    $first_recipient = get_post_meta(
        $post->ID,
        'first_recipient',
        true
    );

    $second_recipient = get_post_meta(
        $post->ID,
        'second_recipient',
        true
    );

    $third_recipient = get_post_meta(
        $post->ID,
        'third_recipient',
        true
    );
    ?>

    <div style="margin:30px 0px 20px;">
        <label for="first_recipient" style="font-weight:bold; margin-right:26px;">Premier destinataire</label>
        <input type="email" name="first_recipient" id="first_recipient" value="<?= $first_recipient; ?>"" style="height: 30px;" />
    </div>
    <div style="margin:30px 0px 20px;">
        <label for="second_recipient" style="font-weight:bold; margin-right:13px;">Deuxième destinataire</label>
        <input type="email" name="second_recipient" id="second_recipient" value="<?= $second_recipient; ?>"" style="height: 30px;" />
    </div>
    <div style="margin:30px 0px 20px;">
        <label for="third_recipient" style="font-weight:bold; margin-right:14px;">Troisième destinataire</label>
        <input type="email" name="third_recipient" id="third_recipient" value="<?= $third_recipient; ?>"" style="height: 30px;" />
    </div>
    <?php
}

add_action( 'save_post', 'fat_contact_recipients_save_postdata' );

function fat_contact_recipients_save_postdata( $post_ID )
{

    if ( isset($_POST['first_recipient']) ) {
        update_post_meta(
            $post_ID,
            'first_recipient',
            $_POST['first_recipient']
        );
    }

    if ( isset($_POST['second_recipient']) ) {
        update_post_meta(
            $post_ID,
            'second_recipient',
            $_POST['second_recipient']
        );
    }

    if ( isset($_POST['third_recipient']) ) {
        update_post_meta(
            $post_ID,
            'third_recipient',
            $_POST['third_recipient']
        );
    }
}

/* 
 * Ajout de metabox au CPT player
 */

add_action( 'add_meta_boxes', 'fat_player_custom_box' );

function fat_player_custom_box()
{
    add_meta_box(
        'fat_player_box_id',          
        'Détails de la musique', 
        'fat_player_custom_box_html',  
        'player'                   
    );
}

function fat_player_custom_box_html( $post )
{
    $title = get_post_meta(
        $post->ID,
        'title',
        true
    );

    $artist = get_post_meta(
        $post->ID,
        'artist',
        true
    );


?>

    <table>
        <tbody>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="title">Titre de la musique</label></th>
                <td style="padding:1.5rem;"><input type="text" name="title" id="title" value="<?= $title; ?>" /></td>
            </tr>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="artist">Nom de l'artiste</label></th>
                <td style="padding:1.5rem;"><input type="text" name="artist" id="artist" value="<?= $artist; ?>" /></td>
            </tr>
        </tbody>
    </table>
    
<?php
}

add_action( 'save_post', 'fat_player_save_postdata' );

function fat_player_save_postdata( $post_ID )
{
    if ( isset($_POST['title']) ) {
        update_post_meta(
            $post_ID,
            'title',
            $_POST['title']
        );
    }

    if ( isset($_POST['artist']) ) {
        update_post_meta(
            $post_ID,
            'artist',
            $_POST['artist']
        );
    }

}

/*
 * Custom-fields -> API REST
 */

 add_action('rest_api_init', 'fat_custom_fields_rest_api');

 function fat_custom_fields_rest_api()
 {
     register_rest_field(
        [
         'tourdates',
         'discography',
         'group',
         'contact',
         'player'
        ],
         'custom_fields',
        [
            'get_callback'    => function($data){
                return get_post_meta($data['id']);
            },
            'update_callback' => null,
            'schema'          => null,

        ]
     );
 }


/*
 * Modification des colonnes d'administration des dates de concert
 */

add_filter('manage_tourdates_posts_columns', 'custom_tourdates_columns');

function custom_tourdates_columns($columns)
{
    $columns = [
        'cb'            => '',
        'title'         => 'Liste des concerts',
        'concert_date'  => 'Date',
        'city'          => 'Ville',
        'venue'         => 'lieu'
    ];
    return $columns;
}

add_action('manage_tourdates_posts_custom_column', 'custom_tourdates_columns_content');

function custom_tourdates_columns_content($column)
{
    global $post;

    switch($column) {
        case 'concert_date':
            echo get_post_meta($post->ID, 'date', TRUE);
            break;
        case 'city':
            echo get_post_meta($post->ID, 'city', TRUE);
            break;
        case 'venue':
            echo get_post_meta($post->ID, 'venue', TRUE);
            break;
    }
}

/*
 * Modification des colonnes d'administration de la discographie
 */

add_filter('manage_discography_posts_columns', 'custom_discography_columns');

function custom_discography_columns($columns)
{
    $columns = [
        'cb'            => '',
        'title'         => 'Nom de l\'album',
        'release_date'  => 'Date de sortie',
        'producter'     => 'Producteur',
    ];

    $columns = array_slice($columns, 0, true) + ['album_jacket' => ''] + array_slice($columns, 1, count($columns) - 1, true); 

    return $columns;
}

add_action('manage_discography_posts_custom_column', 'custom_discography_columns_content');

function custom_discography_columns_content($column)
{
    global $post;

    switch($column) {
        case 'album_jacket':
            $album_first_side = get_field('pochette_recto', $post->ID);
            $album_first_side_url = $album_first_side ['url'];
            echo "<img src= $album_first_side_url style= 'width: 75px; height: 75px;'>";
            break;
        case 'release_date':
            echo get_post_meta($post->ID, 'release_date', TRUE);
            break;
        case 'producter':
            echo get_post_meta($post->ID, 'producter_name', TRUE);
            break;
    }
}


/*
 * Modification des colonnes d'administration du groupe
 */
add_filter('manage_group_posts_columns', 'custom_group_columns');


function custom_group_columns($columns)
{
    $columns = [
        'cb'          => '',
        'title'       => 'Groupe / Musiciens',
        'photo'       => '',
        'first_name'  => 'Prénom',
        'last_name'   => 'Nom',
        'nickname'    => 'Surnom',
        'instruments' => 'Instruments'
    ];
    return $columns;
}

add_action('manage_group_posts_custom_column', 'custom_group_columns_content');

function custom_group_columns_content($column)
{
    global $post;

    switch($column) {
        case 'photo':
            echo the_post_thumbnail([100, 100]);
            break;
        case 'first_name':
            echo get_post_meta($post->ID, 'first_name', TRUE);
            break;
        case 'last_name':
            echo get_post_meta($post->ID, 'last_name', TRUE);
            break;
        case 'nickname':
            echo get_post_meta($post->ID, 'nickname', TRUE);
            break;
        case 'instruments':
            echo get_post_meta($post->ID, 'instruments', TRUE);
            break;    
    }
}

/*
 * Modification des colonnes d'administration du lecteur audio
 */
add_filter('manage_player_posts_columns', 'custom_player_columns');


function custom_player_columns($columns)
{
    $columns = [
        'cb'          => '',
        'title'       => 'Titre',
        'artist'       => 'Artiste'
    ];
    return $columns;
}

add_action('manage_player_posts_custom_column', 'custom_player_columns_content');

function custom_player_columns_content($column)
{
    global $post;

    switch($column) { 
        case 'artist':
            echo get_post_meta($post->ID, 'artist', TRUE);
            break; 
    }
}

