<script setup>
import { RouterView } from 'vue-router'
import NavBarVue from '@/components/NavBar.vue'

async function useFetchData() {
  try {
    const response = await fetch('http://109.73.206.144:6969/api/incomes?dateFrom=2021-01-01&dateTo=2025-03-31&page=1&limit=25&key=E6kUTYrYwZq2tN4QEtyzsbEBk3ie');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json()
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
useFetchData()
</script>

<template>
  <div class="wrapper">
    <NavBarVue></NavBarVue>
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss">
body {
  background-color: gray;
}
.wrapper {
  min-height: 100%;
  display: flex;
  overflow: hidden;
}
.main {
  background-color: #fff;
  width: 70%;
  padding: 30px 26px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
@media(max-width: 998px) {
.wrapper {
  flex-direction: column;
}
.main {
  width: 100%;
}
}
</style>