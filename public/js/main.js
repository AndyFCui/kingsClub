// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    const currentLang = 'zh'; // 默认语言为中文

    function switchLanguage() {
        const currentLangElements = document.querySelectorAll(`[data-lang="zh"]`);
        const targetLangElements = document.querySelectorAll(`[data-lang="en"]`);
        
        if (currentLangElements[0].style.display !== 'none') {
            // 切换到英文
            currentLangElements.forEach(el => el.style.display = 'none');
            targetLangElements.forEach(el => el.style.display = '');
            document.documentElement.lang = 'en';
        } else {
            // 切换到中文
            currentLangElements.forEach(el => el.style.display = '');
            targetLangElements.forEach(el => el.style.display = 'none');
            document.documentElement.lang = 'zh';
        }
    }

    langToggle.addEventListener('click', switchLanguage);
}); 