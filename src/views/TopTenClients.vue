<template>
  <layout-component>
    <template v-slot:content>
      <div class="bg-white rounded-3xl p-5 lg:p-10 mb-5 lg:mb-10">
        <h1 class="text-center mb-7 text-xl lg:text-3xl font-semibold">Top 10 clientes con mayor monto de venta</h1>
        <div class="flex flex-col items-center gap-2 lg:flex-row lg:justify-center ">
          <label for="company-id" class="w-full text-left font-semibold lg:w-auto">Id de la Empresa</label>
          <input v-model="companyId" type="number" placeholder="Ej: 142"
            class="border-2 border-slate-300 rounded-md w-full lg:w-8/12 px-3 max-w-xs h-10" id="company-id">
          <label for="initial-date" class="w-full text-left font-semibold lg:w-auto">Fecha inicio</label>
          <input v-model="initialDate" type="date"
            class="border-2 border-slate-300 rounded-md w-full lg:w-8/12 px-3 max-w-xs h-10" id="initial-date">
          <label for="end-date" class="w-full text-left font-semibold lg:w-auto">Fecha final</label>
          <input v-model="endDate" type="date"
            class="border-2 border-slate-300 rounded-md w-full lg:w-8/12 px-3 max-w-xs h-10" id="end-date">
        </div>
        <div class="text-center mt-3">
          <button @click="calculateClients"
            class="rounded-md bg-red-500 px-3 text-white font-semibold h-10 w-full md:w-48"><i
              class="fas fa-search"></i>
            Buscar</button>
        </div>
      </div>

      <div class="flex flex-col lg:flex-row bg-white rounded-3xl p-5 lg:p-10">
        <div class="w-full overflow-x-scroll grid grid-cols-4 o-border">
          <h5 class="font-semibold">Cliente</h5>
          <h5 class="font-semibold">Venta Total</h5>
          <h5 class="font-semibold"># de Invoices</h5>
          <h5 class="font-semibold">Venta promedio por invoice</h5>
          <template v-for="client, index in getTopTenClients" :key="index">
            <span>{{ client.clientId }}</span>
            <span>${{ client.totalAmount }}</span>
            <span>{{ client.numberInvoices }}</span>
            <span>${{ Math.round(client.averageSale) }}</span>
          </template>
        </div>
        <span v-if="getTopTenClients.length === 0" class="w-full font-semibold text-red-500 text-center mt-2 text-lg">Sin registros</span>
      </div>
    </template>
  </layout-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutComponent from '@/components/LayoutComponent.vue'
import { mapGetters, mapMutations } from 'vuex';

export default defineComponent({
  name: 'TopTenClients',
  components: {
    LayoutComponent
  },
  data() {
    return {
      companyId: null,
      initialDate: null,
      endDate: null
    }
  },
  computed: {
    ...mapGetters(['getTopTenClients'])
  },
  methods: {
    ...mapMutations(['updateCompanyId', 'updateInitialDate', 'updateEndDate']),
    calculateClients(): void {
      if (!this.companyId === null || !this.initialDate || !this.endDate) alert('Complete todos los campos')
      this.updateCompanyId(this.companyId)
      this.updateInitialDate(this.initialDate)
      this.updateEndDate(this.endDate)
    }
  }
});
</script>

<style scoped>
.o-border>* {
  @apply border p-3 text-center w-auto
}
</style>
