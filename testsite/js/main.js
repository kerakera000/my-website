//htmlが全部ロードされてから開始
document.addEventListener("DOMContentLoaded", function(){
     // 発火用IDの取得
    let btnWhite = document.getElementById("btn-wight");
    let btnBlack = document.getElementById("btn-black");
    let btnViolet = document.getElementById("btn-violet");
    let btnOrange = document.getElementById("btn-orange");
    // 参照用classの取得
    let BaseColor = document.getElementsByClassName("base-color");  //ベースカラー
    let ObjectColor = document.getElementsByClassName("object-color") //ベースの半転色 アクセント用
    let TextColor = document.getElementsByClassName("text-color");  //テキストカラー
    let BoxshadowUp = document.getElementsByClassName("boxshadow-up");  //ニューモフィズム  浮き出る
    let BoxshadowDown = document.getElementsByClassName("boxshadow-down");  //ニューモフィズム  凹んでる
    let SolidColor = document.getElementsByClassName("solid-color");    //キューブ用外枠
    let TextShadow = document.getElementsByClassName("text-shadow");    //文字影
    let SolidBack = document.getElementsByClassName('solid-back'); //solidの反転色
    let ImgWp = document.getElementById("img-wp");
    let ImgDocker = document.getElementById("img-docker");
    let ImgGithub = document.getElementById("img-github");


    const BtnSwichWhite = document.querySelector("#btn-swich-white");
    const BtnSwichBlack = document.querySelector("#btn-swich-black");
    const BtnSwichViolet = document.querySelector("#btn-swich-violet");
    const BtnSwichOrange = document.querySelector("#btn-swich-orange");

    // 背景白 テキスト紫 影指定
    btnWhite.addEventListener("click", function() {
        if (btnWhite.classList.contains("swich-action")){       //もしロック用クラスがついていたら
            return                                             //何もしない
        } else{                                                //条件と違う場合
            if(BtnSwichWhite.classList.contains("swich-white")){//もしbutton-White-upでボタンが上がってたら
                BtnSwichWhite.classList.add("action");

                BtnSwichBlack.classList.add("swich-black");
                BtnSwichViolet.classList.add("swich-violet");
                BtnSwichOrange.classList.add("swich-orange");
                btnWhite.classList.add("swich-action");         //ロック用のクラス追加

                btnBlack.classList.remove("swich-action");      //その他のボタンのロック用クラスを解除
                btnViolet.classList.remove("swich-action");
                btnOrange.classList.remove("swich-action");

                BtnSwichBlack.classList.remove("action");
                BtnSwichViolet.classList.remove("action");
                BtnSwichOrange.classList.remove("action");

                BtnSwichWhite.classList.remove("swich-white");  //上げる用のスタイルを消去
            }
        }
        //img
        ImgWp.classList.add("wp-img-violet");
        ImgWp.classList.remove("wp-img-white");
        ImgWp.classList.remove("wp-img-dark");
        ImgWp.classList.remove("wp-img-orange");

        ImgDocker.classList.add("docker-img-violet");
        ImgDocker.classList.remove("docker-img-white");
        ImgDocker.classList.remove("docker-img-dark");
        ImgDocker.classList.remove("docker-img-orange");

        ImgGithub.classList.add("github-img-violet");
        ImgGithub.classList.remove("github-img-white");
        ImgGithub.classList.remove("github-img-dark");
        ImgGithub.classList.remove("github-img-orange");

        //background
        for(BcolorWhite=0;BcolorWhite<BaseColor.length;BcolorWhite++){
            BaseColor[BcolorWhite].style.backgroundColor = "#fffff9";
        }

        //text color
        for(TcolorWhite=0;TcolorWhite<TextColor.length;TcolorWhite++){
            TextColor[TcolorWhite].style.color = "#513743";
        }

        //shadow up
        for (let ShadowUp = 0; ShadowUp < BoxshadowUp.length; ShadowUp++) {
            // 要素にクラス「base-color-OO」があるかどうかを確認します
            BoxshadowUp[ShadowUp].classList.add("boxshadow-white-up");
            BoxshadowUp[ShadowUp].classList.remove("boxshadow-black-up");
            BoxshadowUp[ShadowUp].classList.remove("boxshadow-violet-up");
            BoxshadowUp[ShadowUp].classList.remove("boxshadow-orange-up");
        }

        //shadow down
        for (let ShadowDown = 0; ShadowDown < BoxshadowDown.length; ShadowDown++) {
            BoxshadowDown[ShadowDown].classList.add("boxshadow-white-down");
            BoxshadowDown[ShadowDown].classList.remove("boxshadow-black-down");
            BoxshadowDown[ShadowDown].classList.remove("boxshadow-violet-down");
            BoxshadowDown[ShadowDown].classList.remove("boxshadow-orange-down");
        }

        //solid
        for (let Solids = 0; Solids < SolidColor.length; Solids++) {
            SolidColor[Solids].classList.add("solid-color-white");
            SolidColor[Solids].classList.remove("solid-color-black");
            SolidColor[Solids].classList.remove("solid-color-violet");
            SolidColor[Solids].classList.remove("solid-color-orange");
        }
        
        //solid-back
        for (let SolidBacks = 0; SolidBacks < SolidBack.length; SolidBacks++) {
            SolidBack[SolidBacks].classList.add("solid-color-white-back");
            SolidBack[SolidBacks].classList.remove("solid-color-black-back");
            SolidBack[SolidBacks].classList.remove("solid-color-violet-back");
            SolidBack[SolidBacks].classList.remove("solid-color-orange-back");
        }

        //text shadow
        for (let textshadow = 0; textshadow < TextShadow.length; textshadow++) {
            TextShadow[textshadow].classList.add("text-shadow-white");
            TextShadow[textshadow].classList.remove("text-shadow-black");
            TextShadow[textshadow].classList.remove("text-shadow-violet");
            TextShadow[textshadow].classList.remove("text-shadow-orange");
        }

        // object
        for(ObjectColorWhite = 0; ObjectColorWhite < ObjectColor.length; ObjectColorWhite++){
            ObjectColor[ObjectColorWhite].style.color = "#fffff9";
            ObjectColor[ObjectColorWhite].style.backgroundColor = "#513743";
        }
    });

    // 背景黒 テキストオレンジ 影指定
    btnBlack.addEventListener("click", function() {
        if (btnBlack.classList.contains("swich-action")){       //もしロック用クラスがついていたら
            return                                             //何もしない
        } else{                                                //条件と違う場合
            if(BtnSwichBlack.classList.contains("swich-black")){//もしbutton-White-upでボタンが上がってたら
                BtnSwichBlack.classList.add("action");

                BtnSwichWhite.classList.add("swich-white");
                BtnSwichViolet.classList.add("swich-violet");
                BtnSwichOrange.classList.add("swich-orange");
                btnBlack.classList.add("swich-action");         //ロック用のクラス追加

                btnWhite.classList.remove("swich-action");      //その他のボタンのロック用クラスを解除
                btnViolet.classList.remove("swich-action");
                btnOrange.classList.remove("swich-action");

                BtnSwichWhite.classList.remove("action");
                BtnSwichViolet.classList.remove("action");
                BtnSwichOrange.classList.remove("action");

                BtnSwichBlack.classList.remove("swich-black");  //上げる用のスタイルを消去
            }
        }
        //img
        ImgWp.classList.add("wp-img-orange");
        ImgWp.classList.remove("wp-img-white");
        ImgWp.classList.remove("wp-img-dark");
        ImgWp.classList.remove("wp-img-violet");

        ImgDocker.classList.add("docker-img-orange");
        ImgDocker.classList.remove("docker-img-white");
        ImgDocker.classList.remove("docker-img-dark");
        ImgDocker.classList.remove("docker-img-violet");

        ImgGithub.classList.add("github-img-orange");
        ImgGithub.classList.remove("github-img-white");
        ImgGithub.classList.remove("github-img-dark");
        ImgGithub.classList.remove("github-img-violet");

        //background
        for(BcolorBlack=0;BcolorBlack<BaseColor.length;BcolorBlack++){
            BaseColor[BcolorBlack].style.backgroundColor = "#16160e";
        }

        //text color
        for(TcolorBlack=0;TcolorBlack<TextColor.length;TcolorBlack++){
            TextColor[TcolorBlack].style.color = "#d66a35";
        }

        //shadow up
        for (let ShadowUp = 0; ShadowUp < BoxshadowUp.length; ShadowUp++) {
            // 要素にクラス「base-color-OO」があるかどうかを確認します
                BoxshadowUp[ShadowUp].classList.add("boxshadow-black-up");
                BoxshadowUp[ShadowUp].classList.remove("boxshadow-white-up");
                BoxshadowUp[ShadowUp].classList.remove("boxshadow-violet-up");
                BoxshadowUp[ShadowUp].classList.remove("boxshadow-orange-up");
        }

        //shadow down
        for (let ShadowDown = 0; ShadowDown < BoxshadowDown.length; ShadowDown++) {
                BoxshadowDown[ShadowDown].classList.add("boxshadow-black-down");
                BoxshadowDown[ShadowDown].classList.remove("boxshadow-white-down");
                BoxshadowDown[ShadowDown].classList.remove("boxshadow-violet-down");
                BoxshadowDown[ShadowDown].classList.remove("boxshadow-orange-down");
        }

        //solid
        for (let Solids = 0; Solids < SolidColor.length; Solids++) {
                SolidColor[Solids].classList.add("solid-color-black");
                SolidColor[Solids].classList.remove("solid-color-white");
                SolidColor[Solids].classList.remove("solid-color-violet");
                SolidColor[Solids].classList.remove("solid-color-orange");
        }

        //solidback
        for (let SolidBacks = 0; SolidBacks < SolidBack.length; SolidBacks++) {
                SolidBack[SolidBacks].classList.add("solid-color-black-back");
                SolidBack[SolidBacks].classList.remove("solid-color-white-back");
                SolidBack[SolidBacks].classList.remove("solid-color-violet-back");
                SolidBack[SolidBacks].classList.remove("solid-color-orange-back");
        }

        //text shadow
        for (let textshadow = 0; textshadow < TextShadow.length; textshadow++) {
                TextShadow[textshadow].classList.add("text-shadow-black");
                TextShadow[textshadow].classList.remove("text-shadow-white");
                TextShadow[textshadow].classList.remove("text-shadow-violet");
                TextShadow[textshadow].classList.remove("text-shadow-orange");
        }

        // object
        for(ObjectColorBlack = 0; ObjectColorBlack < ObjectColor.length; ObjectColorBlack++){
            ObjectColor[ObjectColorBlack].style.color = "#16160e";
            ObjectColor[ObjectColorBlack].style.backgroundColor = "#d66a35";
        }
    });

    // 背景紫 テキスト白 影指定
    btnViolet.addEventListener("click", function() {
        if (btnViolet.classList.contains("swich-action")){       //もしロック用クラスがついていたら
            return                                             //何もしない
        } else{                                                //条件と違う場合
            if(BtnSwichViolet.classList.contains("swich-violet")){//もしbutton-White-upでボタンが上がってたら
                BtnSwichViolet.classList.add("action");

                BtnSwichWhite.classList.add("swich-white");
                BtnSwichBlack.classList.add("swich-black");
                BtnSwichOrange.classList.add("swich-orange");
                btnViolet.classList.add("swich-action");         //ロック用のクラス追加

                btnWhite.classList.remove("swich-action");      //その他のボタンのロック用クラスを解除
                btnBlack.classList.remove("swich-action");
                btnOrange.classList.remove("swich-action");

                BtnSwichWhite.classList.remove("action");
                BtnSwichBlack.classList.remove("action");
                BtnSwichOrange.classList.remove("action");

                BtnSwichViolet.classList.remove("swich-violet");  //上げる用のスタイルを消去
            }
        }
        //img
        ImgWp.classList.add("wp-img-white");
        ImgWp.classList.remove("wp-img-violet");
        ImgWp.classList.remove("wp-img-dark");
        ImgWp.classList.remove("wp-img-orange");

        ImgDocker.classList.add("docker-img-white");
        ImgDocker.classList.remove("docker-img-violet");
        ImgDocker.classList.remove("docker-img-dark");
        ImgDocker.classList.remove("docker-img-orange");

        ImgGithub.classList.add("github-img-white");
        ImgGithub.classList.remove("github-img-violet");
        ImgGithub.classList.remove("github-img-dark");
        ImgGithub.classList.remove("github-img-orange");
        
        //background
        for(BcolorViolet=0;BcolorViolet<BaseColor.length;BcolorViolet++){
            BaseColor[BcolorViolet].style.backgroundColor = "#513743";
        }

        //text color
        for(TcolorViolet=0;TcolorViolet<TextColor.length;TcolorViolet++){
            TextColor[TcolorViolet].style.color = "#fffff9";
        }

        //shadow up
        for (let ShadowUp = 0; ShadowUp < BoxshadowUp.length; ShadowUp++) {
                BoxshadowUp[ShadowUp].classList.add("boxshadow-violet-up");
                BoxshadowUp[ShadowUp].classList.remove("boxshadow-white-up");
                BoxshadowUp[ShadowUp].classList.remove("boxshadow-black-up");
                BoxshadowUp[ShadowUp].classList.remove("boxshadow-orange-up");
        }

        //shadow down
        for (let ShadowDown = 0; ShadowDown < BoxshadowDown.length; ShadowDown++) {
                BoxshadowDown[ShadowDown].classList.add("boxshadow-violet-down");
                BoxshadowDown[ShadowDown].classList.remove("boxshadow-white-down");
                BoxshadowDown[ShadowDown].classList.remove("boxshadow-black-down");
                BoxshadowDown[ShadowDown].classList.remove("boxshadow-orange-down");
        }

        //solid
        for (let Solids = 0; Solids < SolidColor.length; Solids++) {
                SolidColor[Solids].classList.add("solid-color-violet");
                SolidColor[Solids].classList.remove("solid-color-white");
                SolidColor[Solids].classList.remove("solid-color-black");
                SolidColor[Solids].classList.remove("solid-color-orange");
        }

        //solidback
        for (let SolidBacks = 0; SolidBacks < SolidBack.length; SolidBacks++) {
                SolidBack[SolidBacks].classList.add("solid-color-violet-back");
                SolidBack[SolidBacks].classList.remove("solid-color-white-back");
                SolidBack[SolidBacks].classList.remove("solid-color-black-back");
                SolidBack[SolidBacks].classList.remove("solid-color-orange-back");
        }

        //text shadow
        for (let textshadow = 0; textshadow < TextShadow.length; textshadow++) {
                TextShadow[textshadow].classList.add("text-shadow-violet");
                TextShadow[textshadow].classList.remove("text-shadow-white");
                TextShadow[textshadow].classList.remove("text-shadow-black");
                TextShadow[textshadow].classList.remove("text-shadow-orange");
        }

        // object
        for(ObjectColorViolet=0;ObjectColorViolet<ObjectColor.length;ObjectColorViolet++){
            ObjectColor[ObjectColorViolet].style.color = "#513743";
            ObjectColor[ObjectColorViolet].style.backgroundColor = "#fffff9";
        }
    });
    // 背景オレンジ テキスト黒 影指定
    btnOrange.addEventListener("click", function() {
        
        if (btnOrange.classList.contains("swich-action")){       //もしロック用クラスがついていたら
            return                                             //何もしない
        } else{                                                //条件と違う場合
            if(BtnSwichOrange.classList.contains("swich-orange")){//もしbutton-White-upでボタンが上がってたら
                BtnSwichOrange.classList.add("action");

                BtnSwichWhite.classList.add("swich-white");
                BtnSwichBlack.classList.add("swich-black");
                BtnSwichViolet.classList.add("swich-violet");
                btnOrange.classList.add("swich-action");         //ロック用のクラス追加

                btnWhite.classList.remove("swich-action");      //その他のボタンのロック用クラスを解除
                btnBlack.classList.remove("swich-action");
                btnViolet.classList.remove("swich-action");

                BtnSwichWhite.classList.remove("action");
                BtnSwichBlack.classList.remove("action");
                BtnSwichViolet.classList.remove("action");

                BtnSwichOrange.classList.remove("swich-orange");  //上げる用のスタイルを消去
            }
        }
         //img
        ImgWp.classList.add("wp-img-dark");
        ImgWp.classList.remove("wp-img-violet");
        ImgWp.classList.remove("wp-img-white");
        ImgWp.classList.remove("wp-img-orange");

        ImgDocker.classList.add("docker-img-dark");
        ImgDocker.classList.remove("docker-img-violet");
        ImgDocker.classList.remove("docker-img-white");
        ImgDocker.classList.remove("docker-img-orange");

        ImgGithub.classList.add("github-img-dark");
        ImgGithub.classList.remove("github-img-violet");
        ImgGithub.classList.remove("github-img-white");
        ImgGithub.classList.remove("github-img-orange");
        
        // background
        for(BcolorOrange=0;BcolorOrange<BaseColor.length;BcolorOrange++){
            BaseColor[BcolorOrange].style.backgroundColor = "#d66a35";
        }

        //textcolor
        for(TcolorOrange=0;TcolorOrange<TextColor.length;TcolorOrange++){
            TextColor[TcolorOrange].style.color = "#16160e";
        }

        //shadow
        for (let ShadowUp = 0; ShadowUp < BoxshadowUp.length; ShadowUp++) {
                BoxshadowUp[ShadowUp].classList.add("boxshadow-orange-up");
                BoxshadowUp[ShadowUp].classList.remove("boxshadow-white-up");
                BoxshadowUp[ShadowUp].classList.remove("boxshadow-black-up");
                BoxshadowUp[ShadowUp].classList.remove("boxshadow-violet-up");
        }

        //shadow down
        for (let ShadowDown = 0; ShadowDown < BoxshadowDown.length; ShadowDown++) {
                BoxshadowDown[ShadowDown].classList.add("boxshadow-orange-down");
                BoxshadowDown[ShadowDown].classList.remove("boxshadow-white-down");
                BoxshadowDown[ShadowDown].classList.remove("boxshadow-black-down");
                BoxshadowDown[ShadowDown].classList.remove("boxshadow-violet-down");
        }

        //solid
        for (let Solids = 0; Solids < SolidColor.length; Solids++) {
                SolidColor[Solids].classList.add("solid-color-orange");
                SolidColor[Solids].classList.remove("solid-color-white");
                SolidColor[Solids].classList.remove("solid-color-black");
                SolidColor[Solids].classList.remove("solid-color-violet");
        }
        //solidback
        for (let SolidBacks = 0; SolidBacks < SolidBack.length; SolidBacks++) {
                SolidBack[SolidBacks].classList.add("solid-color-orange-back");
                SolidBack[SolidBacks].classList.remove("solid-color-white-back");
                SolidBack[SolidBacks].classList.remove("solid-color-black-back");
                SolidBack[SolidBacks].classList.remove("solid-color-violet-back");
        }

        //text shadow
        for (let textshadow = 0; textshadow < TextShadow.length; textshadow++) {
                TextShadow[textshadow].classList.add("text-shadow-orange");
                TextShadow[textshadow].classList.remove("text-shadow-white");
                TextShadow[textshadow].classList.remove("text-shadow-black");
                TextShadow[textshadow].classList.remove("text-shadow-violet");
        }

        // object
        for(ObjectColorViolet=0;ObjectColorViolet<ObjectColor.length;ObjectColorViolet++){
            ObjectColor[ObjectColorViolet].style.color = "#d66a35";
            ObjectColor[ObjectColorViolet].style.backgroundColor = "#16160e";
        }
    });
});