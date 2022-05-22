<template>
  <main-header />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import store from './store';
import MainHeader from './components/MainHeader.vue';
import router from './router';

export default defineComponent({
  name: 'App',
  components: { MainHeader },
  data() {
    return {};
  },
  async mounted() {
    const queryParams = { limit: 50, ...this.$route.query } || { limit: 50 };
    router.push({ query: queryParams });
    store.dispatch('getJobs', queryParams);
    store.dispatch('getCategories');
  },
});
</script>

<style lang="scss" scoped>
.container {
  padding: 30px;
}
</style>
