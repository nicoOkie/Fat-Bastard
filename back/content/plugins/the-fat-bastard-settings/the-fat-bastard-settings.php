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
        'the_fat_concert_dates',
        true
    );

    $concert_city = get_post_meta(
        $post->ID,
        'the_fat_concert_city',
        true
    );

    $concert_venue = get_post_meta(
        $post->ID,
        'the_fat_concert_venue',
        true
    );

    $concert_status = get_post_meta(
        $post->ID,
        'the_fat_concert_status',
        true
    );

    $url_google_maps = get_post_meta(
        $post->ID,
        'the_fat_url_google_maps',
        true
    );

    $url_billetterie = get_post_meta(
        $post->ID,
        'the_fat_url_billetterie',
        true
    );
    ?>

    <table>
        <tbody>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="the_fat_concert_dates">Date de concert</label></th>
                <td style="padding:1.5rem;"><input type="date" name="the_fat_concert_dates" id="the_fat_concert_dates" value="<?= $concert_dates; ?>" /></td>
            </tr>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="the_fat_concert_city">Ville</label></th>
                <td style="padding:1.5rem;"><input type="text" name="the_fat_concert_city" id="the_fat_concert_city" value="<?= $concert_city; ?>" /></td>
            </tr>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="the_fat_concert_venue">Salle / Lieu</label></th>
                <td style="padding:1.5rem;"><input type="text" name="the_fat_concert_venue" id="the_fat_concert_venue" value="<?= $concert_venue; ?>" /></td>
            </tr>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="the_fat_concert_status">Statut</label></th>
                <td style="padding:1.5rem;"><input type="text" name="the_fat_concert_status" id="the_fat_concert_status" value="<?= $concert_status; ?>" /></td>
            </tr>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="the_fat_url_google_maps">Lien Google Maps</label></th>
                <td style="padding:1.5rem;"><input type="url" name="the_fat_url_google_maps" id="the_fat_url_google_maps" value="<?= $url_google_maps; ?>" /></td>
            </tr>
            <tr>
                <th style="text-align:left; padding:1.5rem;"><label for="the_fat_url_billetterie">Billetterie</label></th>
                <td style="padding:1.5rem;"><input type="url" name="the_fat_url_billetterie" id="the_fat_url_billetterie" value="<?= $url_billetterie; ?>" /></td>
            </tr>
        </tbody>
    </table>
    <?php
}

add_action( 'save_post', 'the_fat_save_postdata' );
	
function the_fat_save_postdata( $post_id )
{
    if ( isset($_POST['the_fat_concert_dates']) ) {
        update_post_meta(
            $post_id,
            'the_fat_concert_dates',
            $_POST['the_fat_concert_dates']
        );
    }

    if ( isset($_POST['the_fat_concert_city']) ) {
        update_post_meta(
            $post_id,
            'the_fat_concert_city',
            $_POST['the_fat_concert_city']
        );
    }

    if ( isset($_POST['the_fat_concert_venue']) ) {
        update_post_meta(
            $post_id,
            'the_fat_concert_venue',
            $_POST['the_fat_concert_venue']
        );
    }

    if ( isset($_POST['the_fat_concert_status']) ) {
        update_post_meta(
            $post_id,
            'the_fat_concert_status',
            $_POST['the_fat_concert_status']
        );
    }

    if ( isset($_POST['the_fat_url_google_maps']) ) {
        update_post_meta(
            $post_id,
            'the_fat_url_google_maps',
            $_POST['the_fat_url_google_maps']
        );
    }

    if ( isset($_POST['the_fat_url_billetterie']) ) {
        update_post_meta(
            $post_id,
            'the_fat_url_billetterie',
            $_POST['the_fat_url_billetterie']
        );
    }
}
