import { combineReducers } from 'redux';
import { camperActions } from '../actions';

const initialState = {
  loading: true,
  error: false,
  users: []
}

const campers = (state = initialState, action) => {
  switch (action.type) {
    case camperActions.REQUEST:
      return {
        ...state,
        loading: true,
        error: false
      }
    case camperActions.OK:
      return {
        ...state,
        loading: false,
        error: false,
        users: action.payload
      }
    case camperActions.ERROR:
      return {
        ...state,
        loading: false,
        error: true
      }
    default:
      return state;
  }
}

const byField = (state = {}, action) => {
  switch (action.type) {
    case camperActions.REQUEST:
    case camperActions.OK:
    case camperActions.ERROR:
      return {
        ...state,
        [action.field]: campers(state[action.field], action)
      };
    default:
      return state
  }
}

const visibilityFilter = (state = 'RECENT', action) => {
  switch (action.type) {
    case camperActions.FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default combineReducers({
  byField,
  visibilityFilter
})
