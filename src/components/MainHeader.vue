<template>
  <header class="header bg-champange-pink mb-10">
    <nav class="flex items-center justify-between mb-4 px-7 py-3">
      <router-link to="/" class="mr-5">
        <img src="@/assets/logo.svg" alt="" />
      </router-link>
      <div>Job Applicants</div>
    </nav>
    <Hero />
  </header>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import Hero from './Hero.vue';

export default defineComponent({
  name: 'MainHeader',
  components: { Hero },
});
</script>

<style lang="scss" scoped></style>
