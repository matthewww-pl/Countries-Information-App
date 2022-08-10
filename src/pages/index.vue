<script setup lang="ts">
  const { t, locale } = useI18n()

</script>

<template>
  <div>
    <div class="relative overflow-hidden bg-no-repeat bg-auto h-96" style="background-size: cover; background-image: url('/img/bg-1.jpg');"></div>
    <div class="mx-auto px-6 md:px-12 xl:px-32">
      <div class="text-center text-gray-800">
        <div class="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style="margin-top: -170px; background: hsla(0, 0%, 100%, 0.7); backdrop-filter: blur(30px);">
          <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">{{ $t('index.searchH1') }}<br /><span class="text-blue-600">{{ $t('index.searchH2') }}</span></h1>
          <Search/>
        </div>
      </div>
    </div>
  </div>
</template>
