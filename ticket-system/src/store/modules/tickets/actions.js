import * as api from './api'
import * as types from './types'

export default {
  fetchTickets ({commit}) {
    commit(types.FETCH_TICKETS_START)

    api.fetchTickets()
      .then(tickets => {
        commit(types.FETCH_TICKETS_SUCCESS, tickets)
      }).catch(err => {
        console.log('err', err)
        commit(types.FETCH_TICKETS_FAILURE, err)
      })
  }
}
