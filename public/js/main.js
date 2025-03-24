// 语言切换功能
document.addEventListener('DOMContentLoaded', function() {
    const langToggle = document.getElementById('langToggle');
    const currentLang = 'zh'; // 默认语言为中文

    function switchLanguage(lang) {
        const currentLangElements = document.querySelectorAll(`[data-lang="${lang}"]`);
        const targetLangElements = document.querySelectorAll(`[data-lang="${lang === 'zh' ? 'en' : 'zh'}"]`);
        
        if (currentLangElements[0].style.display !== 'none') {
            // 切换到英文
            currentLangElements.forEach(el => el.style.display = 'none');
            targetLangElements.forEach(el => el.style.display = '');
            document.documentElement.lang = lang;
        } else {
            // 切换到中文
            currentLangElements.forEach(el => el.style.display = '');
            targetLangElements.forEach(el => el.style.display = 'none');
            document.documentElement.lang = lang;
        }
    }

    langToggle.addEventListener('click', function() {
        this.classList.toggle('active');
        
        // 切换语言逻辑
        const currentLang = this.classList.contains('active') ? 'en' : 'zh';
        // 这里调用您现有的语言切换函数
        switchLanguage(currentLang);
    });
}); 