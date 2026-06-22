# Research Lab — Claude Code 指令

## 每次 session 開始時必做

**主動詢問 Thomas 要不要建立今天的研究日誌。**

問法：「要幫你建今天的日誌嗎？（Day XX）」

如果他說要：
1. 確認今天日期與 Day 編號（看 `blog/` 裡最新的一篇是幾號）
2. 在 `blog/` 建立 `YYYY-MM-DD-dayXX.md`，用以下模板：

```markdown
---
slug: day-XX-主題
title: "Day XX — 主題"
authors: [thomas]
tags: [ai]
date: YYYY-MM-DD
---

一兩句摘要。

{/* truncate */}

## 提示詞區塊

\```text
提示詞內容
\```

---

## 架構圖區塊

\```mermaid
flowchart TD
    A[輸入] --> B[處理] --> C[輸出]
\```

---

## Demo 說明區塊

**目標：**

**結果：**

**學到：**
```

3. 詢問他今天實驗的主題、提示詞、結果，幫他填進去
4. 填完後執行 `.\publish.ps1 -Message "Day XX - 主題"` 自動部署

## 發布指令

```powershell
cd "D:\claude code\research-lab"
.\publish.ps1 -Message "Day XX - 說明"
```

## 網站

- GitHub: https://github.com/thomaschen-spec/research-lab
- 公開網址: https://research-lab-dun.vercel.app
