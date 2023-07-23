<template>
    <div class="flex w-full mb-8 flex-wrap md:flex-nowrap flex-row">
        <div class="">
            <img v-if="athlete.profile_image" v-bind:src="athlete.profile_image" alt="Athlete profile picture"
                class="rounded-full w-20 h-20 sm:w-24 sm:h-24">
            <div v-else
                class="rounded-full w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center text-2xl font-bold text-white"
                :class=[colorPick] data-test="profile_image">
                {{ initials }}
            </div>
        </div>
        <div class="ml-4 mt-4 md:mt-0 order-1 basis-full md:order-none max-w-full md:max-w-fit">
            <input class="text-default_blue text-xl font-bold" v-model="athleteName" data-test="name" />
            <ul class="flex flex-col flex-wrap max-w-fit max-h-fit sm:max-h-20">
                <li class="mr-3" data-test="sport">
                    <label class="font-bold">Sport:</label>
                    {{ athlete.sport }}
                </li>
                <li class="mr-3" data-test="grad_year">
                    <label class="font-bold">Class:</label>
                    {{ athlete.grad_year }}
                </li>
                <li class="mr-3" data-test="club">
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
                    <th rowspan="2" class="sm:w-1/6 sticky left-0 bg-black text-white">School Name</th>
                    <th rowspan="2" class="w-1/12 px-1.5">Athletic Div</th>
                    <th rowspan="2" class="w-1/5">Conference</th>
                    <th rowspan="2" class="w-1/6 whitespace-nowrap">
                        Ranking*
                        <br />
                        <span class="font-extralight">(DI NCAA)</span>
                        <br />
                        <span class="font-extralight">(DII & DIII Hero Sports)</span>
                    </th>
                    <th colspan="5" class="w-1/6">GPA**</th>
                    <th rowspan="2" class="whitespace-nowrap px-1.5">
                        SAT Reading***
                        <br />
                        25%-75%
                    </th>
                    <th rowspan="2" class="whitespace-nowrap px-1.5">
                        SAT Math***
                        <br />
                        25%-75%
                    </th>
                    <th rowspan="2" class="whitespace-nowrap px-1.5">
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
import { defineProps, reactive, ref, computed } from 'vue';
import DataRow from './DataRow.vue';

const props = defineProps({
    athlete: {
        type: Object,
        required: false
    }
})
const { athlete } = reactive(props)

const athleteName = ref(athlete.name)

const name = computed(() => athleteName.value.split(' ')[0])
const lastname = computed(() => athleteName.value.split(' ')[1] ?? '')

const initials = computed(() => name.value.charAt(0).toUpperCase() + lastname.value.charAt(0).toUpperCase());

const colorPick = computed(() => 'color' + (((lastname.value.charCodeAt(0) || 0) % 6) + 1))

</script>
<style scoped>
.color1 {
    background-color: #f1603c;
}

.color2 {
    background-color: #6082fa;
}

.color3 {
    background-color: #827cb8;
}

.color4 {
    background-color: #0097a4;
}

.color5 {
    background-color: #ffe066;
}

.color6 {
    background-color: #ffa94d;
}
</style>