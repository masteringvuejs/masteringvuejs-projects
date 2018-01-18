import Vue from 'vue'

const normalizeTicket = (id, ticket) =>
  Object.assign({}, ticket, {id})

export const createTicket = ticket => {
  return new Promise((resolve, reject) => {
    Vue.http.post('tickets.json', ticket)
      .then(response => response.json())
      .then(json => {
        const ticketWithId = normalizeTicket(json.name, ticket)
        resolve(ticketWithId)
      })
      .catch(err => {
        console.log('err', err)
        reject(err)
      })
  })
}
