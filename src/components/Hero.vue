<template>
  <div class="text-center pb-10">
    <h1 v-if="isCategoryPage">
      Find a Remote Job in {{ getCategoryBySlug($route.params.slug) }}
    </h1>
    <h1 v-else>Want to break up with your office?</h1>
    <p class="mb-6">
      The #2 Remote Work Community, Remote Jobs after
      <a target="_blank" href="https://remotive.com/">Remotive</a>.
    </p>

    <div
      class="inline-flex items-center py-3 px-4 bg-white rounded-md relative w-1/2 border border-champange-pink"
    >
      <div class="grow">
        <form @submit.prevent="getJobsBySearch">
          <label for="search">
            <img
              class="w-4 h-4 absolute top-1/2 -translate-y-1/2"
              src="@/assets/search.svg"
              alt="search"
            />
            <input
              class="bg-transparent outline-none pl-6 pr-2 w-full border-r border-champange-pink"
              type="text"
              name="search"
              placeholder="Search Remote Jobs"
              v-model="searchTerm"
            />
          </label>
        </form>
      </div>
      <div>
        <select
          class="pl-2 outline-none"
          @change="getJobsByCategory"
          ref="select"
        >
          <option value="">All Categories</option>
          <option
            v-for="category in categories"
            :value="category.slug"
            :key="category.id"
            :selected="category.slug === selected"
          >
            {{ category.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import router from '@/router';
import store from '@/store';
import { Category } from '@/types';
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'Hero',
  data() {
    return {
      searchTerm: '',
    };
  },
  methods: {
    getJobsByCategory(e: any) {
      const q = {
        ...this.queryParams,
        category: e.target.value,
      };
      router.push({
        query: q,
      });
      store.dispatch('getJobs', q);
    },
    getJobsBySearch() {
      const q = {
        ...this.queryParams,
        search: this.searchTerm,
      };

      router.push({
        query: q,
      });
      store.dispatch('getJobs', q);
    },
    getCategoryBySlug(slug: string | string[]): string {
      const category = store.state.categories.find((c) => c.slug === slug)
        ?.name as string;
      return category;
    },
  },

  computed: {
    categories(): Category[] {
      return store.state.categories;
    },
    queryParams() {
      return this.$route.query;
    },
    isCategoryPage() {
      return this.$route.path.includes('remote-jobs');
    },
    selected() {
      return this.$route.params.slug;
    },
  },
});
</script>

<style></style>
