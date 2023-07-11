import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFormStore = defineStore('form-store', {
  state: () => {
    return { 
      // states here 
      isChecked: ref(false),
      plansStore: ref([
        {
          icon: '',
          title: 'asd',
          price: {
            mo: 0,
            yr: 0,
          }
        }
      ]),
      addOnStore: ref([]),
      totalMo: ref(0),
      totalYr: ref(0),
    }
  },
  getters: {
    // getters here
  },
  actions: {
    // actions here
    check() {
      this.isChecked = !this.isChecked
    },
    getTotal() {
      let AddOnTotalMo = this.addOnStore.map(ao => ao.price.mo).reduce((prev, cur) => prev + cur, 0)
      let planTotalMo = this.plansStore.map(p => p.price.mo).reduce((prev, cur) => prev + cur, 0)

      let AddOnTotalYr = this.addOnStore.map(ao => ao.price.yr).reduce((prev, cur) => prev + cur, 0)
      let planTotalYr = this.plansStore.map(p => p.price.yr).reduce((prev, cur) => prev + cur, 0)


      this.totalMo = eval(
        planTotalMo + AddOnTotalMo
      )
      
      this.totalYr = eval(
        planTotalYr + AddOnTotalYr
      )
    }
  }
})