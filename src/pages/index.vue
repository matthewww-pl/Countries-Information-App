<script setup lang="ts">
  const { t, locale } = useI18n()
</script>
<template>
  <div>
    <div class="relative overflow-hidden bg-no-repeat bg-auto h-96" style="background-position: 100%; background-image: url('img/bg-1.jpg');"></div>

    <div class="mx-auto px-6 md:px-12 xl:px-32">
      <div class="text-center text-gray-800">
        <div class="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12" style="margin-top: -170px; background: hsla(0, 0%, 100%, 0.7); backdrop-filter: blur(30px);">
          <h1 class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">The best offer on the market <br /><span class="text-blue-600">for your business</span></h1>
          <a class="inline-block px-7 py-3 mb-2 md:mb-0 mr-0 md:mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
        </div>
      </div>
    </div>
  </div>
</template>
