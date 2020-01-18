import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  insuranceProviders: [],
  fuelCardProviders: []
}

const providerSlice = createSlice({
  name: 'serviceProviders',
  initialState,
  reducers: {
    setInsuranceProviders: {
      reducer(state, action) {
        state.insuranceProviders = action.payload
      }
    },
    setFuelProviders: {
      reducer(state, action) {
        state.fuelCardProviders = action.payload
      }
    }
  }
})

export const { setInsuranceProviders, setFuelProviders } = providerSlice.actions

export default providerSlice.reducer
