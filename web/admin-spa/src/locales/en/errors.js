export default {
  // Общие ошибки
  general: {
    unknown: 'An unknown error occurred',
    networkError: 'Network error. Please check your connection',
    serverError: 'Server error. Please try again later',
    timeout: 'Request timeout. Please try again',
    unauthorized: 'Unauthorized. Please login again',
    forbidden: 'Access denied',
    notFound: 'Resource not found'
  },

  // Ошибки аутентификации
  auth: {
    loginFailed: 'Login failed',
    invalidCredentials: 'Invalid username or password',
    sessionExpired: 'Session expired. Please login again',
    accountDisabled: 'Your account has been disabled'
  },

  // Ошибки API
  api: {
    invalidKey: 'Invalid API key',
    keyNotFound: 'API key not found',
    keyExpired: 'API key has expired',
    rateLimitExceeded: 'Rate limit exceeded',
    insufficientPermissions: 'Insufficient permissions'
  },

  // Ошибки валидации
  validation: {
    required: 'This field is required',
    invalidFormat: 'Invalid format',
    tooShort: 'Too short',
    tooLong: 'Too long',
    invalidEmail: 'Invalid email address',
    invalidUrl: 'Invalid URL'
  }
}
