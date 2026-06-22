# 每日一鍵發布：git push + Vercel 自動部署
param(
    [string]$Message = "研究日誌更新 $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

Set-Location $PSScriptRoot

Write-Host "正在提交並推送..." -ForegroundColor Cyan
git add -A
git commit -m $Message
git push

Write-Host "正在部署到 Vercel..." -ForegroundColor Cyan
vercel --prod --yes

Write-Host "完成！網站已更新。" -ForegroundColor Green
