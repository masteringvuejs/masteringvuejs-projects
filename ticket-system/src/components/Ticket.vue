<template>
  <div>
    <div v-if='error'>
      {{error}}
    </div>

    <div v-if='isLoading'>
      Loading...
    </div>

    <div v-if='ticket'>
      <h1>{{ticket.title}}</h1>
      <div>{{ticket.description}}</div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
  export default {
    methods: {
      ...mapActions({
        fetchTicketById: 'ticket/fetchTicketById'
      })
    },
    computed: {
      ...mapGetters({
        ticket: 'ticket/ticket',
        isLoading: 'ticket/isLoading',
        error: 'ticket/error'
      })
    },
    created () {
      const id = this.$route.params.id
      this.fetchTicketById(id)
    },
  }
</script>
