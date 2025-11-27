export default {
  // Статистические карточки
  stats: {
    totalApiKeys: 'Всего API ключей',
    active: 'Активных',
    serviceAccounts: 'Сервисные аккаунты',
    normal: 'Нормальных',
    abnormal: 'Аномальных',
    pausedScheduling: 'Приостановлено',
    rateLimited: 'Ограничено',
    todayRequests: 'Запросов сегодня',
    totalRequests: 'Всего запросов',
    systemStatus: 'Состояние системы',
    uptime: 'Время работы',
    todayTokens: 'Токенов сегодня',
    input: 'Ввод',
    output: 'Вывод',
    cacheCreate: 'Создание кэша',
    cacheRead: 'Чтение кэша',
    totalTokenConsumption: 'Общее потребление токенов',
    realtimeRPM: 'RPM в реальном времени',
    requestsPerMinute: 'Запросов в минуту',
    realtimeTPM: 'TPM в реальном времени',
    tokensPerMinute: 'Токенов в минуту',
    minutes: 'минут',
    historicalData: 'Исторические данные'
  },

  // Названия платформ
  platforms: {
    claude: 'Claude',
    claudeConsole: 'Console',
    gemini: 'Gemini',
    bedrock: 'Bedrock',
    openai: 'OpenAI',
    azureOpenai: 'Azure OpenAI',
    openaiResponses: 'OpenAI-Responses',
    droid: 'Droid',
    ccr: 'CCR'
  },

  // Подсказки для платформенных аккаунтов
  platformTooltips: {
    total: '{platform}: {total} аккаунтов (Нормальных: {normal})',
    simple: '{platform}: {total}',
    unit: ' ' // Accounts unit in Russian (e.g., "5 个")
  },

  // Секция графиков
  charts: {
    modelDistributionTitle: 'Распределение использования моделей и тренды токенов',
    noModelData: 'Нет данных об использовании моделей',
    modelColumn: 'Модель',
    requestsColumn: 'Запросы',
    tokensColumn: 'Всего токенов',
    costColumn: 'Стоимость',
    requestCount: 'Количество запросов',
    tokenCount: 'Количество токенов',
    requests: 'Запросы',
    tokens: 'Токены',
    byDay: 'По дням',
    byHour: 'По часам',
    startDate: 'Начальная дата',
    endDate: 'Конечная дата',
    to: 'до',
    maxHours: 'Максимум 24 часа',
    autoRefresh: 'Автообновление',
    manualRefresh: 'Обновить вручную',
    tokenUsageTrend: 'Тренд использования токенов',
    costUsd: 'Стоимость (USD)',
    time: 'Время',
    date: 'Дата',
    tokenDistribution: 'Распределение использования токенов',
    apiKeysTrend: 'Тренд использования API ключей',
    accountUsageTrend: 'Тренд использования аккаунтов',
    currentGroup: 'Текущая группа',
    notSelected: 'Не выбрано',
    percentage: 'Процент',
    totalApiKeys: 'Всего API ключей: {count}',
    showingTop10: 'Всего API ключей: {count}, показаны топ 10 по использованию',
    inputTokens: 'Входные токены',
    outputTokens: 'Выходные токены',
    cacheCreateTokens: 'Токены создания кэша',
    cacheReadTokens: 'Токены чтения кэша'
  },

  // Метки и легенды графиков
  chartLabels: {
    requestCount: 'Количество запросов',
    tokenCount: 'Количество токенов',
    requests: 'Запросы'
  },

  // Временные периоды
  time: {
    today: 'Сегодня',
    thisMonth: 'В этом месяце',
    last7Days: 'Последние 7 дней',
    last30Days: 'Последние 30 дней'
  },

  // Статусы
  status: {
    running: 'Работает',
    stopped: 'Остановлен',
    error: 'Ошибка',
    normal: 'Нормально',
    warning: 'Предупреждение'
  },

  // Общие действия
  actions: {
    refresh: 'Обновить',
    refreshing: 'Обновление',
    refreshNow: 'Обновить сейчас',
    export: 'Экспорт',
    filter: 'Фильтр',
    search: 'Поиск',
    viewDetails: 'Подробнее'
  },

  // Состояния загрузки и пустых данных
  states: {
    loading: 'Загрузка...',
    noData: 'Нет доступных данных',
    error: 'Не удалось загрузить данные',
    noAccountData: 'Нет данных об использовании аккаунтов',
    detailedStats: 'Детальная статистика',
    totalAccounts: 'Всего аккаунтов: {count}',
    showingTopAccounts: 'Показаны топ {count} аккаунтов по использованию'
  }
}
