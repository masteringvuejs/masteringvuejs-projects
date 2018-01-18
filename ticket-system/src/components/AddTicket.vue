<template>
  <div>
    <h1>Add ticket</h1>

    <form @submit.prevent='add'>
      <div>
        {{error}}
      </div>

      <div>
        <input
          type='text'
          v-model='title'
          placeholder='Title'
        />
      </div>

      <div>
        <textarea
          v-model='description'
          placeholder='Description'
        />
      </div>

      <div>
        <button
          type='submit'
          :disabled='isLoading'
        >Create</button>
      </div>
    </form>

  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data () {
      return {
        title: '',
        description: ''
      }
    },
    computed: {
      ...mapGetters({
        isLoading: 'addTicket/isLoading',
        error: 'addTicket/error'
      })
    },
    methods: {
      ...mapActions({
        createTicket: 'addTicket/createTicket'
      }),
      add () {
        this.createTicket({
          title: this.title,
          description: this.description
        }).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>
