// 添加背景图片切换功能
const heroSection = document.querySelector('.hero');
const backgroundImages = [
    'src/res/images/hero-bg.jpg',
    'src/res/images/hero-bg2.jpg',
    'src/res/images/hero-bg3.jpg'
];
let currentImageIndex = 0;

function changeBackgroundImage() {
    currentImageIndex = (currentImageIndex + 1) % backgroundImages.length;
    heroSection.style.backgroundImage = `
        linear-gradient(rgba(10, 10, 42, 0.8), rgba(10, 10, 42, 0.8)),
        url('${backgroundImages[currentImageIndex]}')
    `;
}

// 每5秒切换一次背景图片
setInterval(changeBackgroundImage, 5000);

document.addEventListener('DOMContentLoaded', function() {
    // 轮播图功能
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.querySelector('.prev-arrow');
    const nextButton = document.querySelector('.next-arrow');
    let currentSlide = 0;
    const slideInterval = 5000; // 5秒切换一次

    function updateSlide(newIndex) {
        slides[currentSlide].classList.remove('active');
        indicators[currentSlide].classList.remove('active');
        
        currentSlide = newIndex;
        
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }

    function nextSlide() {
        updateSlide(currentSlide + 1);
    }

    function prevSlide() {
        updateSlide(currentSlide - 1);
    }

    // 自动播放
    let slideTimer = setInterval(nextSlide, slideInterval);

    // 点击指示器切换幻灯片
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            clearInterval(slideTimer);
            updateSlide(index);
            slideTimer = setInterval(nextSlide, slideInterval);
        });
    });

    // 添加左右按钮事件监听
    prevButton.addEventListener('click', () => {
        clearInterval(slideTimer);
        prevSlide();
        slideTimer = setInterval(nextSlide, slideInterval);
    });

    nextButton.addEventListener('click', () => {
        clearInterval(slideTimer);
        nextSlide();
        slideTimer = setInterval(nextSlide, slideInterval);
    });

    // 鼠标悬停时暂停自动播放
    const slideshow = document.querySelector('.slideshow');
    slideshow.addEventListener('mouseenter', () => {
        clearInterval(slideTimer);
    });

    slideshow.addEventListener('mouseleave', () => {
        slideTimer = setInterval(nextSlide, slideInterval);
    });
}); 