<script setup lang="ts">
  const { t } = useI18n()

  const router = useRouter()
</script>

<template>
  <div>
    <div class="mx-auto px-6 md:px-12 xl:px-32">
      <div class="text-center text-gray-800">
        <div class="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style=" margin-top: 100px; background: hsla(0, 0%, 100%, 0.7); backdrop-filter: blur(30px);">
          <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">{{ $t('404.header') }}<br /><span class="text-blue-600">{{ $t('404.notFound') }}</span></h1>
          <a @click="router.back()" class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" role="button">{{ $t('button.back') }}</a>
        </div>
      </div>
    </div>    
  </div>
</template>

<route lang="yaml">
  meta:
    layout: 404
</route>