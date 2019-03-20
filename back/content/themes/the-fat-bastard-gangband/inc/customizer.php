<?php

require get_theme_file_path('inc/customizer/section-homepage.php');

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
    fat_register_customizer_section_homepage($wp_customize, $panel_id);
}