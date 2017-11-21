export const SET_SOME_STATE = 'SET_SOME_STATE'

export const SomeStates = {
    TRUE: 'TRUE',
    FALSE: 'FALSE'
  }

export function setSomeState(state) {
    return { type: SET_SOME_STATE, state }
}