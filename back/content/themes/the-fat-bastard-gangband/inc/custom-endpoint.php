<?php

add_action('rest_api_init', 'fat_customizer_section_titles_endpoint');

function fat_customizer_section_titles_endpoint()
{
    register_rest_route(
        'fat/v1',
        'customizer/section/titles',
         [
            'method'   => 'GET',
            'callback' => function(){
                $first_section_title = get_theme_mod('fat_theme_first_section_title');
                $second_section_title = get_theme_mod('fat_theme_second_section_title');
                $third_section_title = get_theme_mod('fat_theme_third_section_title');
                $fourth_section_title = get_theme_mod('fat_theme_fourth_section_title');
                $fifth_section_title = get_theme_mod('fat_theme_fifth_section_title');
                $sixth_section_title = get_theme_mod('fat_theme_sixth_section_title');

                
                $section_titles = [
                                    $first_section_title,
                                    $second_section_title,
                                    $third_section_title,
                                    $fourth_section_title,
                                    $fifth_section_title,
                                    $sixth_section_title
                                ];
                
                return $section_titles;
            }
        ]
    );
}

add_action('rest_api_init', 'fat_customizer_section_photos_endpoint');

function fat_customizer_section_photos_endpoint()
{
    register_rest_route(
        'fat/v1',
        'customizer/section/photos',
         [
            'method'   => 'GET',
            'callback' => function(){
                $homepage_photo_news_id = get_theme_mod('fat_theme_homepage_photo_news');
                $homepage_photo_news = wp_get_attachment_url ($homepage_photo_news_id);
                $homepage_photo_tour_id = get_theme_mod('fat_theme_homepage_photo_tour');
                $homepage_photo_tour = wp_get_attachment_url ($homepage_photo_tour_id);
                $homepage_photo_discography_id = get_theme_mod('fat_theme_homepage_photo_discography');
                $homepage_photo_discography = wp_get_attachment_url ($homepage_photo_discography_id);
                $homepage_photo_medias_id = get_theme_mod('fat_theme_homepage_photo_medias');
                $homepage_photo_medias = wp_get_attachment_url ($homepage_photo_medias_id);
                $homepage_photo_about_id = get_theme_mod('fat_theme_homepage_photo_about');
                $homepage_photo_about = wp_get_attachment_url ($homepage_photo_about_id);
                $homepage_photo_contact_id = get_theme_mod('fat_theme_homepage_photo_contact');
                $homepage_photo_contact = wp_get_attachment_url ($homepage_photo_contact_id);

                $section_photos = [
                                    $homepage_photo_news,
                                    $homepage_photo_tour,
                                    $homepage_photo_discography,
                                    $homepage_photo_medias,
                                    $homepage_photo_about,
                                    $homepage_photo_contact
                                ];

                return $section_photos;
            }
        ]
    );
}

add_action('rest_api_init', 'fat_customizer_media_photos_endpoint');

function fat_customizer_media_photos_endpoint()
{
    register_rest_route(
        'fat/v1',
        'customizer/medias/photos',
         [
            'method'   => 'GET',
            'callback' => function(){
                $main_image_id = get_theme_mod('fat_theme_homepage_main_image');
                $main_image = wp_get_attachment_url ($main_image_id);
                $image_2_id = get_theme_mod('fat_theme_homepage_image_2');
                $image_2 = wp_get_attachment_url ($image_2_id);
                $image_3_id = get_theme_mod('fat_theme_homepage_image_3');
                $image_3 = wp_get_attachment_url ($image_3_id);
                $image_4_id = get_theme_mod('fat_theme_homepage_image_4');
                $image_4 = wp_get_attachment_url ($image_4_id);
                $image_5_id = get_theme_mod('fat_theme_homepage_image_5');
                $image_5 = wp_get_attachment_url ($image_5_id);
                $image_6_id = get_theme_mod('fat_theme_homepage_image_6');
                $image_6 = wp_get_attachment_url ($image_6_id);
                $medias_photos = [
                                    $main_image,
                                    $image_2,
                                    $image_3,
                                    $image_4,
                                    $image_5,
                                    $image_6
                                ];
                
                return $medias_photos;
            }
        ]
    );
}

add_action('rest_api_init', 'fat_customizer_media_videos_endpoint');

function fat_customizer_media_videos_endpoint()
{
    register_rest_route(
        'fat/v1',
        'customizer/medias/videos',
         [
            'method'   => 'GET',
            'callback' => function(){
                $main_video = get_theme_mod('fat_theme_homepage_main_video');
                $video_2 = get_theme_mod('fat_theme_homepage_video_2');
                $video_3 = get_theme_mod('fat_theme_homepage_video_3');
                $video_4 = get_theme_mod('fat_theme_homepage_video_4');
                $video_5 = get_theme_mod('fat_theme_homepage_video_5');
                $video_6 = get_theme_mod('fat_theme_homepage_video_6');

                $medias_videos = [
                                    $main_video,
                                    $video_2,
                                    $video_3,
                                    $video_4,
                                    $video_5,
                                    $video_6
                                ];
                
                return $medias_videos;
            }
        ]
    );
}

add_action('rest_api_init', 'fat_group_photos_endpoint');

function fat_group_photos_endpoint()
{

    register_rest_route(
        'fat/v1',
        'group/photos',
         [
            'method'   => 'GET',
            'callback' => function(){
                $group_post = get_posts([
                    'post_type' => 'group',
                    'posts_per_page' => -1,
                    'orderby' => 'ID',
                    'order' => 'ASC'
                    
                ]);
                $group_url = [];

                foreach($group_post as $musician){
                    $group_url [] = get_the_post_thumbnail_url($musician->ID);
                
               }
                return $group_url;
            }
            
        ]
    );
}

add_action('rest_api_init', 'fat_discography_recto_endpoint');

function fat_discography_recto_endpoint()
{

    register_rest_route(
        'fat/v1',
        'discography/recto',
         [
            'method'   => 'GET',
            'callback' => function(){
                $disco_post = get_posts([
                    'post_type' => 'discography',
                    'posts_per_page' => -1,
                    'orderby' => 'ID',
                    'order' => 'ASC'
                ]);

                $album_first_side_url = [];

                foreach($disco_post as $disco){
                    $album_first_side = get_field('pochette_recto', $disco->ID);
                    $album_first_side_url[] = $album_first_side ['url'];
                
               }

                return $album_first_side_url;
            }
            
        ]
    );
}

add_action('rest_api_init', 'fat_discography_verso_endpoint');

function fat_discography_verso_endpoint()
{

    register_rest_route(
        'fat/v1',
        'discography/verso',
         [
            'method'   => 'GET',
            'callback' => function(){
                $disco_post = get_posts([
                    'post_type' => 'discography',
                    'posts_per_page' => -1,
                    'orderby' => 'ID',
                    'order' => 'ASC'
                ]);

                $album_second_side_url = [];

                foreach($disco_post as $disco){
                    $album_second_side = get_field('pochette_verso', $disco->ID);
                    $album_second_side_url[] = $album_second_side ['url'];
                
               }

                return $album_second_side_url;
            }
            
        ]
    );
}

add_action('rest_api_init', 'fat_player_endpoint');

function fat_player_endpoint()
{

    register_rest_route(
        'fat/v1',
        'player',
         [
            'method'   => 'GET',
            'callback' => function(){
                $player_post = get_posts([
                    'post_type' => 'player',
                    'posts_per_page' => -1,
                    'orderby' => 'ID',
                    'order' => 'ASC'
                    
                ]);
                $musics_src = [];

                foreach($player_post as $player){
                    $music = get_field('music_src', $player->ID);
                    $musics_src[] = $music ['url'];
                }
                return $musics_src;
            }
            
        ]
    );
}
