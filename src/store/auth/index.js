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
    },
    unsetToken: {
      reducer() {
        localStorage.removeItem('onboardingUserToken')
        return ''
      }
    }
  }
})

export const { setToken, unsetToken } = authSlice.actions

export default authSlice.reducer
