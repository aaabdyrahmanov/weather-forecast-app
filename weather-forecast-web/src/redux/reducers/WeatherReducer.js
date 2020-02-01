const initialState = {
  weatherNow: ''
}

const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENUS_WEATHER_INFO':
      return {
        ...state,
        weatherNow: action.payload
      }
    default:
      return state
  }
}

export default weatherReducer
