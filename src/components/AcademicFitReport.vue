<template>
    <div class="flex w-full mb-8">
        <img v-bind:src="athlete.profile_image" alt="Athlete profile picture" class="rounded-full w-24 h-24">
        <div class="ml-4">
            <h2 class="text-sky-500 font-bold">{{ athlete.name }}</h2>
            <ul class="columns-2">
                <li>
                    <label class="font-bold">Sport:</label>
                    {{ athlete.sport }}
                </li>
                <li>
                    <label class="font-bold">Class:</label>
                    {{ athlete.grad_year }}
                </li>
                <li>
                    <label class="font-bold">Club:</label>
                    {{ athlete.club.name }}
                </li>
                <li>
                    <label class="font-bold">High School:</label>
                    {{ athlete.high_school.name }}
                </li>
                <li>
                    <label class="font-bold">GPA:</label>
                    {{ athlete.gpa }}
                </li>
                <li>
                    <label class="font-bold">Desired Major:</label>
                    {{ athlete.major }}
                </li>
            </ul>
        </div>
        <div class="ml-auto flex flex-col items-end">
            <img v-bind:src="athlete.profile_image" alt="Athlete profile picture" class="w-24 h-24">
            <h2>Academic Fit Report</h2>
        </div>
    </div>

    <table class="w-full text-xs">
        <thead class="bg-black text-white">
            <tr>
                <th rowspan="2" class="w-1/6">School Name</th>
                <th rowspan="2" class="w-1/12">Athletic Div</th>
                <th rowspan="2" class="w-1/5">Conference</th>
                <th rowspan="2" class="w-1/6">
                    Ranking*
                    <br />
                    <span class="font-extralight">(DI NCAA)</span>
                    <br />
                    <span class="font-extralight">(DII & DIII Hero Sports)</span>
                </th>
                <th colspan="5" class="w-1/6">GPA**</th>
                <th rowspan="2">
                    SAT Reading***
                    <br />
                    25%-75%
                </th>
                <th rowspan="2">
                    SAT Math***
                    <br />
                    25%-75%
                </th>
                <th rowspan="2">
                    ACT Composite***
                    <br />
                    25%-75%
                </th>
            </tr>
            <tr>
                <th>Min</th>
                <th>25%</th>
                <th>50%</th>
                <th>75%</th>
                <th>Max</th>
            </tr>
        </thead>
        <tbody>
            <DataRow v-for="(data, index) in athlete.report" :data="data" :key="index" />
        </tbody>
    </table>

    <div class="mt-14 text-xs">
        <p>*Rankings for Division I schools based on NCAA data (www.ncaa.com) and rankings for Division II & III schools are
            based on data from Hero Sports (www.herosports.com/rankings)</p>
        <p>** GPA is based on SportsRecruits members who have shown interest in (favorited) the school and have provided
            their GPA on their profile</p>
        <p>***SAT and ACT scores based on national data provided by the National Center of Education Statistics-
            https://nces.ed.gov/ipeds/</p>
    </div>
</template>
  
<script setup>
import { defineProps, reactive } from 'vue';
import DataRow from './DataRow.vue';

const props = defineProps({
    athlete: {
        type: Object,
        required: false
    }
})
const { athlete } = reactive(props)
</script>