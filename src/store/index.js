import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state: {
        athleteGPA: 0,
        profileImage: '',
        athleteName: ''
    },
    mutations: {
        setAthleteGPA(state, gpa) {
            state.athleteGPA = gpa
        },
        setProfileImage(state, profileImage) {
            state.profileImage = profileImage ? profileImage : null
        },
        setAthleteName(state, name) {
            state.athleteName = name
        },
    }
})

export default store