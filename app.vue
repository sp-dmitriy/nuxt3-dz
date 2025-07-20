<script setup lang="ts">
import "~/assets/styles/main.css"
</script>

<template>
  <NuxtLayout>
    <NuxtPage  />
  </NuxtLayout>
</template>

<style scoped>
.page {
  &-enter-active,
  &-leave-enter {
    transition: akk 0.3s;
  }
  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}
</style>