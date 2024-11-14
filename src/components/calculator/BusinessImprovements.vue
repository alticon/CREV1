<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import InputField from './InputField.vue'

const { t } = useI18n()
</script>

<template>
  <div class="card">
    <h2 class="text-xl font-semibold text-primary mb-4">
      <i class="pi pi-chart-line mr-2"></i>
      {{ t('calculator.sections.businessImprovements') }}
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="space-y-4">
        <h3 class="font-medium">{{ t('calculator.sections.improvedBids') }}</h3>
        <InputField
          :label="t('calculator.inputs.savingsPerBid')"
          prefix="kr"
          type="number"
        />
        <InputField
          :label="t('calculator.inputs.numberOfBids')"
          type="number"
        />
      </div>
      
      <div class="space-y-4">
        <h3 class="font-medium">{{ t('calculator.sections.betterDecisions') }}</h3>
        <InputField
          :label="t('calculator.inputs.savingsPerDecision')"
          prefix="kr"
          type="number"
        />
        <InputField
          :label="t('calculator.inputs.numberOfDecisions')"
          type="number"
        />
      </div>
    </div>
  </div>
</template>