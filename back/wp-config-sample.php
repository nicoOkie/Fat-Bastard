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
define('DB_NAME', 'votre_nom_de_bdd');
/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'votre_utilisateur_de_bdd');
/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'votre_mdp_de_bdd');
/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');
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
define('AUTH_KEY',         'put your unique phrase here');
define('SECURE_AUTH_KEY',  'put your unique phrase here');
define('LOGGED_IN_KEY',    'put your unique phrase here');
define('NONCE_KEY',        'put your unique phrase here');
define('AUTH_SALT',        'put your unique phrase here');
define('SECURE_AUTH_SALT', 'put your unique phrase here');
define('LOGGED_IN_SALT',   'put your unique phrase here');
define('NONCE_SALT',       'put your unique phrase here');
/**#@-*/
/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'wp_';
/**
 * On modifie le chemin vers le répertoire wp-content
 * @link https://codex.wordpress.org/Editing_wp-config.php#Moving_wp-content_folder
 */
define( 'WP_CONTENT_DIR', __DIR__ . '/content' );
/**
 * On modifie l'URL de la page d'accueil
 * @link https://codex.wordpress.org/Editing_wp-config.php#WP_HOME
 */
define( 'WP_HOME', 'http://put_your_wordpress_home_url_here' );
/**
 * On modifie le chemin HTTP vers le répertoire wp-content
 * @link https://codex.wordpress.org/Editing_wp-config.php#Moving_wp-content_folder
 */
define( 'WP_CONTENT_URL', rtrim( WP_HOME, '/' ) . '/content' );
/**
 * On modifie le chemin HTTP vers le cœur de WordPress (wp)
 * @link https://codex.wordpress.org/Editing_wp-config.php#WP_SITEURL
 */
define( 'WP_SITEURL', rtrim( WP_HOME, '/' ) . '/wp' );
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
define('WP_DEBUG', false);
/*
La constante ENVIRONMENT stocke le nom de l'environnment dans lequel nous sommes. On peut avoir pour valeur :
    - development
    - staging (préproduction)
    - production
*/
define( 'ENVIRONMENT', 'production' );
/**
 * Je vérifie que la constante ENVIRONMENT est définie
 * @link http://php.net/defined
 */
if ( defined( 'ENVIRONMENT' ) ) {
    if ( 'development' === ENVIRONMENT ) {
        // On est en env de développement
        define( 'DISALLOW_FILE_MODS' , false );
        define( 'EMPTY_TRASH_DAYS', 1 );
        define( 'WP_POST_REVISIONS', false );
        define( 'WP_DEBUG_DISPLAY', true );
        define( 'WP_DEBUG_LOG', true );
    } elseif ( 'staging' === ENVIRONMENT ) {
        // On est en env de préproduction
        define( 'DISALLOW_FILE_MODS' , true );
        define( 'WP_POST_REVISIONS', 2 );
        define( 'EMPTY_TRASH_DAYS', 1 );
        define( 'WP_DEBUG_DISPLAY', true );
        define( 'WP_DEBUG_LOG', true );
    } elseif ( 'production' === ENVIRONMENT ) {
        // On est en env de production
        define( 'DISALLOW_FILE_MODS' , true );
        define( 'WP_POST_REVISIONS', 7 );
        define( 'EMPTY_TRASH_DAYS', 30 );
        define( 'WP_DEBUG_DISPLAY', false );
        define( 'WP_DEBUG_LOG', true );
    }
} else {
    echo 'Aucun environnement de défini dans le fichier wp-config.php.';
    exit;
}
define( 'FS_METHOD', 'direct' );
define( 'DISALLOW_FILE_EDIT', true );
/**
 * Permet d'accéder à l'interface de réparation de la base de données si à true (URL : /wp-admin/maint/repair.php).
 */
define( 'WP_ALLOW_REPAIR', false );
/**
 * Désactivation de la mise à jour automatique
 * @link https://codex.wordpress.org/Configuring_Automatic_Background_Updates
 * @link https://codex.wordpress.org/Editing_wp-config.php#Disable_WordPress_Auto_Updates
 */
define( 'AUTOMATIC_UPDATER_DISABLED', true );
/**
 * Désactivation des mises à jour du cœur de WordPress
 */
define( 'WP_AUTO_UPDATE_CORE', true );
/* C’est tout, ne touchez pas à ce qui suit ! */
/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');
/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');