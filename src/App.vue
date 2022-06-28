<template>
  <HeaderComponent />
  <div class="mx-5">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { mapActions } from 'vuex';
import HeaderComponent from '@/components/HeaderComponent.vue'

export default defineComponent({
  name: 'App',
  components: {
    HeaderComponent,
  },
  methods: {
    ...mapActions(["loadAllInvoices"]),
  },
  mounted() {
    this.loadAllInvoices();
  }
});
</script>
<style>
body {
  @apply bg-slate-100
}
</style>
