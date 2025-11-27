# Руководство по обновлению локализованного форка

## 📖 Обзор

Этот документ описывает процесс обновления вашего локализованного форка Claude Relay Service при выходе новых версий в основном репозитории.

## 🎯 Цель

Минимизировать конфликты при слиянии изменений из upstream и быстро обновлять локализованную версию.

---

## 🏗️ Структура веток

### Основные ветки

```
main-i18n (ваша основная ветка с локализацией)
├── feature/i18n-user-interface (разработка локализации)
└── upstream-sync (временная ветка для обновлений)
```

### Стратегия

1. **main-i18n** - стабильная версия с локализацией
2. **upstream-sync** - временная ветка для тестирования обновлений
3. **feature/*** - ветки для разработки новых функций

---

## 🚀 Первоначальная настройка

### Шаг 1: Настройка upstream remote

```bash
# Клонируйте ваш форк
git clone https://github.com/YOUR_USERNAME/claude-relay-service.git
cd claude-relay-service

# Добавьте upstream remote
git remote add upstream https://github.com/Wei-Shaw/claude-relay-service.git

# Проверьте remote'ы
git remote -v
# origin    https://github.com/YOUR_USERNAME/claude-relay-service.git (fetch)
# origin    https://github.com/YOUR_USERNAME/claude-relay-service.git (push)
# upstream  https://github.com/Wei-Shaw/claude-relay-service.git (fetch)
# upstream  https://github.com/Wei-Shaw/claude-relay-service.git (push)
```

### Шаг 2: Создание основной ветки с локализацией

```bash
# Если вы еще не создали ветку main-i18n
git checkout -b main-i18n

# Реализуйте локализацию согласно LOCALIZATION_PLAN.md

# Коммит и push
git add .
git commit -m "feat: add i18n for user interface"
git push origin main-i18n
```

---

## 🔄 Процесс обновления

### Вариант 1: Автоматическое обновление (рекомендуется)

#### Шаг 1: Создайте скрипт обновления

Создайте файл `scripts/update-from-upstream.sh`:

```bash
#!/bin/bash

set -e  # Остановка при ошибке

echo "🔄 Starting update from upstream..."
echo ""

# Цвета для вывода
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Проверка текущей ветки
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main-i18n" ]; then
    echo -e "${RED}❌ Error: You must be on main-i18n branch${NC}"
    echo "Current branch: $CURRENT_BRANCH"
    exit 1
fi

# 2. Проверка незакоммиченных изменений
if ! git diff-index --quiet HEAD --; then
    echo -e "${RED}❌ Error: You have uncommitted changes${NC}"
    echo "Please commit or stash your changes first"
    git status --short
    exit 1
fi

# 3. Fetch upstream
echo "📡 Fetching updates from upstream..."
git fetch upstream
echo -e "${GREEN}✓ Upstream fetched${NC}"
echo ""

# 4. Создание резервной ветки
BACKUP_BRANCH="backup-before-update-$(date +%Y%m%d-%H%M%S)"
echo "💾 Creating backup branch: $BACKUP_BRANCH"
git branch "$BACKUP_BRANCH"
echo -e "${GREEN}✓ Backup created${NC}"
echo ""

# 5. Попытка merge
echo "🔀 Attempting to merge upstream/main..."
if git merge upstream/main --no-edit; then
    echo -e "${GREEN}✓ Merge successful!${NC}"
    echo ""

    # 6. Проверка конфликтов в критических файлах
    echo "🔍 Checking critical files..."

    CRITICAL_FILES=(
        "web/admin-spa/package.json"
        "web/admin-spa/src/main.js"
    )

    CONFLICTS_FOUND=false
    for file in "${CRITICAL_FILES[@]}"; do
        if git diff --name-only HEAD~1..HEAD | grep -q "$file"; then
            echo -e "${YELLOW}⚠️  Changes detected in: $file${NC}"
            CONFLICTS_FOUND=true
        fi
    done

    if [ "$CONFLICTS_FOUND" = true ]; then
        echo ""
        echo -e "${YELLOW}⚠️  Critical files were modified during merge${NC}"
        echo "Please review the changes manually:"
        echo ""
        git diff HEAD~1..HEAD -- web/admin-spa/package.json web/admin-spa/src/main.js
        echo ""
        read -p "Do you want to continue? (y/n) " -n 1 -r
        echo ""
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo "Aborting..."
            git reset --hard HEAD~1
            exit 1
        fi
    fi

    # 7. Обновление зависимостей
    echo ""
    echo "📦 Updating dependencies..."
    cd web/admin-spa
    npm install
    echo -e "${GREEN}✓ Dependencies updated${NC}"
    echo ""

    # 8. Сборка frontend
    echo "🔨 Building frontend..."
    npm run build
    echo -e "${GREEN}✓ Build successful${NC}"
    cd ../..
    echo ""

    # 9. Push обновлений
    echo "📤 Pushing updates to origin..."
    git push origin main-i18n
    echo -e "${GREEN}✓ Updates pushed${NC}"
    echo ""

    echo -e "${GREEN}✅ Update completed successfully!${NC}"
    echo ""
    echo "Backup branch: $BACKUP_BRANCH"
    echo "To delete backup: git branch -d $BACKUP_BRANCH"

else
    echo -e "${RED}❌ Merge conflicts detected${NC}"
    echo ""
    echo "Conflicting files:"
    git diff --name-only --diff-filter=U
    echo ""
    echo "Please resolve conflicts manually:"
    echo "1. Edit conflicting files"
    echo "2. git add <resolved-files>"
    echo "3. git commit"
    echo "4. Run this script again"
    echo ""
    echo "Or to abort merge:"
    echo "git merge --abort"
    echo ""
    echo "Backup branch created: $BACKUP_BRANCH"
    exit 1
fi
```

#### Шаг 2: Сделайте скрипт исполняемым

```bash
chmod +x scripts/update-from-upstream.sh
```

#### Шаг 3: Запустите обновление

```bash
./scripts/update-from-upstream.sh
```

---

### Вариант 2: Ручное обновление

Если вы предпочитаете ручное управление процессом:

#### Шаг 1: Подготовка

```bash
# Убедитесь, что вы на main-i18n
git checkout main-i18n

# Убедитесь, что все изменения закоммичены
git status

# Получите последние изменения из upstream
git fetch upstream
```

#### Шаг 2: Создание резервной копии

```bash
# Создайте резервную ветку
git branch backup-before-update-$(date +%Y%m%d-%H%M%S)

# Или создайте тег
git tag backup-$(date +%Y%m%d-%H%M%S)
```

#### Шаг 3: Merge upstream

```bash
# Попытка автоматического merge
git merge upstream/main

# Если есть конфликты, они будут показаны
```

#### Шаг 4: Разрешение конфликтов

##### Типичные конфликты и их решение

**Конфликт 1: web/admin-spa/package.json**

```json
<<<<<<< HEAD
  "dependencies": {
    "vue-i18n": "^9.8.0",
    "axios": "^1.6.0",
=======
  "dependencies": {
    "axios": "^1.7.0",
>>>>>>> upstream/main
```

**Решение:** Объедините обе версии
```json
  "dependencies": {
    "vue-i18n": "^9.8.0",
    "axios": "^1.7.0",
```

**Конфликт 2: web/admin-spa/src/main.js**

```javascript
<<<<<<< HEAD
import i18n from './locales'
// ...
app.use(i18n)
=======
// Новый код из upstream
import someNewFeature from './someNewFeature'
>>>>>>> upstream/main
```

**Решение:** Объедините оба изменения
```javascript
import i18n from './locales'
import someNewFeature from './someNewFeature'
// ...
app.use(i18n)
```

**Конфликт 3: Локализованные компоненты**

Если изменился оригинальный компонент (например, добавилась новая кнопка):

```vue
<<<<<<< HEAD
<button>{{ $t('common.buttons.submit') }}</button>
=======
<button>Submit</button>
<button>New Feature</button>
>>>>>>> upstream/main
```

**Решение:** Локализуйте новый элемент
```vue
<button>{{ $t('common.buttons.submit') }}</button>
<button>{{ $t('common.buttons.newFeature') }}</button>
```

И добавьте перевод в `src/locales/en/common.js` и `src/locales/ru/common.js`.

#### Шаг 5: Завершение merge

```bash
# После разрешения всех конфликтов
git add .
git commit -m "chore: merge upstream changes with i18n"

# Обновите зависимости
cd web/admin-spa
npm install

# Пересоберите frontend
npm run build
cd ../..

# Push изменений
git push origin main-i18n
```

---

## 🪟 Обновление на Windows

Специальные инструкции для пользователей Windows.

### Вариант 1: PowerShell скрипт (рекомендуется)

#### Создание скрипта

Создайте файл **scripts/update-from-upstream.ps1**:

```powershell
$ErrorActionPreference = "Stop"

Write-Host "🔄 Starting update from upstream..." -ForegroundColor Blue
Write-Host ""

# Проверка текущей ветки
$currentBranch = git branch --show-current
if ($currentBranch -ne "main-i18n") {
    Write-Host "❌ Error: You must be on main-i18n branch" -ForegroundColor Red
    Write-Host "Current branch: $currentBranch" -ForegroundColor Yellow
    exit 1
}

# Проверка незакоммиченных изменений
$status = git status --porcelain
if ($status) {
    Write-Host "❌ Error: You have uncommitted changes" -ForegroundColor Red
    Write-Host "Please commit or stash your changes first" -ForegroundColor Yellow
    git status --short
    exit 1
}

# Fetch upstream
Write-Host "📡 Fetching updates from upstream..." -ForegroundColor Cyan
git fetch upstream
Write-Host "✓ Upstream fetched" -ForegroundColor Green
Write-Host ""

# Создание резервной ветки
$backupBranch = "backup-before-update-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Write-Host "💾 Creating backup branch: $backupBranch" -ForegroundColor Cyan
git branch $backupBranch
Write-Host "✓ Backup created" -ForegroundColor Green
Write-Host ""

# Попытка merge
Write-Host "🔀 Attempting to merge upstream/main..." -ForegroundColor Cyan
try {
    git merge upstream/main --no-edit
    Write-Host "✓ Merge successful!" -ForegroundColor Green
    Write-Host ""

    # Проверка критических файлов
    Write-Host "🔍 Checking critical files..." -ForegroundColor Cyan

    $criticalFiles = @(
        "web\admin-spa\package.json",
        "web\admin-spa\src\main.js"
    )

    $conflictsFound = $false
    $changedFiles = git diff --name-only HEAD~1..HEAD

    foreach ($file in $criticalFiles) {
        if ($changedFiles -match [regex]::Escape($file)) {
            Write-Host "⚠️  Changes detected in: $file" -ForegroundColor Yellow
            $conflictsFound = $true
        }
    }

    if ($conflictsFound) {
        Write-Host ""
        Write-Host "⚠️  Critical files were modified during merge" -ForegroundColor Yellow
        Write-Host "Please review the changes manually:" -ForegroundColor Yellow
        Write-Host ""

        $response = Read-Host "Do you want to continue? (y/n)"
        if ($response -ne "y") {
            Write-Host "Aborting..." -ForegroundColor Red
            git reset --hard HEAD~1
            exit 1
        }
    }

    # Обновление зависимостей
    Write-Host ""
    Write-Host "📦 Updating dependencies..." -ForegroundColor Cyan
    Push-Location web\admin-spa
    npm install
    Write-Host "✓ Dependencies updated" -ForegroundColor Green
    Write-Host ""

    # Сборка frontend
    Write-Host "🔨 Building frontend..." -ForegroundColor Cyan
    npm run build
    Write-Host "✓ Build successful" -ForegroundColor Green
    Pop-Location
    Write-Host ""

    # Проверка непереведенных строк
    Write-Host "🔍 Checking for untranslated strings..." -ForegroundColor Cyan
    node scripts/find-untranslated.js

    # Push обновлений
    Write-Host ""
    Write-Host "📤 Pushing updates to origin..." -ForegroundColor Cyan
    git push origin main-i18n
    Write-Host "✓ Updates pushed" -ForegroundColor Green
    Write-Host ""

    Write-Host "✅ Update completed successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Backup branch: $backupBranch" -ForegroundColor Cyan
    Write-Host "To delete backup: git branch -d $backupBranch" -ForegroundColor Gray

} catch {
    Write-Host "❌ Merge conflicts detected" -ForegroundColor Red
    Write-Host ""
    Write-Host "Conflicting files:" -ForegroundColor Yellow
    git diff --name-only --diff-filter=U
    Write-Host ""
    Write-Host "Please resolve conflicts manually:" -ForegroundColor Yellow
    Write-Host "1. Edit conflicting files" -ForegroundColor White
    Write-Host "2. git add <resolved-files>" -ForegroundColor White
    Write-Host "3. git commit" -ForegroundColor White
    Write-Host "4. Run this script again" -ForegroundColor White
    Write-Host ""
    Write-Host "Or to abort merge:" -ForegroundColor Yellow
    Write-Host "git merge --abort" -ForegroundColor White
    Write-Host ""
    Write-Host "Backup branch created: $backupBranch" -ForegroundColor Cyan
    exit 1
}
```

#### Запуск обновления

```powershell
# Прямой запуск PowerShell скрипта
.\scripts\update-from-upstream.ps1

# Или через npm (если добавили в package.json)
npm run update:upstream
```

#### Создание batch файла для удобства

Создайте **update-upstream.bat** в корне проекта:

```batch
@echo off
echo Starting upstream update...
powershell -ExecutionPolicy Bypass -File scripts\update-from-upstream.ps1
pause
```

Теперь можно просто double-click на `update-upstream.bat`.

---

### Вариант 2: Ручное обновление в PowerShell

```powershell
# 1. Проверка ветки
git branch --show-current  # должно быть main-i18n

# 2. Убедитесь что все закоммичено
git status

# 3. Fetch upstream
git fetch upstream

# 4. Создание резервной копии
$backupBranch = "backup-before-update-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
git branch $backupBranch

# 5. Merge
git merge upstream/main

# 6. Если есть конфликты - разрешите их, затем:
git add .
git commit -m "chore: merge upstream changes with i18n"

# 7. Обновление и сборка
Push-Location web\admin-spa
npm install
npm run build
Pop-Location

# 8. Проверка переводов (если скрипт создан)
npm run i18n:check

# 9. Push изменений
git push origin main-i18n
```

---

### Автоматическая проверка переводов после обновления

#### Создание скрипта проверки

**scripts/find-untranslated.js** (см. полный код в LOCALIZATION_PLAN.md)

#### Создание быстрой проверки

**scripts/quick-check.bat**:

```batch
@echo off
cls
echo.
echo ========================================
echo   Checking for Untranslated Strings
echo ========================================
echo.
node scripts\find-untranslated.js
echo.
pause
```

#### Добавление npm scripts

В **package.json** добавьте:

```json
{
  "scripts": {
    "i18n:check": "node scripts/find-untranslated.js",
    "update:upstream": "powershell -ExecutionPolicy Bypass -File scripts/update-from-upstream.ps1"
  },
  "devDependencies": {
    "chalk": "^4.1.2"
  }
}
```

#### Использование

```powershell
# Проверка непереведенных строк
npm run i18n:check

# ИЛИ через batch файл
.\scripts\quick-check.bat

# Обновление из upstream
npm run update:upstream

# ИЛИ
.\update-upstream.bat
```

---

### Настройка Git Hooks для Windows

Автоматическая проверка переводов после каждого merge:

**scripts/setup-hooks.js**:

```javascript
const fs = require('fs');
const path = require('path');

const hookContent = `#!/bin/sh
# Auto-generated git hook
node scripts/check-translations-hook.js
`;

const hooksPath = path.join('.git', 'hooks');
const postMergeHook = path.join(hooksPath, 'post-merge');

if (!fs.existsSync(hooksPath)) {
  fs.mkdirSync(hooksPath, { recursive: true });
}

fs.writeFileSync(postMergeHook, hookContent, { mode: 0o755 });
console.log('✓ Git hook installed');
```

**scripts/check-translations-hook.js**:

```javascript
console.log('🔍 Checking for untranslated strings...');

const { execSync } = require('child_process');

try {
  execSync('node scripts/find-untranslated.js', { stdio: 'inherit' });
} catch (error) {
  console.log('⚠️  Found potential untranslated strings');
  console.log('Run: npm run i18n:check for details');
  // Не прерываем merge, только предупреждаем
}
```

Установка hooks:

```powershell
node scripts/setup-hooks.js
```

Или добавьте в package.json:

```json
{
  "scripts": {
    "i18n:setup-hooks": "node scripts/setup-hooks.js",
    "postinstall": "npm run i18n:setup-hooks"
  }
}
```

---

### VSCode интеграция для Windows

**.vscode/tasks.json**:

```json
{
  "version": "2.0.0",
  "tasks": [
    {
      "label": "Check Untranslated Strings",
      "type": "shell",
      "command": "npm run i18n:check",
      "group": "test",
      "presentation": {
        "reveal": "always",
        "panel": "new"
      },
      "problemMatcher": []
    },
    {
      "label": "Update from Upstream",
      "type": "shell",
      "command": "npm run update:upstream",
      "group": "build",
      "problemMatcher": []
    },
    {
      "label": "Quick Check Translations",
      "type": "shell",
      "command": ".\\scripts\\quick-check.bat",
      "group": "test",
      "problemMatcher": []
    }
  ]
}
```

Теперь можно запускать через: **Terminal** → **Run Task** → выбрать задачу.

---

### Типичные проблемы на Windows

#### Проблема 1: "Execution of scripts is disabled"

```powershell
# Временное разрешение для текущей сессии
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass

# Или постоянное (требует прав администратора)
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

#### Проблема 2: Git hooks не срабатывают

```powershell
# Проверьте, что hooks файл создан
dir .git\hooks\post-merge

# Если нет, установите заново
node scripts/setup-hooks.js
```

#### Проблема 3: Node.js скрипты не запускаются

```powershell
# Убедитесь, что Node.js в PATH
node --version

# Если команда не найдена, добавьте Node.js в PATH
# или используйте полный путь к node.exe
```

---

## 🔍 Проверка после обновления

### Контрольный список

- [ ] Frontend собирается без ошибок
- [ ] Все страницы открываются
- [ ] Переключение языка работает
- [ ] ApiStatsView работает корректно
- [ ] UserLoginView работает
- [ ] UserDashboardView работает
- [ ] Нет консольных ошибок
- [ ] Темная/светлая темы работают
- [ ] Element Plus локализация работает

### Тестирование

```bash
# Запустите dev сервер
cd web/admin-spa
npm run dev

# Откройте http://localhost:5173/admin-next/api-stats
# Проверьте:
# 1. Переключение EN/RU
# 2. Все тексты переведены
# 3. Нет ошибок в консоли
```

---

## 🆘 Устранение проблем

### Проблема 1: "Cannot merge - conflicts"

```bash
# Отмените merge
git merge --abort

# Попробуйте rebase вместо merge
git rebase upstream/main

# Разрешите конфликты
# После каждого разрешения:
git add <resolved-file>
git rebase --continue

# Если хотите отменить rebase:
git rebase --abort
```

### Проблема 2: "Build failed after merge"

```bash
# Очистите кэши
cd web/admin-spa
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
npm run build
```

### Проблема 3: "Missing translations after merge"

Если в upstream добавились новые компоненты или тексты:

```bash
# 1. Найдите новые компоненты
git diff upstream/main..HEAD -- web/admin-spa/src/components/

# 2. Найдите hardcoded текст
grep -r "hardcoded text" web/admin-spa/src/components/

# 3. Добавьте переводы в локали
# Отредактируйте src/locales/en/*.js и src/locales/ru/*.js

# 4. Обновите компоненты с $t()
```

### Проблема 4: "Нужно откатиться к предыдущей версии"

```bash
# Если создавали backup ветку:
git reset --hard backup-before-update-20240101-120000

# Или если создавали тег:
git reset --hard backup-20240101-120000

# Принудительный push (ОСТОРОЖНО!)
git push origin main-i18n --force
```

---

## 📝 Документирование изменений

После каждого обновления обновите `LOCALIZATION_CHANGES.md`:

```bash
# Найдите изменённые файлы
git diff HEAD~1..HEAD --name-only > changed_files.txt

# Добавьте в LOCALIZATION_CHANGES.md
echo "## Update $(date +%Y-%m-%d)" >> LOCALIZATION_CHANGES.md
echo "" >> LOCALIZATION_CHANGES.md
echo "### Changed files:" >> LOCALIZATION_CHANGES.md
cat changed_files.txt >> LOCALIZATION_CHANGES.md
echo "" >> LOCALIZATION_CHANGES.md
rm changed_files.txt
```

---

## 🔄 Альтернативная стратегия: Cherry-pick

Если в upstream много изменений, но вам нужна только часть:

```bash
# Получите список коммитов из upstream
git log upstream/main..HEAD --oneline

# Выберите нужные коммиты
git cherry-pick <commit-hash>

# Или диапазон коммитов
git cherry-pick <start-hash>..<end-hash>
```

---

## 🤖 Автоматизация с GitHub Actions

Создайте `.github/workflows/upstream-sync.yml`:

```yaml
name: Sync with Upstream

on:
  schedule:
    # Проверка раз в день
    - cron: '0 0 * * *'
  workflow_dispatch:  # Ручной запуск

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          ref: main-i18n
          fetch-depth: 0

      - name: Setup Git
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"

      - name: Add upstream
        run: |
          git remote add upstream https://github.com/Wei-Shaw/claude-relay-service.git

      - name: Fetch upstream
        run: git fetch upstream

      - name: Check for updates
        id: check
        run: |
          BEHIND=$(git rev-list --count HEAD..upstream/main)
          echo "commits_behind=$BEHIND" >> $GITHUB_OUTPUT

      - name: Create PR if updates available
        if: steps.check.outputs.commits_behind > 0
        run: |
          git checkout -b auto-upstream-sync-$(date +%Y%m%d)
          git merge upstream/main --no-edit || echo "Conflicts detected"
          git push origin auto-upstream-sync-$(date +%Y%m%d)

          # Создайте PR используя GitHub CLI
          gh pr create \
            --title "Sync with upstream $(date +%Y-%m-%d)" \
            --body "Automated sync with upstream repository. Please review and resolve any conflicts." \
            --base main-i18n \
            --head auto-upstream-sync-$(date +%Y%m%d)
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

---

## 📊 Статистика обновлений

Ведите лог обновлений в `UPDATE_LOG.md`:

```markdown
# Лог обновлений

## 2024-01-15
- **Upstream commits**: 12 коммитов
- **Conflicts**: 2 файла (package.json, main.js)
- **Time spent**: 15 минут
- **Status**: ✅ Успешно

## 2024-01-01
- **Upstream commits**: 5 коммитов
- **Conflicts**: Нет
- **Time spent**: 5 минут
- **Status**: ✅ Успешно
```

---

## ✅ Best Practices

1. **Регулярность** - обновляйтесь хотя бы раз в 1-2 недели
2. **Резервные копии** - всегда создавайте backup перед обновлением
3. **Тестирование** - тщательно тестируйте после каждого обновления
4. **Документация** - документируйте все изменения и проблемы
5. **Коммуникация** - следите за upstream issues и changelog
6. **Автоматизация** - используйте скрипты для рутинных операций

---

## 🎓 Дополнительные ресурсы

- [Git Merge vs Rebase](https://www.atlassian.com/git/tutorials/merging-vs-rebasing)
- [Resolving Merge Conflicts](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts)
- [Git Cherry-Pick](https://git-scm.com/docs/git-cherry-pick)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

---

## 📞 Получение помощи

Если возникли проблемы:

1. Проверьте `LOCALIZATION_CHANGES.md` - список изменённых файлов
2. Проверьте `UPDATE_LOG.md` - история предыдущих обновлений
3. Создайте issue в вашем репозитории
4. Опишите проблему с примерами конфликтов
