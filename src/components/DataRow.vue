<template>
    <tr class="odd:bg-white even:bg-blue-100">
        <td class="p-2">{{ data.school }}</td>
        <td class="p-2 text-center">{{ data.division }}</td>
        <td class="p-2">{{ data.conference }}</td>
        <td class="p-2 text-center">{{ data.ranking }}</td>
        <td class="p-2 text-center">{{ data.gpa.min }}</td>
        <td class="p-2 text-center">{{ data.gpa['25%'] }}</td>
        <td class="p-2 text-center">{{ data.gpa['50%'] }}</td>
        <td class="p-2 text-center">{{ data.gpa['75%'] }}</td>
        <td class="p-2 text-center">{{ data.gpa.max }}</td>
        <td class="p-2 text-center">{{ data.sat.reading.min }}-{{ data.sat.reading.max }}</td>
        <td class="p-2 text-center">{{ data.sat.math.min }}-{{ data.sat.math.max }}</td>
        <td class="p-2 text-center">{{ data.act.min }}-{{ data.act.max }}</td>
    </tr>
</template>
  
<script setup>
import { defineProps, reactive } from 'vue';

const props = defineProps({
    data: {
        type: Object,
        required: false
    }
})
const { data } = reactive(props)
</script>