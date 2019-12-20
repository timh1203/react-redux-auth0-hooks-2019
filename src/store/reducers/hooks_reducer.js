import * as ACTION_TYPES from '../actions/action_types'

export const initialState = {
  hookprop1: 'No hook prop',
}

export const HooksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.DISPATCH_SUCCESS:
      return {
        ...state,
        hookprop1: 'Hook prop success'
      }
    case ACTION_TYPES.DISPATCH_FAILURE:
      return {
        ...state,
        hookprop1: 'Hook prop failure'
      }
    default:
      return state
  }
}
