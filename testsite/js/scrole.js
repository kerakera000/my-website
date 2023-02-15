
//htmlが全部ロードされてから開始
document.addEventListener("DOMContentLoaded", function(){
    //スクロール時サイトコーディング コンテンツの内容を表示
    const elementTitle1 = document.querySelector('#title-box1');
    const elementTitle2 = document.querySelector('#title-box2');
    const elementTitle3 = document.querySelector('#title-box3');
    const elementTitle4 = document.querySelector('#title-box4');

    window.addEventListener('scroll', function() {
        
        let windowHeight = window.innerHeight / 2;      // 要素の位置をウインドウの中央と比較
        //スキルセット部分のスクロールアニメーション
        let elementTitle1Pos = elementTitle1.getBoundingClientRect().top;
        if (elementTitle1Pos < windowHeight) {
            elementTitle1.classList.add('active');
        } else {
            // 'active'クラスを削除
            elementTitle1.classList.remove('active');
        };

        let elementTitle2Pos = elementTitle2.getBoundingClientRect().top;
        if (elementTitle2Pos < windowHeight) {
            elementTitle2.classList.add('active');
        } else {
            // 'active'クラスを削除
            elementTitle2.classList.remove('active');
        };

        let elementTitle3Pos = elementTitle3.getBoundingClientRect().top;
        if (elementTitle3Pos < windowHeight) {
            elementTitle3.classList.add('active');
        } else {
            // 'active'クラスを削除
            elementTitle3.classList.remove('active');
        };

        let elementTitle4Pos = elementTitle4.getBoundingClientRect().top;
        if (elementTitle4Pos < windowHeight) {
            elementTitle4.classList.add('active');
        } else {
            // 'active'クラスを削除
            elementTitle4.classList.remove('active');
        };
    });
});