param(
    [string]$Message = "blog update $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
)

Set-Location $PSScriptRoot

git add -A
git commit -m $Message
git push

vercel --prod --yes
