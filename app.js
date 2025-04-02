const express = require('express');
const path = require('path');
const fs = require('fs');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

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
    
    // 验证其他必要的数据结构
    if (!content.site?.title?.zh) {
        throw new Error('Missing required data structure in content.json: site.title.zh');
    }
    
    // 调试输出
    console.log('Content loaded successfully');
    console.log('Hero slides:', content.hero.slides);
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

// 添加请求日志中间件，过滤掉favicon请求
app.use((req, res, next) => {
  if (!req.path.includes('favicon')) {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  }
  next();
});

// 添加AWS SDK用于获取CloudFront查看者国家/地区
app.use((req, res, next) => {
    // 从CloudFront头部获取国家/地区代码
    const countryCode = req.headers['cloudfront-viewer-country'] || 'US';
    
    // 设置默认语言
    const defaultLang = countryCode === 'CN' ? 'zh' : 'en';
    
    // 将默认语言添加到res.locals，使其在所有模板中可用
    res.locals.defaultLang = defaultLang;
    next();
});

app.use(cookieParser());
app.use(bodyParser.json());

// 语言中间件
app.use((req, res, next) => {
    // 从cookie获取语言设置
    const userLang = req.cookies.userLang || 'zh';
    
    // 设置locals
    res.locals = {
        lang: userLang,
        defaultLang: 'zh',  // 添加默认语言
        content: content
    };
    
    console.log('Current language:', userLang, 'Cookie:', req.cookies); // 调试用
    next();
});

// 主页路由
app.get('/', (req, res) => {
    res.render('index');
});

// 关于我们路由
app.get('/about', (req, res) => {
    res.render('about');
});

// 联系我们路由
app.get('/contact', (req, res) => {
    res.render('contact');
});

// 语言切换API
app.post('/api/switch-language', express.json(), (req, res) => {
    const { lang } = req.body;
    res.cookie('userLang', lang, {
        maxAge: 365 * 24 * 60 * 60 * 1000,
        path: '/'
    });
    res.json({ success: true });
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 