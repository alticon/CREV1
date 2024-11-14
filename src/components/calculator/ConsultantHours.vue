<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { storeToRefs } from 'pinia'
import { useCalculatorStore } from '../../stores/calculator'
import InputField from './InputField.vue'
import Dialog from 'primevue/dialog'
import InputNumber from 'primevue/inputnumber'

const { t } = useI18n()
const store = useCalculatorStore()
const { consultantRates } = storeToRefs(store)

const showSettings = ref(false)
</script>

<template>
  <div class="card">
    <div class="flex items-center justify-between mb-4">
      <h2 class="text-xl font-semibold text-primary">
        <i class="pi pi-clock mr-2"></i>
        {{ t('calculator.sections.consultantHours') }}
      </h2>
      <button @click="showSettings = true" class="text-sm text-secondary">
        <i class="pi pi-cog mr-1"></i>
        {{ t('calculator.buttons.settings') }}
      </button>
    </div>
    
    <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
      <InputField
        v-for="(rate, type) in consultantRates"
        :key="type"
        v-model="store.consultantHours[type]"
        :label="t(`calculator.inputs.${type}Hours`)"
        suffix="timer"
        type="number"
      />
    </div>

    <Dialog 
      v-model:visible="showSettings"
      :header="t('calculator.settings.hourlyRates')"
      :modal="true"
      class="w-full max-w-lg"
    >
      <div class="space-y-4">
        <div v-for="(rate, type) in consultantRates" :key="type" class="flex items-center gap-4">
          <label class="flex-grow">{{ t(`calculator.inputs.${type}Hours`) }}</label>
          <InputNumber 
            v-model="consultantRates[type]"
            :min="0"
            :step="100"
            mode="currency"
            currency="NOK"
            locale="nb-NO"
          />
        </div>
      </div>
    </Dialog>
  </div>
</template>