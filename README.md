# Kings Club Official Website

Kings Club 官方网站项目，集成了视频展示、业务介绍、企业发展历程等功能。

## 功能特点

### 1. 多语言支持
- 中英文切换功能
- 统一的语言管理系统
- 内容集中在 content.json 管理

### 2. 主页设计
- 全屏视频背景
- 社交媒体链接（小红书、抖音、Instagram、YouTube）
- 悬浮动画效果
- 响应式导航栏

### 3. 关于我们页面
- 三大业务板块展示
  - 给他爱(深圳)文化有限公司（MCN业务）
  - King 7 Club（科技电影）
  - Kings Club Charity（慈善基金会）
- 企业发展时间轴
- 交互式卡片设计
- 地址信息展示

### 4. 联系页面
- 动态邮件动画效果
- 合作伙伴招募信息
- 三大合作领域展示
  - 影视制作
  - 技术研发
  - MCN合作

### 5. 视觉效果
- 卡片悬浮动画
- 信封加载动画
- 时间轴动画
- 响应式布局适配

## 技术栈

- Frontend: HTML5, CSS3, JavaScript
- Backend: Node.js, Express
- Template Engine: EJS
- Animation: CSS Animations
- Responsive Design: Media Queries

## 安装和运行

1. 克隆项目到本地：
```bash
git clone [repository-url]
cd kingsClub
```

2. 安装依赖：
```bash
npm install
```

3. 启动服务器：
```bash
npm start
```

4. 在浏览器中访问：
```
http://localhost:3000
```

## 项目结构

```
kingsClub/
├── app.js              # 主服务器文件
├── package.json        # 项目配置文件
├── public/            # 静态资源目录
│   ├── css/          # CSS样式文件
│   ├── js/           # JavaScript文件
│   └── images/       # 图片资源
└── views/            # EJS模板文件
    └── index.ejs     # 主页模板
```

## 开发说明

- 所有样式文件位于 `public/css` 目录
- JavaScript文件位于 `public/js` 目录
- 图片资源位于 `public/images` 目录
- 页面模板位于 `views` 目录

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 贡献指南

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- 美国总部：Los Angeles, USA
- 中国分部：Shenzhen, China
- 邮箱：[contact@kingsclub.com](mailto:contact@kingsclub.com)
