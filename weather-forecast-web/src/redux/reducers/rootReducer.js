import { combineReducers } from 'redux'
import reportReducer from './reportReducer'
import cityReducer from './cityReducer'
import usersReducer from './userReducer'
import weatherReducer from './WeatherReducer'

const reducers = combineReducers({
  reportReducer: reportReducer,
  cityReducer: cityReducer,
  usersReducer: usersReducer,
  weatherInfo: weatherReducer
})

export default reducers
