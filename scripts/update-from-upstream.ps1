# Update From Upstream - PowerShell Script
# Safely updates the fork from the original repository

param(
    [switch]$DryRun = $false,
    [string]$UpstreamUrl = "https://github.com/snakeying/claude-relay-service.git",
    [string]$Branch = "main"
)

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Claude Relay Service - Update Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in a git repository
if (-not (Test-Path ".git")) {
    Write-Host "❌ Error: Not a git repository!" -ForegroundColor Red
    Write-Host "   Please run this script from the project root." -ForegroundColor Yellow
    exit 1
}

# Function to check if upstream remote exists
function Test-UpstreamRemote {
    $remotes = git remote
    return $remotes -contains "upstream"
}

# Add upstream remote if it doesn't exist
if (-not (Test-UpstreamRemote)) {
    Write-Host "🔗 Adding upstream remote..." -ForegroundColor Yellow
    git remote add upstream $UpstreamUrl

    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Failed to add upstream remote!" -ForegroundColor Red
        exit 1
    }

    Write-Host "✅ Upstream remote added successfully" -ForegroundColor Green
} else {
    Write-Host "✓ Upstream remote already exists" -ForegroundColor Green
}

# Fetch latest changes from upstream
Write-Host ""
Write-Host "📥 Fetching latest changes from upstream..." -ForegroundColor Yellow
git fetch upstream

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to fetch from upstream!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Fetched successfully" -ForegroundColor Green

# Show what will be merged
Write-Host ""
Write-Host "📊 Changes to be merged:" -ForegroundColor Yellow
Write-Host ""
git log HEAD..upstream/$Branch --oneline --max-count=10

# Check if there are any changes
$changes = git rev-list HEAD..upstream/$Branch --count
if ($changes -eq "0") {
    Write-Host ""
    Write-Host "✅ Already up to date!" -ForegroundColor Green
    exit 0
}

Write-Host ""
Write-Host "Found $changes commit(s) to merge" -ForegroundColor Cyan

# Dry run mode
if ($DryRun) {
    Write-Host ""
    Write-Host "🔍 DRY RUN MODE - No changes will be made" -ForegroundColor Magenta
    Write-Host ""
    Write-Host "Files that will be affected:" -ForegroundColor Yellow
    git diff --name-only HEAD..upstream/$Branch
    Write-Host ""
    Write-Host "To perform the actual update, run without -DryRun flag" -ForegroundColor Yellow
    exit 0
}

# Confirm before proceeding
Write-Host ""
$confirm = Read-Host "Do you want to merge these changes? (y/N)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "❌ Update cancelled" -ForegroundColor Yellow
    exit 0
}

# Stash any local changes
Write-Host ""
Write-Host "💾 Stashing local changes..." -ForegroundColor Yellow
git stash push -m "Pre-update stash $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"

# Merge upstream changes
Write-Host ""
Write-Host "🔄 Merging upstream/$Branch..." -ForegroundColor Yellow
git merge upstream/$Branch --no-edit

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "❌ Merge conflict detected!" -ForegroundColor Red
    Write-Host ""
    Write-Host "📝 Conflicted files:" -ForegroundColor Yellow
    git diff --name-only --diff-filter=U
    Write-Host ""
    Write-Host "To resolve conflicts:" -ForegroundColor Cyan
    Write-Host "  1. Open conflicted files and resolve conflicts" -ForegroundColor White
    Write-Host "  2. Run: git add <file>" -ForegroundColor White
    Write-Host "  3. Run: git commit" -ForegroundColor White
    Write-Host "  4. Run: node scripts/find-untranslated.js" -ForegroundColor White
    Write-Host ""
    Write-Host "To abort merge:" -ForegroundColor Cyan
    Write-Host "  git merge --abort" -ForegroundColor White
    Write-Host "  git stash pop" -ForegroundColor White
    exit 1
}

Write-Host "✅ Merge completed successfully" -ForegroundColor Green

# Pop stashed changes
Write-Host ""
Write-Host "📤 Restoring stashed changes..." -ForegroundColor Yellow
git stash pop 2>$null

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  No stashed changes to restore (or conflicts)" -ForegroundColor Yellow
} else {
    Write-Host "✅ Stashed changes restored" -ForegroundColor Green
}

# Check for untranslated strings
Write-Host ""
Write-Host "🔍 Checking for untranslated strings..." -ForegroundColor Yellow
Write-Host ""

if (Test-Path "scripts\find-untranslated.js") {
    node scripts\find-untranslated.js

    if ($LASTEXITCODE -ne 0) {
        Write-Host ""
        Write-Host "⚠️  Found untranslated strings!" -ForegroundColor Yellow
        Write-Host "   Please review and translate them before committing." -ForegroundColor Yellow
    } else {
        Write-Host "✅ No untranslated strings found" -ForegroundColor Green
    }
} else {
    Write-Host "⚠️  Translation check script not found" -ForegroundColor Yellow
}

# Success summary
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ Update completed successfully!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "  1. Test the application" -ForegroundColor White
Write-Host "  2. Translate any new strings" -ForegroundColor White
Write-Host "  3. Commit changes: git commit -m 'Merge upstream updates'" -ForegroundColor White
Write-Host "  4. Push to your fork: git push origin $Branch" -ForegroundColor White
Write-Host ""
