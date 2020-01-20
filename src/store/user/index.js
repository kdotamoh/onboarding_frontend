import { createSlice } from '@reduxjs/toolkit'

let mtnOnboardingUser = localStorage.getItem('mtnOnboardingUser')
if (!mtnOnboardingUser) mtnOnboardingUser = '{}'
const initialState = JSON.parse(JSON.stringify(mtnOnboardingUser))

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: {
      reducer(state, action) {
        localStorage.setItem(
          'mtnOnboardingUser',
          JSON.stringify(action.payload)
        )
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
