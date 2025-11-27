export default {
  // Общие ошибки
  general: {
    unknown: 'Произошла неизвестная ошибка',
    networkError: 'Ошибка сети. Пожалуйста, проверьте подключение',
    serverError: 'Ошибка сервера. Пожалуйста, попробуйте позже',
    timeout: 'Превышено время ожидания. Пожалуйста, попробуйте снова',
    unauthorized: 'Не авторизован. Пожалуйста, войдите снова',
    forbidden: 'Доступ запрещен',
    notFound: 'Ресурс не найден'
  },

  // Ошибки аутентификации
  auth: {
    loginFailed: 'Ошибка входа',
    invalidCredentials: 'Неверное имя пользователя или пароль',
    sessionExpired: 'Сессия истекла. Пожалуйста, войдите снова',
    accountDisabled: 'Ваш аккаунт отключен'
  },

  // Ошибки API
  api: {
    invalidKey: 'Неверный API ключ',
    keyNotFound: 'API ключ не найден',
    keyExpired: 'Срок действия API ключа истек',
    rateLimitExceeded: 'Превышен лимит запросов',
    insufficientPermissions: 'Недостаточно прав'
  },

  // Ошибки валидации
  validation: {
    required: 'Это поле обязательно',
    invalidFormat: 'Неверный формат',
    tooShort: 'Слишком короткое значение',
    tooLong: 'Слишком длинное значение',
    invalidEmail: 'Неверный email адрес',
    invalidUrl: 'Неверный URL'
  }
}
