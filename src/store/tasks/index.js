import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  completed: [],
  uncompleted: []
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    setCompletedTasks: {
      reducer(state, action) {
        state.completed = action.payload
      }
    },
    setUncompletedTasks: {
      reducer(state, action) {
        state.uncompleted = action.payload
      }
    }
  }
})

export const { setCompletedTasks, setUncompletedTasks } = tasksSlice.actions

export default tasksSlice.reducer
