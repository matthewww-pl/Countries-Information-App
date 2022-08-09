<script setup lang="ts">
  const cookies = useCookies()
  
  const { t, locale } = useI18n()
  
  const isDark = useDark()

  if(cookies.get('locale')){
    locale.value = cookies.get('locale')
  }
  if(cookies.get('darkMode')){
    isDark.value = cookies.get('darkMode')
  }

  useHead({
    title: t('title'),
    meta: [
      { name: 'description', content: t('description') },
    ]
  })
</script>

<template>
  <RouterView />
</template>