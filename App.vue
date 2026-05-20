<script setup></script>

<template>
  <header>
    <nav class="navbar">
      <div class="nav-links">
      <router-link to="/" class="nav-item">Главная</router-link>
      <router-link to="/person" class="nav-item">Персонажи</router-link>
      <router-link to="/feedback" class="nav-item">Обратная связь</router-link>
      </div>
    </nav>
    <router-view/>
</header>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&display=swap');
h1 {
  font-family: 'Montserrat', serif;
  font-weight: 700;
  letter-spacing: 5px;
  color: #7ee7d4;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.445);
  text-align: center;
}
p {
  font-family: 'Montserrat', serif;
  font-weight: 70;
  color: #7ee7d4;
  text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.445);
  text-align: center;
}
body {
  background: url('./assets/background.jpeg') center / cover no-repeat fixed;
}

.navbar {
  display: flex;
  justify-content: space-around;
  padding: 1rem 2rem;
}
.nav-links {
  display: flex;
  gap: 3rem;
}
.nav-item {
  color: #797979;
  font-family: 'Montserrat', serif;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.3s /* Устанавливает скорость смены цвета */ 
}
.nav-item:hover {
  color: #7ee7d4; /*Устанавливает новый цвет*/
}
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
  text-align: center;
}
</style>
