<?php

function fat_register_customizer_background_images($wp_customize, $panel_id)
{
    $section_id = 'fat_theme_background_images';

    $wp_customize->add_section(
        $section_id,
        [
            'title'     => 'Photos de fond',
            'priority'  => 2,
            'panel'     => $panel_id
        ]
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_photo_news'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_photo_news',
            [
                'label'   => 'Photo "News"',
                'section' => $section_id
            ]
        )
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_photo_tour'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_photo_tour',
            [
                'label'   => 'Photo "Tour"',
                'section' => $section_id
            ]
        )
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_photo_discography'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_photo_discography',
            [
                'label'   => 'Photo "Discography"',
                'section' => $section_id
            ]
        )
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_photo_medias'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_photo_medias',
            [
                'label'   => 'Photo "Médias"',
                'section' => $section_id
            ]
        )
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_photo_about'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_photo_about',
            [
                'label'   => 'Photo "About"',
                'section' => $section_id
            ]
        )
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_photo_contact'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_photo_contact',
            [
                'label'   => 'Photo "Contact"',
                'section' => $section_id
            ]
        )
    );
}