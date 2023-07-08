<script>
  import { RouterView } from 'vue-router';
  export default {
    name: 'App',
  }
</script>

<template>
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
  @use './assets/scss/utilities/' as *;

  main {
    font-weight: 700;
  }
</style>