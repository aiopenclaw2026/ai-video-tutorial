# 📺 AI 视频创作教程

> 从零开始，9 个步骤学会用 AI 创作视频（含工具大全附录）

[![Deploy to GitHub Pages](https://github.com/aiopenclaw2026/ai-video-tutorial/actions/workflows/deploy.yml/badge.svg)](https://github.com/aiopenclaw2026/ai-video-tutorial/actions/workflows/deploy.yml)

**在线访问:** https://aiopenclaw2026.github.io/ai-video-tutorial/  
**版本:** 1.1.0  
**最后更新:** 2026-03-13

---

## 🎯 项目简介

这是一个交互式的 AI 视频教程网页，教你从零开始学习如何使用 AI 工具创作完整的视频。

### 特色功能

- ✅ **9 个详细步骤** - 从准备到发布的全流程（含工具大全附录）
- ✅ **进度追踪** - 自动保存学习进度
- ✅ **交互式学习** - 点击切换，流畅体验
- ✅ **响应式设计** - 手机电脑都能用
- ✅ **深色模式** - 护眼模式一键切换
- ✅ **搜索功能** - 快速查找内容
- ✅ **离线可用** - 纯静态网页，无需服务器

---

## 📋 教程目录

| 步骤 | 主题 | 预计时间 |
|------|------|----------|
| 1 | 准备工作 | 30 分钟 |
| 2 | 文案创作 | 1-2 小时 |
| 3 | 图像生成 | 1-2 小时 |
| 4 | 视频生成 | 2-3 小时 |
| 5 | 视频编辑 | 1-2 小时 |
| 6 | 配音和音效 | 30 分钟 -1 小时 |
| 7 | 字幕和特效 | 30 分钟 -1 小时 |
| 8 | 导出和发布 | 30 分钟 |
| 9 (Bonus) | 工具大全 | 参考资料 |
| 1 | 📋 准备工作 | 30 分钟 |
| 2 | ✍️ 文案创作 | 1-2 小时 |
| 3 | 🎨 图像生成 | 1-2 小时 |
| 4 | 🎬 视频生成 | 2-3 小时 |
| 5 | ✂️ 视频编辑 | 1-2 小时 |
| 6 | 🎙️ 配音和音效 | 30 分钟 -1 小时 |
| 7 | 📝 字幕和特效 | 30 分钟 -1 小时 |
| 8 | 📤 导出和发布 | 30 分钟 |

**总预计学习时间:** 8-14 小时

---

## 🚀 快速开始

### 本地预览

```bash
# 方法 1: Python
cd ai-video-tutorial
python3 -m http.server 8080
# 访问 http://localhost:8080

# 方法 2: Node.js
npx serve .

# 方法 3: 直接打开
# 双击 index.html 文件
```

### 部署上线

详见 [DEPLOYMENT.md](DEPLOYMENT.md)

**推荐平台:**
- GitHub Pages (免费)
- Vercel (免费)
- Netlify (免费)

---

## 📁 项目结构

```
ai-video-tutorial/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── data.js         # 教程数据
│   └── app.js          # 交互逻辑
├── assets/
│   └── images/         # 图片资源
├── PROJECT_PLAN.md     # 项目计划
├── UI_DESIGN.md        # UI 设计规范
├── DEPLOYMENT.md       # 部署指南
└── README.md           # 本文件
```

---

## 🎨 技术栈

- **HTML5** - 语义化结构
- **CSS3** - Flexbox/Grid布局，CSS 变量
- **Vanilla JavaScript** - 无需框架，轻量快速
- **localStorage** - 本地存储进度
- **响应式设计** - 适配各种设备

---

## 💡 使用技巧

### 键盘快捷键

| 按键 | 功能 |
|------|------|
| ← | 上一步 |
| → | 下一步 |

### 进度保存

- 学习进度自动保存到浏览器本地存储
- 清除浏览器缓存会重置进度
- 可在不同设备上继续学习（需手动同步）

### 深色模式

- 点击右上角 🌙 按钮切换主题
- 主题偏好会自动保存

---

## 🔧 开发说明

### 修改教程内容

编辑 `js/data.js` 文件中的 `tutorialData` 对象：

```javascript
const tutorialData = {
  steps: [
    {
      id: 1,
      title: "步骤标题",
      icon: "📋",
      duration: "30 分钟",
      content: `HTML 内容`,
      resources: [
        { name: "工具名", url: "https://..." }
      ]
    }
  ]
};
```

### 修改样式

编辑 `css/style.css` 文件。

主要 CSS 变量在 `:root` 中定义，可快速修改主题色。

### 添加新功能

编辑 `js/app.js` 文件中的 `TutorialApp` 类。

---

## 📊 浏览器兼容性

| 浏览器 | 版本 | 支持 |
|--------|------|------|
| Chrome | 最新版 | ✅ |
| Firefox | 最新版 | ✅ |
| Safari | 最新版 | ✅ |
| Edge | 最新版 | ✅ |
| 手机 Safari | iOS 12+ | ✅ |
| 手机 Chrome | Android 8+ | ✅ |

---

## 📝 更新日志

### v1.0.0 (2026-03-12)

- ✨ 初始版本发布
- ✨ 8 个完整教程步骤
- ✨ 进度追踪功能
- ✨ 深色模式
- ✨ 搜索功能
- ✨ 响应式设计

---

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

### 可以贡献的内容

- 📝 修正错别字或错误信息
- 🎨 改进 UI/UX
- 📚 添加新的教程内容
- 🔧 优化代码性能
- 🌍 翻译其他语言

---

## 📄 许可证

MIT License

---

## 📞 联系方式

- **项目地址:** [GitHub 仓库链接] (待部署)
- **问题反馈:** [GitHub Issues](待部署)

---

**Made with ❤️ by 星期五**
