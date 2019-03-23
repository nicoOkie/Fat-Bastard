<?php
/*
Plugin Name: The Fat Bastard GangBand Settings
Author: TANK
Version: 1.0
*/

if ( ! defined( 'WPINC' ) ) {
    http_reponse_code( 404 );
    exit;
}

add_action( 'init', 'fat_register_post_type' );
function fat_register_post_type()
{
    register_post_type(
        'groupe', 
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
            'menu_position'       => 5,
            'menu_icon'           => 'dashicons-groups',
            'hierarchical'        => true, 
            'supports'            => [
                'title',
                'editor',
                'thumbnail',
                'custom-fields',
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
            'menu_position'       => 4,
            'menu_icon'           => 'dashicons-media-audio',
            'hierarchical'        => false, 
            'supports'            => [
                'title',
                'editor',
                'thumbnail',
                'custom-fields',
            ],
            'has_archive'         => true, 
            'can_export'          => true, 
            'delete_with_user'    => false,
            'show_in_rest'        => true 
        ]
    );
}

register_activation_hook(
    __FILE__,
    function() {
        fat_register_post_type();
        flush_rewrite_rules();
    }
);
register_deactivation_hook(
    __FILE__,
    function() {
        flush_rewrite_rules();
    }
);