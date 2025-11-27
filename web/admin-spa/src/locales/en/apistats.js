export default {
  // Заголовки
  title: 'API Key Statistics',
  subtitle: 'API Key Usage Statistics',

  // Header
  header: {
    subtitle: 'API Key Usage Statistics',
    tutorialSubtitle: 'Tutorial',
    userLogin: 'User Login',
    adminPortal: 'Admin Portal'
  },

  // Табы
  tabs: {
    stats: 'Statistics Query',
    tutorial: 'Tutorial'
  },

  // Кнопки
  buttons: {
    adminPanel: 'Admin Panel',
    userLogin: 'User Login',
    query: 'Query',
    clear: 'Clear'
  },

  // Period Selector
  periodSelector: {
    title: 'Statistics Time Range',
    daily: 'Today',
    monthly: 'This Month'
  },

  // Периоды
  periods: {
    label: 'Statistics Period',
    daily: 'Today',
    monthly: 'This Month'
  },

  // Ввод API ключа
  input: {
    title: 'Usage Statistics Query',
    subtitle: 'Query your API Key usage and statistics',
    label: 'API Key',
    labelSingle: 'Enter your API Key',
    labelMulti: 'Enter your API Keys (one per line or comma separated)',
    placeholder: 'Enter your API key to view statistics',
    placeholderSingle: 'Enter your API Key (cr_...)',
    placeholderMulti: 'Enter your API Keys, supported formats:\ncr_xxx\ncr_yyy\nor\ncr_xxx, cr_yyy',
    queryButton: 'Query Statistics',
    querying: 'Querying...',
    clearInput: 'Clear input',
    modeSingle: 'Single mode',
    modeSingleShort: 'Single',
    modeMulti: 'Aggregate mode',
    modeMultiShort: 'Aggregate',
    securityNoticeSingle:
      'Your API Key is only used to query your own statistics and will not be stored or used for other purposes',
    securityNoticeMulti:
      'Your API Keys are only used to query statistics and will not be stored. Some individual information will not be displayed in aggregate mode.',
    multiKeyHint:
      'Tip: Up to 30 API Keys can be queried simultaneously. Use Ctrl+Enter for quick query.',
    multiKeyMode: 'Multi-key mode (separate with commas or newlines)',
    singleKey: 'Single key',
    multipleKeys: 'Multiple keys ({count})'
  },

  // Статистика
  stats: {
    requests: 'Total Requests',
    inputTokens: 'Input Tokens',
    outputTokens: 'Output Tokens',
    totalCost: 'Total Cost',
    cacheTokens: 'Cache Tokens',
    cacheCreation: 'Cache Creation',
    cacheRead: 'Cache Read',
    avgCost: 'Average Cost',
    apiKeyName: 'API Key Name'
  },

  // Overview section
  overview: {
    batchSummary: 'Batch Query Summary',
    apiKeyInfo: 'API Key Information',
    queryKeysCount: 'Queried Keys',
    validKeysCount: 'Valid Keys',
    invalidKeysCount: 'Invalid Keys',
    totalRequests: 'Total Requests',
    totalTokens: 'Total Tokens',
    totalCost: 'Total Cost',
    top3Contributors: 'Top 3 Contributors',
    name: 'Name',
    status: 'Status',
    active: 'Active',
    inactive: 'Inactive',
    permissions: 'Permissions',
    createdAt: 'Created',
    expiresAt: 'Expires',
    notActivated: 'Not Activated',
    afterFirstUse: 'after first use',
    neverExpires: 'Never expires',
    expired: 'Expired',
    today: 'Today',
    thisMonth: 'This Month',
    totalInputTokens: 'Input Tokens',
    totalOutputTokens: 'Output Tokens',
    allTokens: 'All Tokens',
    averageCost: 'Avg Cost',
    // Usage statistics
    usageOverview: 'Usage Statistics Overview',
    requestsCount: 'Requests',
    tokensCount: 'Tokens',
    costAmount: 'Cost',
    inputTokensCount: 'Input Tokens'
  },

  // Account status
  accountStatus: {
    title: 'Bound Account Status',
    realTimeUpdate: 'Real-time',
    sessionWindow: 'Session Window',
    quotaWindow: 'Quota Window',
    remaining: 'Remaining',
    resetRemaining: 'Reset in',
    noQuotaData: 'No quota data available',
    primaryWindow: 'Primary',
    secondaryWindow: 'Secondary'
  },

  // Распределение токенов
  distribution: {
    title: 'Token Usage Distribution',
    inputTokens: 'Input Tokens',
    outputTokens: 'Output Tokens',
    cacheCreate: 'Cache Creation Tokens',
    cacheRead: 'Cache Read Tokens',
    total: 'Total'
  },

  // Лимиты
  limits: {
    title: 'Limit Configuration',
    titleAggregate: 'Limit Configuration (Aggregate Mode)',
    none: 'No limits set',
    rateLimit: 'Rate Limit',
    concurrent: 'Concurrent Requests',
    concurrentLimit: 'Concurrent Limit',
    models: 'Allowed Models',
    modelLimit: 'Model Limit',
    clients: 'Allowed Clients',
    clientLimit: 'Client Limit',
    // Aggregate stats
    apiKeysOverview: 'API Keys Overview',
    totalKeys: 'Total Keys',
    activeKeys: 'Active Keys',
    aggregateSummary: 'Aggregate Statistics Summary',
    totalRequests: 'Total Requests',
    totalTokens: 'Total Tokens',
    totalCost: 'Total Cost',
    invalidKeys: '{count} invalid API Keys',
    aggregateNote:
      'Each API Key has independent limit settings, individual limits are not shown in aggregate mode',
    // Cost limits
    dailyCostLimit: 'Daily Cost Limit',
    totalCostLimit: 'Total Cost Limit',
    opusWeeklyCostLimit: 'Opus Model Weekly Cost Limit',
    windowLimit: 'Time Window Limit',
    // Limit notes
    limitNoteOr:
      'Request count and cost limits are "OR" relationship, triggering rate limit when either is reached',
    limitNoteToken:
      'Request count and token usage are "OR" relationship, triggering rate limit when either is reached',
    limitNoteRequest: 'Only request count is limited',
    // Restrictions
    restrictedModels: 'Restricted: {count} models',
    allowAllModels: 'All models allowed',
    restrictedClients: 'Restricted: {count} client types',
    allowAllClients: 'All clients allowed',
    detailedRestrictions: 'Detailed Restriction Information',
    restrictedModelsList: 'Restricted Models List',
    restrictionNote: 'This API Key cannot access the models listed above'
  },

  // Использование моделей
  models: {
    title: 'Model Usage Statistics',
    model: 'Model',
    requests: 'Requests',
    requestsCount: '{count} requests',
    tokens: 'Tokens',
    cost: 'Cost',
    totalCost: 'Total Cost',
    loading: 'Loading model statistics...',
    noData: 'No model usage data available'
  },

  // Aggregated usage share
  aggregated: {
    title: 'Usage Share',
    keyLabel: 'Key {index}',
    requests: 'requests',
    otherKeys: 'Other {count} Keys',
    multiKeyOnly: 'Usage share is only displayed in multi-key mode'
  },

  // Date formatting
  date: {
    noData: 'N/A',
    formatError: 'Invalid format'
  },

  // Permissions
  permissions: {
    all: 'All Models',
    unknown: 'Unknown'
  },

  // Account labels
  accounts: {
    dedicatedAccount: 'Dedicated Account',
    openaiDedicated: 'OpenAI Dedicated',
    claudeDedicated: 'Claude Dedicated'
  },

  // Time units
  time: {
    days: 'day | days',
    hours: 'hour | hours',
    minutes: 'minute | minutes',
    seconds: 'second | seconds',
    remaining: 'remaining approximately'
  },

  // Status
  status: {
    unknown: 'Status Unknown',
    rateLimited: 'Rate Limited',
    notRateLimited: 'No Limits',
    noWindowInfo: 'No window information',
    weeklyLimit: 'Weekly',
    hourlyLimit: '5h'
  },

  // Ошибки
  errors: {
    invalidKey: 'Invalid API Key',
    fetchFailed: 'Failed to fetch statistics',
    networkError: 'Network error occurred',
    noKey: 'Please enter API key',
    queryFailed: 'Query failed',
    getKeyIdFailed: 'Failed to get API Key ID',
    queryStatsFailedCheck: 'Failed to query statistics, please check if your API Key is correct',
    requestFailed: 'Request failed'
  }
}
