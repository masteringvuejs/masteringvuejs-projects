<template>
  <div>
    <router-link :to="{name: 'home'}">
      Home
    </router-link>
    <router-link
      :to="{name: 'addTicket'}"
      v-if='isLoggedIn'
    >
      Add ticket
    </router-link>
    <router-link
      :to="{name: 'login'}"
      v-if='!isLoggedIn'
    >
      Login
    </router-link>
    <router-link
      :to="{name: 'home'}"
      @click.native='logout'
      v-if='isLoggedIn'
    >
      Logout
    </router-link>
  </div>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    computed: {
      ...mapGetters({
        isLoggedIn: 'auth/isLoggedIn'
      })
    },
    methods: {
      ...mapMutations({
        logout: 'auth/LOGOUT'
      })
    }
  }
</script>
