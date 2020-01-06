import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    setUser: {
      reducer(state, action) {
        return {
          ...action.payload
        }
      }
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
