<script>
  import { RouterLink } from 'vue-router'

  export default {
    name: 'PlanView',
  }
</script>

<template>
  <div>
    <h1>Plan View</h1>
    <router-link :to="{name: 'addOn'}">
      <button>Add Ons</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;
</style>