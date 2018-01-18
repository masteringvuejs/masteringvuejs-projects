<template>
  <div class='container'>
    <h1 class='title'>Tracks admin</h1>
    <addTrack class='addTrackContainer' />
    <trackList :tracks='tracks' />
  </div>
</template>

<script>
import {eventBus} from '../main.js'
import trackList from './TrackList.vue'
import addTrack from './AddTrack.vue'

export default {
  data () {
    return {
      tracks: [
        {name: 'Track 01', id: 1, isEditing: false},
        {name: 'Track 02', id: 2, isEditing: false},
        {name: 'Track 03', id: 3, isEditing: false}
      ]
    }
  },
  methods: {
    addTrack (track) {
      this.tracks.unshift(track)
    },
    removeTrack (id) {
      this.tracks = this.tracks.filter(
        track => track.id !== id
      )
    },
    editTrack (id) {
      const track = this.getTrackById(id)
      track.isEditing = true
    },
    cancelEditing (id) {
      const track = this.getTrackById(id)
      track.isEditing = false
    },
    updateTrack (updatedData) {
      const track = this.getTrackById(updatedData.id)
      Object.assign(track, updatedData)
    },
    getTrackById (id) {
      return this.tracks.find(
        track => track.id === id
      )
    }
  },
  components: {
    trackList,
    addTrack
  },
  created () {
    eventBus.$on('removeTrack', this.removeTrack)
    eventBus.$on('addTrack', this.addTrack)
    eventBus.$on('editTrack', this.editTrack)
    eventBus.$on('cancelEditing', this.cancelEditing)
    eventBus.$on('updateTrack', this.updateTrack)
  }
}
</script>

<style scoped>
  .container {
    width: 300px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .addTrackContainer {
    margin-bottom: 20px;
  }

  .title {
    text-align: center;
  }
</style>
