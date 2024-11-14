<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useCalculatorStore } from '../../stores/calculator'
import InputField from './InputField.vue'
import ResultCard from './ResultCard.vue'

const { t } = useI18n()
const store = useCalculatorStore()
const { buildingSize, scanningCost, maintenanceCost, consultingHours, hourlyRate } = storeToRefs(store)

const totalScanningCost = computed(() => {
  return buildingSize.value * scanningCost.value
})

const totalConsultingCost = computed(() => {
  return consultingHours.value * hourlyRate.value
})

const totalCost = computed(() => {
  return totalScanningCost.value + maintenanceCost.value + totalConsultingCost.value
})
</script>

<template>
  <div class="card">
    <h2 class="text-xl font-semibold text-primary mb-4">
      <i class="pi pi-cube mr-2"></i>
      {{ t('calculator.sections.digitalTwinCosts') }}
    </h2>

    <div class="space-y-4">
      <InputField
        v-model="scanningCost"
        :label="t('calculator.inputs.scanningCost')"
        prefix="kr"
        type="number"
      />
      <InputField
        v-model="maintenanceCost"
        :label="t('calculator.inputs.maintenanceCost')"
        prefix="kr"
        type="number"
      />

      <h3 class="font-medium mt-6 mb-2">{{ t('calculator.sections.consultingServices') }}</h3>
      <InputField
        v-model="consultingHours"
        :label="t('calculator.inputs.consultingHours')"
        type="number"
      />
      <InputField
        v-model="hourlyRate"
        :label="t('calculator.inputs.hourlyRate')"
        prefix="kr"
        type="number"
      />

      <div class="mt-6 bg-blue-50 p-4 rounded-lg">
        <div class="grid grid-cols-3 gap-4">
          <ResultCard
            :label="t('calculator.results.totalScanningCost')"
            :value="totalScanningCost"
            format="currency"
          />
          <ResultCard
            :label="t('calculator.results.totalConsultingCost')"
            :value="totalConsultingCost"
            format="currency"
          />
          <ResultCard
            :label="t('calculator.results.totalCost')"
            :value="totalCost"
            format="currency"
            class="font-bold"
          />
        </div>
      </div>
    </div>
  </div>
</template>