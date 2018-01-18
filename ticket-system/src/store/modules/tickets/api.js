import Vue from 'vue'

const normalizeTickets = json =>
  Object.keys(json).map(key => {
    return Object.assign({}, json[key], {
      id: key
    })
  })

export const fetchTickets = () => {
  return new Promise((resolve, reject) => {
    Vue.http.get('tickets.json')
      .then(response => response.json())
      .then(json => {
        const tickets = normalizeTickets(json)
        resolve(tickets)
      })
      .catch(err => {
        console.log('err', err)
        reject(err)
      })
  })
}
