# План локализации Claude Relay Service

## 📋 Анализ проекта

### Технологический стек
- **Frontend**: Vue 3 + Vite
- **UI библиотека**: Element Plus (текущая локаль: zh-cn)
- **State Management**: Pinia
- **Роутинг**: Vue Router
- **Текущая локализация**: Отсутствует (hardcoded текст в компонентах)

### Структура проекта
```
web/admin-spa/
├── src/
│   ├── views/              # Страницы
│   ├── components/         # Компоненты
│   ├── stores/             # Pinia stores
│   ├── router/             # Маршруты
│   └── locales/            # 🆕 Будут созданы языковые файлы
```

---

## 🎯 Компоненты для локализации

### ✅ Пользовательская часть (ЛОКАЛИЗУЕМ)

#### 1. Страницы (Views)
- **`ApiStatsView.vue`** - Главная страница статистики по API ключу
  - Заголовки, табы, кнопки
  - Сообщения об ошибках
  - Селекторы периодов (сегодня/месяц)

- **`UserLoginView.vue`** - Страница входа пользователя
  - Заголовки формы
  - Поля ввода (username, password)
  - Кнопки и ссылки
  - Сообщения об ошибках

- **`UserDashboardView.vue`** - Личный кабинет пользователя
  - Навигация (Overview, API Keys, Usage Stats, Tutorial)
  - Статистические карточки
  - Информация об аккаунте
  - Приветствия и заголовки

#### 2. Компоненты статистики (components/apistats/)
- **`ApiKeyInput.vue`** - Поле ввода API ключа
- **`StatsOverview.vue`** - Обзор статистики
- **`TokenDistribution.vue`** - Распределение токенов
- **`LimitConfig.vue`** - Конфигурация лимитов
- **`AggregatedStatsCard.vue`** - Агрегированная статистика
- **`ModelUsageStats.vue`** - Статистика использования моделей

#### 3. Пользовательские компоненты (components/user/)
- **`CreateApiKeyModal.vue`** - Модальное окно создания ключа
- **`UserApiKeysManager.vue`** - Управление API ключами
- **`UserUsageStats.vue`** - Статистика использования
- **`ViewApiKeyModal.vue`** - Просмотр API ключа

#### 4. Общие компоненты (components/common/)
- **`LogoTitle.vue`** - Логотип и заголовок
- **`ThemeToggle.vue`** - Переключатель темы
- **`ToastNotification.vue`** - Уведомления

#### 5. Stores (stores/)
- **`apistats.js`** - Store статистики (сообщения об ошибках)
- **`user.js`** - Store пользователя (сообщения об ошибках)

### ❌ Административная часть (НЕ ЛОКАЛИЗУЕМ)
- LoginView.vue
- DashboardView.vue
- ApiKeysView.vue
- AccountsView.vue
- TutorialView.vue (используется в обеих частях, но переводим только в пользовательском контексте)
- SettingsView.vue
- UserManagementView.vue
- Все компоненты в `components/accounts/`, `components/admin/`, `components/apikeys/`

---

## 🏗️ Архитектура i18n для легкого обновления

### Выбор библиотеки
**Vue I18n v9** - официальная библиотека для Vue 3

### Принципы архитектуры

#### 1. **Модульная структура переводов**
Разделение переводов по модулям для упрощения обслуживания:

```
src/locales/
├── en/
│   ├── index.js           # Главный файл экспорта
│   ├── common.js          # Общие переводы
│   ├── apistats.js        # Статистика API
│   ├── user.js            # Пользовательские переводы
│   ├── auth.js            # Аутентификация
│   └── errors.js          # Сообщения об ошибках
├── ru/
│   ├── index.js
│   ├── common.js
│   ├── apistats.js
│   ├── user.js
│   ├── auth.js
│   └── errors.js
└── index.js               # Конфигурация i18n
```

#### 2. **Изоляция локализованных компонентов**
- Создаем обёртки только для пользовательских компонентов
- Административные компоненты остаются без изменений
- Используем условную загрузку локалей

#### 3. **Стратегия ключей**
Иерархическая структура ключей для легкого поиска:

```javascript
{
  // Общие переводы
  common: {
    buttons: {
      login: 'Sign In',
      logout: 'Logout',
      save: 'Save',
      cancel: 'Cancel'
    },
    labels: {
      username: 'Username',
      password: 'Password'
    }
  },

  // Страница статистики
  apistats: {
    title: 'API Key Statistics',
    subtitle: 'Enter your API key to view usage statistics',
    tabs: {
      stats: 'Statistics',
      tutorial: 'Tutorial'
    },
    periods: {
      daily: 'Today',
      monthly: 'This Month'
    }
  },

  // Пользовательский кабинет
  user: {
    dashboard: {
      welcome: 'Welcome',
      overview: 'Overview',
      apiKeys: 'API Keys',
      usage: 'Usage Stats'
    }
  },

  // Ошибки
  errors: {
    loginFailed: 'Login failed',
    invalidCredentials: 'Invalid username or password',
    networkError: 'Network error occurred'
  }
}
```

---

## 🔄 Стратегия обновления форка

### Проблема
При обновлении из upstream могут возникнуть конфликты в локализованных файлах.

### Решение: Git стратегия

#### 1. **Использование отдельной ветки для локализации**

```bash
# Основная ветка с локализацией
main-i18n

# Ветка для синхронизации с upstream
upstream-sync
```

#### 2. **Процесс обновления**

```bash
# Шаг 1: Добавить upstream remote (один раз)
git remote add upstream https://github.com/Wei-Shaw/claude-relay-service.git

# Шаг 2: Получить изменения из upstream
git fetch upstream

# Шаг 3: Создать временную ветку для merge
git checkout -b update-from-upstream main-i18n

# Шаг 4: Смержить изменения из upstream
git merge upstream/main

# Шаг 5: Разрешить конфликты (если есть)
# Обычно конфликты будут только в:
# - web/admin-spa/src/main.js (добавление i18n)
# - Локализованных компонентах (template секции)
# - package.json (добавление vue-i18n)

# Шаг 6: После разрешения конфликтов
git add .
git commit -m "Merge upstream changes with i18n"

# Шаг 7: Merge обратно в main-i18n
git checkout main-i18n
git merge update-from-upstream

# Шаг 8: Удалить временную ветку
git branch -d update-from-upstream
```

#### 3. **Минимизация конфликтов**

**Правило 1: Минимальные изменения в оригинальных файлах**
- Не изменяем структуру компонентов
- Не рефакторим существующий код
- Только заменяем текстовые строки на `$t()` вызовы

**Правило 2: Изолированные файлы локализации**
- Все переводы в отдельной директории `src/locales/`
- Эти файлы никогда не будут конфликтовать с upstream

**Правило 3: Документирование изменений**
Создаём файл `LOCALIZATION_CHANGES.md` со списком всех изменённых файлов:

```markdown
# Файлы, изменённые для локализации

## Новые файлы (не конфликтуют)
- src/locales/**
- src/composables/useI18n.js

## Изменённые файлы (возможны конфликты)
### Критические
- web/admin-spa/src/main.js (добавлен vue-i18n)
- web/admin-spa/package.json (добавлена зависимость)

### Пользовательские компоненты
- src/views/ApiStatsView.vue (строки 9, 31, 57, 64, 95, 107...)
- src/views/UserLoginView.vue (строки 29, 32, 43, 65...)
- src/views/UserDashboardView.vue (строки 35, 46, 57...)
[список всех изменённых строк]
```

#### 4. **Автоматизация обновления**

Создаём скрипт `scripts/update-from-upstream.sh`:

```bash
#!/bin/bash

echo "🔄 Updating from upstream..."

# 1. Fetch upstream
git fetch upstream

# 2. Check for conflicts before merge
echo "📊 Checking for potential conflicts..."
git merge --no-commit --no-ff upstream/main

if [ $? -ne 0 ]; then
    echo "⚠️  Conflicts detected. Please resolve manually."
    echo "📝 Check LOCALIZATION_CHANGES.md for list of modified files"
    git merge --abort
    exit 1
fi

# 3. If no conflicts, complete merge
git commit -m "chore: merge upstream changes"
echo "✅ Update completed successfully!"

# 4. Rebuild frontend
echo "🔨 Rebuilding frontend..."
cd web/admin-spa && npm install && npm run build
```

#### 5. **Стратегия для Element Plus**

Element Plus уже поддерживает локализацию:

```javascript
// main.js
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import ru from 'element-plus/dist/locale/ru.mjs'

// Динамически выбираем локаль Element Plus
const getElementLocale = (locale) => {
  const locales = { en, ru, 'zh-cn': zhCn }
  return locales[locale] || en
}

app.use(ElementPlus, {
  locale: getElementLocale(i18n.global.locale.value)
})
```

---

## 📝 Детальный план реализации

### Этап 1: Подготовка инфраструктуры (2-3 часа)

1. **Установка зависимостей**
   ```bash
   cd web/admin-spa
   npm install vue-i18n@9
   ```

2. **Создание структуры локалей**
   ```bash
   mkdir -p src/locales/en
   mkdir -p src/locales/ru
   ```

3. **Создание базовых файлов**
   - `src/locales/index.js` - конфигурация i18n
   - `src/locales/en/index.js` - английские переводы
   - `src/locales/ru/index.js` - русские переводы

4. **Интеграция в main.js**
   - Импорт vue-i18n
   - Настройка с текущей локалью (из localStorage)
   - Синхронизация с Element Plus локалью

### Этап 2: Создание модулей переводов (4-5 часов)

1. **Модуль common.js** - общие переводы
   - Кнопки (login, logout, save, cancel, etc.)
   - Лейблы (username, password, email, etc.)
   - Общие термины

2. **Модуль auth.js** - аутентификация
   - Заголовки форм входа
   - Сообщения об ошибках
   - Плейсхолдеры

3. **Модуль apistats.js** - статистика API
   - Заголовки и подзаголовки
   - Табы и периоды
   - Метрики и графики
   - Лимиты и конфигурация

4. **Модуль user.js** - пользовательский кабинет
   - Навигация
   - Информация о профиле
   - Управление API ключами
   - Статистика использования

5. **Модуль errors.js** - сообщения об ошибках
   - Ошибки аутентификации
   - Ошибки API
   - Ошибки валидации
   - Сетевые ошибки

### Этап 3: Локализация компонентов (8-10 часов)

#### Приоритет 1: Критические страницы
1. **ApiStatsView.vue** (~1.5 часа)
   - Заголовки и табы
   - Кнопки выбора периода
   - Сообщения об ошибках

2. **UserLoginView.vue** (~1 час)
   - Заголовок и подзаголовок
   - Поля формы
   - Кнопки и ссылки

3. **UserDashboardView.vue** (~2 часа)
   - Навигационные табы
   - Карточки статистики
   - Информация профиля

#### Приоритет 2: Компоненты статистики
4. **ApiKeyInput.vue** (~30 мин)
5. **StatsOverview.vue** (~1 час)
6. **TokenDistribution.vue** (~30 мин)
7. **LimitConfig.vue** (~45 мин)
8. **ModelUsageStats.vue** (~1 час)

#### Приоритет 3: Пользовательские компоненты
9. **UserApiKeysManager.vue** (~1.5 часа)
10. **UserUsageStats.vue** (~1 час)
11. **CreateApiKeyModal.vue** (~45 мин)
12. **ViewApiKeyModal.vue** (~30 мин)

#### Приоритет 4: Общие компоненты
13. **LogoTitle.vue** (~15 мин)
14. **ThemeToggle.vue** (~15 мин)
15. **ToastNotification.vue** (~30 мин)

### Этап 4: Локализация stores (2 часа)

1. **apistats store** - сообщения об ошибках
2. **user store** - сообщения об ошибках
3. Добавление i18n в утилиты (utils/toast.js)

### Этап 5: Добавление переключателя языка (1-2 часа)

1. **Создание компонента LanguageSelector.vue**
   - Dropdown с флагами
   - Сохранение выбора в localStorage
   - Переключение локали Element Plus

2. **Интеграция в пользовательские страницы**
   - ApiStatsView (рядом с ThemeToggle)
   - UserLoginView
   - UserDashboardView

### Этап 6: Тестирование (3-4 часа)

1. **Функциональное тестирование**
   - Проверка всех переводов
   - Переключение языка
   - Сохранение выбранного языка

2. **Визуальное тестирование**
   - Проверка длины текстов (русский обычно длиннее)
   - Responsive design
   - Темная/светлая темы

3. **Тестирование обновления**
   - Имитация merge из upstream
   - Проверка разрешения конфликтов
   - Проверка работоспособности после обновления

### Этап 7: Документация (2 часа)

1. **README_I18N.md** - инструкция по локализации
   - Как добавить новый язык
   - Как обновить переводы
   - Структура файлов

2. **LOCALIZATION_CHANGES.md** - список изменений
   - Все изменённые файлы
   - Номера строк
   - Причины изменений

3. **UPDATE_GUIDE.md** - гайд по обновлению форка
   - Пошаговая инструкция
   - Обработка конфликтов
   - Скрипты автоматизации

---

## 🎨 Пример реализации

### 1. Конфигурация i18n (src/locales/index.js)

```javascript
import { createI18n } from 'vue-i18n'
import en from './en'
import ru from './ru'

// Получаем сохранённую локаль или используем браузерную
const getDefaultLocale = () => {
  const saved = localStorage.getItem('user-locale')
  if (saved) return saved

  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('ru')) return 'ru'
  return 'en'
}

const i18n = createI18n({
  legacy: false, // Composition API mode
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    ru
  }
})

export default i18n
```

### 2. Модуль переводов (src/locales/en/apistats.js)

```javascript
export default {
  title: 'API Key Statistics',
  subtitle: 'API Key Usage Statistics',

  tabs: {
    stats: 'Statistics Query',
    tutorial: 'Tutorial'
  },

  buttons: {
    adminPanel: 'Admin Panel',
    userLogin: 'User Login'
  },

  periods: {
    label: 'Statistics Period',
    daily: 'Today',
    monthly: 'This Month'
  },

  errors: {
    invalidKey: 'Invalid API Key',
    fetchFailed: 'Failed to fetch statistics',
    networkError: 'Network error occurred'
  },

  stats: {
    requests: 'Total Requests',
    inputTokens: 'Input Tokens',
    outputTokens: 'Output Tokens',
    totalCost: 'Total Cost',
    cacheTokens: 'Cache Tokens'
  }
}
```

### 3. Локализованный компонент (ApiStatsView.vue)

```vue
<template>
  <div class="min-h-screen p-4 md:p-6">
    <div class="glass-strong mb-6 rounded-3xl p-4 shadow-xl">
      <div class="flex items-center justify-between">
        <LogoTitle
          :subtitle="currentTab === 'stats'
            ? $t('apistats.subtitle')
            : $t('apistats.tabs.tutorial')"
          :title="oemSettings.siteName"
        />
        <div class="flex items-center gap-4">
          <!-- Переключатель языка -->
          <LanguageSelector />

          <!-- Переключатель темы -->
          <ThemeToggle mode="dropdown" />

          <!-- Кнопки -->
          <router-link
            v-if="oemSettings.ldapEnabled"
            class="user-login-button"
            to="/user-login"
          >
            <i class="fas fa-user" />
            <span>{{ $t('apistats.buttons.userLogin') }}</span>
          </router-link>

          <router-link
            v-if="oemSettings.showAdminButton"
            class="admin-button-refined"
            to="/dashboard"
          >
            <i class="fas fa-shield-alt" />
            <span>{{ $t('apistats.buttons.adminPanel') }}</span>
          </router-link>
        </div>
      </div>
    </div>

    <!-- Табы -->
    <div class="mb-6">
      <button
        :class="['tab-pill-button', currentTab === 'stats' ? 'active' : '']"
        @click="currentTab = 'stats'"
      >
        <i class="fas fa-chart-line mr-2" />
        <span>{{ $t('apistats.tabs.stats') }}</span>
      </button>
      <button
        :class="['tab-pill-button', currentTab === 'tutorial' ? 'active' : '']"
        @click="currentTab = 'tutorial'"
      >
        <i class="fas fa-graduation-cap mr-2" />
        <span>{{ $t('apistats.tabs.tutorial') }}</span>
      </button>
    </div>

    <!-- Выбор периода -->
    <div class="period-selector">
      <span>{{ $t('apistats.periods.label') }}</span>
      <button
        :class="{ active: statsPeriod === 'daily' }"
        @click="switchPeriod('daily')"
      >
        {{ $t('apistats.periods.daily') }}
      </button>
      <button
        :class="{ active: statsPeriod === 'monthly' }"
        @click="switchPeriod('monthly')"
      >
        {{ $t('apistats.periods.monthly') }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
// остальной код без изменений...
</script>
```

### 4. Компонент выбора языка (LanguageSelector.vue)

```vue
<template>
  <div class="language-selector">
    <button
      class="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
      @click="toggleDropdown"
    >
      <span class="text-xl">{{ currentFlag }}</span>
      <span class="text-sm font-medium">{{ currentLocale.toUpperCase() }}</span>
    </button>

    <div v-if="showDropdown" class="dropdown">
      <button
        v-for="lang in languages"
        :key="lang.code"
        :class="{ active: currentLocale === lang.code }"
        @click="changeLanguage(lang.code)"
      >
        <span class="text-xl">{{ lang.flag }}</span>
        <span>{{ lang.name }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const showDropdown = ref(false)

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' }
]

const currentLocale = computed(() => locale.value)
const currentFlag = computed(() =>
  languages.find(l => l.code === currentLocale.value)?.flag || '🇬🇧'
)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const changeLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('user-locale', lang)
  showDropdown.value = false

  // Обновляем локаль Element Plus
  updateElementPlusLocale(lang)
}

const updateElementPlusLocale = (lang) => {
  // Реализация обновления Element Plus локали
}
</script>
```

---

## 📊 Оценка времени

| Этап | Время | Приоритет |
|------|-------|-----------|
| 1. Подготовка инфраструктуры | 2-3 часа | Высокий |
| 2. Создание модулей переводов | 4-5 часов | Высокий |
| 3. Локализация компонентов | 8-10 часов | Высокий |
| 4. Локализация stores | 2 часа | Средний |
| 5. Переключатель языка | 1-2 часа | Высокий |
| 6. Тестирование | 3-4 часа | Высокий |
| 7. Документация | 2 часа | Средний |
| **ИТОГО** | **22-28 часов** | |

---

## ✅ Критерии успеха

1. ✅ Все пользовательские компоненты локализованы
2. ✅ Административная часть не затронута
3. ✅ Переключение языка работает без перезагрузки
4. ✅ Выбранный язык сохраняется
5. ✅ Element Plus использует правильную локаль
6. ✅ Нет хардкода текста в пользовательских компонентах
7. ✅ Merge из upstream проходит с минимальными конфликтами
8. ✅ Документация полная и понятная

---

## 🪟 Инструменты для Windows

Так как проект разрабатывается на Windows, все инструменты адаптированы для этой ОС.

### Node.js скрипт поиска непереведенных строк

**scripts/find-untranslated.js** - Кроссплатформенный инструмент для поиска hardcoded текста:

```javascript
const fs = require('fs');
const path = require('path');
const chalk = require('chalk'); // npm install chalk@4

const USER_COMPONENTS_PATHS = [
  'web/admin-spa/src/views/ApiStatsView.vue',
  'web/admin-spa/src/views/UserLoginView.vue',
  'web/admin-spa/src/views/UserDashboardView.vue',
  'web/admin-spa/src/components/apistats',
  'web/admin-spa/src/components/user',
  'web/admin-spa/src/components/common/LogoTitle.vue',
  'web/admin-spa/src/components/common/ThemeToggle.vue',
  'web/admin-spa/src/components/common/ToastNotification.vue',
];

// Паттерны для поиска hardcoded текста
const HARDCODED_PATTERNS = [
  {
    regex: />([A-Z][a-zA-Z\s,'".!?:]+)</g,
    name: 'Text between tags'
  },
  {
    regex: /(title|placeholder|label|alt)="([A-Z][^"]+)"/g,
    name: 'Attributes'
  },
];

// Что НЕ считать hardcoded
const EXCLUSIONS = [
  /\$t\(/,              // Уже переведено
  /{{.*}}/,             // Vue interpolation
  /v-\w+=/,             // Vue директивы
  /<i\s+class=/,        // Иконки FontAwesome
  /class="[^"]*"/,      // CSS классы
  /API|HTTP|URL|JSON/i, // Технические термины
  /^\s*$/,              // Пустые строки
  /<!--.*-->/,          // Комментарии
  /\d{4}-\d{2}/,        // Даты
];

function findVueFiles(dir) {
  let results = [];

  if (!fs.existsSync(dir)) return results;

  const stat = fs.statSync(dir);

  if (stat.isFile() && dir.endsWith('.vue')) {
    return [dir];
  }

  if (stat.isDirectory()) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      results = results.concat(findVueFiles(filePath));
    });
  }

  return results;
}

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  const issues = [];

  lines.forEach((line, index) => {
    // Пропускаем <script> секцию
    if (line.includes('<script') || line.includes('</script>')) return;

    HARDCODED_PATTERNS.forEach(pattern => {
      let match;
      const regex = new RegExp(pattern.regex);

      while ((match = regex.exec(line)) !== null) {
        const text = match[1] || match[2];

        // Проверяем исключения
        const isExcluded = EXCLUSIONS.some(exc => exc.test(text) || exc.test(line));

        if (!isExcluded && text.length > 1) {
          issues.push({
            line: index + 1,
            text: text.trim(),
            context: line.trim(),
            type: pattern.name
          });
        }
      }
    });
  });

  return issues;
}

function main() {
  console.log(chalk.blue('🔍 Searching for untranslated strings in user components...\n'));

  let totalIssues = 0;
  let filesChecked = 0;

  USER_COMPONENTS_PATHS.forEach(componentPath => {
    const fullPath = path.resolve(componentPath);
    const files = findVueFiles(fullPath);

    files.forEach(file => {
      filesChecked++;
      const issues = checkFile(file);

      if (issues.length > 0) {
        const relativePath = path.relative(process.cwd(), file);
        console.log(chalk.yellow(`\n📄 ${relativePath}`));

        issues.forEach(issue => {
          console.log(chalk.red(`  Line ${issue.line}: `) +
                     chalk.white(`"${issue.text}"`));
          console.log(chalk.gray(`    ${issue.context.substring(0, 80)}...`));
        });

        totalIssues += issues.length;
      }
    });
  });

  console.log('\n' + chalk.blue('─'.repeat(60)));
  console.log(chalk.blue(`📊 Summary:`));
  console.log(chalk.white(`  Files checked: ${filesChecked}`));

  if (totalIssues > 0) {
    console.log(chalk.red(`  ⚠️  Potential untranslated strings: ${totalIssues}`));
    console.log(chalk.yellow('\n💡 Tip: Review each string and add translations if needed.'));
    process.exit(1);
  } else {
    console.log(chalk.green(`  ✅ No untranslated strings found!`));
    process.exit(0);
  }
}

main();
```

### PowerShell скрипт обновления из upstream

**scripts/update-from-upstream.ps1** - Автоматизированный процесс обновления:

```powershell
$ErrorActionPreference = "Stop"

Write-Host "🔄 Starting update from upstream..." -ForegroundColor Blue

# Проверка текущей ветки
$currentBranch = git branch --show-current
if ($currentBranch -ne "main-i18n") {
    Write-Host "❌ Error: You must be on main-i18n branch" -ForegroundColor Red
    exit 1
}

# Fetch upstream
Write-Host "📡 Fetching updates from upstream..." -ForegroundColor Cyan
git fetch upstream
Write-Host "✓ Upstream fetched" -ForegroundColor Green

# Создание резервной ветки
$backupBranch = "backup-before-update-$(Get-Date -Format 'yyyyMMdd-HHmmss')"
Write-Host "💾 Creating backup branch: $backupBranch" -ForegroundColor Cyan
git branch $backupBranch

# Попытка merge
Write-Host "🔀 Attempting to merge upstream/main..." -ForegroundColor Cyan
try {
    git merge upstream/main --no-edit
    Write-Host "✓ Merge successful!" -ForegroundColor Green

    # Обновление зависимостей
    Write-Host "📦 Updating dependencies..." -ForegroundColor Cyan
    Push-Location web\admin-spa
    npm install

    # Сборка frontend
    Write-Host "🔨 Building frontend..." -ForegroundColor Cyan
    npm run build
    Pop-Location

    # Проверка непереведенных строк
    Write-Host "🔍 Checking for untranslated strings..." -ForegroundColor Cyan
    node scripts/find-untranslated.js

    Write-Host "✅ Update completed successfully!" -ForegroundColor Green

} catch {
    Write-Host "❌ Merge conflicts detected" -ForegroundColor Red
    Write-Host "Please resolve conflicts manually" -ForegroundColor Yellow
    exit 1
}
```

### Batch файл для быстрого запуска

**update-upstream.bat**:

```batch
@echo off
echo Starting upstream update...
powershell -ExecutionPolicy Bypass -File scripts\update-from-upstream.ps1
pause
```

### Быстрая проверка переводов

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

### NPM Scripts

Добавьте в **package.json**:

```json
{
  "scripts": {
    "i18n:check": "node scripts/find-untranslated.js",
    "i18n:setup-hooks": "node scripts/setup-hooks.js",
    "update:upstream": "powershell -ExecutionPolicy Bypass -File scripts/update-from-upstream.ps1"
  },
  "devDependencies": {
    "chalk": "^4.1.2"
  }
}
```

### Git Hooks (автоматическая проверка после merge)

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
}
```

### VSCode интеграция

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
      }
    },
    {
      "label": "Update from Upstream",
      "type": "shell",
      "command": "npm run update:upstream",
      "group": "build"
    }
  ]
}
```

### Использование инструментов

```powershell
# Установка git hooks (один раз)
npm run i18n:setup-hooks

# Проверка непереведенных строк
npm run i18n:check
# ИЛИ
.\scripts\quick-check.bat

# Обновление из upstream
npm run update:upstream
# ИЛИ
.\update-upstream.bat
# ИЛИ
.\scripts\update-from-upstream.ps1
```

---

## 🚀 Следующие шаги

1. **Утверждение плана** с заказчиком
2. **Создание форка** репозитория
3. **Создание ветки** `feature/i18n-user-interface`
4. **Реализация** по этапам
5. **Тестирование** на каждом этапе
6. **Документирование** изменений
7. **Pull Request** или использование как личный форк

---

## 📞 Контакты и поддержка

При возникновении вопросов по локализации обращайтесь к документации:
- `README_I18N.md` - инструкция по локализации
- `UPDATE_GUIDE.md` - гайд по обновлению
- `LOCALIZATION_CHANGES.md` - список изменений
