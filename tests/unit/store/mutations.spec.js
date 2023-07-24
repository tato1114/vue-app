import store from '@/store'

describe('mutations', () => {
    it('setAthleteGPA', async () => {
        expect(store.state.athleteGPA).toBe(0)
        await store.commit('setAthleteGPA', 3.8)
        expect(store.state.athleteGPA).toBe(3.8)
    })
    it('setProfileImage', async () => {
        expect(store.state.profileImage).toBe('')
        await store.commit('setProfileImage', 'test string')
        expect(store.state.profileImage).toBe('test string')
    })
    it('setAthleteName', async () => {
        expect(store.state.athleteName).toBe('')
        await store.commit('setAthleteName', 'Random Name')
        expect(store.state.athleteName).toBe('Random Name')
    })
})