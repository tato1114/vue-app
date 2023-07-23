<template>
    <td class="p-2 text-center" :style="{ backgroundColor: colorPick() }">
        {{ gpa }}
    </td>
</template>
<script setup>
import { defineProps, reactive } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const athleteGPA = store.state.athleteGPA

const props = defineProps({
    gpa: {
        type: Number,
        required: false
    }
})
const { gpa } = reactive(props)

const colorPick = () => {
    const gpaDifference = gpa - athleteGPA
    if (gpaDifference > 0.10) {
        return '#d7737d'
    } else if (gpaDifference <= 0.10 && gpaDifference > 0) {
        return '#c194b5'
    } else if (gpaDifference == 0) {
        return '#b4a7d6'
    } else if (gpaDifference >= -0.10 && gpaDifference < 0) {
        return '#a6a8da'
    } else if (gpaDifference < 0.10) {
        return '#75ace5'
    }
}
</script>