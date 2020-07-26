import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from './auth'
import userReducer from './user'
import providerReducer from './providers'
import organisationReducer from './organisation'
import pageReducer from './pages'
import navigationReducer from './navigation'
import tasksReducer from './tasks'

// export default combineReducers({
//   token: authReducer,
//   user: userReducer,
//   providers: providerReducer
// })

const rootReducer = combineReducers({
  token: authReducer,
  user: userReducer,
  providers: providerReducer,
  organisation: organisationReducer,
  pages: pageReducer,
  navigation: navigationReducer,
  tasks: tasksReducer
})

export default configureStore({
  reducer: rootReducer
})
