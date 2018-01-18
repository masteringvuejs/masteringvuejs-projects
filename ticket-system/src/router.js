import VueRouter from 'vue-router'

import TicketsList from './components/TicketsList.vue'
import AddTicket from './components/AddTicket.vue'
import Ticket from './components/Ticket.vue'
import Login from './components/Login.vue'

const routes = [
  {
    path: '/',
    component: TicketsList,
    name: 'home'
  },
  {
    path: '/tickets/add',
    component: AddTicket,
    name: 'addTicket',
    meta: {requiresAuth: true}
  },
  {
    path: '/tickets/:id',
    component: Ticket,
    name: 'ticket'
  },
  {
    path: '/login',
    component: Login,
    name: 'login'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authUser = JSON.parse(window.localStorage.getItem('vueUser'))
    if (!authUser) {
      next({name:'login'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
