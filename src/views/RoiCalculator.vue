<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useCalculatorStore } from '../stores/calculator'
import html2pdf from 'html2pdf.js'
import CustomerInfo from '../components/calculator/CustomerInfo.vue'
import BusinessImprovements from '../components/calculator/BusinessImprovements.vue'
import ConsultantHours from '../components/calculator/ConsultantHours.vue'
import BuildingInformation from '../components/calculator/BuildingInformation.vue'
import DigitalTwinCosts from '../components/calculator/DigitalTwinCosts.vue'
import RoiAnalysis from '../components/calculator/RoiAnalysis.vue'
import YearlyBreakdown from '../components/calculator/YearlyBreakdown.vue'

const { t } = useI18n()
const calculator = useCalculatorStore()

const exportPdf = async () => {
  const element = document.getElementById('roi-report')
  const opt = {
    margin: 1,
    filename: 'visual360-roi-report.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  }

  await html2pdf().set(opt).from(element).save()
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <div id="roi-report" class="space-y-6">
      <CustomerInfo />
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <BuildingInformation />
        <DigitalTwinCosts />
      </div>

      <BusinessImprovements />
      <ConsultantHours />
      <RoiAnalysis />
      <YearlyBreakdown />
    </div>

    <div class="flex justify-end space-x-4 mt-8">
      <button @click="calculator.saveCalculation" class="btn-primary">
        {{ t('calculator.buttons.save') }}
      </button>
      <button @click="exportPdf" class="btn-primary">
        {{ t('calculator.buttons.export') }}
      </button>
    </div>
  </div>
</template>