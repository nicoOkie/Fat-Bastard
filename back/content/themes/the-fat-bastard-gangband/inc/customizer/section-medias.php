<?php

function fat_register_customizer_section_medias($wp_customize, $panel_id)
{
    $section_id = 'fat_theme_section_medias';

    $wp_customize->add_section(
        $section_id,
        [
            'title'     => 'Photos Section "Médias"',
            'priority'  => 3,
            'panel'     => $panel_id
        ]
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_main_image'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_main_image',
            [
                'label'   => 'Photo principale #1',
                'section' => $section_id
            ]
        )
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_image_2'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_image_2',
            [
                'label'   => 'Photo #2',
                'section' => $section_id
            ]
        )
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_image_3'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_image_3',
            [
                'label'   => 'Photo #3',
                'section' => $section_id
            ]
        )
    ); 
    
    $wp_customize->add_setting(
        'fat_theme_homepage_image_4'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_image_4',
            [
                'label'   => 'Photo #4',
                'section' => $section_id
            ]
        )
    );
    
    $wp_customize->add_setting(
        'fat_theme_homepage_image_5'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_image_5',
            [
                'label'   => 'Photo #5',
                'section' => $section_id
            ]
        )
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_image_6'
    );

    $wp_customize->add_control(
        new WP_Customize_Media_Control(
            $wp_customize,
            'fat_theme_homepage_image_6',
            [
                'label'   => 'Photo #6',
                'section' => $section_id
            ]
        )
    );
}