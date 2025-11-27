<template>
  <div class="language-selector relative">
    <button
      class="flex items-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
      @click="toggleDropdown"
    >
      <span class="text-sm font-medium">{{ currentLocale.toUpperCase() }}</span>
      <i class="fas fa-chevron-down text-xs" :class="{ 'rotate-180': showDropdown }" />
    </button>

    <div
      v-if="showDropdown"
      class="absolute right-0 top-full z-50 mt-2 w-48 rounded-lg border border-gray-200 bg-white shadow-lg dark:border-gray-700 dark:bg-gray-800"
    >
      <button
        v-for="lang in languages"
        :key="lang.code"
        :class="[
          'flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-100 dark:hover:bg-gray-700',
          { 'bg-blue-50 dark:bg-blue-900/20': currentLocale === lang.code }
        ]"
        @click="changeLanguage(lang.code)"
      >
        <span class="text-2xl">{{ lang.flag }}</span>
        <div class="flex-1">
          <div class="text-sm font-medium">{{ lang.name }}</div>
          <div class="text-xs text-gray-500 dark:text-gray-400">{{ lang.nativeName }}</div>
        </div>
        <i
          v-if="currentLocale === lang.code"
          class="fas fa-check text-blue-600 dark:text-blue-400"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const showDropdown = ref(false)

const languages = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' }
]

const currentLocale = computed(() => locale.value)

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value
}

const changeLanguage = (lang) => {
  locale.value = lang
  localStorage.setItem('user-locale', lang)
  showDropdown.value = false
  // Element Plus локаль обновится автоматически при изменении locale
}

// Закрываем dropdown при клике вне компонента
const handleClickOutside = (event) => {
  const selector = event.target.closest('.language-selector')
  if (!selector && showDropdown.value) {
    showDropdown.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.language-selector button {
  user-select: none;
}

.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.2s;
}
</style>
