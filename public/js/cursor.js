document.addEventListener('DOMContentLoaded', () => {
    const isDesktop = window.matchMedia('(min-width: 1024px)').matches;
    
    if (isDesktop) {
        const cursorDot = document.querySelector('.cursor-dot');
        const cursorOutline = document.querySelector('.cursor-outline');
        
        if (cursorDot && cursorOutline) {
            let isMoving = false;
            let fadeTimeout;
            
            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;
                
                // 清除之前的淡出定时器
                clearTimeout(fadeTimeout);
                
                // 显示光标
                cursorDot.style.opacity = '1';
                cursorOutline.style.opacity = '1';
                
                // 更新位置
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
                
                setTimeout(() => {
                    cursorOutline.style.left = `${posX - 13}px`;
                    cursorOutline.style.top = `${posY - 13}px`;
                }, 50);
                
                // 设置新的淡出定时器，改为0.1秒
                fadeTimeout = setTimeout(() => {
                    cursorDot.style.opacity = '0';
                    cursorOutline.style.opacity = '0';
                }, 100); // 从500ms改为100ms
            });
            
            // 更新CSS过渡效果
            cursorDot.style.transition = 'opacity 0.8s ease, transform 0.15s ease';
            cursorOutline.style.transition = 'opacity 0.8s ease, transform 0.15s ease';
            
            // 保持原有的其他事件处理
            document.addEventListener('mousedown', () => {
                cursorDot.style.transform = 'scale(2)';
                cursorOutline.style.transform = 'scale(0.5)';
            });
            
            document.addEventListener('mouseup', () => {
                cursorDot.style.transform = 'scale(1)';
                cursorOutline.style.transform = 'scale(1)';
            });
            
            document.addEventListener('mouseleave', () => {
                cursorDot.style.opacity = '0';
                cursorOutline.style.opacity = '0';
            });
            
            document.addEventListener('mouseenter', () => {
                cursorDot.style.opacity = '1';
                cursorOutline.style.opacity = '1';
            });
        }
    }
}); 