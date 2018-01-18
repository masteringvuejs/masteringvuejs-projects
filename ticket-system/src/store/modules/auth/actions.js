import * as api from './api'
import * as types from './types'

export default {
  login({commit}, loginData) {
    return new Promise((resolve, reject) => {
      commit(types.LOGIN_START)

      api.login(loginData)
        .then(result => {
          commit(types.LOGIN_SUCCESS, result)
          window.localStorage.setItem('vueUser',JSON.stringify(result));
          resolve()
        }).catch(err => {
          console.log('err', err)
          commit(types.LOGIN_FAILURE, err)
        })
    })
  }
}
