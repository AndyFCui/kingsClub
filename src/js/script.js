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