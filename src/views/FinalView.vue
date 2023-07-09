<script>
  import { RouterLink, useRouter } from 'vue-router'

  export default {
    name: 'FinalView',
    setup() {
      const router = useRouter()

      return { router }
    }
  }
</script>

<template>
  <div>
    <h1>Final View</h1>
    <button @click="router.back()">Go Back</button>
    <router-link :to="{name: 'thankYou'}">
      <button>Confirm</button>  
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;
</style>