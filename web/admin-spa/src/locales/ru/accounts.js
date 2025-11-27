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
  },

  // Модальное окно истечения срока
  expiry: {
    modalTitle: 'Изменить время истечения',
    modalSubtitle: 'Установить новое время истечения для "{name}"',
    currentStatus: 'Текущий статус',
    neverExpires: 'Не истекает',
    selectDuration: 'Выберите новый период',
    customDate: 'Произвольная',
    selectDateTime: 'Выберите дату и время',
    dateTimeHint: 'Выберите будущую дату и время истечения',
    newExpiryTime: 'Новое время истечения',
    cancel: 'Отмена',
    save: 'Сохранить изменения',
    saving: 'Сохранение...',
    quickOptions: {
      never: 'Не истекает',
      '30d': '30 дней',
      '90d': '90 дней',
      '180d': '180 дней',
      '365d': '1 год',
      '730d': '2 года'
    },
    status: {
      expired: 'Истек',
      expiresInDays: 'Истекает через {days} дн.',
      expiresInMonths: 'Истекает через {months} мес.'
    }
  },

  // Расширенная форма аккаунта
  formExtended: {
    editAccount: 'Редактировать аккаунт',
    addAccount: 'Добавить аккаунт',
    basicInfo: 'Основная информация',
    authentication: 'Авторизация и аутентификация',
    selectPlatform: 'Выбрать платформу',
    selectSpecificPlatform: 'Выберите конкретный тип платформы:',
    droidExclusive: 'Эксклюзив Droid',
    addMethod: 'Способ добавления',
    usageVisualization: 'Визуализация использования',
    manualAccessToken: 'Ручной ввод Access Token',
    useApiKey: 'Использовать API Key (поддержка нескольких)',
    accountName: 'Имя аккаунта',
    accountNamePlaceholder: 'Задайте легко узнаваемое имя для аккаунта',
    description: 'Описание',
    descriptionOptional: 'Описание (необязательно)',
    descriptionPlaceholder: 'Описание назначения аккаунта...',
    accountType: 'Тип аккаунта',
    sharedAccount: 'Общий аккаунт',
    dedicatedAccount: 'Выделенный аккаунт',
    groupScheduling: 'Групповое планирование',
    accountTypeHint:
      'Общий аккаунт: используется всеми API ключами; Выделенный аккаунт: используется только конкретными API ключами; Групповое планирование: входит в группу для планирования внутри группы',
    expiryTime: 'Время истечения',
    expiryTimeOptional: 'Время истечения (необязательно)',
    expiryOptions: {
      never: 'Не истекает',
      '30d': '30 дней',
      '90d': '90 дней',
      '180d': '180 дней',
      '365d': '365 дней',
      custom: 'Произвольная дата'
    },
    willExpireOn: 'Истекает {date}',
    accountNeverExpires: 'Аккаунт не истекает',
    expiryHint:
      'Установите время истечения подписки Claude Max/Pro, после истечения планирование этого аккаунта будет остановлено',
    selectGroup: 'Выбрать группу',
    selectGroupRequired: 'Выбрать группу *',
    noGroupsAvailable: 'Нет доступных групп',
    groupMemberCount: '{count} участников',
    createNewGroup: 'Создать новую группу',
    projectId: 'ID проекта',
    projectIdOptional: 'ID проекта (необязательно)',
    projectIdPlaceholder: 'например: verdant-wares-464411-k9',
    projectIdHint:
      'Некоторые аккаунты Google (особенно связанные с Google Cloud) распознаются как аккаунты Workspace и требуют дополнительный ID проекта.',
    projectIdVisit: 'Посетите',
    projectIdFormat: ', обычно в строковом формате',
    projectIdWarning:
      '⚠️ Внимание: Скопируйте ID проекта (Project ID), а не номер проекта (Project Number)!',
    projectIdTip:
      '<strong>Подсказка:</strong> Если ваш аккаунт — обычный личный аккаунт (не связан с Google Cloud), оставьте это поле пустым.',
    awsAccessKeyId: 'AWS Access Key ID *',
    awsAccessKeyIdPlaceholder: 'Введите AWS Access Key ID',
    awsSecretAccessKey: 'AWS Secret Access Key *',
    awsSecretAccessKeyPlaceholder: 'Введите AWS Secret Access Key',
    awsRegion: 'Регион AWS *',
    awsRegionPlaceholder: 'например: us-east-1',
    awsRegionList: 'Популярные регионы:',
    regions: {
      'us-east-1': 'us-east-1 (Восток США)',
      'us-west-2': 'us-west-2 (Запад США)',
      'eu-west-1': 'eu-west-1 (Европа Ирландия)',
      'ap-southeast-1': 'ap-southeast-1 (Сингапур)',
      'ap-northeast-1': 'ap-northeast-1 (Токио)',
      'eu-central-1': 'eu-central-1 (Франкфурт)'
    },
    sessionToken: 'Session Token',
    sessionTokenOptional: 'Session Token (необязательно)',
    sessionTokenPlaceholder: 'Если используются временные учетные данные, введите session token',
    sessionTokenHint: 'Требуется только при использовании временных учетных данных AWS'
  }
}
