import { shallowMount } from "@vue/test-utils";
import DataRow from "@/components/DataRow.vue"
import GPAColumn from "@/components/GPAColumn.vue"
import AthleteData from "@/assets/data.json";

describe('DataRow.vue', () => {
    const report = AthleteData.data[0].report[0]
    const wrapper = shallowMount(DataRow, {
        props: {
            data: report
        }
    })
    it('Renders data row component', () => {
        const school = wrapper.get('[data-test="school"]')
        expect(school.text()).toBe(report.school)

        const division = wrapper.get('[data-test="division"]')
        expect(division.text()).toBe(report.division)

        const conference = wrapper.get('[data-test="conference"]')
        expect(conference.text()).toBe(report.conference)

        const ranking = wrapper.get('[data-test="ranking"]')
        expect(ranking.text()).toBe(report.ranking.toString())

        const gpaMin = wrapper.get('[data-test="gpa-min"]')
        expect(gpaMin.text()).toBe(report.gpa.min.toString())

        const gpa25 = wrapper.get('[data-test="gpa-25"]')
        expect(gpa25.text()).toBe(report.gpa['25%'].toString())

        const gpa75 = wrapper.get('[data-test="gpa-75"]')
        expect(gpa75.text()).toBe(report.gpa['75%'].toString())

        const gpaMax = wrapper.get('[data-test="gpa-max"]')
        expect(gpaMax.text()).toBe(report.gpa['max'].toString())

        const satReading = wrapper.get('[data-test="sat-reading"]')
        expect(satReading.text()).toBe(`${report.sat.reading.min}-${report.sat.reading.max}`)

        const satMath = wrapper.get('[data-test="sat-math"]')
        expect(satMath.text()).toBe(`${report.sat.math.min}-${report.sat.math.max}`)

        const act = wrapper.get('[data-test="act"]')
        expect(act.text()).toBe(`${report.act.min}-${report.act.max}`)
    })
    it('Renders GPAColumn', () => {
        const gpa50 = wrapper.findComponent(GPAColumn)
        expect(gpa50.vm.gpa).toBe(report.gpa['50%'])
    })
})

