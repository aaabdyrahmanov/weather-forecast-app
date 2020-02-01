const initialState = {
  users: ''
}

const cityReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENUS_USERS_REQUEST':
      return {
        ...state,
        users: action.payload
      }
    default:
      return state
  }
}

export default cityReducer
