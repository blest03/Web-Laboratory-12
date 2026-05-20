import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', {
  state: () => ({ // начальные данные(состояния)
    email: '',
    consent: false,
    responseData: null,
    monsters: null,
  }),
  actions: {
    async submitForm() { 
      this.responseData = null;
        const payload = {
          email: this.email,
          consent: this.consent,
        }
        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        })
        this.responseData = await res.json()
      return this.responseData  
    },
    async fetchMonsters() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        this.monsters = await response.json() 
        console.log(this.monsters)
    }
  }
})