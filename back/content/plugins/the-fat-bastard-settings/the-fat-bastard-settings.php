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
                'title',
                'editor',
                'custom-fields'
            ],
            'has_archive'         => true, 
            'can_export'          => true, 
            'delete_with_user'    => false,
            'show_in_rest'        => true,
        ]
    );   
    
}

add_action( 'add_meta_boxes', 'the_fat_custom_box' );
	
function the_fat_custom_box()
{
    add_meta_box(
        'the_fat_box_id',           // Unique ID
        'Détails du concert',  // Box title
        'the_fat_custom_box_html',  // Content callback, must be of type callable
        [ 'tourdates' ]            // Post type
        
    );
}

function the_fat_custom_box_html( $post )
{
    $concert_dates = get_post_meta(
        $post->ID,
        'the_fat_concert_dates',
        true
    );

    $array = [
        'Date de concert',
        'Ville',
        'Lieu',
        'Statut'
    ];

    foreach ($array as $value){
    ?>
        <div style="margin: 1rem 1rem;">
            <label style="font-weight: bold;" for="the_fat_concert_dates"><?= $value ?></label>
            <input type="text" name="the_fat_concert_dates" id="the_fat_concert_dates" value="<?= $concert_dates; ?>" />
        </div>
    <?php

    }
}

add_action( 'save_post', 'the_fat_save_postdata' );
	
function the_fat_save_postdata( $post_id )
{
    // On vérifie que le champ o_redirect_to_redirect_url a bien été envoyé
    if ( array_key_exists( 'the_fat_concert_dates', $_POST ) ) {
        update_post_meta(
            $post_id,
            'the_fat_concert_dates',
            $concert_dates
        );
    
    }
}
