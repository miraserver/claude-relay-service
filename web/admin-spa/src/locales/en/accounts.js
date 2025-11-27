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
  },

  // Account expiry modal
  expiry: {
    modalTitle: 'Modify Expiry Time',
    modalSubtitle: 'Set new expiry time for "{name}"',
    currentStatus: 'Current Status',
    neverExpires: 'Never Expires',
    selectDuration: 'Select new duration',
    customDate: 'Custom',
    selectDateTime: 'Select date and time',
    dateTimeHint: 'Select a future date and time as expiry',
    newExpiryTime: 'New Expiry Time',
    cancel: 'Cancel',
    save: 'Save Changes',
    saving: 'Saving...',
    quickOptions: {
      never: 'Never Expires',
      '30d': '30 Days',
      '90d': '90 Days',
      '180d': '180 Days',
      '365d': '1 Year',
      '730d': '2 Years'
    },
    status: {
      expired: 'Expired',
      expiresInDays: 'Expires in {days} days',
      expiresInMonths: 'Expires in {months} months'
    }
  },

  // Account form extended
  formExtended: {
    editAccount: 'Edit Account',
    addAccount: 'Add Account',
    basicInfo: 'Basic Information',
    authentication: 'Authorization & Authentication',
    selectPlatform: 'Select Platform',
    selectSpecificPlatform: 'Select specific platform type:',
    droidExclusive: 'Droid Exclusive',
    addMethod: 'Add Method',
    usageVisualization: 'Usage Visualization',
    manualAccessToken: 'Manual Access Token Input',
    useApiKey: 'Use API Key (Multiple Supported)',
    accountName: 'Account Name',
    accountNamePlaceholder: 'Set an easily recognizable name for the account',
    description: 'Description',
    descriptionOptional: 'Description (Optional)',
    descriptionPlaceholder: 'Account purpose description...',
    accountType: 'Account Type',
    sharedAccount: 'Shared Account',
    dedicatedAccount: 'Dedicated Account',
    groupScheduling: 'Group Scheduling',
    accountTypeHint:
      'Shared account: used by all API Keys; Dedicated account: used only by specific API Keys; Group scheduling: join group for group-based scheduling',
    expiryTime: 'Expiry Time',
    expiryTimeOptional: 'Expiry Time (Optional)',
    expiryOptions: {
      never: 'Never Expires',
      '30d': '30 Days',
      '90d': '90 Days',
      '180d': '180 Days',
      '365d': '365 Days',
      custom: 'Custom Date'
    },
    willExpireOn: 'Will expire on {date}',
    accountNeverExpires: 'Account never expires',
    expiryHint:
      'Set the expiry time for Claude Max/Pro subscription, scheduling will stop after expiration',
    selectGroup: 'Select Group',
    selectGroupRequired: 'Select Group *',
    noGroupsAvailable: 'No groups available',
    groupMemberCount: '{count} members',
    createNewGroup: 'Create New Group',
    projectId: 'Project ID',
    projectIdOptional: 'Project ID (Optional)',
    projectIdPlaceholder: 'e.g.: verdant-wares-464411-k9',
    projectIdHint:
      'Some Google accounts (especially those linked to Google Cloud) are identified as Workspace accounts and require an additional project ID.',
    projectIdVisit: 'Visit',
    projectIdFormat: ', usually in string format',
    projectIdWarning: '⚠️ Note: Copy the Project ID, not the Project Number!',
    projectIdTip:
      '<strong>Tip:</strong> If your account is a regular personal account (not linked to Google Cloud), please leave this field empty.',
    awsAccessKeyId: 'AWS Access Key ID *',
    awsAccessKeyIdPlaceholder: 'Enter AWS Access Key ID',
    awsSecretAccessKey: 'AWS Secret Access Key *',
    awsSecretAccessKeyPlaceholder: 'Enter AWS Secret Access Key',
    awsRegion: 'AWS Region *',
    awsRegionPlaceholder: 'e.g.: us-east-1',
    awsRegionList: 'Common Regions:',
    regions: {
      'us-east-1': 'us-east-1 (US East)',
      'us-west-2': 'us-west-2 (US West)',
      'eu-west-1': 'eu-west-1 (Europe Ireland)',
      'ap-southeast-1': 'ap-southeast-1 (Singapore)',
      'ap-northeast-1': 'ap-northeast-1 (Tokyo)',
      'eu-central-1': 'eu-central-1 (Frankfurt)'
    },
    sessionToken: 'Session Token',
    sessionTokenOptional: 'Session Token (Optional)',
    sessionTokenPlaceholder: 'If using temporary credentials, enter session token',
    sessionTokenHint: 'Only required when using temporary AWS credentials'
  }
}
