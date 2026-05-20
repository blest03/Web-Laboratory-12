<script setup>
import { computed } from 'vue'
import { useFormStore } from '@/stores/formStore'

const store = useFormStore()
const isFormValid = computed(() => {
  return store.email.includes('@') && store.consent === true
})
</script>

<template>
    <div class="layout">
        <aside class="sidebar left-sidebar"><!-- Боковой контейнер (левый) --></aside>
        <main class="main-content">
            <div class="title-block"><h1>ОБРАТНАЯ СВЯЗЬ</h1></div>
            <section class="text-block">
              <div>
                <p>Введите ваш почтовый адрес</p>
                    <input
                      v-model="store.email" 
                      type="email" 
                      placeholder="example@mail.com"
                      required 
                    />
              </div>
              <div>
              <label>Я хочу получать новости, специальные предложения и другую информацию.
                 <input type="checkbox" v-model="store.consent" /> 
                 </label>
              </div>
              
                  <button type="submit" :disabled="!isFormValid" @:click="store.submitForm()">Отправить</button>
                  <p>{{ store.responseData }}</p>
            </section>
        </main>
        <aside class="sidebar right-sidebar"><!-- Боковой контейнер (правый)  --></aside>
        </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');

label {
  font-family: 'Montserrat', serif;
  font-weight: 10;
  color: #7ee7d4;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.445);
}

button {
  cursor: pointer;
  padding: 0.9rem 1.2rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid transparent;
  border-radius: 14px;
  outline: none;
  transition: all 0.3s ease;
  box-sizing: border-box;
  color: #1a3b38;
}
button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
input[type="email"] {
  width: 65%;
  padding: 0.9rem 1.2rem;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid transparent;
  border-radius: 14px;
  outline: none;
  transition: all 0.3s ease;
  box-sizing: border-box;
  color: #1a3b38;
}

</style>