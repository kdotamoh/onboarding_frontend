import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'token',
  initialState: '',
  reducers: {
    setToken: {
      reducer(state, action) {
        return action.payload
      }
    }
  }
})

export const { setToken } = authSlice.actions

export default authSlice.reducer
