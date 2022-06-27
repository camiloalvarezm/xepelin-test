<template>
  <layout-component>
    <template v-slot:content>
      <h1>To ten clients</h1>
    </template>
  </layout-component>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LayoutComponent from '@/components/LayoutComponent.vue'

export default defineComponent({
  name: 'TopTenClients',
  components: {
    LayoutComponent
  },
});
</script>
