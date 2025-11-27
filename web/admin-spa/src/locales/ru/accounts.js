export default {
  // Заголовок страницы
  header: {
    title: 'Управление аккаунтами',
    subtitle: 'Управление аккаунтами Claude, Gemini, OpenAI и настройка прокси'
  },

  // Фильтры и элементы управления
  filters: {
    sortBy: 'Сортировка',
    platform: 'Платформа',
    group: 'Группа',
    searchPlaceholder: 'Поиск по названию аккаунта...',
    clearSearch: 'Очистить поиск'
  },

  // Опции сортировки
  sortOptions: {
    nameAsc: 'По имени (А-Я)',
    nameDesc: 'По имени (Я-А)',
    createdDesc: 'Сначала новые',
    createdAsc: 'Сначала старые',
    usageDesc: 'Наиболее используемые',
    usageAsc: 'Наименее используемые'
  },

  // Опции платформ
  platforms: {
    all: 'Все платформы',
    claude: 'Claude',
    claudeConsole: 'Claude Console',
    gemini: 'Gemini',
    bedrock: 'AWS Bedrock',
    openai: 'OpenAI',
    azureOpenai: 'Azure OpenAI',
    openaiResponses: 'OpenAI Responses',
    droid: 'Droid',
    ccr: 'CCR'
  },

  // Действия
  actions: {
    refresh: 'Обновить',
    refreshing: 'Обновление',
    refreshTooltip: 'Обновить данные (Ctrl/⌘+Клик для принудительного обновления кэша)',
    addAccount: 'Добавить аккаунт',
    edit: 'Редактировать',
    delete: 'Удалить',
    testConnection: 'Тест соединения',
    viewDetails: 'Подробнее',
    export: 'Экспорт',
    import: 'Импорт',
    batchDelete: 'Массовое удаление',
    cancel: 'Отмена',
    confirm: 'Подтвердить',
    save: 'Сохранить',
    close: 'Закрыть',
    reset: 'Сбросить'
  },

  // Статус аккаунта
  status: {
    active: 'Активен',
    inactive: 'Неактивен',
    normal: 'Нормально',
    error: 'Ошибка',
    rateLimited: 'Ограничен',
    overload: 'Перегружен',
    paused: 'Приостановлен',
    expired: 'Истек'
  },

  // Таблица аккаунтов
  table: {
    name: 'Название',
    platform: 'Платформа',
    status: 'Статус',
    group: 'Группа',
    proxy: 'Прокси',
    usage: 'Использование',
    created: 'Создан',
    updated: 'Обновлен',
    actions: 'Действия',
    noData: 'Аккаунты не найдены',
    loading: 'Загрузка аккаунтов...',
    total: 'Всего аккаунтов: {count}',
    selected: 'Выбрано: {count}',
    expiry: 'Истекает',
    priority: 'Приоритет',
    todayUsage: 'Сегодня',
    sessionWindow: 'Окно сессии',
    lastUsed: 'Последнее использование'
  },

  // Форма аккаунта
  form: {
    basicInfo: 'Основная информация',
    accountName: 'Имя аккаунта',
    accountNamePlaceholder: 'Введите имя аккаунта',
    platform: 'Платформа',
    selectPlatform: 'Выберите платформу',
    group: 'Группа',
    selectGroup: 'Выберите группу',
    description: 'Описание',
    descriptionPlaceholder: 'Введите описание (необязательно)',

    // Учетные данные
    credentials: 'Учетные данные',
    apiKey: 'API ключ',
    apiKeyPlaceholder: 'Введите API ключ',
    refreshToken: 'Refresh Token',
    refreshTokenPlaceholder: 'Введите refresh token',
    accessToken: 'Access Token',
    accessTokenPlaceholder: 'Введите access token',

    // Настройка прокси
    proxyConfig: 'Настройка прокси',
    enableProxy: 'Включить прокси',
    proxyType: 'Тип прокси',
    proxyHost: 'Хост прокси',
    proxyPort: 'Порт прокси',
    proxyUsername: 'Имя пользователя (необязательно)',
    proxyPassword: 'Пароль (необязательно)',

    // Расширенные настройки
    advancedSettings: 'Расширенные настройки',
    maxConcurrency: 'Макс. параллелизм',
    rateLimit: 'Лимит скорости',
    timeout: 'Таймаут',
    retryCount: 'Кол-во повторов',

    // Сообщения валидации
    validation: {
      nameRequired: 'Имя аккаунта обязательно',
      platformRequired: 'Платформа обязательна',
      apiKeyRequired: 'API ключ обязателен',
      refreshTokenRequired: 'Refresh token обязателен',
      proxyHostRequired: 'Хост прокси обязателен',
      proxyPortRequired: 'Порт прокси обязателен',
      invalidPort: 'Неверный номер порта',
      invalidUrl: 'Неверный формат URL'
    }
  },

  // Сообщения
  messages: {
    addSuccess: 'Аккаунт успешно добавлен',
    updateSuccess: 'Аккаунт успешно обновлен',
    deleteSuccess: 'Аккаунт успешно удален',
    deleteConfirm: 'Вы уверены, что хотите удалить этот аккаунт?',
    batchDeleteConfirm: 'Вы уверены, что хотите удалить {count} аккаунтов?',
    testSuccess: 'Тест соединения успешен',
    testFailed: 'Тест соединения не удался',
    exportSuccess: 'Экспорт выполнен успешно',
    importSuccess: 'Импорт выполнен успешно',
    operationFailed: 'Операция не удалась',
    loading: 'Загрузка...',
    noSelection: 'Пожалуйста, выберите хотя бы один аккаунт'
  },

  // Статистика
  stats: {
    totalAccounts: 'Всего аккаунтов',
    activeAccounts: 'Активных',
    normalAccounts: 'Нормальных',
    errorAccounts: 'С ошибкой',
    totalRequests: 'Всего запросов',
    totalTokens: 'Всего токенов'
  }
}
