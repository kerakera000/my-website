// document.addEventListener("DOMContentLoaded", function(){

//     const swiper = new Swiper(".swiper", {
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev"
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             type: "bullets",
//             clickable: "clickable",
//         },
//         loop: true, //繰り返し指定
//         spaceBetween: 70, //スライド感の余白
//         slidesPerView: 1.5, //一度に表示するスライド枚数
//         centeredSlides: true, //スライダーの最初と最後に余白を追加せずスライドが真ん中に配置される
//         centeredSlidesBounds: true //アクティブなスライドを中央に配置
//     });

// });

window.addEventListener('DOMContentLoaded', () => {
    // option は使い回すので別に書く
    const optionspc = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "clickable",
        },
        loop: true, //繰り返し指定
        spaceBetween: 70, //スライド感の余白
        slidesPerView: 1.5, //一度に表示するスライド枚数
        centeredSlides: true, //スライダーの最初と最後に余白を追加せずスライドが真ん中に配置される
        centeredSlidesBounds: true //アクティブなスライドを中央に配置
    }
    const optionssp = {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: "clickable",
        },
        loop: true, //繰り返し指定
        spaceBetween: 70, //スライド感の余白
        slidesPerView: 1.5, //一度に表示するスライド枚数
        centeredSlides: true, //スライダーの最初と最後に余白を追加せずスライドが真ん中に配置される
        centeredSlidesBounds: true //アクティブなスライドを中央に配置
    }
    const breakPoint = 768;
    let swiper;
    if ( window.innerWidth <= breakPoint ) {
        swiper = new Swiper('.swiper', optionssp);
    } else {
        swiper = new Swiper('.swiper', optionssp);
    }

    window.addEventListener('resize', () => {
    if ( window.innerWidth <= breakPoint ) {
        swiper = new Swiper('.swiper', optionssp);
    } else {
        swiper = new Swiper('.swiper', optionspc);
    }
    }, false);
}, false);
