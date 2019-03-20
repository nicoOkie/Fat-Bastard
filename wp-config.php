<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wordpress_projet_fat');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'wordpress_projet_fat');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'wordpress_projet_fat');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', '92.243.8.90');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'X{2tAadfoRsMN~(F;0v2*o<CZ[H)C1I,j&Y05/GfmKeX$x1_2p<q&)3aG-5XSUF-');
define('SECURE_AUTH_KEY',  ':[&k+u%bVSv7>+J<(<1n09Nm4hoX-0|  Xy]Yh@&bn/0gv)9+,^8bGj|=OtQZDmH');
define('LOGGED_IN_KEY',    'caprc6?Y,tPs%9gs$Uc|v>3o9`VOAb+v_W>3!c>PyosoF4~w#5h:jN<{iq)SV08*');
define('NONCE_KEY',        'Z#_0N,2*G{FwXo%P|^FPm~VlnNB?HI<_{$)U{a}F$U6L`IbE)w%4Z=A+A9o#h;*P');
define('AUTH_SALT',        '*t/;z5D3q okV8ImnO5sKA$;xD2N=$LNTqRGLkoi[%njc<+6S?mt$4R4mpA?DJ8~');
define('SECURE_AUTH_SALT', 'pza(=02ZuU;x]zks&i;n`m+@6=5ZjR=+sz`#1kN(2HsO:-juiEO]LVWcL=|@mJop');
define('LOGGED_IN_SALT',   '-9{RwK,q$5*SCa8Hurr+OV<VmTS&gPv~r14A:E666r7+9Utt;Z9#]kLGg,vBTLvz');
define('NONCE_SALT',       '.)b7-U(j%gyjx/cy<z)LN|mo:15:EHy:g;h6OQr}sYl;MZNNqPXVfS3-/-ZeE}hb');

/**#@-*/
/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'fat_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', true);

define( 'WP_HOME', 'http://localhost/fat-apotheose/' );
define( 'WP_SITEURL', rtrim( WP_HOME, '/' ) . '/wp' );
define( 'WP_CONTENT_DIR', __DIR__ . '/content' );
define( 'WP_CONTENT_URL', rtrim( WP_HOME, '/' ) . '/content' );

// Environnement de production
define( 'ENVIRONMENT', 'development' );
// Environnement de développement
// define( 'ENVIRONMENT', 'development' );
// Environement de préproduction
// define( 'ENVIRONMENT', 'staging' );

if ( defined( 'ENVIRONMENT' ) ) {
    if ( ENVIRONMENT === 'development' ) {
        define( 'WP_DEBUG_DISPLAY', true );
        define( 'WP_DEBUG_LOG', false );
        define( 'DISALLOW_FILE_MODS', false );
        define( 'EMPTY_TRASH_DAYS', 0 );
        define( 'WP_POST_REVISIONS', false );
    } else if ( ENVIRONMENT === 'production' ) {
        define( 'WP_DEBUG_DISPLAY', false );
        define( 'WP_DEBUG_LOG', true );
        define( 'DISALLOW_FILE_MODS', true );
        define( 'WP_POST_REVISIONS', 7 );
    } else {
        echo 'Unknown environement.';
        exit;
    }
} else {
    echo 'No environment is specified.';
    exit;
}
define( 'FS_METHOD', 'direct' );
define( 'DISALLOW_FILE_EDIT', true );
define( 'AUTOMATIC_UPDATER_DISABLED', true );
define( 'WP_AUTO_UPDATE_CORE', false );

/* C’est tout, ne touchez pas à ce qui suit ! */
/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
    define('ABSPATH', dirname(__FILE__) . '/');
    
/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');