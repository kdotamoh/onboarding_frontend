import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  onboardingPages: {
    aboutPages: [],
    functionalPages: []
  },
  preonboardingPages: {},
  employeeValues: []
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
  setEmployeeValues
} = pages.actions

export default pages.reducer
