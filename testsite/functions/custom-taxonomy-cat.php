<?php
    add_action('init', 'custom_taxonomy_cat');
    function custom_taxonomy_cat(){
        register_taxonomy( // カスタムタクソノミーの追加関数
            'news-cat', // カテゴリーの名前（半角英数字の小文字）
            'news',     // カテゴリーを追加したいカスタム投稿タイプ名
            array(      // オプション（以下
            'label' => 'ニュースカテゴリー', // 表示名称
            'public' => true, // 管理画面に表示するかどうかの指定
            'hierarchical' => true, // 階層を持たせるかどうか
            'show_in_rest' => true, // REST APIの有効化。ブロックエディタの有効化。
            )
        );
        register_taxonomy( // カスタムタクソノミーの追加関数
            'test-cat', // カテゴリーの名前（半角英数字の小文字）
            'test',     // カテゴリーを追加したいカスタム投稿タイプ名
            array(      // オプション（以下
            'label' => 'テストカテゴリー', // 表示名称
            'public' => true, // 管理画面に表示するかどうかの指定
            'hierarchical' => true, // 階層を持たせるかどうか
            'show_in_rest' => true, // REST APIの有効化。ブロックエディタの有効化。
            )
        );
    }
?>