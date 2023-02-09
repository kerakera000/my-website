document.addEventListener("DOMContentLoaded", function(){

    let ClickBtnBemCardFront = document.getElementById("Click-btn-bem-card-front");
    let ClickBtnBemCardBehind = document.getElementById("Click-btn-bem-card-behind");

    // bem制御
    ClickBtnBemCardFront.addEventListener("click", function() {//表カードクリック時の制御
        ClickBtnBemCardFront.classList.add("rotate-front-card");    //回転
        ClickBtnBemCardBehind.classList.add("rotate-behind-card");

        if (ClickBtnBemCardFront.classList.contains("boxshadow-white-up")){//boxshadow条件分岐白
            ClickBtnBemCardFront.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnBemCardBehind.classList.add("boxshadow-up");
            ClickBtnBemCardFront.classList.remove("boxshadow-white-up");
            ClickBtnBemCardBehind.classList.add("boxshadow-white-up");

        } else if (ClickBtnBemCardFront.classList.contains("boxshadow-black-up")){//boxshadow条件分岐黒
            ClickBtnBemCardFront.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnBemCardBehind.classList.add("boxshadow-up");
            ClickBtnBemCardFront.classList.remove("boxshadow-black-up");
            ClickBtnBemCardBehind.classList.add("boxshadow-black-up");

        } else if (ClickBtnBemCardFront.classList.contains("boxshadow-violet-up")){//boxshadow条件分岐紫
            ClickBtnBemCardFront.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnBemCardBehind.classList.add("boxshadow-up");
            ClickBtnBemCardFront.classList.remove("boxshadow-violet-up");
            ClickBtnBemCardBehind.classList.add("boxshadow-violet-up");

        } else if (ClickBtnBemCardFront.classList.contains("boxshadow-orange-up")){//boxshadow条件分岐オレンジ
            ClickBtnBemCardFront.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnBemCardBehind.classList.add("boxshadow-up");
            ClickBtnBemCardFront.classList.remove("boxshadow-orange-up");
            ClickBtnBemCardBehind.classList.add("boxshadow-orange-up");
        }
    });
    ClickBtnBemCardBehind.addEventListener("click", function() {//裏カードクリック時の制御
        ClickBtnBemCardBehind.classList.remove("rotate-behind-card");
        ClickBtnBemCardFront.classList.remove("rotate-front-card");

        if (ClickBtnBemCardBehind.classList.contains("boxshadow-white-up")){//boxshadow条件分岐白
            ClickBtnBemCardBehind.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnBemCardFront.classList.add("boxshadow-up");
            ClickBtnBemCardBehind.classList.remove("boxshadow-white-up");
            ClickBtnBemCardFront.classList.add("boxshadow-white-up");

        } else if (ClickBtnBemCardBehind.classList.contains("boxshadow-black-up")){//boxshadow条件分岐黒
            ClickBtnBemCardBehind.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnBemCardFront.classList.add("boxshadow-up");
            ClickBtnBemCardBehind.classList.remove("boxshadow-black-up");
            ClickBtnBemCardFront.classList.add("boxshadow-black-up");

        } else if (ClickBtnBemCardBehind.classList.contains("boxshadow-violet-up")){//boxshadow条件分岐紫
            ClickBtnBemCardBehind.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnBemCardFront.classList.add("boxshadow-up");
            ClickBtnBemCardBehind.classList.remove("boxshadow-violet-up");
            ClickBtnBemCardFront.classList.add("boxshadow-violet-up");

        } else if (ClickBtnBemCardBehind.classList.contains("boxshadow-orange-up")){//boxshadow条件分岐オレンジ
            ClickBtnBemCardBehind.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnBemCardFront.classList.add("boxshadow-up");
            ClickBtnBemCardBehind.classList.remove("boxshadow-orange-up");
            ClickBtnBemCardFront.classList.add("boxshadow-orange-up");
        }
    });

    //bemテキストタイピング アニメーション
    let bemtext = '<section class="content">¥n　<div class="content__item">¥n　　<div class="content__item--text">¥n　　　　テキストアイテム¥n　　</div>¥n　</div>¥n¥n　<div class="content__image-box">¥n　　　<img class="content__image-box--img" ¥n　　　src="/asets/images/item.jpg">¥n　</div>¥n</section>¥n¥n<div class="news">¥n　<div class="news__content">¥n　　<div class="content__item--text">¥n　　　　テキストアイテム¥n　　</div>¥n　</div>..............'
    let Bemtext = document.getElementById('bem-typing-text');

    Bemtext.textContent = bemtext;
    Bemtext.innerHTML = Bemtext.innerHTML.replace(/¥n/g, "<br>");

    const elements = document.querySelectorAll(".bem-typing");
    elements.forEach(element => {
        let text = element.innerHTML;
        let textbox = "";
        for (let i = 0; i < text.length; i++) {
            setTimeout(() => {
                textbox += text[i];
                element.innerHTML = textbox;
                if (i === text.length - 1) {
                    //すべての文字を表示し終えた後に、再度同じ処理を繰り返す
                    setTimeout(() => {
                        typingEffect();
                    }, 2000);
                }
            }, i * 40);
        }
    });

    function typingEffect() {
        Bemtext.textContent = bemtext;
        Bemtext.innerHTML = Bemtext.innerHTML.replace(/¥n/g, "<br>");

        const elements = document.querySelectorAll(".bem-typing");
        elements.forEach(element => {
            let text = element.innerHTML;
            let textbox = "";
            for (let i = 0; i < text.length; i++) {
                setTimeout(() => {
                    textbox += text[i];
                    element.innerHTML = textbox;
                    if (i === text.length - 1) {
                        //すべての文字を表示し終えた後に、再度同じ処理を繰り返す
                        setTimeout(() => {
                            typingEffect();
                        }, 2000);
                    }
                }, i * 40);
            }
        });
    }
});