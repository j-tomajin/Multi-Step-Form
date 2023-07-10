<script>
  import { RouterView } from 'vue-router';
  export default {
    name: 'App',
  }
</script>

<template>
  <main>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style lang="scss" scoped>
  @use './assets/scss/utilities/' as *;

  main {
    font-weight: 700;
  }
</style>