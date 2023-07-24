<template>
    <img v-if="profileImage" v-bind:src="profileImage" alt="Athlete profile picture"
        class="rounded-full w-20 h-20 sm:w-24 sm:h-24">
    <div v-else
        class="rounded-full w-20 h-20 sm:w-24 sm:h-24 flex justify-center items-center text-2xl font-bold text-white"
        :style="{ backgroundColor: colorPick }" data-test="profile_image">
        {{ initials }}
    </div>
</template>
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const profileImage = store.state.profileImage
const athleteName = computed(() => store.state.athleteName)

const name = computed(() => athleteName.value.split(' ')[0])
const lastname = computed(() => athleteName.value.split(' ')[1] ?? '')

const initials = computed(() => name.value.charAt(0).toUpperCase() + lastname.value.charAt(0).toUpperCase());

const colorPick = computed(() => {
    let color = '#f1603c'
    switch ((((lastname.value.charCodeAt(0) || 0) % 6))) {
        case 1:
            color = '#6082fa'
            break
        case 2:
            color = '#827cb8'
            break
        case 3:
            color = '#0097a4'
            break
        case 4:
            color = '#ffe066'
            break
        case 5:
            color = '#ffa94d'
            break
    }
    return color
})
</script>