<script setup lang="ts">
  const { t } = useI18n()
  
  useHead({
    title: t('404.title'),
  })
</script>

<template>
  <div class="flex flex-col h-screen">
    <Navbar/>
    <div class="flex-grow">
       <RouterView />
    </div>
    <Footer/>
  </div>
</template>