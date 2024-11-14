import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

interface ConsultantRates {
  [key: string]: number
}

export const useCalculatorStore = defineStore('calculator', () => {
  // Customer Information
  const customerName = ref('')
  const buildingName = ref('')
  const address = ref('')

  // Building Information
  const buildingSize = ref(0)
  const annualRentPerSqm = ref(0)
  const vacancyPeriod = ref(0)

  // Digital Twin Costs
  const scanningCost = ref(0)
  const maintenanceCost = ref(0)
  const consultingHours = ref(0)
  const hourlyRate = ref(0)

  // Consultant Hours
  const consultantRates = ref<ConsultantRates>({
    architect: 1500,
    interiorArchitect: 1500,
    electrician: 1500,
    plumber: 1500,
    ventilation: 1500,
    sprinkler: 1500
  })

  const consultantHours = ref<ConsultantRates>({
    architect: 0,
    interiorArchitect: 0,
    electrician: 0,
    plumber: 0,
    ventilation: 0,
    sprinkler: 0
  })

  // Business Improvements
  const savingsPerBid = ref(0)
  const numberOfBids = ref(0)
  const savingsPerDecision = ref(0)
  const numberOfDecisions = ref(0)

  const calculateRoi = computed(() => {
    // Calculate total costs
    const initialCost = buildingSize.value * scanningCost.value
    const yearlyMaintenance = maintenanceCost.value
    const consultingCost = consultingHours.value * hourlyRate.value

    // Calculate yearly savings
    const bidSavings = savingsPerBid.value * numberOfBids.value
    const decisionSavings = savingsPerDecision.value * numberOfDecisions.value
    const consultantSavings = Object.values(consultantHours.value).reduce((sum, hours) => {
      return sum + hours * 1500 // Using standard rate of 1500 kr/hour
    }, 0)
    const vacancySavings = (buildingSize.value * annualRentPerSqm.value / 365) * 
                          (vacancyPeriod.value * 0.3) // 30% reduction in vacancy time

    const totalYearlySavings = bidSavings + decisionSavings + consultantSavings + vacancySavings
    const totalFirstYearCost = initialCost + yearlyMaintenance + consultingCost

    // Calculate ROI metrics
    const firstYearRoi = ((totalYearlySavings - totalFirstYearCost) / totalFirstYearCost) * 100
    const paybackPeriod = totalFirstYearCost / (totalYearlySavings / 12) // in months
    
    // Calculate 5-year NPV with 5% discount rate
    const discountRate = 0.05
    let npv = -totalFirstYearCost
    for (let year = 1; year <= 5; year++) {
      const yearlyNetCashFlow = totalYearlySavings - yearlyMaintenance
      npv += yearlyNetCashFlow / Math.pow(1 + discountRate, year)
    }

    return {
      firstYearRoi,
      paybackPeriod,
      npv
    }
  })

  const saveCalculation = () => {
    const calculation = {
      date: new Date().toISOString(),
      customer: {
        name: customerName.value,
        building: buildingName.value,
        address: address.value
      },
      inputs: {
        buildingSize: buildingSize.value,
        annualRentPerSqm: annualRentPerSqm.value,
        vacancyPeriod: vacancyPeriod.value,
        scanningCost: scanningCost.value,
        maintenanceCost: maintenanceCost.value,
        consultingHours: consultingHours.value,
        hourlyRate: hourlyRate.value,
        consultantHours: consultantHours.value,
        savingsPerBid: savingsPerBid.value,
        numberOfBids: numberOfBids.value,
        savingsPerDecision: savingsPerDecision.value,
        numberOfDecisions: numberOfDecisions.value
      },
      results: calculateRoi.value
    }

    const savedCalculations = JSON.parse(localStorage.getItem('calculations') || '[]')
    savedCalculations.push(calculation)
    localStorage.setItem('calculations', JSON.stringify(savedCalculations))
  }

  return {
    // Customer Info
    customerName,
    buildingName,
    address,
    
    // Building Info
    buildingSize,
    annualRentPerSqm,
    vacancyPeriod,
    
    // Digital Twin Costs
    scanningCost,
    maintenanceCost,
    consultingHours,
    hourlyRate,
    
    // Consultant Hours
    consultantRates,
    consultantHours,
    
    // Business Improvements
    savingsPerBid,
    numberOfBids,
    savingsPerDecision,
    numberOfDecisions,
    
    // Methods
    calculateRoi,
    saveCalculation
  }
})