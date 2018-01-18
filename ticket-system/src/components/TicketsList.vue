<template>
  <div>
    <h1>Tickets list</h1>

    <div v-if='isLoading'>
      Loading...
    </div>

    <div v-if='error'>
      {{error}}
    </div>

    <div v-for='ticket in tickets'>
      <router-link :to="{ name: 'ticket', params: {id: ticket.id} }">
        {{ticket.title}}
      </router-link>
    </div>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'
  export default {
    methods: {
      ...mapActions({
        fetchTickets: 'tickets/fetchTickets'
      })
    },
    computed: {
      ...mapGetters({
        tickets: 'tickets/list',
        isLoading: 'tickets/isLoading',
        error: 'tickets/error'
      })
    },
    created () {
      this.fetchTickets()
    },
  }
</script>
