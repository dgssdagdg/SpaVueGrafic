<script setup>
import { RouterLink, RouterView } from 'vue-router'
import NavBarVue from '@/components/NavBar.vue'

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
