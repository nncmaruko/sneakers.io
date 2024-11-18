// ------------- ハンバーガーメニュー ------------- //
// ボタンを押したときにnavエリアが出てくる処理　//
let nav = document.querySelector("#header");
let btn = document.querySelector(".toggle-btn");
let mask = document.querySelector(".mask");

console.log(btn)

btn.onclick = () => {
    nav.classList.toggle("open");
}

mask.onclick = () => {
    nav.classList.toggle("open");
}

// ------------- Slick ------------- //
$(document).ready(function () {
    $('.slider').slick({
        // dots: true,
        arrows: false,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '50px',
                    slidesToShow: 1
                }
            }
        ]
    });
});


$(function () {

    /*=================================================
      スムーススクロール
===================================================*/
    // ページ内リンクのイベント
    $('a[href^="#"]').click(function () {
        // debugger
        // リンクを取得
        let href = $(this).attr("href");
        // ジャンプ先のid名をセット
        let target = $(href == "#" || href == "" ? 'html' : href);
        // トップからジャンプ先の要素までの距離を取得
        let position = target.offset().top;
        // animateでスムーススクロールを行う
        // 600はスクロール速度で単位はミリ秒
        $("html, body").animate({ scrollTop: position }, 600, "swing");
        return false;
    });

    /*=================================================
   スクロール時の画像フェード表示
   ===================================================*/
    // スクロール時のイベント
    $(window).scroll(function () {
        // fadeinクラスに対して順に処理を行う
        $('.fadein').each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // fadeinクラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // fadeinクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css('opacity', '1');
                $(this).css('transform', 'translateY(0)');
            }
        });
    });
});