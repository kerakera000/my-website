document.addEventListener("DOMContentLoaded", function(){

    let ClickBtnScssCardFront = document.getElementById("Click-btn-scss-card-front");
    let ClickBtnScssCardBehind = document.getElementById("Click-btn-scss-card-behind");

    // scss制御
    ClickBtnScssCardFront.addEventListener("click", function() {//表カードクリック時の制御
        ClickBtnScssCardFront.classList.add("rotate-front-card");    //回転
        ClickBtnScssCardBehind.classList.add("rotate-behind-card");

        if (ClickBtnScssCardFront.classList.contains("boxshadow-white-up")){//boxshadow条件分岐白
            ClickBtnScssCardFront.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnScssCardBehind.classList.add("boxshadow-up");
            ClickBtnScssCardFront.classList.remove("boxshadow-white-up");
            ClickBtnScssCardBehind.classList.add("boxshadow-white-up");

        } else if (ClickBtnScssCardFront.classList.contains("boxshadow-black-up")){//boxshadow条件分岐黒
            ClickBtnScssCardFront.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnScssCardBehind.classList.add("boxshadow-up");
            ClickBtnScssCardFront.classList.remove("boxshadow-black-up");
            ClickBtnScssCardBehind.classList.add("boxshadow-black-up");

        } else if (ClickBtnScssCardFront.classList.contains("boxshadow-violet-up")){//boxshadow条件分岐紫
            ClickBtnScssCardFront.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnScssCardBehind.classList.add("boxshadow-up");
            ClickBtnScssCardFront.classList.remove("boxshadow-violet-up");
            ClickBtnScssCardBehind.classList.add("boxshadow-violet-up");

        } else if (ClickBtnScssCardFront.classList.contains("boxshadow-orange-up")){//boxshadow条件分岐オレンジ
            ClickBtnScssCardFront.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnScssCardBehind.classList.add("boxshadow-up");
            ClickBtnScssCardFront.classList.remove("boxshadow-orange-up");
            ClickBtnScssCardBehind.classList.add("boxshadow-orange-up");
        }
    });
    ClickBtnScssCardBehind.addEventListener("click", function() {//裏カードクリック時の制御
        ClickBtnScssCardBehind.classList.remove("rotate-behind-card");
        ClickBtnScssCardFront.classList.remove("rotate-front-card");

        if (ClickBtnScssCardBehind.classList.contains("boxshadow-white-up")){//boxshadow条件分岐白
            ClickBtnScssCardBehind.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnScssCardFront.classList.add("boxshadow-up");
            ClickBtnScssCardBehind.classList.remove("boxshadow-white-up");
            ClickBtnScssCardFront.classList.add("boxshadow-white-up");

        } else if (ClickBtnScssCardBehind.classList.contains("boxshadow-black-up")){//boxshadow条件分岐黒
            ClickBtnScssCardBehind.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnScssCardFront.classList.add("boxshadow-up");
            ClickBtnScssCardBehind.classList.remove("boxshadow-black-up");
            ClickBtnScssCardFront.classList.add("boxshadow-black-up");

        } else if (ClickBtnScssCardBehind.classList.contains("boxshadow-violet-up")){//boxshadow条件分岐紫
            ClickBtnScssCardBehind.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnScssCardFront.classList.add("boxshadow-up");
            ClickBtnScssCardBehind.classList.remove("boxshadow-violet-up");
            ClickBtnScssCardFront.classList.add("boxshadow-violet-up");

        } else if (ClickBtnScssCardBehind.classList.contains("boxshadow-orange-up")){//boxshadow条件分岐オレンジ
            ClickBtnScssCardBehind.classList.remove("boxshadow-up");      //影の付け替え
            ClickBtnScssCardFront.classList.add("boxshadow-up");
            ClickBtnScssCardBehind.classList.remove("boxshadow-orange-up");
            ClickBtnScssCardFront.classList.add("boxshadow-orange-up");
        }
    });

    //bemテキストタイピング アニメーション
    let bemtext = '.content{¥n　width: 100%;¥n　height: 100vh;¥n　display: flex;¥n　justify-content: center;¥n　align-items: center;¥n　gap: 30px;¥n　&__item{¥n　　width: 10rem;¥n　　height: 10rem;¥n　　&--text{¥n　　　font-size: 2.8rem;¥n　　　color:blue;¥n　　}¥n　}¥n　&__image-box{¥n　　width: 10rem;¥n　　height: 10rem;¥n　　&--img{.......¥n　　　'
    let Bemtext = document.getElementById('scss-typing-text');

    Bemtext.textContent = bemtext;
    Bemtext.innerHTML = Bemtext.innerHTML.replace(/¥n/g, "<br>");

    const elements = document.querySelectorAll(".scss-typing");
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

        const elements = document.querySelectorAll(".scss-typing");
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