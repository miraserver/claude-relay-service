export default {
  // Statistics cards
  stats: {
    totalApiKeys: 'Total API Keys',
    active: 'Active',
    serviceAccounts: 'Service Accounts',
    normal: 'Normal',
    abnormal: 'Abnormal',
    pausedScheduling: 'Paused',
    rateLimited: 'Rate Limited',
    todayRequests: 'Today Requests',
    totalRequests: 'Total Requests',
    systemStatus: 'System Status',
    uptime: 'Uptime',
    todayTokens: 'Today Tokens',
    input: 'Input',
    output: 'Output',
    cacheCreate: 'Cache Create',
    cacheRead: 'Cache Read',
    totalTokenConsumption: 'Total Token Consumption',
    realtimeRPM: 'Real-time RPM',
    requestsPerMinute: 'Requests per minute',
    realtimeTPM: 'Real-time TPM',
    tokensPerMinute: 'Tokens per minute',
    minutes: 'minutes',
    historicalData: 'Historical Data'
  },

  // Platform names
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

  // Tooltips for platform accounts
  platformTooltips: {
    total: '{platform}: {total} accounts (Normal: {normal})',
    simple: '{platform}: {total}',
    unit: '' // Empty for English (e.g., "5 accounts")
  },

  // Charts section
  charts: {
    modelDistributionTitle: 'Model Usage Distribution & Token Usage Trends',
    noModelData: 'No model usage data',
    modelColumn: 'Model',
    requestsColumn: 'Requests',
    tokensColumn: 'Total Tokens',
    costColumn: 'Cost',
    requestCount: 'Request Count',
    tokenCount: 'Token Count',
    requests: 'Requests',
    tokens: 'Tokens',
    byDay: 'By Day',
    byHour: 'By Hour',
    startDate: 'Start Date',
    endDate: 'End Date',
    to: 'to',
    maxHours: 'Max 24 hours',
    autoRefresh: 'Auto Refresh',
    manualRefresh: 'Manual Refresh',
    tokenUsageTrend: 'Token Usage Trend',
    costUsd: 'Cost (USD)',
    time: 'Time',
    date: 'Date',
    tokenDistribution: 'Token Usage Distribution',
    apiKeysTrend: 'API Keys Usage Trend',
    accountUsageTrend: 'Account Usage Trend',
    currentGroup: 'Current Group',
    notSelected: 'Not selected',
    percentage: 'Percentage',
    totalApiKeys: 'Total {count} API Keys',
    showingTop10: 'Total {count} API Keys, showing top 10 by usage',
    inputTokens: 'Input Tokens',
    outputTokens: 'Output Tokens',
    cacheCreateTokens: 'Cache Create Tokens',
    cacheReadTokens: 'Cache Read Tokens'
  },

  // Chart labels and legends
  chartLabels: {
    requestCount: 'Request Count',
    tokenCount: 'Token Count',
    requests: 'Requests'
  },

  // Time periods
  time: {
    today: 'Today',
    thisMonth: 'This Month',
    last7Days: 'Last 7 Days',
    last30Days: 'Last 30 Days'
  },

  // Status
  status: {
    running: 'Running',
    stopped: 'Stopped',
    error: 'Error',
    normal: 'Normal',
    warning: 'Warning'
  },

  // Common actions
  actions: {
    refresh: 'Refresh',
    refreshing: 'Refreshing',
    refreshNow: 'Refresh now',
    export: 'Export',
    filter: 'Filter',
    search: 'Search',
    viewDetails: 'View Details'
  },

  // Loading and empty states
  states: {
    loading: 'Loading...',
    noData: 'No data available',
    error: 'Failed to load data',
    noAccountData: 'No account usage data',
    detailedStats: 'Detailed Statistics',
    totalAccounts: 'Total {count} accounts',
    showingTopAccounts: 'Showing top {count} accounts by usage'
  }
}
