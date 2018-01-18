import * as type from './types'

export const state = {
  list: [],
  error: null,
  isLoading: false
}

export const mutations = {
  [type.FETCH_TICKETS_START] () {
    state.isLoading = true
  },
  [type.FETCH_TICKETS_SUCCESS] (state, payload) {
    Object.assign(state, {
      list: payload,
      isLoading: false
    })
  },
  [type.FETCH_TICKETS_FAILURE] (state, payload) {
    Object.assign(state, {
      error: payload,
      isLoading: false
    })
  }
}
