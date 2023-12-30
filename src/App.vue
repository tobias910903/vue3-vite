<script setup lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'

import demoStore from '@/store/modules/demoStore'
const userStore = demoStore()
console.log(userStore)

import {getInfo} from '@/api/system'
getInfo({name: 123}).then((res)=>{
  console.log(res)
})

</script>

<template>
  <HelloWorld msg="Vite + Vue" />

  <br />
  <router-link to="/home"><el-button type="primary">home 页面</el-button></router-link>
  &nbsp;
  <router-link to="/test"><el-button type="primary">test 页面</el-button></router-link>


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
