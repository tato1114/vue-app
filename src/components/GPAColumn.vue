<template>
    <span>{{ gpa }}</span>
</template>
<script setup>
import { defineProps, reactive } from 'vue';

const props = defineProps({
    gpa: {
        type: Number,
        required: false
    }
})
const { gpa } = reactive(props)
</script>