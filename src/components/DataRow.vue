<template>
    <tr class="odd:bg-white even:bg-default_light_blue">
        <td class="p-2 sticky left-0 bg-inherit" data-test="school">{{ data.school }}</td>
        <td class="p-2 text-center" data-test="division">{{ data.division }}</td>
        <td class="p-2" data-test="conference">{{ data.conference }}</td>
        <td class="p-2 text-center" data-test="ranking">{{ data.ranking }}</td>
        <td class="p-2 text-center" data-test="gpa-min">{{ data.gpa.min }}</td>
        <td class="p-2 text-center" data-test="gpa-25">{{ data.gpa['25%'] }}</td>
        <GPAColumn :gpa="data.gpa['50%']" data-test="gpa-50" />
        <td class="p-2 text-center" data-test="gpa-75">{{ data.gpa['75%'] }}</td>
        <td class="p-2 text-center" data-test="gpa-max">{{ data.gpa.max }}</td>
        <td class="p-2 text-center" data-test="sat-reading">{{ data.sat.reading.min }}-{{ data.sat.reading.max }}</td>
        <td class="p-2 text-center" data-test="sat-math">{{ data.sat.math.min }}-{{ data.sat.math.max }}</td>
        <td class="p-2 text-center" data-test="act">{{ data.act.min }}-{{ data.act.max }}</td>
    </tr>
</template>
  
<script setup>
import { defineProps, reactive } from 'vue';
import GPAColumn from './GPAColumn.vue';

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
})
const { data } = reactive(props)
</script>