<?php

add_action('init', 'fat_nav_menu');

function fat_nav_menu()
{
    register_nav_menus([
        'main-menu'   => 'Menu principal',
        'social-menu' => 'Menu des réseaux sociaux'
    ]);
}