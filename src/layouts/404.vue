<script setup lang="ts">
  const router = useRouter()
</script>

<template>
  <RouterView/>
  <button @click="router.back()">
    Wstecz
  </button>
</template>