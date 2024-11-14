<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useCalculatorStore } from '../../stores/calculator'
import InputField from './InputField.vue'
import ResultCard from './ResultCard.vue'

const { t } = useI18n()
const store = useCalculatorStore()
const { buildingSize, annualRentPerSqm, vacancyPeriod } = storeToRefs(store)

const dailyRental = computed(() => {
  return (buildingSize.value * annualRentPerSqm.value) / 365
})

const expectedReduction = computed(() => {
  return Math.round(vacancyPeriod.value * 0.3) // 30% reduction
})

const potentialSavings = computed(() => {
  return dailyRental.value * expectedReduction.value
})

const annualRentalIncome = computed(() => {
  return buildingSize.value * annualRentPerSqm.value
})
</script>

<template>
  <div class="card">
    <h2 class="text-xl font-semibold text-primary mb-4">
      <i class="pi pi-building mr-2"></i>
      {{ t('calculator.sections.buildingInformation') }}
    </h2>

    <div class="space-y-4">
      <InputField
        v-model="buildingSize"
        :label="t('calculator.inputs.buildingSize')"
        suffix="m²"
        type="number"
      />
      <InputField
        v-model="annualRentPerSqm"
        :label="t('calculator.inputs.annualRent')"
        prefix="kr"
        type="number"
      />
      <InputField
        v-model="vacancyPeriod"
        :label="t('calculator.inputs.vacancyPeriod')"
        :suffix="t('common.days')"
        type="number"
      />

      <div class="mt-6 bg-blue-50 p-4 rounded-lg">
        <h3 class="font-medium mb-2">{{ t('calculator.results.vacancyAnalysis') }}</h3>
        <div class="grid grid-cols-3 gap-4">
          <ResultCard
            :label="t('calculator.results.dailyRental')"
            :value="dailyRental"
            format="currency"
          />
          <ResultCard
            :label="t('calculator.results.expectedReduction')"
            :value="expectedReduction"
            :suffix="t('common.days')"
          />
          <ResultCard
            :label="t('calculator.results.potentialSavings')"
            :value="potentialSavings"
            format="currency"
          />
        </div>
      </div>

      <div class="mt-4 p-4 bg-green-50 rounded-lg">
        <ResultCard
          :label="t('calculator.results.annualRentalIncome')"
          :value="annualRentalIncome"
          format="currency"
        />
      </div>
    </div>
  </div>
</template>