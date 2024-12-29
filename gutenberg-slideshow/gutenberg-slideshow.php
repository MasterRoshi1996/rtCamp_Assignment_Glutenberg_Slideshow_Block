<?php
/**
 * Plugin Name: Gutenberg Slideshow Block
 * Description: A custom Gutenberg block for a responsive slideshow using WP REST API.
 * Version: 1.0.0
 * Author: Your Name
 */

function gutenberg_slideshow_register_block() {
    wp_register_script(
        'gutenberg-slideshow-editor-script',
        plugins_url('block/index.js', __FILE__),
        array('wp-blocks', 'wp-element', 'wp-editor', 'wp-components', 'wp-api-fetch')
    );

    wp_register_style(
        'gutenberg-slideshow-editor-style',
        plugins_url('block/editor.css', __FILE__)
    );

    wp_register_style(
        'gutenberg-slideshow-style',
        plugins_url('block/style.css', __FILE__)
    );

    register_block_type('gutenberg-slideshow/block', array(
        'editor_script' => 'gutenberg-slideshow-editor-script',
        'editor_style' => 'gutenberg-slideshow-editor-style',
        'style' => 'gutenberg-slideshow-style',
        'render_callback' => 'gutenberg_slideshow_dynamic_render',
    ));
}
add_action('init', 'gutenberg_slideshow_register_block');

function gutenberg_slideshow_dynamic_render($attributes) {
    return '<div id="slideshow-container"></div>';
}
?>
