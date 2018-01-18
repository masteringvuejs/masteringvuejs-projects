<template>
  <div>
    <myTrack
      v-for='track in tracks'
      :name='track.name'
      :id='track.id'
      :key='track.id'
      :isEditing='track.isEditing'
      class='track'
    >
    </myTrack>
  </div>
</template>

<script>
  import track from './Track.vue'

  export default {
    props: {
      tracks: {
        type: Array,
        required: true
      }
    },
    components: {
      myTrack: track
    }
  }
</script>

<style scoped>
  .track {
    padding: 10px 0;
  }
</style>
