<template>
  <main class="py-10">
    <job-list />
  </main>
</template>

<script lang="ts">
import JobList from '@/components/JobList.vue';
import router from '@/router';
import { defineComponent } from '@vue/runtime-core';
export default defineComponent({
  name: 'Home',
  components: { JobList },
  mounted() {
    const queryParams = { limit: 50, ...this.$route.query } || { limit: 50 };
    router.push({ query: queryParams });
  },
});
</script>

<style></style>
