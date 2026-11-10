/**
 * StatNote 全站共用互動腳本 (script.js)
 * 負責功能：
 * 0. GitHub Pages 專案子路徑結尾斜線修正（避免相對路徑解析跳脫儲存庫）
 * 1. 行動版導覽選單（Hamburger Menu）開關與點擊外部關閉
 * 2. 導覽列滾動陰影效果
 * 3. 頁面導覽項目 Active 狀態自動識別
 * 4. KaTeX 數學公式自動渲染支援
 * 5. 頁尾動態年份更新
 */

// 立即執行：確保 GitHub Pages 專案目錄結尾具備斜線，保障相對路徑解析正確
(function ensureTrailingSlashOnProjectRoot() {
  const path = window.location.pathname;
  if (path && !path.endsWith('/') && !path.includes('.')) {
    window.location.replace(path + '/' + window.location.search + window.location.hash);
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initHeaderScroll();
  initActiveNavLink();
  initDynamicYear();
  initKaTeXRender();
});

/**
 * 行動版導覽選單切換
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle-btn');
  const navMenu = document.querySelector('.nav-menu');

  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = navMenu.classList.toggle('open');
    toggleBtn.classList.toggle('active', isOpen);
    toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // 點擊選單內部連結時自動關閉選單
  navMenu.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // 點擊選單外任意區域時自動收合選單
  document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      navMenu.classList.remove('open');
      toggleBtn.classList.remove('active');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * 導覽列滾動陰影效果
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // 初始化時執行一次
}

/**
 * 根據當前頁面 URL 自動標記導覽列的 Active 連結
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link');
  const breadcrumbLinks = Array.from(document.querySelectorAll('.breadcrumb a')).map(a => (a.getAttribute('href') || '').toLowerCase());

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;

    // 清除可能寫死的多餘 active
    link.classList.remove('active');

    // 比對首頁
    const isHomePage = (currentPath.endsWith('/') || currentPath.endsWith('index.html')) &&
                       (href.endsWith('index.html') || href === './' || href === '../index.html');

    // 比對子頁面 (如 probability.html)，或文章頁面所屬之分類麵包屑
    const pageName = href.split('/').pop().replace('.html', '');
    const isSubPage = pageName && (currentPath.includes(pageName) || breadcrumbLinks.some(bHref => bHref.includes(pageName)));

    if (isHomePage || isSubPage) {
      link.classList.add('active');
    }
  });
}

/**
 * 動態更新頁尾年份
 */
function initDynamicYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * 檢查並啟動 KaTeX 數學公式自動渲染
 */
function initKaTeXRender() {
  const tryRender = () => {
    if (typeof renderMathInElement === 'function') {
      renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false },
          { left: '\\(', right: '\\)', display: false },
          { left: '\\[', right: '\\]', display: true }
        ],
        throwOnError: false
      });
      return true;
    }
    return false;
  };

  // 嘗試立即渲染；若外部 CDN 延遲就緒，則在 window load 後再次執行確保渲染
  if (!tryRender()) {
    window.addEventListener('load', tryRender, { once: true });
  }
}
