import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentStep: null
}

const navigationSlice = createSlice({
  name: 'currentStep',
  initialState,
  reducers: {
    setCurrentStep: {
      reducer(state, action) {
        state.currentStep = action.payload
      }
    }
  }
})

export const { setCurrentStep } = navigationSlice.actions

export default navigationSlice.reducer
