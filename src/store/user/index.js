import { createSlice } from '@reduxjs/toolkit'

let mtnOnboardingUser = localStorage.getItem('mtnOnboardingUser')
if (!mtnOnboardingUser) mtnOnboardingUser = {}
const initialState = mtnOnboardingUser

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: {
      reducer(state, action) {
        localStorage.setItem('mtnOnboardingUser', action.payload)
        return {
          ...action.payload
        }
      }
    },
    unsetUser: {
      reducer() {
        localStorage.removeItem('mtnOnboardingUser')
        return {}
      }
    }
  }
})

export const { setUser, unsetUser } = userSlice.actions

export default userSlice.reducer
