<?php

add_action('after_setup_theme', 'fat_theme_setup');

function fat_theme_setup()
{
    add_theme_support('post-thumbnails');
}