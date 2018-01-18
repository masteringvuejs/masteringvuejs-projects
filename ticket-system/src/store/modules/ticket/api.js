import Vue from 'vue'

export const fetchTicketById = id => {
  return new Promise((resolve, reject) => {
    Vue.http.get(`tickets/${id}.json`)
      .then(response => response.json())
      .then(json => {
        const ticketWithId = Object.assign({}, json, {
          id
        })
        resolve(ticketWithId)
      })
      .catch(err => {
        console.log('err', err)
        reject(err)
      })
  })
}
