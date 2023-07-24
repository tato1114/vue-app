import { shallowMount } from "@vue/test-utils"
import store from '@/store'
import AthleteData from "@/assets/data.json";
import GPAColumn from "@/components/GPAColumn.vue"

describe('GPAColumn.vue', () => {

    const report = AthleteData.data[0].report[0]
    const wrapper = shallowMount(GPAColumn, {
        global: {
            plugins: [store]
        },
        props: {
            gpa: report.gpa['50%']
        }
    })
    it('Renders GPA with proper background color', async () => {
        const gpa = wrapper.get('[data-test="gpa"]')
        await store.commit('setAthleteGPA', 3.8)
        expect(gpa.text()).toBe(report.gpa['50%'].toString())
        expect(gpa.attributes().style).toContain('background-color: rgb(117, 172, 229)')

        await store.commit('setAthleteGPA', 3.5)
        expect(gpa.attributes().style).toContain('background-color: rgb(193, 148, 181)')
    })
})