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

add_action('init', 'thefat_register_post_type');

function thefat_register_post_type()
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
                'thumbnail',
                'excerpt'
            ],
            'has_archive'         => true, 
            'can_export'          => true, 
            'delete_with_user'    => false,
            'show_in_rest'        => true,
        ]
    );   
    
}