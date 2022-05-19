<template>
  <div class="job">
    <div class="job-header">
      <div class="job-info">
        <h2 class="job-title">
          {{ job.title }}
        </h2>
        <img class="job-icon" :src="job.company_logo" :alt="job.company_name" />
      </div>
      <a class="job-company">{{ job.company_name }}</a>
      <span>{{ job.candidate_required_location }}</span>
    </div>
    <div v-show="!!job.salary" class="job-salary">
      <img src="@/assets/money.svg" alt="rupee icon" />
      <p>{{ job.salary }}</p>
    </div>
    <div class="job-description">
      <p></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { Job } from '@/types';

export default defineComponent({
  name: 'JobItem',
  props: {
    job: {
      type: Object as () => Job,
      required: true,
    },
  },
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.job {
  max-width: 640px;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
}

.job-header {
  margin-bottom: 15px;
}

.job-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.job-title {
  font-size: 22px;
  text-transform: capitalize;
}

.job-company {
  display: block;
  margin-bottom: 5px;
  cursor: pointer;
}

.job-icon {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.job-salary {
  display: flex;

  p {
    font-weight: bold;
    margin: 10px 4px;
  }

  img {
    width: 30px;
    margin-right: 10px;
  }
}

.list-move {
  transition: all 1s;
}
</style>
