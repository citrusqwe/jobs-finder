<template>
  <div>
    <div
      class="flex p-5 rounded-3xl mb-3 bg-pale-silver group"
      @click="popup = !popup"
    >
      <div class="mr-5">
        <img class="job-icon" :src="job.company_logo" :alt="job.company_name" />
      </div>
      <div class="grow">
        <div class="flex items-center mb-3">
          <h2 class="job-title">
            {{ job.title }}
          </h2>
          <span class="mx-2 font-bold">•</span>
          <span>{{ job.company_name }}</span>
          <span
            class="ml-auto cursor-pointer opacity-0 transition group-hover:opacity-100"
          >
            <img src="@/assets/arrow-down.svg" alt="arrow-down" />
          </span>
        </div>
        <div class="flex items-center text-sm">
          <span class="mr-4 flex items-center bg-desert-sand rounded-3xl p-1">
            <img
              class="w-4 h-4 mr-2"
              src="@/assets/worldwide.svg"
              alt="location"
            />
            {{ job.candidate_required_location }}</span
          >
          <div
            v-show="job.salary"
            class="inline-flex items-center justify-center py-1 px-2 mr-2 rounded-2xl bg-chocolate text-champange-pink"
          >
            <img class="w-4 h-4 mr-1" src="@/assets/money.svg" alt="money" />
            {{ job.salary }}
          </div>
          <span
            class="relative z-10 py-[2px] px-2 rounded-2xl border border-chocolate transition-opacity hover:opacity-70"
          >
            <router-link
              :to="`/remote-jobs/${getCategorySlug(job.category) || 'none'}`"
            >
              {{ job.category }}
            </router-link>
          </span>
        </div>
      </div>
    </div>
    <div class="p-6 bg-pale-silver rounded-md mb-5 animatedIn" v-show="popup">
      <div v-html="job.description"></div>
      <div class="flex justify-between items-center mt-10">
        <a
          :href="job.url"
          target="_blank"
          class="px-4 py-2 mr-2 bg-chocolate text-champange-pink font-medium border border-transparent rounded-lg transition duration-300 hover:bg-pale-silver hover:text-chocolate hover:border-chocolate"
        >
          Apply for this postion
        </a>
        <div>
          <div class="flex items-center mb-2">
            <h4>{{ job.title }}</h4>
            <span class="mx-2 font-bold hidden md:block">•</span>
            <span>{{ job.company_name }}</span>
          </div>
          <div class="flex">
            <div
              class="flex items-center justify-center py-1 px-2 mr-2 rounded-2xl bg-chocolate text-champange-pink"
            >
              <img
                class="w-4 h-4 mr-1"
                src="@/assets/location.svg"
                alt="location"
              />
              {{ job.candidate_required_location }}
            </div>
            <span
              class="relative z-10 py-[2px] px-2 rounded-2xl border border-chocolate transition-opacity hover:opacity-70"
            >
              <router-link
                :to="`/remote-jobs/${getCategorySlug(job.category) || 'none'}`"
              >
                {{ job.category }}
              </router-link>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { Job } from '@/types';
import store from '@/store';

export default defineComponent({
  name: 'JobItem',
  props: {
    job: {
      type: Object as () => Job,
      required: true,
    },
  },
  data() {
    return {
      popup: false,
    };
  },
  methods: {
    setCurrentJob() {
      store.commit('setJob', this.job);
    },
    getCategorySlug(category: string): string {
      const slug = store.state.categories.find((c) => c.name === category)
        ?.slug as string;
      return slug;
    },
  },
});
</script>

<style lang="scss" scoped>
.animatedIn {
  animation: fadeIn 1.5s;
}
.animatedOut {
  animation: fadeOut 1.5s;
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
  border-radius: 50%;
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
