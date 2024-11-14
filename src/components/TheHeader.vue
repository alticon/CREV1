<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <header class="bg-white shadow-sm">
    <div class="container mx-auto px-4 py-4 flex items-center justify-between">
      <div class="flex items-center">
        <div class="w-32 h-8 bg-[#004B87] text-white flex items-center justify-center rounded">
          Visual360
        </div>
        <div class="ml-4">
          <h1 class="text-xl font-semibold text-[#004B87]">{{ t('app.title') }}</h1>
          <p class="text-sm text-gray-600">{{ t('app.subtitle') }}</p>
        </div>
      </div>
    </div>
  </header>
</template>