const initialState = { value: '' }

function globalReducer(state = initialState, action) {
  if (action.type === 'global/update') {
    return {
      ...state,
      value: action.payload
    }
  }
  return state
}

export default globalReducer;
