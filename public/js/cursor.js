document.addEventListener('DOMContentLoaded', () => {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    window.addEventListener('mousemove', (e) => {
        const posX = e.clientX;
        const posY = e.clientY;
        
        // 更新点光标位置
        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;
        
        // 添加延迟效果给外圈
        setTimeout(() => {
            cursorOutline.style.left = `${posX - 13}px`;
            cursorOutline.style.top = `${posY - 13}px`;
        }, 50);
    });
    
    // 鼠标按下效果
    document.addEventListener('mousedown', () => {
        cursorDot.style.transform = 'scale(2)';
        cursorOutline.style.transform = 'scale(0.5)';
    });
    
    // 鼠标释放效果
    document.addEventListener('mouseup', () => {
        cursorDot.style.transform = 'scale(1)';
        cursorOutline.style.transform = 'scale(1)';
    });
    
    // 鼠标离开页面时隐藏光标
    document.addEventListener('mouseleave', () => {
        cursorDot.style.opacity = '0';
        cursorOutline.style.opacity = '0';
    });
    
    // 鼠标进入页面时显示光标
    document.addEventListener('mouseenter', () => {
        cursorDot.style.opacity = '1';
        cursorOutline.style.opacity = '1';
    });
}); 