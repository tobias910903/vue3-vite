<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

import demoStore from '@/store/modules/demoStore'
const userStore = demoStore()
console.log(userStore)
</script>

<template>
<!--  <div>-->
<!--    <a href="https://vitejs.dev" target="_blank">-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
<!--    </a>-->
<!--  </div>-->
  <HelloWorld msg="Vite + Vue" />

  <br />
  <router-link to="/a"><el-button type="primary">A页面</el-button></router-link>
  &nbsp;
  <router-link to="/b"><el-button type="primary">B页面</el-button></router-link>


  <router-view />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
