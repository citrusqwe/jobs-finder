<template>
  <main class="py-10">
    <job-list />
  </main>
</template>

<script lang="ts">
import JobList from '@/components/JobList.vue';
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
  name: 'Home',
  components: { JobList },
});
</script>

<style></style>
