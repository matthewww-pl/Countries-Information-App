<script setup lang="ts">
  const { t, locale } = useI18n()
  const isDark = useDark()
  const toggleDark = useToggle(isDark)
</script>
<template>
  <div>
    strona główna<br>
    {{ t('test') }}<br>
    {{ t('array.count', {n: 2}) }}<br>
    <form>
      <label>Język</label>
      <select v-model="locale">
        <option value="en">en</option>
        <option value="pl">pl</option>
      </select>
    </form>
    <br>
    <button @click="toggleDark()">Dark/Light</button>
  </div>
</template>
