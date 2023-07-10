<script>
  import { RouterLink, useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useFormStore } from '../store/FormStore'

  import arcadeIcon from '../assets/images/icon-arcade.svg'
  import advancedIcon from '../assets/images/icon-advanced.svg'
  import proIcon from '../assets/images/icon-pro.svg'

  export default {
    name: 'PlanView',
    data() {
      return {
        plans: [
          {
            icon: arcadeIcon,
            title: 'Arcade',
            price: {
              mo: 9,
              yr: 90,
            }
          },
          {
            icon: advancedIcon,
            title: 'Advanced',
            price: {
              mo: 12,
              yr: 120,
            }
          },
          {
            icon: proIcon,
            title: 'Pro',
            price: {
              mo: 15,
              yr: 150,
            }
          },
        ],
        
        // icons
        // arcadeIcon: arcadeIcon,
        // advancedIcon: advancedIcon,
        // proIcon: proIcon,

        isValid: false,
        activeItem: null,
      }
    },  
    setup() {
      const formStore = useFormStore()

      // states
      const { isChecked, plansStore } = storeToRefs(formStore)
      // actions
      const { check } = formStore

      const router = useRouter()

      return { router,
        // states
        isChecked, plansStore,

        // actions 
        check,
      }
    },
    methods: {
      selectItem(index, plan) {
        this.activeItem = index
        this.isValid = true 

        // const newPlan = {
        //   icon: plan.icon,
        //   title: plan.title,
        //   price: {
        //     mo: plan.price.mo,
        //     yr: plan.price.yr,
        //   }
        // } 

        this.plansStore.splice(0, 1) 
        this.plansStore.push(plan)
      }, 
    }
  }
</script>

<template>
  <div class="container">
    <div class="head">
      <h1 class="heavy">Select your plan</h1>
      <p class="medium">You have the option of monthly or yearly billing.</p>
    </div>

    <div class="plans">
      <div 
        v-for="(plan, index) in plans"
        :key="index"  
        :class="{ active: index === activeItem, plan }"
        @click="selectItem(index, plan)"
      >
        <img :src="plan.icon" alt="">

        <div class="info">
          <h2 class="heavy">{{ plan.title }}</h2>
          <p>
            <span v-if="isChecked" class="yr medium">
              ${{ plan.price.yr }}/yr
              <span class="medium-alt">2 months free</span>
            </span>
            <span v-else class="medium">
              ${{ plan.price.mo }}/mo
            </span>
          </p>
        </div>
      </div>
    </div>

    <!-- TEST FOR ITEM THE WAS SELECTED -->
    <!-- <div v-for="plan in plansStore">
      <img :src="plan.icon" alt="">
      <p>{{ plan.title }}</p>
      <p>monthly: {{ plan.price.mo }}</p>
      <p>yearly: {{ plan.price.yr }}</p>
    </div> -->

    <!-- <input type="checkbox" :checked="isChecked"> -->
    <div class="duration">
      <p>Monthly</p>
      <button @click="check()" :class="[!isChecked ? 'yearly' : 'monthly', 'sbtn']">
      </button>
      <p>Yearly</p>
    </div>

    <div class="-gbtn">
      <button @click="router.back()" class="back-btn">Go Back</button>
      <router-link :to="isValid ? {name: 'addOn'} : '' " class="btn">
        <button>Next Step</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .head {
    margin-bottom: clampf(24, 780, 32);
  }

  .plans {
    display: grid;
    grid-template-columns: 1fr;
    gap: rem(16);
  }

  .plan {
    background-color: var(--clr-neutral-w);
    padding: 16px;
    border: 1px solid var(--clr-neutral-l-gray);
    border-radius: rem(8);
    line-height: 1;

    display: flex;
    align-items: start;
    gap: rem(16);

    cursor: pointer;

    .yr {
      display: flex;
      flex-direction: column;
    }
  }

  .duration {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: rem(24);
    margin-block: rem(32);
  }

  .active {
    background-color: var(--clr-neutral-magnolia);
    border-color: var(--clr-primary-purplish-blue);
  }

  .sbtn {
    width: rem(40);
    height: rem(20);
    background-color: var(--clr-primary-marine-blue);
    border-radius: 50px;
  }

  .monthly,
  .yearly {
    position: relative;

    &::before {
      content: '';
      display: block;
      position: absolute;
      width: 18px;
      height: 18px;
      background-color: black;
      border-radius: 50%;
      transition: all 300ms ease-in-out;
    }
  }
  
  .monthly {
    &::before {
      top: 1px;
      right: 3px;
    }
  }
  .yearly {
    &::before {
      top: 1px;
      left: 3px;
    }
  }
</style>