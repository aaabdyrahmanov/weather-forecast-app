const initialState = {
  reports: []
}

const reportReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MENUS_REPORTS_REQUEST':
      return {
        ...state,
        reports: action.payload
      }
    default:
      return state
  }
}

export default reportReducer
