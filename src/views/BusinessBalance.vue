<template>
  <layout-component class="bg-white">
    <template v-slot:content>
      <h1 class="text-center mb-7 text-xl lg:text-3xl font-semibold">Ingresos y Egresos de una Compañía</h1>
      <div class="flex flex-col items-center gap-2 lg:flex-row lg:justify-center ">
        <label for="company-id" class="w-full text-left font-semibold lg:w-auto">Id de la Empresa</label>
        <input v-model="companyId" type="number" placeholder="Ej: 345, 678, 345"
          class="border-2 border-slate-300 rounded-md w-full lg:w-8/12 px-3 max-w-xs h-10" id="company-id">
        <label for="initial-date" class="w-full text-left font-semibold lg:w-auto">Fecha desde</label>
        <input v-model="initialDate" type="date" class="border-2 border-slate-300 rounded-md w-full lg:w-8/12 px-3 max-w-xs h-10"
          id="initial-date">
      </div>
      <div class="text-center mt-3">
        <button @click="calculateReport"
          class="rounded-md bg-red-500 px-3 text-white font-semibold h-10 w-full md:w-48"><i
            class="fas fa-calculator"></i>
          Calcular</button>
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
  data() {
    return {
      companyId: 0,
      initialDate: null
    }
  },
  methods: {
    calculateReport() {
      console.log(this.companyId, this.initialDate)
    }
  }
});
</script>
