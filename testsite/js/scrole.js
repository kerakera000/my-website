
//htmlが全部ロードされてから開始
document.addEventListener("DOMContentLoaded", function(){
    //スクロール時サイトコーディング コンテンツの内容を表示
    const elementTitle = document.querySelector('.title-box');

    window.addEventListener('scroll', function() {
        
        let windowHeight = window.innerHeight / 2;      // 要素の位置をウインドウの中央と比較
        //スキルセット部分のスクロールアニメーション
        let elementTitlePos = elementTitle.getBoundingClientRect().top;
        if (elementTitlePos < windowHeight) {
            elementTitle.classList.add('active');
        } else {
            // 'active'クラスを削除
            elementTitle.classList.remove('active');
        };
    });
});