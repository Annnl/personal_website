// 语言切换功能
const langButtons = document.querySelectorAll('.lang-btn');
const langContents = document.querySelectorAll('.lang-content');
const mainTitle = document.getElementById('main-title');

// 页面标题的中英文版本
const titles = {
    zh: '倪凝的个人网页',
    en: 'Ning Ni\'s Personal Website'
};

function switchLanguage(targetLang) {
    // 更新语言按钮状态
    langButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === targetLang) {
            btn.classList.add('active');
        }
    });

    // 更新所有语言内容
    langContents.forEach(content => {
        content.classList.remove('active');
        if (content.dataset.lang === targetLang) {
            content.classList.add('active');
        }
    });

    // 更新页面标题
    mainTitle.textContent = titles[targetLang];

    // 更新HTML语言属性
    document.documentElement.lang = targetLang === 'zh' ? 'zh' : 'en';
}

// 绑定语言切换事件
langButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const targetLang = btn.dataset.lang;
        switchLanguage(targetLang);
    });
});

// --- 分页切换逻辑 ---
const tabLinks = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabLinks.forEach(link => {
    link.addEventListener('click', () => {
        const tabId = link.dataset.tab; // 获取被点击按钮的 data-tab 属性值

        // 1. 移除所有分页按钮的 active 类
        tabLinks.forEach(item => {
            item.classList.remove('active');
        });

        // 2. 给当前被点击的分页按钮添加 active 类
        link.classList.add('active');

        // 3. 隐藏所有内容区域
        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        // 4. 显示与被点击按钮对应的内容区域
        const activeContent = document.getElementById(tabId);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    });
});

