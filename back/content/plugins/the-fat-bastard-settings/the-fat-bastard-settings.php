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
            'menu_position'       => 8,
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
        '_release_date',
        true
    );

    $producter = get_post_meta(
        $post->ID,
        '_producter_name',
        true
    );

    $first_side = get_post_meta(
        $post->ID,
        '_album_first_side',
        true
    );

    $second_side = get_post_meta(
        $post->ID,
        '_album_second_side',
        true
    );

?>

    <div style="margin:30px 0px 20px;">
        <label for="release_date" style="font-weight:bold;font-size:1.2rem;margin-right:17px;">Date de sortie</label>
        <input type="date" name="release_date" id="release_date" value="<?= $date; ?>"" style="height: 30px;" />
    </div>
    <div style="margin-bottom: 20px;">
        <label for="producter_name" style="font-weight:bold;font-size:1.2rem;margin-right:44px;">Producteur</label>
        <input type="text" name="producter_name" id="producter_name" value="<?= $producter; ?>"style="height:30px;" />
    </div>
    <div style="margin-bottom: 20px;">
        <label for="album_first_side" style="font-weight:bold;font-size:1.2rem;margin-right:10px;">Pochette recto</label>
        <input type="file" name="album_first_side" id="album_first_side" value="<?= $first_side; ?>"style="height:30px;" />
    </div>
    <div style="margin-bottom: 20px;">
        <label for="album_second_side" style="font-weight:bold;font-size:1.2rem;margin-right:8px;">Pochette verso</label>
        <input type="file" name="album_second_side" id="album_second_side" value="<?= $second_side; ?>"style="height:30px;"  />
    </div>

    
<?php
}

add_action( 'save_post', 'fat_discography_save_postdata' );

function fat_discography_save_postdata( $post_ID )
{

    if ( isset($_POST['release_date']) ) {
        update_post_meta(
            $post_ID,
            '_release_date',
            $_POST['release_date']
        );
    }

    if ( isset($_POST['producter_name']) ) {
        update_post_meta(
            $post_ID,
            '_producter_name',
            $_POST['producter_name']
        );
    }

    if ( isset($_POST['album_first_side']) ) {
        update_post_meta(
            $post_ID,
            '_album_first_side',
            $_POST['album_first_side']
        );
    }

    if ( isset($_POST['album_second_side']) ) {
        update_post_meta(
            $post_ID,
            '_album_second_side',
            $_POST['album_second_side']
        );
    }
}
