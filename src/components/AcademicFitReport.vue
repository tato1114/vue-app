<template>
    <div class="flex w-full mb-8 flex-wrap md:flex-nowrap flex-row">
        <ProfileImage />
        <div class="ml-4 mt-4 md:mt-0 order-1 basis-full md:order-none max-w-full md:max-w-fit">
            <input class="text-default_blue text-xl font-bold" v-model="athleteName" @keyup="athleteNameChanged"
                data-test="name" />
            <ul class="flex flex-col flex-wrap max-w-fit max-h-fit sm:max-h-20">
                <li class="mr-6 lg:mr-10" data-test="sport">
                    <label class="font-bold">Sport:</label>
                    {{ athlete.sport }}
                </li>
                <li class="mr-6 lg:mr-10" data-test="grad_year">
                    <label class="font-bold">Class:</label>
                    {{ athlete.grad_year }}
                </li>
                <li class="mr-6 lg:mr-10" data-test="club">
                    <label class="font-bold">Club:</label>
                    {{ athlete.club.name }}
                </li>
                <li data-test="high_school">
                    <label class="font-bold">High School:</label>
                    {{ athlete.high_school.name }}
                </li>
                <li data-test="gpa">
                    <label class="font-bold">GPA:</label>
                    {{ athlete.gpa }}
                </li>
                <li data-test="major">
                    <label class="font-bold">Desired Major:</label>
                    {{ athlete.major }}
                </li>
            </ul>
        </div>
        <div class="ml-auto flex flex-col items-end">
            <img src="@/assets/sr_insights_logo.png" alt="Athlete profile picture" class="w-auto h-12 lg:h-14">
            <h2 class="text-base lg:text-lg">Academic Fit Report</h2>
        </div>
    </div>

    <div class="overflow-y-auto">
        <table class="w-full text-xs">
            <thead class="bg-black text-white">
                <tr>
                    <th rowspan="2" class="w-1/5 sticky left-0 bg-black text-white">School Name</th>
                    <th rowspan="2" class="w-1/12 px-1.5">Athletic Div</th>
                    <th rowspan="2" class="w-1/5">Conference</th>
                    <th rowspan="2" class="w-1/12 whitespace-nowrap">
                        Ranking*
                        <br />
                        <span class="font-extralight">(DI NCAA)</span>
                        <br />
                        <span class="font-extralight">(DII & DIII Hero Sports)</span>
                    </th>
                    <th colspan="5" class="w-min">GPA**</th>
                    <th rowspan="2" class="whitespace-nowrap px-1">
                        SAT Reading***
                        <br />
                        25%-75%
                    </th>
                    <th rowspan="2" class="whitespace-nowrap px-2.5">
                        SAT Math***
                        <br />
                        25%-75%
                    </th>
                    <th rowspan="2" class="whitespace-nowrap px-1">
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
                <DataRow v-for="(data, index) in athlete.report" :data="data" :key="index" data-test="data-row" />
            </tbody>
        </table>
    </div>

    <div class="mt-14 flex-grow flex flex-col justify-end text-xs">
        <p class="mt-auto mb-2">*Rankings for Division I schools based on NCAA data (www.ncaa.com)
            and rankings for Division
            II &
            III schools are
            based on data from Hero Sports (www.herosports.com/rankings)</p>
        <p class="mb-2">**GPA is based on SportsRecruits members who have shown interest in (favorited) the school and have
            provided
            their GPA on their profile</p>
        <p class="mb-2">***SAT and ACT scores based on national data provided by the National Center of Education
            Statistics-
            https://nces.ed.gov/ipeds/</p>
    </div>
</template>
  
<script setup>
import { defineProps, reactive } from 'vue';
import { useStore } from 'vuex'
import DataRow from './DataRow.vue';
import ProfileImage from './ProfileImage.vue';

const props = defineProps({
    athlete: {
        type: Object,
        required: true
    }
})
const { athlete } = reactive(props)

const store = useStore()
store.commit('setAthleteGPA', athlete.gpa)
store.commit('setProfileImage', athlete.profile_image)

const athleteName = athlete.name
store.commit('setAthleteName', athleteName)

const athleteNameChanged = (e) => {
    store.commit('setAthleteName', e.target.value)
}
</script>