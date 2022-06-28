<template>
  <layout-component>
    <template v-slot:content>
      <div class="bg-white rounded-3xl p-5 lg:p-10 mb-5 lg:mb-10">
        <h1 class="text-center mb-7 text-xl lg:text-3xl font-semibold">Ingresos y Egresos de una Empresa</h1>
        <div class="flex flex-col items-center gap-2 lg:flex-row lg:justify-center ">
          <label for="company-id" class="w-full text-left font-semibold lg:w-auto">Id de la Empresa</label>
          <input v-model="companyId" type="number" placeholder="Ej: 142"
            class="border-2 border-slate-300 rounded-md w-full lg:w-8/12 px-3 max-w-xs h-10" id="company-id">
          <label for="initial-date" class="w-full text-left font-semibold lg:w-auto">Fecha desde</label>
          <input v-model="initialDate" type="date"
            class="border-2 border-slate-300 rounded-md w-full lg:w-8/12 px-3 max-w-xs h-10" id="initial-date">
        </div>
        <div class="text-center mt-3">
          <button @click="calculateReport"
            class="rounded-md bg-red-500 px-3 text-white font-semibold h-10 w-full md:w-48"><i
              class="fas fa-calculator"></i>
            Calcular</button>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row bg-white rounded-3xl p-5 lg:p-10">
        <div class="flex flex-col gap-4">
          <h2 class="font-semibold text-lg">Balance para 7 días</h2>
          <div class="flex flex-col">
            <span class="font-semibold"><i class="fas fa-arrow-up text-green-500"></i> Ingresos: <span class="font-normal">${{ getBalanceForSevenDays.entries }}</span> </span>
            <span class="font-semibold"><i class="fas fa-arrow-down text-red-500"></i> Egresos: <span class="font-normal">${{ getBalanceForSevenDays.expenses }}</span> </span>
          </div>
          <h2 class="font-semibold text-lg">Balance para 14 días</h2>
          <div class="flex flex-col">
            <span class="font-semibold"><i class="fas fa-arrow-up text-green-500"></i> Ingresos: <span class="font-normal">${{ getBalanceForFourteenDays.entries }}</span> </span>
            <span class="font-semibold"><i class="fas fa-arrow-down text-red-500"></i> Egresos: <span class="font-normal">${{ getBalanceForFourteenDays.expenses }}</span> </span>
          </div>
          <h2 class="font-semibold text-lg">Balance para 30 días</h2>
          <div class="flex flex-col">
            <span class="font-semibold"><i class="fas fa-arrow-up text-green-500"></i> Ingresos: <span class="font-normal">${{ getBalanceForThirtyDays.entries }}</span>  </span>
            <span class="font-semibold"><i class="fas fa-arrow-down text-red-500"></i> Egresos: <span class="font-normal">${{ getBalanceForThirtyDays.expenses }}</span>  </span>
          </div>
        </div>
      </div>
    </template>
  </layout-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutComponent from '@/components/LayoutComponent.vue'
import { mapGetters, mapMutations } from 'vuex';

export default defineComponent({
  name: 'BusinessBalance',
  components: {
    LayoutComponent
  },
  data() {
    return {
      companyId: null,
      initialDate: null
    }
  },
  computed: {
    ...mapGetters(['getBalanceForSevenDays', 'getBalanceForFourteenDays', 'getBalanceForThirtyDays'])
  },
  methods: {
    ...mapMutations(['updateCompanyId', 'updateInitialDate']),
    calculateReport(): void {
      if (!this.companyId === null || !this.initialDate) alert('Complete todos los campos')
      this.updateCompanyId(this.companyId)
      this.updateInitialDate(this.initialDate)
    }
  }
});
</script>
