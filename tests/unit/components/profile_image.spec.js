import { shallowMount } from "@vue/test-utils"
import store from '@/store'
import ProfileImage from '@/components/ProfileImage'
import AthleteData from "@/assets/data.json";

describe('ProfileImage.vue', () => {

    const athlete = AthleteData.data[0]
    const wrapper = shallowMount(ProfileImage, {
        global: {
            plugins: [store]
        },
    })
    it('Name change modifies initials and avatar background color', async () => {
        await store.commit('setAthleteName', 'Maria Carter')
        expect(wrapper.vm.initials).toBe('MC')
        expect(wrapper.vm.colorPick).toBe('#6082fa')

        await store.commit('setAthleteName', 'Vanessa Rodas')
        expect(wrapper.vm.initials).toBe('VR')
        expect(wrapper.vm.colorPick).toBe('#ffe066')
    })
})