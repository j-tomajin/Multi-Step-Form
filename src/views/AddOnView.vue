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
            title: 'Online service',
            desc: 'Access to multiplayer games',
            price: {
              mo: 1,
              yr: 10,
            },
            checked: false,
          },
          {
            title: 'Larger storage',
            desc: 'Extra 1TB of cloud save',
            price: {
              mo: 2,
              yr: 20,
            },
            checked: false,
          },
          {
            title: 'Customizable Profile',
            desc: 'Custom theme on your profile',
            price: {
              mo: 2,
              yr: 20,
            },
            checked: false,
          },
        ]
      }
    },
    setup() {
      const formStore = useFormStore()

      const { isChecked } = storeToRefs(formStore)

      const router = useRouter()

      return { router,
        // states
        isChecked,
      }
    },
    methdos: {
      checked() {

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

        <div v-for="(ao, i) in addOns" :key="i" :class="[ao.checked ? 'active' : '', 'form-field']">
          <input type="checkbox" :id="`checkbox${i}`" class="sr-only">
          <label :for="`checkbox${i}`" @click="ao.checked = !ao.checked" >
            <div class="">
              <p>{{ ao.title }} </p>
              <p>{{ ao.desc }}</p>
              <p v-if="isChecked">{{ ao.price.yr }}</p>
              <p v-else>{{ ao.price.mo }}</p>
            </div>
          </label>
        </div>
      </fieldset>
    </form>

    <!-- BUTTON ROUTES -->
    <div class="-gbtn">
      <button @click="router.back()" class="back-btn">Go Back</button>
      <router-link :to="{name: 'final'}" class="btn">
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

  form {

    fieldset {
      border: 0;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: rem(16);
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