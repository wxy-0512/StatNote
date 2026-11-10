# StatNote 專案指引與 AI 協作規範 (AGENTS.md)

本文件是 **StatNote（統計學習筆記站）** 的核心設定規範文件。所有參與本專案開發、維護或撰寫內容的 AI 代理人（AI Agents）及協作者，在進行任何檔案新增、修改或重構時，**必須嚴格遵守本文所定義之各項原則與規範**。

---

## 1. 專案目的與願景

StatNote 是一個透過 **GitHub Pages** 公開託管的現代靜態統計學習筆記站，旨在建立一個嚴謹、清楚且兼具閱讀美感的統計知識庫。

- **核心領域**：
  1. **Probability（機率論）**：隨機變數、機率分佈、期望值與變異數、大數法則與中央極限定理等。
  2. **Mathematical Statistics（數理統計）**：點估計、充分統計量、假設檢定、信賴區間、漸近理論等。
  3. **Econometrics（計量經濟學）**：古典迴歸模型（OLS）、異質變異、內生性、工具變數、面板資料、時間序列等。
- **技術原則**：保持輕量、簡約與高相容性，採用原生 **HTML5、CSS3、ES6 JavaScript**，不依賴複雜建置工具（如 Webpack、Vite）或大型重型框架，任何靜態伺服器均可隨開即用。

---

## 2. 網站設計風格與視覺規範

網站採用 **「溫暖文青風（Warm Literary & Cozy Aesthetic）」**，營造如在陽光灑落的木質咖啡廳中專注閱讀筆記的氛圍。

### 2.1 品牌色票系統（Color Palette）
所有樣式變數均定義於 `style.css` 的 `:root` 中，新增或修改頁面時請直接沿用以下變數：

| 色系類別 | 顏色名稱 | 色碼 (HEX) | 用途說明 |
| :--- | :--- | :--- | :--- |
| **底色** | 米白色 (Cream White) | `#FAF7F2` | 全站背景色，提供柔和護眼的閱讀底色 |
| **卡片底色** | 柔霧白 (Soft Surface) | `#FFFFFF` / `#F4EFEA` | 內容卡片、導覽列背景底色 |
| **主輔色** | 奶茶色 (Milk Tea) | `#D4BBA5` / `#C2A68D` | 次要邊框、裝飾性色塊、次重點標籤 |
| **主文字** | 咖啡棕 (Coffee Brown) | `#3D312A` / `#2B221C` | 標題與內文主要字色，溫和取代刺眼的純黑 |
| **次文字** | 拿鐵棕 (Muted Coffee) | `#6E5D53` | 描述文字、副標題、次要文字 |
| **重點點綴** | 鼠尾草綠 (Sage Green) | `#6B8068` / `#5A6B5A` | 主按鈕、重點強調、分類標籤、連結 Hover |
| **淺綠點綴** | 淺鼠尾草 (Light Sage) | `#E5ECE4` | 標籤背景、醒目提示框背景 |
| **邊框線** | 暖灰米 (Warm Border) | `#E6DCD2` | 卡片分隔線、表格框線 |

### 2.2 排版與字體規範
- **中文字體**：優先使用系統 Serif/Sans 搭配：
  - 標題首選：`'Noto Serif TC', 'Source Han Serif TC', Georgia, serif`
  - 內文首選：`'Noto Sans TC', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
  - 數學式與程式碼：`'Fira Code', 'Consolas', monospace`
- **響應式排版（RWD）**：
  - 手機版（Mobile, $<768\text{px}$）：漢堡選單抽屜、單欄流暢滾動、適度調整字級與內距。
  - 平板版（Tablet, $768\text{px} \sim 1024\text{px}$）：兩欄佈局。
  - 電腦版（Desktop, $>1024\text{px}$）：三欄或卡片網格，最大閱讀寬度限制（`max-width: 1200px`），保持最佳行寬。
- **語言語系**：一律採用 **繁體中文（zh-TW）**，英文專有名詞請保留並附於括號內（例如：中央極限定理（Central Limit Theorem, CLT））。

---

## 3. 專案檔案架構

```text
StatNotes/
├── AGENTS.md                  # 專案規範與 AI 協作指引（本檔案）
├── README.md                  # 專案介紹、架構與預覽說明
├── index.html                 # 網站首頁
├── style.css                  # 全站共用核心樣式表
├── script.js                  # 全站共用 JavaScript 腳本
├── pages/                     # 分類主題聚合頁面
│   ├── probability.html       # 機率論分類頁面
│   ├── math-stat.html         # 數理統計分類頁面
│   └── econometrics.html      # 計量經濟學分類頁面
├── articles/                  # 個別統計知識筆記文章（HTML 格式）
│   └── [article-slug].html    # 各單元詳細筆記
└── assets/                    # 靜態資源目錄
    ├── images/                # 圖片與圖示素材
    └── (可擴充其它靜態資源)
```

### 命名規範
- 檔案與資料夾名稱一律使用 **小寫英文字母與連字號（kebab-case）**，例如 `conditional-expectation.html`、`assets/images/clt-simulation.png`。
- 切勿使用中文字元、空格或特殊符號作為檔名，以免 GitHub Pages 或跨平台伺服器解析錯誤。

---

## 4. 知識筆記標準文章格式（Article Template）

未來在 `articles/` 資料夾中新增的每一篇知識筆記，**必須嚴格依照以下六大標準單元依序編寫**：

1. **觀念介紹 (Concept Introduction)**：以直覺生動的生活比喻或直觀問題切入，說明該統計概念的背景動機、解決什麼問題與重要性。
2. **數學定義 (Mathematical Definition)**：嚴謹的數學符號與定理敘述，清楚標示符號意義與適用條件（如獨立同分佈 $i.i.d.$、支撐集 Support 等）。
3. **重要公式 (Key Formulae)**：將核心結論公式以突顯的卡片或公式框呈現，方便讀者查閱與記憶。
4. **詳細推導 (Detailed Derivation)**：一步一步展開數學證明或推導過程，清楚註解每一步所使用的性質（如全期望值定律、積分變換、泰勒展開）。
5. **範例題目 (Example Problems)**：提供 1~2 道經典具代表性的例題，並附上詳盡解題步驟與直觀詮釋。
6. **重點整理 (Summary & Key Takeaways)**：以條列式總結本篇核心精華、易混淆陷阱或與其他單元的關聯。

### 4.1 頁面導航與返回路徑規範 (Navigation & Breadcrumbs)
為了讓讀者在閱讀個別筆記時具備清晰的導引感與良好的使用者體驗，每篇知識筆記 **必須具備以下導航元素**：
1. **頂部麵包屑導覽 (Breadcrumb)**：格式固定為 `首頁 > [學科分類] > [文章標題]`：
   - 首頁連結：`href="../index.html"`
   - 分類頁面連結：`href="../pages/probability.html"`（或 `math-stat.html` / `econometrics.html`）
   - 當前文章標題：使用 `<span aria-current="page">` 標註，不具備超連結。
2. **底部導航行動列 (Article Footer Actions)**：在文章六大單元結束後、頁尾（Footer）之前，必須提供返回所屬分類頁面與返回首頁的按鈕，例如：
   ```html
   <div class="article-navigation">
     <a href="../pages/probability.html" class="btn btn-outline">← 返回機率論目錄</a>
     <a href="../index.html" class="btn btn-outline">返回網站首頁</a>
   </div>
   ```

### 4.2 數學公式呈現標準
- 採用 **KaTeX** 渲染，行內公式使用 `$...$`，獨立段落公式使用 `$$...$$`。
- 每個頁面 `<head>` 必須引入 KaTeX CDN 與自動渲染外掛（或採用全站標準 `<head>` 區塊）。

---

## 5. AI 修改與新增內容守則（AI Agent Rules）

AI 在執行任何變更時，必須逐項核對並切實遵守以下守則：

### 守則一：相對路徑絕對優先（GitHub Pages 相容性）
- 本站託管於 GitHub Pages（可能位於 `https://username.github.io/repository/` 之子目錄下）。
- **絕對禁止使用以斜線開頭的絕對路徑**（如 `/style.css`、`/index.html`）。
- **必須使用相對路徑**：
  - 根目錄頁面（`index.html`）：使用 `style.css`、`script.js`、`pages/...`、`articles/...`。
  - 子目錄頁面（`pages/*.html` 與 `articles/*.html`）：使用 `../style.css`、`../script.js`、`../index.html`、`../assets/...`。

### 守則二：維持全站導覽列與頁尾一致性
- 所有 HTML 頁面均應具備完全相同的：
  - **頂部導覽列（Navbar）**：包含品牌標誌（StatNote）、首頁連結、三大領域下拉/連結、選單開關按鈕。
  - **頁尾（Footer）**：包含網站簡介、快速連結、分類導航、版權宣告。
- 當前所在頁面需在對應導覽連結加上 `active` class。

### 守則三：新增文章同步更新清單（Three-Point Sync）
每當在 `articles/` 新增一篇知識筆記文章時，**必須同時完成以下三項更新**：
1. **建立文章檔**：在 `articles/` 目錄建立遵循六大單元格式的 HTML 檔案。
2. **更新分類頁面**：更新 `pages/` 目錄下對應分類（`probability.html` / `math-stat.html` / `econometrics.html`）中的文章索引清單。
3. **更新首頁動態**：在 `index.html` 的「最新文章 / 精選筆記」區塊加入該文章卡片連結。

### 守則四：不得擅自刪除或覆蓋既有內容
- 編輯時嚴禁清除其他既有文章或破壞頁面結構。
- 遵循防禦性編碼，確保各頁面語意標籤健全（semantic HTML5 tags：`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`）。

### 守則五：純原生技術保證
- 不得引進需要 npm install、webpack、vite、Sass 等建置指令才能運作的外部依賴。
- 外部 CDN 僅允許經授權的輕量化輔助工具（例如 KaTeX 數學式渲染 CDN）。

### 守則六：GitHub Pages 部署與 .nojekyll 保護
- 專案根目錄必須永遠保留 `.nojekyll` 檔案，以指示 GitHub Pages 關閉 Jekyll 建置引擎。
- 這樣可徹底防止 Jekyll 內部 Liquid 解析器與 KaTeX LaTeX 數學公式符號（例如含有雙括號 `}}` 或複雜下標）產生衝突，避免 GitHub Pages 靜態編譯失敗導致文章子資料夾（`articles/`）無法發布而引發 404 錯誤。

---

## 6. HTML 頁面骨架參考範本

為確保未來 AI 新增文章頁面時格式百分之百一致，請參考以下 `articles/[article-slug].html` 骨架標準規範：

```html
<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>文章標題 | StatNote 統計學習筆記</title>
  <meta name="description" content="文章簡介摘要">

  <!-- 相對路徑引入樣式表 -->
  <link rel="stylesheet" href="../style.css">

  <!-- 字體引入 -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700&family=Noto+Serif+TC:wght@600;700&family=Fira+Code:wght@400;600&display=swap" rel="stylesheet">

  <!-- KaTeX 數學公式支援 -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css">
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/contrib/auto-render.min.js"></script>
</head>
<body>
  <!-- 1. 全站一致導覽列 -->
  <header class="site-header">
    <div class="container navbar-inner">
      <a href="../index.html" class="brand-logo" aria-label="StatNote 首頁">
        <div class="brand-icon">📐</div>
        <span>StatNote</span>
        <span class="brand-tagline">統計學習筆記</span>
      </a>
      <button class="nav-toggle-btn" aria-label="切換導覽選單" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
      <nav>
        <ul class="nav-menu">
          <li><a href="../index.html" class="nav-link">首頁</a></li>
          <li><a href="../pages/probability.html" class="nav-link">機率論</a></li>
          <li><a href="../pages/math-stat.html" class="nav-link">數理統計</a></li>
          <li><a href="../pages/econometrics.html" class="nav-link">計量經濟學</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- 2. 文章頁面頂部橫幅與麵包屑 -->
  <section class="page-banner">
    <div class="container">
      <nav class="breadcrumb" aria-label="麵包屑導覽">
        <a href="../index.html">首頁</a>
        <span>/</span>
        <a href="../pages/probability.html">機率論</a>
        <span>/</span>
        <span aria-current="page">文章標題</span>
      </nav>
      <div class="page-title-group">
        <div>
          <span class="section-tag">Probability · Note #01</span>
          <h1>文章正式標題 (Article Title)</h1>
          <p>核心概念一句話精簡說明</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 3. 文章主體：六大標準單元 -->
  <main class="container section">
    <article class="article-content">
      <!-- 單元 1：觀念介紹 -->
      <section class="article-section">
        <h2>一、觀念介紹</h2>
        <p>直觀的生活比喻與背景動機...</p>
      </section>

      <!-- 單元 2：數學定義 -->
      <section class="article-section">
        <h2>二、數學定義</h2>
        <p>嚴謹數學定義與條件，使用 KaTeX 標記 $X \sim \mathcal{N}(\mu, \sigma^2)$ ...</p>
      </section>

      <!-- 單元 3：重要公式 -->
      <section class="article-section">
        <h2>三、重要公式</h2>
        <div class="math-block">
          $$公式主體$$
        </div>
      </section>

      <!-- 單元 4：詳細推導 -->
      <section class="article-section">
        <h2>四、詳細推導</h2>
        <p>逐步推導過程...</p>
      </section>

      <!-- 單元 5：範例題目 -->
      <section class="article-section">
        <h2>五、範例題目</h2>
        <div class="example-box">
          <p><strong>【經典例題】</strong>題目敘述與完整解答...</p>
        </div>
      </section>

      <!-- 單元 6：重點整理 -->
      <section class="article-section">
        <h2>六、重點整理</h2>
        <ul>
          <li>重點 1</li>
          <li>重點 2</li>
        </ul>
      </section>
    </article>

    <!-- 4. 底部返回行動按鈕 -->
    <div class="article-nav-actions" style="margin-top: 48px; display: flex; gap: 16px;">
      <a href="../pages/probability.html" class="btn btn-primary">← 返回機率論分類</a>
      <a href="../index.html" class="btn btn-outline">返回首頁</a>
    </div>
  </main>

  <!-- 5. 全站一致頁尾 -->
  <!-- 相對路徑引入腳本 -->
  <script src="../script.js"></script>
</body>
</html>
```

---
*本指引最後修訂時間：2026 年 11 月。任何架構調整需經專案負責人審查後同步更新本文件。*
