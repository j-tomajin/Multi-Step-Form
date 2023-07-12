<script>
  import { storeToRefs } from 'pinia';
  import { useFormStore } from '../store/FormStore';
  import thankyouIcon from '../assets/images/icon-thank-you.svg'

  export default {
    name: 'ThankYouView',
    data() {
      return {
        icon: thankyouIcon,
      }
    },
    setup() {
      const formStore = useFormStore()

      const { username, totalYr } = storeToRefs(formStore)

      return { username, totalYr }
    }
  }
</script>

<template>
  <div class="container box">
    <div class="icon">
      <img :src="icon" alt="check icon">
    </div>

    <h1 class="heavy">Thank You {{ username }}</h1>
    <p class="medium">
      Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at <span><a href="">support@loremgaming.com</a></span>.
    </p>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;
  
  .icon {
    margin-bottom: rem(16);
    img {
      margin-inline: auto;
    }
  }

  .box {
    text-align: center;
    padding-block: rem(64);

    @include breakpointMin(medium-screen) {
      padding-block: 0;
      margin-block: auto;
    }
  }

  a {
    color: var(--clr-primary-purplish-blue);
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -2px;
      left: 0;
      right: 0;

      margin-inline: auto;
      background-color: var(--clr-primary-purplish-blue);
      width: 0;
      height: 2px;

      transition: width 300ms ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
</style>