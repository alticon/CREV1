<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import InputField from './InputField.vue'

const { t } = useI18n()
</script>

<template>
  <div class="card">
    <h2 class="text-xl font-semibold text-primary mb-4">
      <i class="pi pi-user mr-2"></i>
      {{ t('calculator.sections.customerInfo') }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <InputField
        :label="t('calculator.inputs.customerName')"
        type="text"
      />
      <InputField
        :label="t('calculator.inputs.buildingName')"
        type="text"
      />
      <InputField
        :label="t('calculator.inputs.address')"
        type="text"
        class="md:col-span-2"
      />
    </div>
  </div>
</template>