<?php

add_action('widgets_init', 'the_fat_register_sidebar');

function the_fat_register_sidebar()
{
    register_sidebar([
        'id' => 'widgets',
        'name' => 'widgets'
    ]);
}