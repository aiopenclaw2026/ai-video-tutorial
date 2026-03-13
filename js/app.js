// AI 视频创作教程 - 主逻辑文件

class TutorialApp {
  constructor() {
    this.currentStep = 0;
    this.completedSteps = this.loadProgress();
    this.searchQuery = '';
    
    this.init();
  }
  
  init() {
    this.renderHeader();
    this.renderSidebar();
    this.renderContent();
    this.renderMobileIndicator();
    this.bindEvents();
    this.updateProgress();
  }
  
  // ==================== 渲染方法 ====================
  
  renderHeader() {
    const header = document.querySelector('.header');
    const progress = this.getProgress();
    
    header.innerHTML = `
      <div class="header-title">
        <span class="logo">📺</span>
        <span>AI 视频创作教程</span>
      </div>
      <div class="header-actions">
        <div class="progress-container">
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${progress}%"></div>
          </div>
          <span class="progress-text">${this.completedSteps.length}/${tutorialData.steps.length}</span>
        </div>
        <div class="search-container">
          <span class="search-icon">🔍</span>
          <input type="text" class="search-input" placeholder="搜索教程内容..." id="searchInput">
        </div>
        <button class="btn-icon" id="themeToggle" title="切换主题">🌙</button>
      </div>
    `;
  }
  
  renderSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.innerHTML = tutorialData.steps.map((step, index) => {
      const isCompleted = this.completedSteps.includes(step.id);
      const isActive = index === this.currentStep;
      const isBonus = step.isBonus || false;
      
      return `
        <div class="step-card ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''} ${isBonus ? 'bonus' : ''}" 
             data-step="${index}">
          <span class="step-icon">${isCompleted ? '☑' : (isActive ? '▶' : '○')}</span>
          <div class="step-info">
            <div class="step-number">
              ${isBonus ? '附录' : '步骤'} ${step.id}
              ${isBonus ? '<span class="step-bonus-badge">Bonus</span>' : ''}
            </div>
            <div class="step-title">${step.title}</div>
            <div class="step-duration">⏱️ ${step.duration}</div>
          </div>
          ${isCompleted ? '<span class="step-check">✓</span>' : ''}
        </div>
      `;
    }).join('');
  }
  
  renderContent() {
    const mainContent = document.querySelector('.main-content');
    const step = tutorialData.steps[this.currentStep];
    const isBonus = step.isBonus || false;
    
    mainContent.innerHTML = `
      <div class="content-card">
        <div class="content-header">
          <h1 class="content-title">
            <span>${step.icon}</span>
            <span>${isBonus ? '附录' : '步骤'} ${step.id}: ${step.title}${isBonus ? ' <span class="step-bonus-badge">Bonus</span>' : ''}</span>
          </h1>
        </div>
        <div class="content-body">
          ${step.content}
        </div>
        <div class="resources">
          <strong>📎 相关资源</strong>
          <ul>
            ${step.resources.map(res => `
              <li><a href="${res.url}" target="_blank">${res.name} →</a></li>
            `).join('')}
          </ul>
        </div>
        <div class="navigation-buttons">
          <button class="btn btn-secondary" id="prevBtn" ${this.currentStep === 0 ? 'disabled' : ''}>
            ⬅ 上一步
          </button>
          <button class="btn btn-primary" id="nextBtn" ${this.currentStep === tutorialData.steps.length - 1 ? 'disabled' : ''}>
            ${this.currentStep === tutorialData.steps.length - 1 ? '🎉 完成' : '下一步 ➡'}
          </button>
        </div>
      </div>
    `;
  }
  
  renderMobileIndicator() {
    const indicator = document.querySelector('.mobile-steps-indicator');
    indicator.innerHTML = tutorialData.steps.map((step, index) => {
      const isCompleted = this.completedSteps.includes(step.id);
      const isActive = index === this.currentStep;
      
      return `<span class="mobile-step-dot ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}"></span>`;
    }).join('');
  }
  
  // ==================== 事件绑定 ====================
  
  bindEvents() {
    // 侧边栏步骤点击
    document.querySelector('.sidebar').addEventListener('click', (e) => {
      const stepCard = e.target.closest('.step-card');
      if (stepCard) {
        const stepIndex = parseInt(stepCard.dataset.step);
        this.goToStep(stepIndex);
      }
    });
    
    // 上一步按钮
    document.querySelector('.main-content').addEventListener('click', (e) => {
      if (e.target.closest('#prevBtn')) {
        this.prevStep();
      }
      if (e.target.closest('#nextBtn')) {
        this.nextStep();
      }
    });
    
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', (e) => {
      this.search(e.target.value);
    });
    
    // 主题切换
    document.getElementById('themeToggle').addEventListener('click', () => {
      this.toggleTheme();
    });
    
    // 键盘导航
    document.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT') return;
      
      if (e.key === 'ArrowLeft') {
        this.prevStep();
      } else if (e.key === 'ArrowRight') {
        this.nextStep();
      }
    });
    
    // 移动端步骤点击
    document.querySelector('.mobile-steps-indicator').addEventListener('click', (e) => {
      const dots = document.querySelectorAll('.mobile-step-dot');
      const index = Array.from(dots).indexOf(e.target);
      if (index !== -1) {
        this.goToStep(index);
      }
    });
  }
  
  // ==================== 导航方法 ====================
  
  goToStep(index) {
    if (index < 0 || index >= tutorialData.steps.length) return;
    
    this.currentStep = index;
    this.renderSidebar();
    this.renderContent();
    this.renderMobileIndicator();
    this.updateProgress();
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  prevStep() {
    if (this.currentStep > 0) {
      this.goToStep(this.currentStep - 1);
    }
  }
  
  nextStep() {
    // 标记当前步骤为完成
    const currentStepId = tutorialData.steps[this.currentStep].id;
    if (!this.completedSteps.includes(currentStepId)) {
      this.completedSteps.push(currentStepId);
      this.saveProgress();
    }
    
    if (this.currentStep < tutorialData.steps.length - 1) {
      this.goToStep(this.currentStep + 1);
    } else {
      // 完成所有步骤
      this.showCompletionMessage();
    }
  }
  
  // ==================== 进度管理 ====================
  
  getProgress() {
    return (this.completedSteps.length / tutorialData.steps.length) * 100;
  }
  
  updateProgress() {
    const progressFill = document.querySelector('.progress-fill');
    const progressText = document.querySelector('.progress-text');
    
    if (progressFill) {
      progressFill.style.width = `${this.getProgress()}%`;
    }
    
    if (progressText) {
      progressText.textContent = `${this.completedSteps.length}/${tutorialData.steps.length}`;
    }
  }
  
  saveProgress() {
    localStorage.setItem('ai-tutorial-progress', JSON.stringify(this.completedSteps));
  }
  
  loadProgress() {
    const saved = localStorage.getItem('ai-tutorial-progress');
    return saved ? JSON.parse(saved) : [];
  }
  
  // ==================== 搜索功能 ====================
  
  search(query) {
    this.searchQuery = query.toLowerCase();
    
    if (!query) {
      this.renderSidebar();
      return;
    }
    
    // 搜索步骤标题和内容
    const matches = tutorialData.steps.map((step, index) => {
      const titleMatch = step.title.toLowerCase().includes(query);
      const contentMatch = step.content.toLowerCase().includes(query);
      return { index, step, titleMatch, contentMatch, match: titleMatch || contentMatch };
    }).filter(item => item.match);
    
    // 高亮显示匹配的步骤
    const stepCards = document.querySelectorAll('.step-card');
    stepCards.forEach((card, index) => {
      const match = matches.find(m => m.index === index);
      if (match) {
        card.style.opacity = '1';
        card.style.pointerEvents = 'auto';
      } else {
        card.style.opacity = '0.3';
        card.style.pointerEvents = 'none';
      }
    });
    
    // 如果有匹配，跳转到第一个匹配的步骤
    if (matches.length > 0 && this.searchQuery !== query) {
      this.goToStep(matches[0].index);
    }
    
    this.searchQuery = query;
  }
  
  // ==================== 主题切换 ====================
  
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    const themeIcon = document.getElementById('themeToggle');
    
    document.documentElement.setAttribute('data-theme', newTheme);
    themeIcon.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    
    localStorage.setItem('ai-tutorial-theme', newTheme);
  }
  
  loadTheme() {
    const savedTheme = localStorage.getItem('ai-tutorial-theme');
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      const themeIcon = document.getElementById('themeToggle');
      if (themeIcon) {
        themeIcon.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
      }
    }
  }
  
  // ==================== 完成提示 ====================
  
  showCompletionMessage() {
    const message = `
      🎉 恭喜你完成了所有步骤！
      
      你已经学会了 AI 视频创作的全流程：
      ✅ 准备工作
      ✅ 文案创作
      ✅ 图像生成
      ✅ 视频生成
      ✅ 视频编辑
      ✅ 配音和音效
      ✅ 字幕和特效
      ✅ 导出和发布
      
      现在就开始创作你的第一个 AI 视频吧！
    `;
    
    alert(message);
  }
}

// ==================== 初始化应用 ====================

document.addEventListener('DOMContentLoaded', () => {
  const app = new TutorialApp();
  app.loadTheme();
  
  // 暴露给全局，方便调试
  window.tutorialApp = app;
});
