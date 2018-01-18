import * as api from './api'
import * as types from './types'

export default {
  fetchTicketById({commit}, id) {
    return new Promise((resolve, reject) => {
      commit(types.FETCH_TICKET_BY_ID_START)

      api.fetchTicketById(id)
        .then(result => {
          commit(types.FETCH_TICKET_BY_ID_SUCCESS, result)
          resolve()
        }).catch(err => {
          console.log('err', err)
          commit(types.FETCH_TICKET_BY_ID_FAILURE, err)
          reject()
        })
    })
  }
}
