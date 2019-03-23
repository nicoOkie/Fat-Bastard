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

    <div>
        <label for="release_date">Date de sortie</label>
        <input type="date" name="release_date" id="release_date" value="<?= $date; ?>" />
    </div>
    <div>
        <label for="producter_name">Producteur</label>
        <input type="text" name="producter_name" id="producter_name" value="<?= $producter; ?>" />
    </div>
    <div>
        <label for="album_first_side">Pochette recto</label>
        <input type="file" name="album_first_side" id="album_first_side" value="<?= $first_side; ?>" />
    </div>
    <div>
        <label for="album_second_side">Pochette verso</label>
        <input type="file" name="album_second_side" id="album_second_side" value="<?= $second_side; ?>" />
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