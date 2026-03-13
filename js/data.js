// AI 视频创作教程数据
// 包含 8 个步骤的完整内容

const tutorialData = {
  title: "AI 视频创作教程",
  description: "从零开始，8 个步骤学会用 AI 创作视频",
  version: "1.0.0",
  lastUpdated: "2026-03-12",
  
  steps: [
    {
      id: 1,
      title: "准备工作",
      icon: "📋",
      duration: "30 分钟",
      content: `
        <p>在开始 AI 视频创作之前，需要做好充分的准备工作。这一步虽然简单，但很重要！</p>
        
        <h3>1.1 注册必要账号</h3>
        <p>以下是常用的 AI 视频工具，建议提前注册好账号：</p>
        <ul>
          <li><strong>视频生成：</strong>可灵 AI、即梦 AI、Runway、Pika Labs</li>
          <li><strong>图像生成：</strong>Midjourney、Stable Diffusion、即梦 AI</li>
          <li><strong>文案创作：</strong>ChatGPT、Claude、文心一言</li>
          <li><strong>配音工具：</strong>ElevenLabs、剪映配音</li>
        </ul>
        
        <div class="tip">
          <strong>💡 小贴士</strong>
          <p>很多工具都有免费额度，新手可以先用免费版本尝试，确定需要再考虑付费。</p>
        </div>
        
        <h3>1.2 了解基本概念</h3>
        <ul>
          <li><strong>文生视频 (Text-to-Video)：</strong>输入文字描述，AI 直接生成视频</li>
          <li><strong>图生视频 (Image-to-Video)：</strong>输入图片，AI 让图片动起来</li>
          <li><strong>提示词 (Prompt)：</strong>给 AI 的指令，描述你想要的内容</li>
        </ul>
        
        <h3>1.3 准备素材</h3>
        <p>提前准备好以下素材可以提高效率：</p>
        <ul>
          <li>视频主题和大致方向</li>
          <li>参考视频（可选）</li>
          <li>喜欢的风格参考图</li>
        </ul>
        
        <div class="warning">
          <strong>⚠️ 注意事项</strong>
          <p>不要等到开始制作才去注册账号，有些平台需要审核或等待，会耽误进度。</p>
        </div>
      `,
      resources: [
        { name: "可灵 AI", url: "https://klingai.com" },
        { name: "即梦 AI", url: "https://jimeng.jianying.com" },
        { name: "Runway", url: "https://runwayml.com" },
        { name: "Midjourney", url: "https://midjourney.com" }
      ]
    },
    
    {
      id: 2,
      title: "文案创作",
      icon: "✍️",
      duration: "1-2 小时",
      content: `
        <p>文案是视频的灵魂。好的文案能让视频更有吸引力和传播力。</p>
        
        <h3>2.1 使用 AI 写脚本</h3>
        <p>给 AI 清晰的指令，让它帮你写视频脚本：</p>
        
        <div class="code-block">
          <strong>示例提示词：</strong>
          <pre>请帮我写一个 30 秒的短视频脚本，主题是"AI 如何改变我们的生活"。
要求：
1. 开头要有吸引力，能抓住观众注意力
2. 中间部分用 3 个具体例子说明
3. 结尾要有号召力
4. 语言要通俗易懂，适合抖音风格
5. 标注每个镜头的时长</pre>
        </div>
        
        <h3>2.2 分镜设计</h3>
        <p>将文案拆解成具体的镜头：</p>
        <ul>
          <li><strong>镜头 1 (0-3 秒)：</strong>开场画面 + 引入语</li>
          <li><strong>镜头 2 (3-10 秒)：</strong>第一个例子</li>
          <li><strong>镜头 3 (10-17 秒)：</strong>第二个例子</li>
          <li><strong>镜头 4 (17-24 秒)：</strong>第三个例子</li>
          <li><strong>镜头 5 (24-30 秒)：</strong>结尾 + 号召</li>
        </ul>
        
        <div class="tip">
          <strong>💡 小贴士</strong>
          <p>短视频前 3 秒最关键，一定要设计一个能抓住观众注意力的开场！可以用疑问句、惊人数据或视觉冲击。</p>
        </div>
        
        <h3>2.3 时长规划</h3>
        <p>根据平台特性规划视频时长：</p>
        <ul>
          <li><strong>抖音/快手：</strong>15-60 秒</li>
          <li><strong>B 站：</strong>1-5 分钟</li>
          <li><strong>YouTube Shorts：</strong>15-60 秒</li>
          <li><strong>视频号：</strong>30 秒 -2 分钟</li>
        </ul>
        
        <div class="warning">
          <strong>⚠️ 注意事项</strong>
          <p>避免直接复制 AI 生成的内容，要加入自己的风格和观点，让内容更有个人特色。</p>
        </div>
      `,
      resources: [
        { name: "ChatGPT", url: "https://chat.openai.com" },
        { name: "Claude", url: "https://claude.ai" },
        { name: "文心一言", url: "https://yiyan.baidu.com" }
      ]
    },
    
    {
      id: 3,
      title: "图像生成",
      icon: "🎨",
      duration: "1-2 小时",
      content: `
        <p>根据脚本中的镜头描述，使用 AI 生成对应的图片素材。</p>
        
        <h3>3.1 选择工具</h3>
        <p>常用的 AI 图像生成工具：</p>
        <ul>
          <li><strong>Midjourney：</strong>质量高，艺术感强，需要 Discord</li>
          <li><strong>Stable Diffusion：</strong>免费开源，可本地部署</li>
          <li><strong>即梦 AI：</strong>国产工具，中文友好</li>
          <li><strong>DALL-E 3：</strong>理解能力强，集成在 ChatGPT 中</li>
        </ul>
        
        <h3>3.2 提示词技巧</h3>
        <div class="code-block">
          <strong>高质量提示词公式：</strong>
          <pre>主体描述 + 风格 + 光线 + 色彩 + 构图 + 质量词

示例：
一个未来感十足的机器人在城市街道上行走，
赛博朋克风格，霓虹灯光，蓝紫色调，
电影级构图，超高清，细节丰富</pre>
        </div>
        
        <h3>3.3 保持风格统一</h3>
        <p>同一个视频中的图片要保持风格一致：</p>
        <ul>
          <li>使用相同的艺术家或风格关键词</li>
          <li>保持相似的色调和光线</li>
          <li>使用相同的种子值 (seed) 可以获得更一致的风格</li>
        </ul>
        
        <div class="tip">
          <strong>💡 小贴士</strong>
          <p>生成图片时建议多生成几张备选，后面可能会发现某张更适合。保存好提示词，方便后续调整。</p>
        </div>
        
        <h3>3.4 尺寸和格式</h3>
        <ul>
          <li><strong>抖音/视频号：</strong>9:16 竖版 (1080x1920)</li>
          <li><strong>B 站/YouTube：</strong>16:9 横版 (1920x1080)</li>
          <li><strong>格式：</strong>JPG 或 PNG，建议 PNG 质量更高</li>
        </ul>
        
        <div class="warning">
          <strong>⚠️ 注意事项</strong>
          <p>AI 生成的人物手部、文字等细节可能有问题，使用时要仔细检查。有问题的地方可以重新生成或用 PS 修复。</p>
        </div>
      `,
      resources: [
        { name: "Midjourney 教程", url: "https://docs.midjourney.com" },
        { name: "Stable Diffusion WebUI", url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui" },
        { name: "提示词指南", url: "https://prompthero.com" }
      ]
    },
    
    {
      id: 4,
      title: "视频生成",
      icon: "🎬",
      duration: "2-3 小时",
      content: `
        <p>将静态图片转换为动态视频，这是 AI 视频创作的核心步骤。</p>
        
        <h3>4.1 图生视频工具</h3>
        <ul>
          <li><strong>可灵 AI：</strong>国产工具，效果好，操作简单</li>
          <li><strong>即梦 AI：</strong>字节出品，集成在剪映中</li>
          <li><strong>Runway Gen-2：</strong>功能强大，控制精细</li>
          <li><strong>Pika Labs：</strong>免费额度多，适合新手</li>
        </ul>
        
        <h3>4.2 参数设置</h3>
        <div class="code-block">
          <strong>常用参数说明：</strong>
          <pre>• 时长：通常 3-5 秒，最长 10 秒
• 运动强度：控制画面动态程度 (1-10)
• 种子值 (seed)：固定后可复现相同结果
• 负面提示词：描述不想要的内容</pre>
        </div>
        
        <h3>4.3 提示词技巧</h3>
        <p>图生视频的提示词主要描述运动：</p>
        <ul>
          <li><strong>摄像机运动：</strong>缓慢推近、水平平移、环绕拍摄</li>
          <li><strong>主体运动：</strong>人物转头、头发飘动、眨眼</li>
          <li><strong>环境运动：</strong>云朵飘动、水流流动、光线变化</li>
        </ul>
        
        <div class="tip">
          <strong>💡 小贴士</strong>
          <p>运动强度不要设太高，否则画面容易变形。建议从 3-5 开始尝试，根据效果调整。</p>
        </div>
        
        <h3>4.4 多次尝试</h3>
        <p>AI 视频生成有一定随机性，建议：</p>
        <ul>
          <li>每个镜头生成 2-3 个版本</li>
          <li>保存满意的种子值</li>
          <li>记录成功的提示词组合</li>
        </ul>
        
        <div class="warning">
          <strong>⚠️ 注意事项</strong>
          <p>视频生成比较耗时，每个视频可能需要几分钟。批量生成时注意账户额度和排队时间。</p>
        </div>
      `,
      resources: [
        { name: "可灵 AI", url: "https://klingai.com" },
        { name: "Runway 教程", url: "https://runwayml.com/learn" },
        { name: "Pika Labs", url: "https://pika.art" }
      ]
    },
    
    {
      id: 5,
      title: "视频编辑",
      icon: "✂️",
      duration: "1-2 小时",
      content: `
        <p>将生成的视频片段剪辑成一个完整的视频。</p>
        
        <h3>5.1 选择剪辑软件</h3>
        <ul>
          <li><strong>剪映：</strong>免费，功能全，适合新手</li>
          <li><strong>CapCut：</strong>剪映国际版，功能类似</li>
          <li><strong>Premiere Pro：</strong>专业软件，学习成本高</li>
          <li><strong>Final Cut Pro：</strong>Mac 专用，性能好</li>
        </ul>
        
        <h3>5.2 基本剪辑流程</h3>
        <ol>
          <li>导入所有视频片段到素材库</li>
          <li>按脚本顺序排列到时间线</li>
          <li>修剪每个片段的长度</li>
          <li>添加转场效果</li>
          <li>调整整体节奏</li>
        </ol>
        
        <h3>5.3 转场效果</h3>
        <p>常用的转场效果：</p>
        <ul>
          <li><strong>硬切：</strong>直接切换，最常用</li>
          <li><strong>淡入淡出：</strong>柔和过渡</li>
          <li><strong>滑动：</strong>有方向感的切换</li>
          <li><strong>缩放：</strong>有冲击力的转场</li>
        </ul>
        
        <div class="tip">
          <strong>💡 小贴士</strong>
          <p>转场效果不要滥用，大部分情况下硬切就够了。花哨的转场会让视频显得廉价。</p>
        </div>
        
        <h3>5.4 节奏把控</h3>
        <ul>
          <li>开场要快，抓住注意力</li>
          <li>重点内容可以适当放慢</li>
          <li>整体保持紧凑，避免拖沓</li>
          <li>配合音乐节拍剪辑更流畅</li>
        </ul>
        
        <div class="warning">
          <strong>⚠️ 注意事项</strong>
          <p>剪辑过程中随时保存项目文件，避免软件崩溃导致工作丢失。建议开启自动保存功能。</p>
        </div>
      `,
      resources: [
        { name: "剪映下载", url: "https://www.capcut.cn" },
        { name: "剪映教程", url: "https://www.bilibili.com" },
        { name: "Premiere Pro", url: "https://www.adobe.com/products/premiere.html" }
      ]
    },
    
    {
      id: 6,
      title: "配音和音效",
      icon: "🎙️",
      duration: "30 分钟 -1 小时",
      content: `
        <p>好的配音和音效能让视频更有感染力和专业感。</p>
        
        <h3>6.1 AI 配音工具</h3>
        <ul>
          <li><strong>ElevenLabs：</strong>效果最自然，支持多语言</li>
          <li><strong>剪映配音：</strong>免费，中文效果好</li>
          <li><strong>微软 Azure TTS：</strong>质量高，需要 API</li>
          <li><strong>讯飞配音：</strong>国产工具，声音选择多</li>
        </ul>
        
        <h3>6.2 配音技巧</h3>
        <div class="code-block">
          <strong>配音提示词示例：</strong>
          <pre>声音类型：年轻女声，温暖亲切
语速：中等偏快
情感：积极热情
停顿：适当停顿，突出重点</pre>
        </div>
        
        <h3>6.3 背景音乐</h3>
        <p>BGM 选择原则：</p>
        <ul>
          <li>风格与视频内容匹配</li>
          <li>音量不要盖过配音</li>
          <li>注意版权，使用免版权音乐</li>
          <li>可以根据节奏剪辑画面</li>
        </ul>
        
        <div class="tip">
          <strong>💡 小贴士</strong>
          <p>剪映自带很多免版权音乐，新手可以直接用。进阶用户可以关注 Epidemic Sound、Artlist 等音乐平台。</p>
        </div>
        
        <h3>6.4 音效添加</h3>
        <p>常用音效类型：</p>
        <ul>
          <li><strong>转场音效：</strong>Whoosh、Swoosh</li>
          <li><strong>强调音效：</strong>Ding、Pop</li>
          <li><strong>环境音效：</strong>雨声、城市噪音</li>
          <li><strong>情绪音效：</strong>紧张、欢快</li>
        </ul>
        
        <div class="warning">
          <strong>⚠️ 注意事项</strong>
          <p>配音和 BGM 的音量要平衡。一般配音音量 -6dB 到 -3dB，BGM 音量 -18dB 到 -12dB。</p>
        </div>
      `,
      resources: [
        { name: "ElevenLabs", url: "https://elevenlabs.io" },
        { name: "免版权音乐", url: "https://www.youtube.com/audiolibrary" },
        { name: "音效库", url: "https://freesound.org" }
      ]
    },
    
    {
      id: 7,
      title: "字幕和特效",
      icon: "📝",
      duration: "30 分钟 -1 小时",
      content: `
        <p>字幕和特效能提升视频的可看性和专业度。</p>
        
        <h3>7.1 自动字幕生成</h3>
        <p>主流剪辑软件都支持自动字幕：</p>
        <ul>
          <li><strong>剪映：</strong>识别字幕 → 自动匹配</li>
          <li><strong>Premiere Pro：</strong>语音转文本功能</li>
          <li><strong>CapCut：</strong>Auto Captions</li>
        </ul>
        
        <h3>7.2 字幕样式调整</h3>
        <p>字幕样式设置建议：</p>
        <ul>
          <li><strong>字体：</strong>选择清晰易读的无衬线字体</li>
          <li><strong>大小：</strong>手机观看要足够大</li>
          <li><strong>颜色：</strong>白色 + 黑色描边，通用性强</li>
          <li><strong>位置：</strong>底部 1/3 处，避免被 UI 遮挡</li>
        </ul>
        
        <div class="code-block">
          <strong>字幕样式示例：</strong>
          <pre>字体：思源黑体 Bold
大小：48-60px (1080p)
颜色：白色 (#FFFFFF)
描边：黑色，2-3px
阴影：轻微黑色阴影
背景：半透明黑色，可选</pre>
        </div>
        
        <h3>7.3 特效添加</h3>
        <p>常用特效类型：</p>
        <ul>
          <li><strong>文字动画：</strong>打字机、淡入、弹跳</li>
          <li><strong>画面特效：</strong>滤镜、调色、光效</li>
          <li><strong>贴纸动画：</strong>表情、图标、装饰</li>
          <li><strong>转场特效：</strong>闪光、震动、缩放</li>
        </ul>
        
        <div class="tip">
          <strong>💡 小贴士</strong>
          <p>特效要适度使用，太多会分散注意力。重点内容可以加特效强调，其他部分保持简洁。</p>
        </div>
        
        <h3>7.4 检查字幕</h3>
        <p>自动生成的字幕可能有错误，一定要检查：</p>
        <ul>
          <li>错别字和同音字</li>
          <li>专业术语和人名</li>
          <li>标点符号</li>
          <li>时间轴是否对齐</li>
        </ul>
        
        <div class="warning">
          <strong>⚠️ 注意事项</strong>
          <p>不同平台的字幕安全区域不同。抖音底部有文案区，B 站底部有进度条，字幕位置要避开这些区域。</p>
        </div>
      `,
      resources: [
        { name: "字幕工具", url: "https://www.arctime.org" },
        { name: "字体下载", url: "https://fonts.google.com" },
        { name: "特效教程", url: "https://www.bilibili.com" }
      ]
    },
    
    {
      id: 8,
      title: "导出和发布",
      icon: "📤",
      duration: "30 分钟",
      content: `
        <p>最后一步，导出视频并发布到各个平台。</p>
        
        <h3>8.1 导出参数设置</h3>
        <div class="code-block">
          <strong>推荐导出设置：</strong>
          <pre>分辨率：1080p (1920x1080) 或 4K
帧率：30fps (通用) 或 60fps (流畅)
码率：10-20 Mbps (1080p)
格式：MP4 (H.264)
音频：AAC, 128kbps 以上</pre>
        </div>
        
        <h3>8.2 平台要求</h3>
        <p>各平台视频规格：</p>
        <ul>
          <li><strong>抖音：</strong>9:16 竖版，1080x1920，最长 15 分钟</li>
          <li><strong>B 站：</strong>16:9 横版，1920x1080，最长 2 小时</li>
          <li><strong>YouTube：</strong>16:9 横版，支持 4K，最长 12 小时</li>
          <li><strong>视频号：</strong>9:16 或 16:9，最长 1 小时</li>
        </ul>
        
        <h3>8.3 封面设计</h3>
        <p>好的封面能吸引更多点击：</p>
        <ul>
          <li>选择视频中最精彩的画面</li>
          <li>添加醒目的标题文字</li>
          <li>保持风格统一，形成品牌感</li>
          <li>可以用 AI 生成封面图</li>
        </ul>
        
        <div class="tip">
          <strong>💡 小贴士</strong>
          <p>导出前预览一遍完整视频，检查有没有遗漏或错误。导出后也建议在手机上实际播放一次，确认效果。</p>
        </div>
        
        <h3>8.4 发布技巧</h3>
        <ul>
          <li><strong>标题：</strong>吸引眼球，包含关键词</li>
          <li><strong>描述：</strong>补充信息，引导互动</li>
          <li><strong>标签：</strong>添加相关话题标签</li>
          <li><strong>时间：</strong>选择用户活跃时段发布</li>
        </ul>
        
        <div class="warning">
          <strong>⚠️ 注意事项</strong>
          <p>不同平台审核规则不同，避免敏感内容。发布后关注评论和反馈，及时回复互动。</p>
        </div>
        
        <h3>🎉 恭喜完成！</h3>
        <p>你已经完成了从零到一的 AI 视频创作全流程！继续练习，你会越来越熟练的！</p>
      `,
      resources: [
        { name: "抖音创作者中心", url: "https://creator.douyin.com" },
        { name: "B 站创作中心", url: "https://member.bilibili.com" },
        { name: "YouTube Studio", url: "https://studio.youtube.com" }
      ]
    },
    
    {
      id: 9,
      title: "工具大全",
      icon: "🛠️",
      duration: "参考资料",
      isBonus: true,
      content: `
        <p>这是 AI 视频创作工具的完整清单，包括动画效果实现工具和专业制作流程。</p>
        
        <h3>9.1 动画效果工具（科普视频必备）</h3>
        
        <h4>🎬 专业动画软件（电影级效果）</h4>
        <table class="tools-table">
          <tr>
            <th>软件</th>
            <th>用途</th>
            <th>难度</th>
            <th>价格</th>
          </tr>
          <tr>
            <td><strong>After Effects</strong></td>
            <td>动态图形、特效</td>
            <td>⭐⭐⭐⭐</td>
            <td>¥300/月</td>
          </tr>
          <tr>
            <td><strong>Cinema 4D</strong></td>
            <td>3D 动画</td>
            <td>⭐⭐⭐⭐⭐</td>
            <td>¥800/月</td>
          </tr>
          <tr>
            <td><strong>Blender</strong></td>
            <td>3D 动画（免费）</td>
            <td>⭐⭐⭐⭐⭐</td>
            <td>免费</td>
          </tr>
          <tr>
            <td><strong>Maya</strong></td>
            <td>专业 3D 动画</td>
            <td>⭐⭐⭐⭐⭐</td>
            <td>¥1000+/月</td>
          </tr>
        </table>
        
        <h4>🎨 入门友好工具（快速上手）</h4>
        <table class="tools-table">
          <tr>
            <th>软件</th>
            <th>用途</th>
            <th>难度</th>
            <th>价格</th>
          </tr>
          <tr>
            <td><strong>Canva</strong></td>
            <td>简单动画</td>
            <td>⭐⭐</td>
            <td>免费/¥50/月</td>
          </tr>
          <tr>
            <td><strong>万彩动画大师</strong></td>
            <td>2D 动画</td>
            <td>⭐⭐</td>
            <td>¥200/年</td>
          </tr>
          <tr>
            <td><strong>Vyond</strong></td>
            <td>卡通动画</td>
            <td>⭐⭐</td>
            <td>$50/月</td>
          </tr>
          <tr>
            <td><strong>Animaker</strong></td>
            <td>在线动画</td>
            <td>⭐⭐</td>
            <td>免费/$12/月</td>
          </tr>
        </table>
        
        <h4>📹 屏幕录制 + 标注（技术类必备）</h4>
        <ul>
          <li><strong>OBS Studio：</strong>录屏直播，免费开源</li>
          <li><strong>Camtasia：</strong>录屏 + 剪辑，¥2000 永久</li>
          <li><strong>ScreenFlow：</strong>Mac 录屏，¥1000 永久</li>
        </ul>
        
        <h4>✂️ 剪辑软件（后期必备）</h4>
        <ul>
          <li><strong>Premiere Pro：</strong>专业剪辑，¥300/月</li>
          <li><strong>Final Cut Pro：</strong>Mac 专用，¥2000 永久</li>
          <li><strong>DaVinci Resolve：</strong>调色强大，免费/¥2000</li>
          <li><strong>剪映专业版：</strong>新手友好，免费</li>
        </ul>
        
        <div class="tip">
          <strong>💡 热门科普博主工具揭秘</strong>
          <ul>
            <li><strong>回形针 PaperClip：</strong>AE + C4D + PR + AI</li>
            <li><strong>李永乐老师：</strong>实拍 + 手写板 + AE 公式动画</li>
            <li><strong>影视飓风：</strong>AE + C4D + 达芬奇调色</li>
            <li><strong>3Blue1Brown：</strong>自研 Manim 库（Python 开源）</li>
          </ul>
        </div>
        
        <h3>9.2 常见动画效果实现</h3>
        
        <h4>文字动画</h4>
        <p><strong>工具：</strong>After Effects<br>
        <strong>效果：</strong>打字机、弹入、模糊出现<br>
        <strong>教程：</strong>B 站搜索"AE 文字动画教程"</p>
        
        <h4>图表动画</h4>
        <p><strong>工具：</strong>After Effects + Excel<br>
        <strong>流程：</strong>Excel 制作数据 → 导入 AE → 添加动画关键帧</p>
        
        <h4>地图动画</h4>
        <p><strong>工具：</strong>GeoLayers 3（AE 插件）、Google Earth Studio（免费）<br>
        <strong>效果：</strong>路径动画、区域高亮</p>
        
        <h4>3D 模型展示</h4>
        <p><strong>工具：</strong>Blender / Cinema 4D<br>
        <strong>流程：</strong>建模/下载模型 → 打光 + 材质 → 渲染动画</p>
        
        <h4>粒子效果</h4>
        <p><strong>工具：</strong>After Effects + Trapcode Particular<br>
        <strong>效果：</strong>数据流、星空、爆炸</p>
        
        <h3>9.3 完整制作流程</h3>
        
        <div class="workflow">
          <div class="workflow-step">
            <strong>1. 选题策划</strong>
            <span>1-2 天</span>
            <p>确定主题、收集资料、写脚本</p>
          </div>
          <div class="workflow-step">
            <strong>2. 分镜设计</strong>
            <span>1 天</span>
            <p>画草图、规划镜头、确定风格</p>
          </div>
          <div class="workflow-step">
            <strong>3. 配音录制</strong>
            <span>半天</span>
            <p>写旁白稿、录音/TTS、音频处理</p>
          </div>
          <div class="workflow-step">
            <strong>4. 动画制作</strong>
            <span>3-7 天</span>
            <p>素材绘制、AE 动画、3D 渲染</p>
          </div>
          <div class="workflow-step">
            <strong>5. 剪辑合成</strong>
            <span>1-2 天</span>
            <p>导入素材、配音对口型、加 BGM/音效、调色</p>
          </div>
          <div class="workflow-step">
            <strong>6. 导出发布</strong>
            <span>半天</span>
            <p>渲染输出、封面制作、上传平台</p>
          </div>
        </div>
        
        <h3>9.4 新手入门推荐方案</h3>
        
        <h4>💰 预算有限（免费方案）</h4>
        <ul>
          <li><strong>工具：</strong>剪映 + Blender + OBS + Audacity</li>
          <li><strong>成本：</strong>0 元</li>
          <li><strong>学习曲线：</strong>中等</li>
        </ul>
        
        <h4>💰💰 进阶方案（专业入门）</h4>
        <ul>
          <li><strong>工具：</strong>AE + PR + PS + 万彩动画大师</li>
          <li><strong>成本：</strong>约¥500/月</li>
          <li><strong>学习曲线：</strong>较陡</li>
        </ul>
        
        <h4>💰💰💰 专业方案（工作室级）</h4>
        <ul>
          <li><strong>工具：</strong>AE + C4D + PR + 达芬奇 + 专业设备</li>
          <li><strong>成本：</strong>约¥2000/月 + 硬件¥10000+</li>
          <li><strong>学习曲线：</strong>陡峭</li>
        </ul>
        
        <h3>9.5 学习资源推荐</h3>
        
        <h4>📚 教程平台</h4>
        <ul>
          <li><strong>B 站：</strong>免费教程最多（推荐 oeasy、doyoudo）</li>
          <li><strong>YouTube：</strong>英文教程丰富</li>
          <li><strong>慕课网：</strong>系统课程，¥100-500</li>
          <li><strong>Udemy：</strong>英文系统课，$10-50</li>
        </ul>
        
        <h4>📺 推荐 UP 主</h4>
        <ul>
          <li><strong>oeasy：</strong>全能教程（AE/PR/PS）</li>
          <li><strong>doyoudo：</strong>创意软件教学</li>
          <li><strong>影视飓风：</strong>专业视频制作</li>
          <li><strong>视频大拍：</strong>AE 特效教程</li>
        </ul>
        
        <h3>9.6 AI 辅助工具（2026 新趋势）</h3>
        
        <h4>🤖 AI 生成素材</h4>
        <ul>
          <li><strong>Midjourney：</strong>生成图片，$10/月</li>
          <li><strong>Runway ML：</strong>AI 视频，$15/月</li>
          <li><strong>ElevenLabs：</strong>AI 配音，$5/月</li>
        </ul>
        
        <h4>🤖 AI 辅助剪辑</h4>
        <ul>
          <li><strong>剪映 AI：</strong>自动字幕、智能剪辑</li>
          <li><strong>Descript：</strong>AI 配音修改</li>
          <li><strong>Pictory：</strong>文字转视频</li>
        </ul>
        
        <div class="tip">
          <strong>🎯 关键建议</strong>
          <ul>
            <li><strong>内容 > 效果：</strong>好脚本比炫酷动画重要</li>
            <li><strong>坚持更新：</strong>每周 1 个视频，持续改进</li>
            <li><strong>建立素材库：</strong>积累模板、音乐、音效</li>
            <li><strong>先完成再完美：</strong>从简单开始，逐步提升</li>
          </ul>
        </div>
      `,
      resources: [
        { name: "Blender 官网", url: "https://www.blender.org" },
        { name: "After Effects 教程", url: "https://helpx.adobe.com/after-effects" },
        { name: "oeasy 教程", url: "http://oeasy.org" },
        { name: "影视飓风", url: "https://space.bilibili.com/336842228" }
      ]
    }
  ]
};
