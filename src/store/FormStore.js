import { defineStore } from 'pinia'

export const useFormStore = defineStore('form-store', {
  state: () => {
    return { 
      // states here 
      isChecked: false,
      plansStore: []
    }
  },
  getters: {
    // getters here
  },
  actions: {
    // actions here
    check() {
      this.isChecked = !this.isChecked
    }
  }
})