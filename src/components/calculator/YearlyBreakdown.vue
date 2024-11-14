<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const breakdownData = [
  { year: 1, maintenance: 0, consulting: 60000, total: 60000, savings: 774931.507, netCashFlow: 699931.507 },
  { year: 2, maintenance: 21600, consulting: 0, total: 21600, savings: 440000, netCashFlow: 418400 },
  { year: 3, maintenance: 21600, consulting: 0, total: 21600, savings: 440000, netCashFlow: 418400 },
  { year: 4, maintenance: 21600, consulting: 0, total: 21600, savings: 440000, netCashFlow: 418400 },
  { year: 5, maintenance: 21600, consulting: 0, total: 21600, savings: 440000, netCashFlow: 418400 }
]

const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('nb-NO', { style: 'currency', currency: 'NOK' }).format(value)
}
</script>

<template>
  <div class="card">
    <h2 class="text-xl font-semibold text-primary mb-4">
      <i class="pi pi-calendar mr-2"></i>
      {{ t('calculator.sections.yearlyBreakdown') }}
    </h2>

    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th class="px-4 py-2 text-left">År</th>
            <th class="px-4 py-2 text-right">Vedlikehold</th>
            <th class="px-4 py-2 text-right">Konsulent</th>
            <th class="px-4 py-2 text-right">Totale kostnader</th>
            <th class="px-4 py-2 text-right">Årlige besparelser</th>
            <th class="px-4 py-2 text-right">Netto kontantstrøm</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200">
          <tr v-for="row in breakdownData" :key="row.year">
            <td class="px-4 py-2">{{ row.year }}</td>
            <td class="px-4 py-2 text-right">{{ formatCurrency(row.maintenance) }}</td>
            <td class="px-4 py-2 text-right">{{ formatCurrency(row.consulting) }}</td>
            <td class="px-4 py-2 text-right">{{ formatCurrency(row.total) }}</td>
            <td class="px-4 py-2 text-right">{{ formatCurrency(row.savings) }}</td>
            <td class="px-4 py-2 text-right font-medium text-green-600">
              {{ formatCurrency(row.netCashFlow) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>