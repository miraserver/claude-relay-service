import { createI18n } from 'vue-i18n'
import en from './en'
import ru from './ru'

// Получаем сохранённую локаль или используем браузерную
const getDefaultLocale = () => {
  const saved = localStorage.getItem('user-locale')
  if (saved && ['en', 'ru'].includes(saved)) return saved

  const browserLang = navigator.language.toLowerCase()
  if (browserLang.startsWith('ru')) return 'ru'
  return 'en'
}

const i18n = createI18n({
  legacy: false, // Composition API mode
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages: {
    en,
    ru
  },
  // Настройки для лучшей обработки переводов
  missingWarn: false, // Отключаем предупреждения о недостающих ключах в production
  fallbackWarn: false
})

export default i18n
