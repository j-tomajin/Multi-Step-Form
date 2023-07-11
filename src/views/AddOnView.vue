<script>
  import { RouterLink, useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useFormStore } from '../store/FormStore'

  export default {
    name: 'AddOnView',
    data() {
      return {
        addOns: [
          {
            id: 1,
            title: 'Online service',
            desc: 'Access to multiplayer games',
            price: {
              mo: 1,
              yr: 10,
            },
            checked: false,
          },
          {
            id: 2,
            title: 'Larger storage',
            desc: 'Extra 1TB of cloud save',
            price: {
              mo: 2,
              yr: 20,
            },
            checked: false,
          },
          {
            id: 3,
            title: 'Customizable Profile',
            desc: 'Custom theme on your profile',
            price: {
              mo: 2,
              yr: 20,
            },
            checked: false,
          },
        ],
        isValid: false,
      }
    },
    setup() {
      const formStore = useFormStore()

      const { isChecked, addOnStore, plansStore } = storeToRefs(formStore)
      const { getTotal } = formStore

      const router = useRouter()

      return { router,
        // states
        isChecked, addOnStore,

        // actions
        getTotal, plansStore
      }
    },
    methods: {
      checkedF(id) {
        this.addOns = this.addOns.map((ao) => ao.id === id ? { ...ao, checked: !ao.checked } : ao)
      },
      
      valAdd() {
        this.addOnStore = this.addOns.filter((ao) => ao.checked)
        if(this.addOnStore.length === 0) {
          this.isValid = false
        } else {
          this.isValid = true 
        }
      }
    }
  }
</script>

<template>
  <div class="container">
    <!-- HEAD -->
    <div class="head">
      <h1 class="heavy">Pick add-ons</h1>
      <p class="medium">Add-ons help enhance your gaming experience.</p>
    </div>

    <!-- FORM CHECKBOXES -->
    <form>
      <fieldset>
        <legend class="sr-only">CHECKBOX</legend>

        <div v-for="ao in addOns" :key="ao.id" :class="[ao.checked ? 'active' : '', 'form-field']">
          <input type="checkbox" :id="`checkbox${ao.id}`" class="sr-only">
          <label :for="`checkbox${ao.id}`" @click="checkedF(ao.id)" >
            <div class="">
              <h2 class="heavy">{{ ao.title }}</h2>
              <p class="medium">{{ ao.desc }}</p>
            </div>

            <div class="price light">
              <h3 v-if="isChecked">${{ ao.price.yr }}/yr</h3>
              <h3 v-else>${{ ao.price.mo }}/mo</h3>
            </div>
          </label>
        </div>
      </fieldset>
    </form>

    <!-- BUTTON ROUTES -->
    <div class="-gbtn">
      <button @click="router.back()" class="back-btn">Go Back</button>
      <router-link :to="isValid ? {name: 'final'} : ''" class="btn">
        <button @click="valAdd(), getTotal()">Next Step</button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .head {
    margin-bottom: clampf(24, 780, 32);
  }

  form {

    fieldset {
      border: 0;
      display: flex;
      flex-direction: column;
      justify-content: center;      
      gap: rem(16);
      padding: 0;
      margin: 0;
    }
  }

  .form-field {
    border: 1px solid var(--clr-neutral-l-gray);
    border-radius: rem(8);
    line-height: 1;
    padding: rem(16);
    
    label {
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: rem(12);
      border-radius: rem(3);

      h2 {
        font-size: clampf(18, 780, 24);
        margin-bottom: rem(8);
      }

      h3 {
        font-weight: 400;
      }

      .price {
        margin-left: auto;
      }
    }

    label::before {
      content: '';
      display: block;
      width: 20px;
      height: 20px;
      border-radius: inherit;
      outline: 1px solid var(--clr-neutral-l-gray);
      outline-offset: 1px;
    }
  }

  .active {
    border-color: var(--clr-primary-marine-blue);
    background-color: var(--clr-neutral-alabaster);

    & input[type="checkbox"]:checked ~ label::before {
      background-color: var(--clr-primary-marine-blue);
      outline-color: var(--clr-primary-marine-blue);
    }
  }
</style>