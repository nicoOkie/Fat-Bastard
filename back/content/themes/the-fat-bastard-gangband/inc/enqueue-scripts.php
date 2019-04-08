<?php

add_action( 'login_enqueue_scripts', 'my_login_stylesheet' );

function my_login_stylesheet() {
 wp_enqueue_style(
      'custom-login',
       get_theme_file_uri('inc/login/login-style.css')
     );
}
