import { combineReducers } from 'redux'
import { SomeStates } from '../actions'

const {FALSE} = SomeStates;

const someState = (state = FALSE, action) =>{
    switch (action.type) {
        case 'SET_SOME_STATE':
          return action.state
        default:
          return state
      }
}

const anotherState = (state = FALSE, action) =>{
    switch (action.type) {
        case 'SET_SOME_STATE':
          return action.state
        default:
          return state
      }
}

const AdminAppState = combineReducers({
    someState,
    anotherState
})

export default AdminAppState;