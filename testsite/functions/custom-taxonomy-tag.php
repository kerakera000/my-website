<?php
    add_action('init', 'custom_taxonomy_tag');
    function custom_taxonomy_tag(){
        register_taxonomy(
        'news-tag', // タグの名前（半角英数字の小文字）
        'news',     // タグを追加したいカスタム投稿タイプ
            array(      // オプション（以下）
                'label' => 'タグ', // 表示名
                'public' => true, // このタクソノミーを利用する場合かどうか
                'hierarchical' => false, // 階層を持たせるかどうか
                'show_in_rest' => true, // REST APIの有効化。ブロックエディタの有効化。
                'update_count_callback' => '_update_post_term_count',
            )
        );
    }
?>