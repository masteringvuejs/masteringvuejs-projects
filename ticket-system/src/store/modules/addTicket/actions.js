import * as api from './api'
import * as types from './types'

export default {
  createTicket({commit}, ticket) {
    return new Promise((resolve, reject) => {
      commit(types.CREATE_TICKET_START)

      api.createTicket(ticket)
        .then(result => {
          commit(types.CREATE_TICKET_SUCCESS, result)
          resolve()
        }).catch(err => {
          console.log('err', err)
          commit(types.CREATE_TICKET_FAILURE, err)
          reject()
        })
    })
  }
}
