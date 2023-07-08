<script>
  import { RouterLink } from 'vue-router'
  export default {
    name: 'HomeView',
    data() {
      return {
        text: '',
        isDisable: true,
      }
    },
    methods: {
      clickMe() {
        if(this.text === '') {
          alert('blank')
          this.isDisable = true
        } else {
          this.isDisable = false
        }
      }
    }
  }
</script>

<template>
  <div>
    <h1>Home VIew</h1>
    <input type="text" v-model="text">
    <router-link :to="isDisable ? '' : {name: 'plan'}">
      <button @click="clickMe()">Plan</button>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;
</style>