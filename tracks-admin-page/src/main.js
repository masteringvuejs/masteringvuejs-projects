import Vue from 'vue'
import App from './components/App.vue'

export const eventBus = new Vue({
  methods: {
    removeTrack (id) {
      this.$emit('removeTrack', id)
    },
    editTrack (id) {
      this.$emit('editTrack', id)
    },
    addTrack (track) {
      this.$emit('addTrack', track)
    },
    cancelEditing (id) {
      this.$emit('cancelEditing', id)
    },
    updateTrack (updatedData) {
      this.$emit('updateTrack', updatedData)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
