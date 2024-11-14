<script setup lang="ts">
defineProps<{
  label: string
  modelValue?: number
  prefix?: string
  suffix?: string
  type?: 'text' | 'number'
}>()

defineEmits<{
  (e: 'update:modelValue', value: number): void
}>()
</script>

<template>
  <div>
    <label class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </label>
    <div class="relative">
      <span v-if="prefix" class="absolute left-3 top-2 text-gray-500">{{ prefix }}</span>
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', Number(($event.target as HTMLInputElement).value))"
        :type="type || 'text'"
        class="input-field"
        :class="{ 'pl-10': prefix, 'pr-16': suffix }"
      />
      <span v-if="suffix" class="absolute right-3 top-2 text-gray-500">{{ suffix }}</span>
    </div>
  </div>
</template>