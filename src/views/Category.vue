<template>
  <main class="py-10">
    <job-list />
  </main>
</template>

<script lang="ts">
import JobList from '@/components/JobList.vue';
import store from '@/store';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  components: { JobList },
  name: 'JobView',
  mounted() {
    const queryParams = { limit: 50, category: this.$route.params.slug };
    store.dispatch('getJobs', queryParams);
  },
  unmounted() {
    const queryParams = { limit: 50, ...this.$route.query };
    store.dispatch('getJobs', queryParams);
  },
});
</script>

<style></style>
