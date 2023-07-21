import { shallowMount } from "@vue/test-utils"
import AcademicFitReport from '@/components/AcademicFitReport'
import AthleteData from "@/assets/data.json";

describe('AcademicFitReport.vue', () => {
    const athlete = AthleteData.data[0]
    const wrapper = shallowMount(AcademicFitReport, {
        props: {
            athlete: athlete
        }
    })
    it('Renders academic fit report component', () => {
        const name = wrapper.get('[data-test="name"]')
        expect(name.element.value).toBe(`${athlete.name}`)

        const sport = wrapper.get('[data-test="sport"]')
        expect(sport.text()).toBe(`Sport: ${athlete.sport}`)

        const grad_year = wrapper.get('[data-test="grad_year"]')
        expect(grad_year.text()).toBe(`Class: ${athlete.grad_year}`)

        const club = wrapper.get('[data-test="club"]')
        expect(club.text()).toBe(`Club: ${athlete.club.name}`)

        const high_school = wrapper.get('[data-test="high_school"]')
        expect(high_school.text()).toBe(`High School: ${athlete.high_school.name}`)

        const gpa = wrapper.get('[data-test="gpa"]')
        expect(gpa.text()).toBe(`GPA: ${athlete.gpa}`)

        const major = wrapper.get('[data-test="major"]')
        expect(major.text()).toBe(`Desired Major: ${athlete.major}`)
    })
    it('Renders DataRows', () => {
        expect(wrapper.findAll('[data-test="data-row"]')).toHaveLength(athlete.report.length)
    })
    it('Name change modifies initials and avatar background color', () => {
        expect(wrapper.vm.initials).toBe('MC')
        expect(wrapper.vm.colorPick).toBe('color2')

        wrapper.find('[data-test="name"]').setValue('Vanessa Rodas')
        expect(wrapper.vm.initials).toBe('VR')
        expect(wrapper.vm.colorPick).toBe('color5')
    })
})