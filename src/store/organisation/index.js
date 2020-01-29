import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  departments: [],
  divisions: []
}

const organisationSlice = createSlice({
  name: 'serviceProviders',
  initialState,
  reducers: {
    setDepartments: {
      reducer(state, action) {
        state.departments = action.payload
      }
    },
    setDivisions: {
      reducer(state, action) {
        state.divisions = action.payload
      }
    }
  }
})

export const { setDepartments, setDivisions } = organisationSlice.actions

export default organisationSlice.reducer
