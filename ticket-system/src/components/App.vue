<template>
  <div>
    <h1>Ticket system</h1>
    <appHeader />
    <router-view/>
  </div>
</template>

<script>
  import appHeader from './Header.vue'
  export default {
    components: {
      appHeader
    }
  }
</script>
