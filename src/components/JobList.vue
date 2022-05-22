<template>
  <div class="w-3/5 mx-auto flex flex-col justify-center">
    <div
      v-show="jobsObject.jobs.length < 1"
      class="font-bold text-2xl text-center"
    >
      Here is nothing
    </div>
    <div v-if="jobsObject.status === 'loading'">
      <loader v-for="i in 10" :key="i" />
    </div>
    <div class="jobs-list" v-else>
      <job-item v-for="job in jobsObject.jobs" :job="job" :key="job.id" />
    </div>
    <button
      v-show="jobsObject.jobs.length > 1"
      @click="loadMoreJobs()"
      class="self-center border border-chocolate py-2 px-4 rounded-md bg-linen mt-6"
    >
      Load More
    </button>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import store from '@/store';
import { Job } from '@/types';
import { defineComponent } from '@vue/runtime-core';
import JobItem from './JobItem.vue';
import Loader from './Loader.vue';

export default defineComponent({
  components: { JobItem, Loader },
  name: 'JobList',
  data() {
    return {
      limit: 50,
    };
  },
  methods: {
    loadMoreJobs() {
      this.limit += 10;

      const q = {
        limit: this.limit,
        ...this.$route.query,
      };

      router.push({
        query: q,
      });

      store.dispatch('getJobs', q);
    },
  },
  computed: {
    jobsObject(): { jobs: Job[]; status: string } {
      return { jobs: store.state.jobs, status: store.state.jobsStatus };
    },
  },
});
</script>

<style lang="scss" scoped>
.jobs-list {
  animation: fadeIn 2s;
}
</style>
