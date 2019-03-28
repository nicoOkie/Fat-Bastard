<?php

add_action('rest_api_init', 'fat_customizer_endpoint');

function fat_customizer_endpoint()
{
    register_rest_route(
        'fat/v1',
        'customizer',
         [
            'method'   => 'GET',
            'callback' => function(){
                $first_section_title = get_theme_mod('fat_theme_first_section_title');
                $second_section_title = get_theme_mod('fat_theme_second_section_title');
                $third_section_title = get_theme_mod('fat_theme_third_section_title');
                $fourth_section_title = get_theme_mod('fat_theme_fourth_section_title');
                $fifth_section_title = get_theme_mod('fat_theme_fifth_section_title');
                $sixth_section_title = get_theme_mod('fat_theme_sixth_section_title');
                $homepage_photo_news = get_theme_mod('fat_theme_homepage_photo_news');
                $homepage_photo_tour = get_theme_mod('fat_theme_homepage_photo_tour');
                $homepage_photo_discography = get_theme_mod('fat_theme_homepage_photo_discography');
                $homepage_photo_medias = get_theme_mod('fat_theme_homepage_photo_medias');
                $homepage_photo_about = get_theme_mod('fat_theme_homepage_photo_about');
                $homepage_photo_contact = get_theme_mod('fat_theme_homepage_photo_contact');
                $main_image = get_theme_mod('fat_theme_homepage_main_image');
                $image_2 = get_theme_mod('fat_theme_homepage_image_2');
                $image_3 = get_theme_mod('fat_theme_homepage_image_3');
                $image_4 = get_theme_mod('fat_theme_homepage_image_4');
                $image_5 = get_theme_mod('fat_theme_homepage_image_5');
                $image_6 = get_theme_mod('fat_theme_homepage_image_6');

                $customizer_data = [
                    'first_section_title'        => $first_section_title,
                    'second_section_title'       => $second_section_title,
                    'third_section_title'        => $third_section_title,
                    'fourth_section_title'       => $fourth_section_title,
                    'fifth_section_title'        => $fifth_section_title,
                    'sixth_section_title'        => $sixth_section_title,
                    'homepage_photo_news'        => $homepage_photo_news,
                    'homepage_photo_tour'        => $homepage_photo_tour,
                    'homepage_photo_discography' => $homepage_photo_discography,
                    'homepage_photo_medias'      => $homepage_photo_medias,
                    'homepage_photo_about'       => $homepage_photo_about,
                    'homepage_photo_contact'     => $homepage_photo_contact,
                    '$main_image'                => $main_image,
                    '$image_2'                   => $image_2,
                    '$image_3'                   => $image_3,
                    '$image_4'                   => $image_4,
                    '$image_5'                   => $image_5,
                    '$image_6'                   => $image_6
                ];

                return $customizer_data;
            }
        ]
    );
}