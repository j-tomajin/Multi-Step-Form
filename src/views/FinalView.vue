<script>
  import { RouterLink, useRouter } from 'vue-router'
  import { useFormStore } from '../store/FormStore'
  import { storeToRefs } from 'pinia'

  export default {
    name: 'FinalView',
    setup() {
      const formStore = useFormStore()

      const { addOnStore, isChecked, plansStore, totalMo, totalYr } = storeToRefs(formStore)

      const router = useRouter()

      return { router, plansStore, addOnStore, isChecked, totalMo, totalYr }
    },
  }
</script>

<template>
  <div class="container">
    <!-- HEAD -->
    <div class="head">
      <h1 class="heavy">Finishing up</h1>
      <p class="medium">Double-check everything looks OK before confirming.</p>
    </div>

    <!-- PLANS -->
    <div v-for="plan in plansStore" class="plan box flex">
      <div>
        <h3 class="heavy">{{ plan.title }} 
          <span v-if="!isChecked">(Monthly)</span>
          <span v-else>(Yearly)</span>
        </h3>
        <router-link :to="{name: 'plan'}">
          <button class="change-btn medium">Change</button>  
        </router-link>
      </div>

      <p v-if="!isChecked" class="heavy">${{ plan.price.mo }}/mo</p>
      <p v-else class="heavy">${{ plan.price.yr }}/yr</p>

      <div class="line"></div>
    </div>
    
    <!-- ADD ONS -->
    <div class="add-on box">
      <div v-for="aos in addOnStore" :key="aos.id" class="flex ao">
        <p class="medium">{{ aos.title }}</p>
        <p v-if="isChecked" class="medium-alt">+${{ aos.price.yr }}/yr</p>
        <p v-else class="medium-alt">+${{ aos.price.mo }}/mo</p>
      </div>
    </div>

    <div class="total flex">
      <h4 class="medium">
        Total
        <span v-if="isChecked">(per year)</span>
        <span v-else>(per month)</span>
      </h4>
      <div class="price-total">
        <p v-if="isChecked">+${{ totalYr }}/yr</p>
        <p v-else>+${{ totalMo }}/mo</p>
      </div>
    </div>
    
    <!-- <p v-if="isChecked">total: {{ totalYr }}</p>
    <p v-else>total: {{ totalMo }}</p> -->
    <div class="-gbtn">
      <button @click="router.back()" class="back-btn">Go Back</button>
      <router-link :to="{name: 'thankYou'}" class="btn">
        <button>Confirm</button>  
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .head {
    margin-bottom: clampf(24, 780, 365, 32);
  }

  .plan {
    border-radius: rem(12) rem(12) 0 0;
    position: relative;

    .line {
      position: absolute;
      border-bottom: 1px solid var(--clr-neutral-cool-gray);
      left: 3.5%;
      right: 3.5%;
      bottom: 0;
    }
  }

  .add-on {
    border-radius: 0 0 rem(12) rem(12);

    .ao {
      padding-block: rem(10);
      font-size: rem(18);
    }
  }

  .box {
    background-color: var(--clr-neutral-magnolia);
    padding: rem(16);
  }

  .change-btn {
    background-color: transparent;
    padding: 0;
    text-decoration: underline;
  }

  
  .total {
    margin-top: rem(16);
    padding: rem(16);

    .price-total {
      color: var(--clr-primary-purplish-blue);
    }
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>