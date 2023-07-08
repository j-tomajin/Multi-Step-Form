<script>
  import { RouterLink } from 'vue-router'

  export default {
    name: 'AddOnView',
  }
</script>

<template>
  <div>
    <h1>Add ons view</h1>
    <router-link :to="{name: 'final'}">
      <button>Final</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;
</style>