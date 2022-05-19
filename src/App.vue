<template>
  <div class="container">
    <header class="header">
      <div class="title">
        <img class="job-icon" src="@/assets/job-icon.svg" alt="job" />
        <h1>Jobs</h1>
      </div>
      <div></div>
    </header>
    <main>
      <div class="job-list">
        <transition-group name="list" tag="div">
          <job-item v-for="job in jobs" :job="job" :key="job.id" />
        </transition-group>
      </div>
    </main>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import JobItem from './components/JobItem.vue';
import { Category, Job } from '@/types';
import jobsAPI from '@/api';

export default defineComponent({
  name: 'App',
  components: { JobItem },
  data() {
    return {
      order: 'title',
      categores: [] as Category[],
      jobs: [] as Job[],
    };
  },
  methods: {
    changeFilter(filter: string) {
      this.order = filter;
    },
  },
  async mounted() {
    this.jobs = (await jobsAPI().getRemoteJobs()).jobs;
    this.categores = (await jobsAPI().getCategories()).jobs;
  },
});
</script>

<style scoped>
.container {
  padding: 30px;
}
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 40px;
}
.title {
  display: flex;
  align-items: center;
  margin-bottom: 30px;
}
.job-icon {
  width: 64px;
  height: 64px;
  margin-right: 20px;
}

.job-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.list-move {
  transition: all 0.5s;
}
</style>
