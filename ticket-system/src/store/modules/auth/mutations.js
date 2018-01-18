import * as type from './types'

export const state = {
  user: JSON.parse(window.localStorage.getItem('vueUser')),
  isLoading: false,
  error: null
}

export const mutations = {
  [type.LOGIN_START] () {
    state.isLoading = true
  },
  [type.LOGIN_SUCCESS] (state, payload) {
    Object.assign(state, {
      isLoading: false,
      user: payload
    })
  },
  [type.LOGIN_FAILURE] (state, payload) {
    Object.assign(state, {
      error: payload,
      isLoading: false
    })
  },
  [type.LOGOUT] (state, payload) {
    localStorage.removeItem('vueUser')
    Object.assign(state, {
      user: null
    })
  }
}
