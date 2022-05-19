<template>
  <button>Order by {{ title }}</button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';

export default defineComponent({
  name: 'SortButton',
  props: ['title'],
  data() {
    return {};
  },
});
</script>

<style scoped>
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: filter 0.3s;
}
button:hover {
  transition: filter 0.3s;
  filter: brightness(0.95);
}
</style>
