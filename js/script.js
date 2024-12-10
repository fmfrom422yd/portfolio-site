// 画像のスライドショー（hobby-slider用）
document.addEventListener("DOMContentLoaded", () => {
    // すべてのスライダーに対する処理
    const sliders = document.querySelectorAll(".slider-container");

    sliders.forEach(slider => {
        const sliderImages = slider.querySelector(".slider-images");
        const prevBtn = slider.querySelector(".prev-btn");
        const nextBtn = slider.querySelector(".next-btn");
        const slides = slider.querySelectorAll(".gallery-item");

        let currentIndex = 0;

        // 次の画像に移動
        const showNextSlide = () => {
            currentIndex = (currentIndex + 1) % slides.length;
            updateSlider();
        };

        // 前の画像に戻る
        const showPrevSlide = () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length;
            updateSlider();
        };

        // スライダーを更新
        const updateSlider = () => {
            const offset = -currentIndex * 100;
            sliderImages.style.transform = `translateX(${offset}%)`;
        };

        // ボタンのイベントリスナーを設定
        nextBtn.addEventListener("click", showNextSlide);
        prevBtn.addEventListener("click", showPrevSlide);
    });
});

// フォーム送信時の処理
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('メッセージが送信されました！');
});

// gallery-itemの画像をクリックしたときの処理
const hobbyItems = document.querySelectorAll('.gallery-item'); // gallery-itemの全ての画像
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const closeBtn = document.querySelector('.close');

// 画像をクリックしたときの処理
hobbyItems.forEach(item => {
    item.addEventListener('click', function() {
        const imgSrc = this.querySelector('img').src; // クリックした画像のsrcを取得
        const title = this.getAttribute('data-title'); // data-title属性を取得
        const description = this.getAttribute('data-description'); // data-description属性を取得

        // モーダルに画像と説明を設定
        modalImg.src = imgSrc;
        modalTitle.textContent = title;
        modalText.textContent = description;

        // モーダルを表示
        modal.style.display = 'block';
    });
});

// モーダルを閉じる処理
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// モーダルの外側をクリックしたときにも閉じる処理
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
