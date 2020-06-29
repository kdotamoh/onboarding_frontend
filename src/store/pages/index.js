import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  onboardingPages: {
    aboutLoaded: false,
    functionalLoaded: false,
    aboutPages: [],
    functionalPages: []
  },
  preonboardingPages: {
    loaded: false
  },
  employeeValues: []
}

const pages = createSlice({
  name: 'onboardingPages',
  initialState,
  reducers: {
    setAboutLoaded: {
      reducer(state) {
        state.onboardingPages.aboutLoaded = true
      }
    },
    setFunctionalLoaded: {
      reducer(state) {
        state.onboardingPages.functionalLoaded = true
      }
    },
    setPrenboardingLoaded: {
      reducer(state) {
        state.preonboardingPages.loaded = true
      }
    },
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
    setCompliancePage: {
      reducer(state, action) {
        state.preonboardingPages.compliance = action.payload
      }
    },
    setOverviewPage: {
      reducer(state, action) {
        state.preonboardingPages.overview = action.payload
      }
    },
    setIntroductionPage: {
      reducer(state, action) {
        state.preonboardingPages.introduction = action.payload
      }
    },
    setFirstDaysPage: {
      reducer(state, action) {
        state.preonboardingPages.firstDays = action.payload
      }
    },
    setCodeOfEthicsPage: {
      reducer(state, action) {
        state.preonboardingPages.codeOfEthics = action.payload
      }
    },
    setConditionsOfServicePage: {
      reducer(state, action) {
        state.preonboardingPages.conditionsOfService = action.payload
      }
    },
    setEmployeeDetailsPage: {
      reducer(state, action) {
        state.preonboardingPages.employeeDetails = action.payload
      }
    },
    setEmployeeValues: {
      reducer(state, action) {
        state.employeeValues = action.payload
      }
    }
  }
})

export const {
  setAboutPages,
  setFunctionalPages,
  setCompliancePage,
  setOverviewPage,
  setIntroductionPage,
  setFirstDaysPage,
  setCodeOfEthicsPage,
  setConditionsOfServicePage,
  setEmployeeDetailsPage,
  setEmployeeValues,
  setPrenboardingLoaded,
  setFunctionalLoaded,
  setAboutLoaded
} = pages.actions

export default pages.reducer
