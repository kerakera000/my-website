<?php
    function load_scripts(){

        wp_enqueue_script(
            'mainjs', //名前（なんでも良い）
            get_theme_file_uri( '/testsite/js/main.js' ),  //読み込むファイル
            true // HTMLの最後で読み込むかどうか
        );

    }
    add_action( 'wp_enqueue_scripts', 'load_scripts' );
?>