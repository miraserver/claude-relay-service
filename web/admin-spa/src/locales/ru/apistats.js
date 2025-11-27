export default {
  // Заголовки
  title: 'Статистика API ключа',
  subtitle: 'Статистика использования API ключа',

  // Header
  header: {
    subtitle: 'Статистика использования API ключа',
    tutorialSubtitle: 'Руководство',
    userLogin: 'Вход пользователя',
    adminPortal: 'Админ панель'
  },

  // Табы
  tabs: {
    stats: 'Запрос статистики',
    tutorial: 'Руководство'
  },

  // Кнопки
  buttons: {
    adminPanel: 'Админ панель',
    userLogin: 'Вход пользователя',
    query: 'Запросить',
    clear: 'Очистить'
  },

  // Period Selector
  periodSelector: {
    title: 'Временной диапазон статистики',
    daily: 'Сегодня',
    monthly: 'Этот месяц'
  },

  // Периоды
  periods: {
    label: 'Период статистики',
    daily: 'Сегодня',
    monthly: 'Этот месяц'
  },

  // Ввод API ключа
  input: {
    title: 'Запрос статистики использования',
    subtitle: 'Запросите статистику использования вашего API ключа',
    label: 'API Ключ',
    labelSingle: 'Введите ваш API ключ',
    labelMulti: 'Введите ваши API ключи (по одному на строку или через запятую)',
    placeholder: 'Введите API ключ для просмотра статистики',
    placeholderSingle: 'Введите ваш API ключ (cr_...)',
    placeholderMulti:
      'Введите ваши API ключи, поддерживаемые форматы:\ncr_xxx\ncr_yyy\nили\ncr_xxx, cr_yyy',
    queryButton: 'Запросить статистику',
    querying: 'Запрос...',
    clearInput: 'Очистить ввод',
    modeSingle: 'Одиночный режим',
    modeSingleShort: 'Одиночный',
    modeMulti: 'Режим агрегации',
    modeMultiShort: 'Агрегация',
    securityNoticeSingle:
      'Ваш API ключ используется только для запроса вашей статистики и не будет сохранен или использован для других целей',
    securityNoticeMulti:
      'Ваши API ключи используются только для запроса статистики и не будут сохранены. В режиме агрегации некоторая индивидуальная информация не будет отображаться.',
    multiKeyHint:
      'Подсказка: Одновременно можно запросить до 30 API ключей. Используйте Ctrl+Enter для быстрого запроса.',
    multiKeyMode: 'Режим нескольких ключей (разделяйте запятыми или новыми строками)',
    singleKey: 'Один ключ',
    multipleKeys: 'Несколько ключей ({count})'
  },

  // Статистика
  stats: {
    requests: 'Всего запросов',
    inputTokens: 'Входящие токены',
    outputTokens: 'Исходящие токены',
    totalCost: 'Общая стоимость',
    cacheTokens: 'Токены кэша',
    cacheCreation: 'Создание кэша',
    cacheRead: 'Чтение кэша',
    avgCost: 'Средняя стоимость',
    apiKeyName: 'Название API ключа'
  },

  // Overview section
  overview: {
    batchSummary: 'Сводка по пакетному запросу',
    apiKeyInfo: 'Информация об API ключе',
    queryKeysCount: 'Запрошено ключей',
    validKeysCount: 'Действительных ключей',
    invalidKeysCount: 'Недействительных ключей',
    totalRequests: 'Всего запросов',
    totalTokens: 'Всего токенов',
    totalCost: 'Общая стоимость',
    top3Contributors: 'Топ 3 вкладчика',
    name: 'Название',
    status: 'Статус',
    active: 'Активен',
    inactive: 'Остановлен',
    permissions: 'Права',
    createdAt: 'Создан',
    expiresAt: 'Истекает',
    notActivated: 'Не активирован',
    afterFirstUse: 'после первого использования',
    neverExpires: 'Никогда не истекает',
    expired: 'Истек',
    today: 'Сегодня',
    thisMonth: 'Этот месяц',
    totalInputTokens: 'Входящие токены',
    totalOutputTokens: 'Исходящие токены',
    allTokens: 'Все токены',
    averageCost: 'Средняя стоимость',
    // Usage statistics
    usageOverview: 'Обзор статистики использования',
    requestsCount: 'Запросов',
    tokensCount: 'Токенов',
    costAmount: 'Стоимость',
    inputTokensCount: 'Входящих токенов'
  },

  // Account status
  accountStatus: {
    title: 'Статус привязанных аккаунтов',
    realTimeUpdate: 'В реальном времени',
    sessionWindow: 'Сессионное окно',
    quotaWindow: 'Окно квоты',
    remaining: 'Осталось',
    resetRemaining: 'Сброс через',
    noQuotaData: 'Нет данных о квоте',
    primaryWindow: 'Основное',
    secondaryWindow: 'Вторичное'
  },

  // Распределение токенов
  distribution: {
    title: 'Распределение использования токенов',
    inputTokens: 'Входящие токены',
    outputTokens: 'Исходящие токены',
    cacheCreate: 'Токены создания кэша',
    cacheRead: 'Токены чтения кэша',
    total: 'Всего'
  },

  // Лимиты
  limits: {
    title: 'Конфигурация лимитов',
    titleAggregate: 'Конфигурация лимитов (Режим агрегации)',
    none: 'Лимиты не установлены',
    rateLimit: 'Ограничение частоты',
    concurrent: 'Одновременные запросы',
    concurrentLimit: 'Ограничение параллелизма',
    models: 'Разрешенные модели',
    modelLimit: 'Ограничение моделей',
    clients: 'Разрешенные клиенты',
    clientLimit: 'Ограничение клиентов',
    // Aggregate stats
    apiKeysOverview: 'Обзор API ключей',
    totalKeys: 'Всего ключей',
    activeKeys: 'Активных ключей',
    aggregateSummary: 'Сводка агрегированной статистики',
    totalRequests: 'Всего запросов',
    totalTokens: 'Всего токенов',
    totalCost: 'Общая стоимость',
    invalidKeys: '{count} недействительных API ключей',
    aggregateNote:
      'Каждый API ключ имеет независимые настройки лимитов, в режиме агрегации не отображаются индивидуальные лимиты',
    // Cost limits
    dailyCostLimit: 'Дневной лимит расходов',
    totalCostLimit: 'Общий лимит расходов',
    opusWeeklyCostLimit: 'Недельный лимит расходов для модели Opus',
    windowLimit: 'Временное окно ограничений',
    // Limit notes
    limitNoteOr:
      'Лимиты по количеству запросов и стоимости работают по принципу "ИЛИ", ограничение срабатывает при достижении любого из них',
    limitNoteToken:
      'Лимиты по количеству запросов и использованию токенов работают по принципу "ИЛИ", ограничение срабатывает при достижении любого из них',
    limitNoteRequest: 'Ограничено только количество запросов',
    // Restrictions
    restrictedModels: 'Ограничено: {count} моделей',
    allowAllModels: 'Разрешены все модели',
    restrictedClients: 'Ограничено: {count} типов клиентов',
    allowAllClients: 'Разрешены все клиенты',
    detailedRestrictions: 'Подробная информация об ограничениях',
    restrictedModelsList: 'Список ограниченных моделей',
    restrictionNote: 'Этот API ключ не может получить доступ к перечисленным выше моделям'
  },

  // Использование моделей
  models: {
    title: 'Статистика использования моделей',
    model: 'Модель',
    requests: 'Запросы',
    requestsCount: '{count} запросов',
    tokens: 'Токены',
    cost: 'Стоимость',
    totalCost: 'Общая стоимость',
    loading: 'Загрузка статистики моделей...',
    noData: 'Нет данных об использовании моделей'
  },

  // Агрегированная доля использования
  aggregated: {
    title: 'Доля использования',
    keyLabel: 'Ключ {index}',
    requests: 'запросов',
    otherKeys: 'Остальные {count} ключей',
    multiKeyOnly: 'Доля использования отображается только в режиме множественных ключей'
  },

  // Форматирование дат
  date: {
    noData: 'Нет данных',
    formatError: 'Ошибка формата'
  },

  // Разрешения
  permissions: {
    all: 'Все модели',
    unknown: 'Неизвестно'
  },

  // Метки аккаунтов
  accounts: {
    dedicatedAccount: 'Выделенный аккаунт',
    openaiDedicated: 'OpenAI выделенный',
    claudeDedicated: 'Claude выделенный'
  },

  // Единицы времени
  time: {
    days: 'день | дня | дней',
    hours: 'час | часа | часов',
    minutes: 'минута | минуты | минут',
    seconds: 'секунда | секунды | секунд',
    remaining: 'осталось примерно'
  },

  // Статус
  status: {
    unknown: 'Статус неизвестен',
    rateLimited: 'Ограничение активно',
    notRateLimited: 'Без ограничений',
    noWindowInfo: 'Нет информации об окне',
    weeklyLimit: 'Недельный',
    hourlyLimit: '5ч'
  },

  // Ошибки
  errors: {
    invalidKey: 'Неверный API ключ',
    fetchFailed: 'Не удалось получить статистику',
    networkError: 'Произошла ошибка сети',
    noKey: 'Пожалуйста, введите API ключ',
    queryFailed: 'Запрос не выполнен',
    getKeyIdFailed: 'Не удалось получить ID API ключа',
    queryStatsFailedCheck:
      'Не удалось получить статистику, проверьте правильность вашего API ключа',
    requestFailed: 'Запрос не выполнен'
  }
}
