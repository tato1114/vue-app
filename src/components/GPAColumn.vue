<template>
    <td class="p-2 text-center" :style="{ backgroundColor: colorPick }" data-test="gpa">
        {{ gpa }}
    </td>
</template>
<script setup>
import { defineProps, reactive, computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const athleteGPA = computed(() => store.state.athleteGPA)

const props = defineProps({
    gpa: {
        type: Number,
        required: true
    }
})
const { gpa } = reactive(props)

const colorPick = computed(() => {
    let color = ''
    const gpaDifference = gpa - athleteGPA.value
    if (gpaDifference > 0.10) {
        color = '#d7737d'
    } else if (gpaDifference <= 0.10 && gpaDifference > 0) {
        color = '#c194b5'
    } else if (gpaDifference == 0) {
        color = '#b4a7d6'
    } else if (gpaDifference >= -0.10 && gpaDifference < 0) {
        color = '#a6a8da'
    } else if (gpaDifference < 0.10) {
        color = '#75ace5'
    }
    return color
})
</script>