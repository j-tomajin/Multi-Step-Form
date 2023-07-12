<script>
  import { RouterView } from 'vue-router';
  import Steps from './components/Steps.vue';
  export default {
    name: 'App',
    components: { Steps }
  }
</script>

<template>
  <main class="main">
    <Steps />
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style lang="scss" scoped>
  @use './assets/scss/utilities/' as *;

  .main {
    margin-inline: auto;
    width: min(calc(100% - 32px), rem(950));
    font-weight: 700;
    border-radius: rem(16);

    @include breakpointMin(medium-screen) {
      display: grid;
      grid-template-columns: 1fr 2fr;
      gap: rem(16);
      padding: rem(16);
      background-color: var(--clr-neutral-w);
      overflow: hidden;
      height: rem(600);
      box-shadow: 0px 8px 14px -13px rgba(8, 8, 74, 1);
    }
  }
</style>