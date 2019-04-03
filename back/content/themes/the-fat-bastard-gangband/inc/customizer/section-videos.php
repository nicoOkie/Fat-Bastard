<?php

function fat_register_customizer_section_videos($wp_customize, $panel_id)
{
    $section_id = 'fat_theme_section_videos';

    $wp_customize->add_section(
        $section_id,
        [
            'title'     => 'Vidéos Section "Médias"',
            'priority'  => 4,
            'panel'     => $panel_id
        ]
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_main_video'
    );

    $wp_customize->add_control(
        'fat_theme_homepage_main_video',
        [
            'type'    => 'url',
            'label'   => 'URL vidéo principale #1',
            'section' => $section_id,
            'input_attrs' => [
                'placeholder' => 'https://example.com/'
            ]
        ]
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_video_2'
    );

    $wp_customize->add_control(
        'fat_theme_homepage_video_2',
        [
            'type'    => 'url',
            'label'   => 'URL vidéo #2',
            'section' => $section_id,
            'input_attrs' => [
                'placeholder' => 'https://example.com/'
            ]
        ]
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_video_3'
    );

    $wp_customize->add_control(
        'fat_theme_homepage_video_3',
        [
            'type'    => 'url',
            'label'   => 'URL vidéo #3',
            'section' => $section_id,
            'input_attrs' => [
                'placeholder' => 'https://example.com/'
            ]
        ]
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_video_4'
    );

    $wp_customize->add_control(
        'fat_theme_homepage_video_4',
        [
            'type'    => 'url',
            'label'   => 'URL vidéo #4',
            'section' => $section_id,
            'input_attrs' => [
                'placeholder' => 'https://example.com/'
            ]
        ]
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_video_5'
    );

    $wp_customize->add_control(
        'fat_theme_homepage_video_5',
        [
            'type'    => 'url',
            'label'   => 'URL vidéo #5',
            'section' => $section_id,
            'input_attrs' => [
                'placeholder' => 'https://example.com/'
            ]
        ]
    );

    $wp_customize->add_setting(
        'fat_theme_homepage_video_6'
    );

    $wp_customize->add_control(
        'fat_theme_homepage_video_6',
        [
            'type'    => 'url',
            'label'   => 'URL vidéo #6',
            'section' => $section_id,
            'input_attrs' => [
                'placeholder' => 'https://example.com/'
            ]
        ]
    );
}