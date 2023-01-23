# WP カスタム投稿カスタムフィールド使いまわし用テンプレート

## 作成目的や使用方法など

### 作成目的  

    使いまわし可能なテンプレートの作成

### 使用方法やどこに何があるかなど  

#### 1.メインcssはtestsite/css/style.cssを読み込んでます  

#### 2.scssの構造  

        1.style.scssにsassフォルダの該当ファイルの中身を読み込んで一つのcssにまとめている。  
        2.sassフォルダはfoundation, content, pageで構成されている  
        3.それぞれのscss名の頭文字に管理しているディレクトリの頭文字を付けた  
            fonudation = _f-○○.scss
            content = _c-○○.scss
            page = _p-○○.scss

        4.sassの中身の簡単な説明  
            foundation : 基盤、部品の管理  
                |- base : resetやfont,colorを管理  
                |- class-mixin : classがついた自由の利かないmixinの管理  
                |- mixin : class指定がなく柔軟に使える部品の管理  
            content : 各ページsection、header、footer、base内容を管理  
            page：contentをまとめた内容を管理  

#### 3.scssの読み込みルール  

        1.@useを使う(理由：importが廃止になるらしい)  
        2.scssの読み込み先は一歩通行で読み込まなければならない(詳細は4.scssの読み込みの順番)  
        3.読み込み先の例外を作ると後から大変になるから作ってはいけない。

#### 4.scssの読み込みの順番  

        1.style.scssはpageフォルダの内容のみを読み込める  
        2.page内のscssはcontentフォルダの内容のみを読み込める  
        3.content内のscssはfoundationフォルダの内容のみを読み込める  

        4.scssの読み込み図。読み込みできるのは↓にあるフォルダ内容のみ。  
            css/style.scss  
            ↓ 読み込み  
            sass/pageフォルダ  
            ↓ 読み込み  
            sass/contentフォルダ  
            ↓ 読み込み  
            sass/foundationフォルダ  

## docker構築あれこれはここから

### 1.docker-compose.yml内の下記の番号を変える  

　asterisk 初めて使うか毎回dockerデータベース消してるなら変えなくてもいいかも

　　　　wp:  
　　　　　ports:  
　　　　　　- '8080:80'  

### 2.ターミナルで　`sudo docker-compose up -d`　のみ

## 不具合発生時などのコマンド一覧

* docker停止  
    `docker-compose down`

* dockerデータベース削除  
    `docker-compose down --volumes`

* マウントが出来てるかの確認手順  
　1. `docker ps` でターミナルでコンテナが上がっているかの確認  
　2. `docker exec -it {wpの方のcontainer_id} bash` 打つ  
　3. `cd ./wp-content/themes/`　でディレクトリ移動  
　4. `ls`　で表示された中に*testsite*があるか確認する  
