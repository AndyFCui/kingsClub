const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// 读取content.json
let content;
try {
    const contentPath = path.join(__dirname, 'data', 'content.json');
    if (!fs.existsSync(contentPath)) {
        throw new Error(`content.json not found at ${contentPath}`);
    }
    const rawContent = fs.readFileSync(contentPath, 'utf8');
    content = JSON.parse(rawContent);
    
    // 调试输出
    console.log('Content loaded successfully');
    console.log('Hero slides:', content.hero.slides);
    
    // 验证必要的数据结构
    if (!content.offices?.china?.description?.zh) {
        throw new Error('Missing required data structure in content.json: offices.china.description.zh');
    }
} catch (error) {
    console.error('Error loading content.json:', error);
    process.exit(1); // 如果缺少关键数据，终止服务器
}

// 设置模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 中间件
app.use(express.static(path.join(__dirname, 'public'), {
    etag: false,
    lastModified: false,
    maxAge: 0
}));

// 添加调试中间件
app.use((req, res, next) => {
    // 禁用浏览器缓存
    res.set('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    res.set('Expires', '-1');
    res.set('Pragma', 'no-cache');
    
    console.log('Request path:', req.path);
    if (req.path.includes('/images/')) {
        console.log('Image requested:', req.path);
    }
    next();
});

// 路由
app.get('/', (req, res) => {
    res.render('index', { content });
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 