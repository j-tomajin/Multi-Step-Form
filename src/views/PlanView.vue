<script>
  import { RouterLink, useRouter } from 'vue-router'

  export default {
    name: 'PlanView',
    setup() {
      const router = useRouter()

      return { router }
    }
  }
</script>

<template>
  <div>
    <h1>Plan View</h1>
    <button @click="router.back()">go back</button>
    <router-link :to="{name: 'addOn'}">
      <button>Add Ons</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;
</style>