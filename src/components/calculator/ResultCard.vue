<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineProps<{
  label: string
  value: number
  format?: 'currency' | 'number' | 'percent'
  suffix?: string
}>()

const formatValue = (value: number, format?: string, suffix?: string) => {
  if (format === 'currency') {
    return new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK' }).format(value)
  }
  if (format === 'percent') {
    return `${value.toFixed(1)}%`
  }
  return `${value.toFixed(1)}${suffix ? ' ' + suffix : ''}`
}
</script>

<template>
  <div class="text-center">
    <p class="text-gray-600">{{ label }}</p>
    <p class="text-2xl font-bold text-[#004B87]">
      {{ formatValue(value, format, suffix) }}
    </p>
  </div>
</template>