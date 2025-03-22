const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// 设置模板引擎
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 中间件
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// 路由
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Kings Club - 全球娱乐与MCN',
        companyInfo: {
            global: {
                name: 'Kings Club',
                location: 'Los Angeles, USA',
                description: '全球领先的娱乐与MCN机构'
            },
            china: {
                name: '给他爱深圳文化有限公司',
                location: '深圳, 中国',
                description: '专注于内容创作与艺人孵化的MCN机构'
            }
        },
        socialMedia: {
            xiaohongshu: 'https://www.xiaohongshu.com/user/profile/your-profile',
            douyin: 'https://www.douyin.com/user/your-profile',
            instagram: 'https://www.instagram.com/your-profile',
            youtube: 'https://www.youtube.com/your-channel'
        }
    });
});

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
}); 