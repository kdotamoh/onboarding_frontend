import { createSlice } from '@reduxjs/toolkit'

let onboardingUserToken = localStorage.getItem('onboardingUserToken')
if (!onboardingUserToken) onboardingUserToken = ''
const initialState = onboardingUserToken

const authSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setToken: {
      reducer(state, action) {
        localStorage.setItem('onboardingUserToken', action.payload)
        return action.payload
      }
    }
  }
})

export const { setToken } = authSlice.actions

export default authSlice.reducer
