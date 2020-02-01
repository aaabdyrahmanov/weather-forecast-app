const initialState = {
  cities: ''
}

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENUS_CITIES_REQUEST':
      return {
        ...state,
        cities: action.payload
      }
    default:
      return state
  }
}

export default cityReducer
