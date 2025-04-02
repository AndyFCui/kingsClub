document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    
    langToggle.addEventListener('click', function() {
        // 获取当前语言状态
        const currentLang = document.documentElement.lang || 'zh';
        // 切换到新语言
        const newLang = currentLang === 'zh' ? 'en' : 'zh';
        
        // 设置cookie
        document.cookie = `userLang=${newLang};path=/;max-age=31536000`;
        
        // 立即刷新页面以应用新语言
        window.location.reload();
    });
});

// 获取cookie的辅助函数
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

function updateLanguageUI(lang) {
    const langToggle = document.getElementById('langToggle');
    const zhSpan = langToggle.querySelector('span:first-child');
    const enSpan = langToggle.querySelector('span:last-child');
    
    if (lang === 'zh') {
        zhSpan.classList.add('active');
        enSpan.classList.remove('active');
    } else {
        zhSpan.classList.remove('active');
        enSpan.classList.add('active');
    }
}

function updatePageContent(lang) {
    // 更新所有需要切换语言的元素
    document.querySelectorAll('[data-zh][data-en]').forEach(element => {
        element.textContent = element.getAttribute(`data-${lang}`);
    });
} 