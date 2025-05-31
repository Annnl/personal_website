// --- 新增：分页切换逻辑 ---
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