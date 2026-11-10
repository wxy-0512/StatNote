# StatNote 統計學習筆記站 📖☕

> **用溫暖細膩的節奏，探索統計與計量之美。**  
> 專為統計學研習者設計的靜態知識筆記網站，透過溫暖文青的視覺設計與結構化推導，將抽象數學化為清晰的直覺與工具。

---

## 🌟 專案特色

- ☕ **溫暖文青美學**：以米白色、奶茶色、咖啡棕與鼠尾草綠為基底，營造護眼、寧靜且有溫度的閱讀氛圍。
- 📐 **嚴謹的六步筆記結構**：每篇知識單元均涵蓋「觀念介紹 $\to$ 數學定義 $\to$ 重要公式 $\to$ 詳細推導 $\to$ 範例題目 $\to$ 重點整理」。
- 🧮 **KaTeX 數學公式即時渲染**：原生整合 KaTeX，完美呈現 LaTeX 數學式與矩陣運算。
- 📱 **流暢的跨裝置體驗**：完整支援 RWD 響應式排版，無論使用電腦、平板或手機都能舒適閱讀。
- ⚡ **純原生輕量無負擔**：使用原生 HTML5、CSS3 與 JavaScript，無大型依賴、無需複雜建置，極速載入。
- 🌐 **GitHub Pages 即開即用**：全站採用相對路徑設計，可直接部署於 GitHub Pages 或任何靜態主機。

---

## 📚 三大核心學習領域

1. **機率論（Probability）**
   - 探討隨機現象的數學基礎，包含樣本空間、條件機率、隨機變數、常見機率分佈、多維隨機變數、大數法則與中央極限定理。
2. **數理統計（Mathematical Statistics）**
   - 從樣本推論母體的理論基石，包含點估計理論（MLE、MOM）、充分統計量（Sufficient Statistics）、假設檢定（Neyman-Pearson 檢定、LRT）與漸近性質。
3. **計量經濟學（Econometrics）**
   - 連結經濟理論與實證資料的橋樑，包含古典線性迴歸模型（OLS 原理與 Gauss-Markov 定理）、異質變異與自我相關、內生性問題與工具變數（IV/2SLS）、面板資料模型等。

---

## 📁 檔案架構

```text
StatNotes/
├── AGENTS.md                  # 專案規範與 AI 代理人協作指引（請遵守此規範進行維護）
├── README.md                  # 專案簡介、技術與本地預覽指引
├── index.html                 # 網站首頁（導覽、英雄區、三大分類卡片、精選筆記）
├── style.css                  # 全站通用樣式（色系變數、排版、卡片、RWD）
├── script.js                  # 全站互動行為（行動版選單切換、平滑滾動、動態元件）
├── pages/                     # 分類主題專屬彙整頁面
│   ├── probability.html       # 機率論分類文章索引
│   ├── math-stat.html         # 數理統計分類文章索引
│   └── econometrics.html      # 計量經濟學分類文章索引
├── articles/                  # 個別統計知識筆記文章（遵循六步標準結構）
└── assets/                    # 靜態多媒體素材目錄
    └── images/                # 示意圖、幾何分佈圖、模擬圖檔等
```

---

## 🚀 本地預覽方式 (Local Preview)

您可以透過以下任一簡單方式在瀏覽器中預覽網站：

### 方式 1：直接用瀏覽器開啟（最快速）
直接在檔案總管中對 `index.html` 按兩下，或以滑鼠右鍵點擊 `index.html` 選擇 **「以...開啟 (Open with) $\to$ Google Chrome / Microsoft Edge / Safari」**。

### 方式 2：使用 Python 內建輕量 HTTP 伺服器
若電腦已安裝 Python，可開啟終端機（Terminal / PowerShell）進入本專案資料夾後執行：
```bash
python -m http.server 8000
```
隨後在瀏覽器網址列輸入 `http://localhost:8000` 即可預覽。

### 方式 3：使用 VS Code Live Server 外掛
若使用 VS Code / Antigravity IDE：
1. 安裝延伸模組 **Live Server**。
2. 在 `index.html` 上按滑鼠右鍵，點擊 **「Open with Live Server」**。

---

## 🌐 部署至 GitHub Pages 步驟

1. 將本專案推送到您的 GitHub 儲存庫（Repository），例如名為 `StatNotes`。
2. 進入 GitHub 儲存庫頁面，點選頂部 **Settings（設定）**。
3. 在左側選單中找到 **Pages**。
4. 在 **Build and deployment $\to$ Branch** 選擇 `main`（或 `master`），資料夾選擇 `/ (root)`，並點選 **Save**。
5. 等待數十秒後，重新整理頁面，即可取得您的公開網站網址（格式通常為 `https://<您的帳號>.github.io/StatNotes/`）。

---

## 📝 未來擴充與維護原則

當您或 AI 代理人要新增文章或更新網站時，請務必先閱讀並遵守 [AGENTS.md](file:///c:/Users/吳欣俞/OneDrive/Documents/StatNotes/AGENTS.md) 所載明的規範：
- 嚴格維持相對路徑。
- 知識筆記務必遵循六大標準單元結構。
- 新增筆記時需同步更新 `pages/` 對應分類頁與首頁列表。

---
*版權所有 © 2026 StatNote 統計學習筆記站。*
