<script>
  import { RouterLink } from 'vue-router'
  import useValidate from '@vuelidate/core'
  import { required, email, minLength, sameAs, helpers } from '@vuelidate/validators'
  import { reactive, computed } from 'vue'

  export default {
    name: 'HomeView',
    setup() {
      const state = reactive({
        name: '',
        email: '',
        phoneNum: '',
      })

      const isRequired = (value) => value == ' '
      const mustBeValid = (value) => value.length === 10

      const rules = computed(() => {
        return {
          name: { 
            required, 
            },
          email: { 
            required, 
            email,
            },
          phoneNum: { 
            required, 
            mustBeValid: helpers.withMessage(
              'Must be valid phone number', 
              mustBeValid
            )
            },
        }
      })

      const v$ = useValidate(rules, state)

      return { v$, state }
    },
    data() {
      return {
        isDisable: true,
      }
    },
    methods: {
      submitForm() {
        this.v$.$validate()

        if(!this.v$.$error) {
          this.isDisable = false
        } else { 
          this.isDisable = true
        }
      },
    }
  }
</script>

<template>
  <div class="container">
    <div class="head">
      <h1 class="heavy">Personal info</h1>
      <p class="medium">Please provide your name, email address, and phone number.</p>
    </div>

    <form action="" class="form">
        <legend class="sr-only">Validation</legend>

        <!-- User Name -->
        <div class="form-field">
          <div class="flex">
            <label class="light">Name</label>

            <span v-if="v$.name.$error" class="danger">
              {{ v$.$errors[0].$message }}
            </span>
          </div>
          <input 
            type="text" 
            v-model="state.name" 
            placeholder="e.g.Stephen King"
            class="border"
          />
        </div>

        <!-- User Email -->
        <div class="form-field">
          <div class="flex">
            <label class="light">Email</label>

            <span v-if="v$.email.$error" class="danger">
              {{ v$.email.$errors[0].$message }}
            </span>
          </div>
          <input 
            type="text" 
            v-model="state.email" 
            placeholder="e.g.stephenking@lorem.com"
            class="border"
          />
        </div>

        <!-- Phone Number -->
        <div class="form-field">
          <div class="flex">
            <label class="light">Phone Number</label>

            <span v-if="v$.phoneNum.$error" class="danger">
              {{ v$.phoneNum.$errors[0].$message }}
            </span>
          </div>
          <input 
            type="text" 
            v-model="state.phoneNum" 
            placeholder="e.g.+1 234 567 890"
            class="border"
          />
        </div>

        <div class="-gbtn">
          <router-link :to="isDisable ? '' : {name: 'plan'}" class="btn">
            <button 
              type="submit" 
              @click="submitForm"
            >
              Next Step
            </button>
          </router-link>
        </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .flex {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .head {
    margin-bottom: clampf(24, 780, 32);
  }

  .form {
    &-field:not(:last-child) {
      margin-bottom: rem(12);
    }

    &-field input {
      width: 100%;
      outline: 0;
      padding:rem(10);
      border-radius: rem(6);

      &::placeholder {
        color: var(--clr-neutral-cool-gray);
        font-weight: 500;
      }
    }
  }
</style>