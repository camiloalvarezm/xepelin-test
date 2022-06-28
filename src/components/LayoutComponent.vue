<template>
    <div class="rounded-3xl my-10 container lg:mx-auto p-5 lg:p-10 max-w-full">
        <slot name="content"></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'LayoutComponent',
});
</script>

<style scoped>
.container {
    max-width: 1200px;
}
</style>
