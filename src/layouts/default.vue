<script setup lang="ts">

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