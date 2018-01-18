import Vue from 'vue'
import Vuex from 'vuex'

import tickets from './modules/tickets'
import ticket from './modules/ticket'
import addTicket from './modules/addTicket'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    tickets,
    addTicket,
    ticket,
    auth
  }
})
