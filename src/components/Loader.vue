<template>
  <div class="bg-gray-200 rounded-3xl p-5 mb-5 w-full mx-auto">
    <div class="flex">
      <div class="rounded-full h-12 w-12 mr-4 background"></div>
      <div class="flex-1 space-y-4 py-2">
        <div class="h-4 rounded w-full background"></div>
        <div class="h-4 rounded w-full background"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="scss" scoped>
$base-color: #ccc;
$shine-color: #e8e8e8;
$animation-duration: 2.6s;

.background {
  background-image: linear-gradient(
    90deg,
    $base-color 0px,
    $shine-color 40px,
    $base-color 80px
  );
  background-size: 600px;
  animation: shine-lines $animation-duration infinite linear;
}

@keyframes shine-lines {
  0% {
    background-position: -100px;
  }

  40%,
  100% {
    background-position: 735px;
  }
}
</style>
