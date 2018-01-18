import * as type from './types'

export const state = {
  ticket: null,
  error: null,
  isLoading: false
}

export const mutations = {
  [type.FETCH_TICKET_BY_ID_START] () {
    state.isLoading = true
  },
  [type.FETCH_TICKET_BY_ID_SUCCESS] (state, payload) {
    Object.assign(state, {
      isLoading: false,
      ticket: payload
    })
  },
  [type.FETCH_TICKET_BY_ID_FAILURE] (state, payload) {
    Object.assign(state, {
      error: payload,
      isLoading: false
    })
  }
}
