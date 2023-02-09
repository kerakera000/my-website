<?php
    function load_scripts(){

        wp_enqueue_script(
            'mainjs', //名前（なんでも良い）
            get_theme_file_uri( '/js/main.js'),  //読み込むファイル
            true // HTMLの最後で読み込むかどうか
        );

        wp_enqueue_script(
            'scrolejs', //名前（なんでも良い）
            get_theme_file_uri( '/js/scrole.js'),  //読み込むファイル
            true // HTMLの最後で読み込むかどうか
        );
        wp_enqueue_script(
            'bemcontentjs', //名前（なんでも良い）
            get_theme_file_uri( '/js/bemcontent.js'),  //読み込むファイル
            true // HTMLの最後で読み込むかどうか
        );
        wp_enqueue_script(
            'scsscontentjs', //名前（なんでも良い）
            get_theme_file_uri( '/js/scsscontent.js'),  //読み込むファイル
            true // HTMLの最後で読み込むかどうか
        );
        wp_enqueue_script(
            'dockercontentjs', //名前（なんでも良い）
            get_theme_file_uri( '/js/dockercontent.js'),  //読み込むファイル
            true // HTMLの最後で読み込むかどうか
        );
        wp_enqueue_script(
            'githubcontentjs', //名前（なんでも良い）
            get_theme_file_uri( '/js/githubcontent.js'),  //読み込むファイル
            true // HTMLの最後で読み込むかどうか
        );
        wp_enqueue_script(
            'wpcontentjs', //名前（なんでも良い）
            get_theme_file_uri( '/js/wpcontent.js'),  //読み込むファイル
            true // HTMLの最後で読み込むかどうか
        );
        wp_enqueue_script(
            'swiperjs', //名前（なんでも良い）
            get_theme_file_uri( '/js/swiper.js'),  //読み込むファイル
            true // HTMLの最後で読み込むかどうか
        );
    }
    add_action( 'wp_enqueue_scripts', 'load_scripts' );
?>