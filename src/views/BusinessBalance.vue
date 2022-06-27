<template>
  <layout-component>
    <template v-slot:content>
      <h1 class="text-center mb-7 text-xl lg:text-3xl">Ingresos y Egresos de una Compañía</h1>
      <div class="flex justify-between lg:justify-evenly">
        <input type="number" placeholder="Ej: 345, 678, 345"
          class="border-2 border-slate-300 rounded-md w-8/12 px-3 max-w-xs h-10">
        <button class="rounded-md bg-red-500 px-3 text-white font-semibold"><i class="fas fa-search"></i>
          Buscar</button>
      </div>
    </template>
  </layout-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutComponent from '@/components/LayoutComponent.vue'

export default defineComponent({
  name: 'BusinessBalance',
  components: {
    LayoutComponent
  },
});
</script>
