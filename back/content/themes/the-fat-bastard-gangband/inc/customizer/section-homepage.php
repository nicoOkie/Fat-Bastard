<?php

function fat_register_customizer_section_homepage($wp_customize, $panel_id)
{
    $section_id = 'fat_theme_section_homepage';

    $wp_customize->add_section(
        $section_id,
        [
            'title'     => 'Images',
            'priority'  => 2,
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
                'label'   => 'Image principale',
                'section' => $section_id
            ]
        )
        
        );


}