<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-50 flex flex-col">
    <TheHeader />
    <main class="flex-grow container mx-auto px-4 py-8">
      <RouterView />
    </main>
    <TheFooter />
  </div>
</template>