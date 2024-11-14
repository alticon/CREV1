<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useCalculatorStore } from '../../stores/calculator'
import ResultCard from './ResultCard.vue'

const { t } = useI18n()
const store = useCalculatorStore()
const { calculateRoi } = storeToRefs(store)
</script>

<template>
  <div class="card">
    <h2 class="text-xl font-semibold text-primary mb-4">
      <i class="pi pi-chart-bar mr-2"></i>
      {{ t('calculator.sections.roiAnalysis') }}
    </h2>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="bg-indigo-50 p-8 rounded-lg text-center">
        <h3 class="text-lg text-gray-600 mb-2">{{ t('calculator.results.firstYearRoi') }}</h3>
        <p class="text-4xl font-bold text-indigo-600">
          {{ calculateRoi.firstYearRoi.toFixed(1) }}%
        </p>
      </div>
      
      <div class="bg-green-50 p-8 rounded-lg text-center">
        <h3 class="text-lg text-gray-600 mb-2">{{ t('calculator.results.paybackPeriod') }}</h3>
        <p class="text-4xl font-bold text-green-600">
          {{ calculateRoi.paybackPeriod.toFixed(1) }} {{ t('common.months') }}
        </p>
      </div>
      
      <div class="bg-purple-50 p-8 rounded-lg text-center">
        <h3 class="text-lg text-gray-600 mb-2">{{ t('calculator.results.npv') }}</h3>
        <p class="text-4xl font-bold text-purple-600">
          {{ new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK' }).format(calculateRoi.npv) }}
        </p>
      </div>
    </div>
  </div>
</template>