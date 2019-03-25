<?php

function fat_register_customizer_sections_title($wp_customize, $panel_id)
{
    $section_id = 'fat_theme_sections_title';

    $wp_customize->add_section(
        $section_id,
        [
            'title'     => 'Titres des sections',
            'priority'  => 1,
            'panel'     => $panel_id
        ]
    );

    $wp_customize->add_setting(
        'fat_theme_first_section_title'
    );

    $wp_customize->add_control(
            'fat_theme_first_section_title',
            [
                'type'    => 'text',
                'label'   => 'Titre Section #1',
                'section' => $section_id
            ]
    );

    $wp_customize->add_setting(
        'fat_theme_second_section_title'
    );

    $wp_customize->add_control(
            'fat_theme_second_section_title',
            [
                'type'    => 'text',
                'label'   => 'Titre Section #2',
                'section' => $section_id
            ]
    );

    $wp_customize->add_setting(
        'fat_theme_third_section_title'
    );

    $wp_customize->add_control(
            'fat_theme_third_section_title',
            [
                'type'    => 'text',
                'label'   => 'Titre Section #3',
                'section' => $section_id
            ]
    );

    $wp_customize->add_setting(
        'fat_theme_fourth_section_title'
    );

    $wp_customize->add_control(
            'fat_theme_fourth_section_title',
            [
                'type'    => 'text',
                'label'   => 'Titre Section #4',
                'section' => $section_id
            ]
    );

    $wp_customize->add_setting(
        'fat_theme_fourth_section_title'
    );

    $wp_customize->add_control(
            'fat_theme_fourth_section_title',
            [
                'type'    => 'text',
                'label'   => 'Titre Section #4',
                'section' => $section_id
            ]
    );

    $wp_customize->add_setting(
        'fat_theme_fifth_section_title'
    );

    $wp_customize->add_control(
            'fat_theme_fifth_section_title',
            [
                'type'    => 'text',
                'label'   => 'Titre Section #5',
                'section' => $section_id
            ]
    );

    $wp_customize->add_setting(
        'fat_theme_sixth_section_title'
    );

    $wp_customize->add_control(
            'fat_theme_sixth_section_title',
            [
                'type'    => 'text',
                'label'   => 'Titre Section #6',
                'section' => $section_id
            ]
    );
}