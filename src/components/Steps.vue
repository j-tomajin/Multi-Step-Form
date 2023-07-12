<script>
  import { RouterLink } from 'vue-router'
  import bgMobile from '../assets/images/bg-sidebar-mobile.svg'
  import bgDesktop from '../assets/images/bg-sidebar-desktop.svg'

  export default {
    name: 'Steps',
    data() {
      return {
        bgMobile: bgMobile,
        bgDesktop: bgDesktop,
      }
    }
  }
</script>

<template>
  <div class="box">
    <picture class="picture">
      <!-- <source media="(min-width: 780px)" :srcset="bgDesktop"> -->
      <img :src="bgMobile" alt="product-img">
    </picture>

    <router-link :to="{name: 'home'}" class="steps" active-class="active">
      <p class="link">1</p> 
      <div class="step">
        <span class="medium">STEP 1</span>
        <span class="heavy-alt-2">YOUR INFO</span>
      </div>
    </router-link>
    <router-link :to="{name: 'plan'}" class="steps" active-class="active">
      <p class="link">2</p>
      <div class="step">
        <span class="medium">STEP 2</span>
        <span class="heavy-alt-2">SELECT PLAN</span>
      </div>
    </router-link>
    <router-link :to="{name: 'addOn'}" class="steps" active-class="active">
      <p class="link">3</p>
      <div class="step">
        <span class="medium">STEP 3</span>
        <span class="heavy-alt-2">ADD-ONS</span>
      </div>
    </router-link>
    <router-link :to="{name: 'final'}" class="steps" active-class="active">
      <p class="link">4</p>
      <div class="step">
        <span class="medium">STEP 4</span>
        <span class="heavy-alt-2">SUMMARY</span>
      </div>
    </router-link>
    <router-link :to="{name: 'thankYou'}" class="steps" active-class="active">
      <p class="link">5</p>
      <div class="step">
        <span class="medium">STEP 5</span>
        <span class="heavy-alt-2">DONE</span>
      </div>
    </router-link>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .box {
    width: 100%;
    display: flex;
    align-items: center;
    gap: rem(24);
    justify-content: center;
    padding-block: rem(32);
    overflow: hidden;
    border-radius: rem(12);

    @include breakpointMin(medium-screen) {
      position: relative;
      flex-direction: column;
      justify-content: start;
      align-items: start;

      background: {
        image: url('../assets/images/bg-sidebar-desktop.svg');
        repeat: no-repeat;
        size: cover;
      };
    }
  }

  .picture {
    position: absolute;
    top: 0;

    z-index: -1;
    width: 100%;
    
    img {
      width: 100%;
      height: 100%;
    }
    
    @include breakpointMin(medium-screen) {
      // z-index: 0;
      // width: 100%;
      // height: 100%;

      // img {
      //   width: 100%;
      // }
      display: none;
    }
  }

  .steps {
    display: flex;
    align-items: center;
    gap: rem(16);
    pointer-events: none;
  }

  .step {
    position: relative;
    z-index: 2;
    display: none;

    @include breakpointMin(medium-screen) {
      display: flex;
      flex-direction: column;
    }
  }

  .link {
    display: grid;
    place-content: center;

    color: var(--clr-neutral-w);
    border: 1px solid var(--clr-neutral-magnolia);
    width: rem(35);
    height: rem(35);
    border-radius: 50%;

    position: relative;

    @include breakpointMin(medium-screen) {
      z-index: 2;
      margin-left: rem(24);
    }
  }

  .active {
    p {
      background-color: var(--clr-neutral-magnolia);
      color: var(--clr-primary-marine-blue);
    }
  }
</style>