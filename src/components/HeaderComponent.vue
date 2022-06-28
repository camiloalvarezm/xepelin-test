<template>
  <header class="bg-slate-200 p-4 w-full">
    <div class="flex flex-col items-center justify-between lg:flex-row lg:w-8/12 max-w-7xl lg:mx-auto">
      <div>
        <router-link to="/">
          <img alt="xepelin-logo" src="../assets/xepelin-logo.png" class="w-28">
        </router-link>
      </div>
      <nav class="text-slate-400 font-semibold">
        <router-link to="/" class="hover:text-red-500">Balance Compañia</router-link>
        <router-link to="/top-ten-clients" class="hover:text-red-500">Top 10 Clientes</router-link>
      </nav>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
  setup() {
    return {
    }
  }
});
</script>

<style scoped>
nav>*:not(:last-child) {
  margin-right: 40px;
}
</style>
