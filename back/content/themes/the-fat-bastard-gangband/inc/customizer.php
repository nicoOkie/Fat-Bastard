<?php

require get_theme_file_path('inc/customizer/background-images.php');
require get_theme_file_path('inc/customizer/section-medias.php');
require get_theme_file_path('inc/customizer/sections-title.php');
require get_theme_file_path('inc/customizer/section-videos.php');

add_action('customize_register', 'fat_customize_register');

function fat_customize_register($wp_customize)
{
    $panel_id = 'fat_theme_panel';

    $wp_customize->add_panel(
        $panel_id,
        [
            'title'       => '♫ The Fat Bastard GangBand',
            'description' => 'Options de configuration du thème The Fat Bastard GangBand',
            'priority'    => 1
        ]
    );

    fat_register_customizer_background_images($wp_customize, $panel_id);
    fat_register_customizer_section_medias($wp_customize, $panel_id);
    fat_register_customizer_sections_title($wp_customize, $panel_id);
    fat_register_customizer_section_videos($wp_customize, $panel_id);
}