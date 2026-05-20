<script setup>
import { useFormStore } from '@/stores/formStore'
const store = useFormStore()
store.fetchMonsters()
</script>

<template >
    <div class="layout">
        <aside class="sidebar left-sidebar"><!-- Боковой контейнер (левый) --></aside>
        <main class="main-content"> <!-- Основной контейнер -->
            <h1>ПЕРСОНАЖИ</h1>
            <section>
                <p>
                    Персонажи будут здесь.
                </p>
                 <div v-for="user in store.monsters" :key="user.id" style="margin-bottom: 8px;">
        <p>Имя: {{ user.name }} | Email: {{ user.email }} </p>
                 </div>
            </section>
        </main>
        <aside class="sidebar right-sidebar"><!-- Боковой контейнер (правый)  --></aside>
        </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  flex: 0 0 20%;   /* фиксированная ширина 400px */
}

.main-content {
  flex: 1;           /* займёт всё оставшееся пространство */
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
</style>