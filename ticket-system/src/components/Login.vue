<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent='submit'>
      <div>
        {{error}}
      </div>
      <div>
        <label>Name:</label>
        <input type='text' v-model='name' />
       </div>
       <div>
         <label>Password:</label>
         <input type='text' v-model='password' />
       </div>
       <div>
         <button type=submit>Login</button>
       </div>
    </form>
  </div>
</template>

<script>
  import {mapActions, mapGetters} from 'vuex'

  export default {
    data () {
      return {
        name: '',
        password: ''
      }
    },
    computed: {
      ...mapGetters({
        isLoading: 'auth/isLoading',
        error: 'auth/error'
      })
    },
    methods: {
      ...mapActions({
        login: 'auth/login'
      }),
      submit () {
        this.login({
          name: this.name,
          password: this.password
        }).then(() => {
          this.$router.push('/')
        })
      }
    }
  }
</script>
