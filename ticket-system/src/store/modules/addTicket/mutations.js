import * as type from './types'

export const state = {
  error: null,
  isLoading: false
}

export const mutations = {
  [type.CREATE_TICKET_START] () {
    state.isLoading = true
  },
  [type.CREATE_TICKET_SUCCESS] (state, payload) {
    Object.assign(state, {
      isLoading: false
    })
  },
  [type.CREATE_TICKET_FAILURE] (state, payload) {
    Object.assign(state, {
      error: payload,
      isLoading: false
    })
  }
}
