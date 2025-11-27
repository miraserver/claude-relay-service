export default {
  // Page header
  header: {
    title: 'Account Management',
    subtitle: 'Manage Claude, Gemini, OpenAI and other accounts with proxy configuration'
  },

  // Filters and controls
  filters: {
    sortBy: 'Sort by',
    platform: 'Platform',
    group: 'Group',
    searchPlaceholder: 'Search account name...',
    clearSearch: 'Clear search'
  },

  // Sort options
  sortOptions: {
    nameAsc: 'Name (A-Z)',
    nameDesc: 'Name (Z-A)',
    createdDesc: 'Newest first',
    createdAsc: 'Oldest first',
    usageDesc: 'Most used',
    usageAsc: 'Least used'
  },

  // Platform options
  platforms: {
    all: 'All Platforms',
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

  // Actions
  actions: {
    refresh: 'Refresh',
    refreshing: 'Refreshing',
    refreshTooltip: 'Refresh data (Ctrl/⌘+Click to force refresh all cache)',
    addAccount: 'Add Account',
    edit: 'Edit',
    delete: 'Delete',
    testConnection: 'Test Connection',
    viewDetails: 'View Details',
    export: 'Export',
    import: 'Import',
    batchDelete: 'Batch Delete',
    cancel: 'Cancel',
    confirm: 'Confirm',
    save: 'Save',
    close: 'Close',
    reset: 'Reset'
  },

  // Account status
  status: {
    active: 'Active',
    inactive: 'Inactive',
    normal: 'Normal',
    error: 'Error',
    rateLimited: 'Rate Limited',
    overload: 'Overload',
    paused: 'Paused',
    expired: 'Expired'
  },

  // Account table
  table: {
    name: 'Name',
    platform: 'Platform',
    status: 'Status',
    group: 'Group',
    proxy: 'Proxy',
    usage: 'Usage',
    created: 'Created',
    updated: 'Updated',
    actions: 'Actions',
    noData: 'No accounts found',
    loading: 'Loading accounts...',
    total: 'Total {count} accounts',
    selected: '{count} selected',
    expiry: 'Expiry Time',
    priority: 'Priority',
    todayUsage: 'Today Usage',
    sessionWindow: 'Session Window',
    lastUsed: 'Last Used'
  },

  // Account form
  form: {
    basicInfo: 'Basic Information',
    accountName: 'Account Name',
    accountNamePlaceholder: 'Enter account name',
    platform: 'Platform',
    selectPlatform: 'Select platform',
    group: 'Group',
    selectGroup: 'Select group',
    description: 'Description',
    descriptionPlaceholder: 'Enter description (optional)',

    // Credentials
    credentials: 'Credentials',
    apiKey: 'API Key',
    apiKeyPlaceholder: 'Enter API key',
    refreshToken: 'Refresh Token',
    refreshTokenPlaceholder: 'Enter refresh token',
    accessToken: 'Access Token',
    accessTokenPlaceholder: 'Enter access token',

    // Proxy configuration
    proxyConfig: 'Proxy Configuration',
    enableProxy: 'Enable Proxy',
    proxyType: 'Proxy Type',
    proxyHost: 'Proxy Host',
    proxyPort: 'Proxy Port',
    proxyUsername: 'Username (optional)',
    proxyPassword: 'Password (optional)',

    // Advanced settings
    advancedSettings: 'Advanced Settings',
    maxConcurrency: 'Max Concurrency',
    rateLimit: 'Rate Limit',
    timeout: 'Timeout',
    retryCount: 'Retry Count',

    // Validation messages
    validation: {
      nameRequired: 'Account name is required',
      platformRequired: 'Platform is required',
      apiKeyRequired: 'API key is required',
      refreshTokenRequired: 'Refresh token is required',
      proxyHostRequired: 'Proxy host is required',
      proxyPortRequired: 'Proxy port is required',
      invalidPort: 'Invalid port number',
      invalidUrl: 'Invalid URL format'
    }
  },

  // Messages
  messages: {
    addSuccess: 'Account added successfully',
    updateSuccess: 'Account updated successfully',
    deleteSuccess: 'Account deleted successfully',
    deleteConfirm: 'Are you sure you want to delete this account?',
    batchDeleteConfirm: 'Are you sure you want to delete {count} accounts?',
    testSuccess: 'Connection test successful',
    testFailed: 'Connection test failed',
    exportSuccess: 'Export successful',
    importSuccess: 'Import successful',
    operationFailed: 'Operation failed',
    loading: 'Loading...',
    noSelection: 'Please select at least one account'
  },

  // Statistics
  stats: {
    totalAccounts: 'Total Accounts',
    activeAccounts: 'Active',
    normalAccounts: 'Normal',
    errorAccounts: 'Error',
    totalRequests: 'Total Requests',
    totalTokens: 'Total Tokens'
  }
}
