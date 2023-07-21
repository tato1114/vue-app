<template>
  <div class="p-16 pb-6 border-sky-500 border-y-8">
    <AcademicFitReport :athlete="athlete_info" />
  </div>
</template>

<script setup>
import AcademicFitReport from "@/components/AcademicFitReport.vue";
import AthleteData from "@/assets/data.json";
import './styles.css'

const athlete_info = AthleteData.data[0]
</script>