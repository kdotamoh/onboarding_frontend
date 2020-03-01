import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  onboardingPages: {
    aboutPages: [],
    functionalPages: []
  },
  preonboardingPages: []
}

const pages = createSlice({
  name: 'onboardingPages',
  initialState,
  reducers: {
    setAboutPages: {
      reducer(state, action) {
        state.onboardingPages.aboutPages = action.payload
      }
    },
    setFunctionalPages: {
      reducer(state, action) {
        state.onboardingPages.functionalPages = action.payload
      }
    },
    setPreonboardingPages: {
      reducer(state, action) {
        state.preonboardingPages = action.payload
      }
    }
  }
})

export const {
  setAboutPages,
  setFunctionalPages,
  setPreonboardingPages
} = pages.actions

export default pages.reducer
