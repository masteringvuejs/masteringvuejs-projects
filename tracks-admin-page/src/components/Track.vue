<template>
  <div>
    <div v-if='isEditing' class='container'>
      <div class='leftSide'>
        <input type='text' v-model='editedName' />
      </div>
      <div class='rightSide'>
        <span
          @click='cancelEditing'
          class='link'
        >
          Cancel
        </span>
        <span
          @click='updateTrack'
          class='link'
        >
          Update
        </span>
      </div>
    </div>
    <div v-if='!isEditing' class='container'>
      <div class='leftSide'>
        <span>{{name}}</span>
      </div>
      <div class='rightSide'>
        <span
          @click='editTrack'
          class='link'
        >
          Edit
        </span>
        <span
          @click='removeTrack'
          class='link'
        >
          Remove
        </span>
      </div>
    </div>
  </div>
</template>

<script>
  import {eventBus} from '../main.js'
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      id: {
        type: Number,
        required: true
      },
      isEditing: {
        type: Boolean,
        required: true
      }
    },
    data () {
      return {
        editedName: ''
      }
    },
    methods: {
      removeTrack () {
        eventBus.removeTrack(this.id)
      },
      editTrack () {
        this.editedName = this.name
        eventBus.editTrack(this.id)
      },
      cancelEditing () {
        eventBus.cancelEditing(this.id)
      },
      updateTrack () {
        eventBus.updateTrack({
          id: this.id,
          name: this.editedName,
          isEditing: false
        })
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
  }

  .leftSide {
    width: 200px;
    text-align: center;
    font-size: 18px;
  }

  .rightSide {
    width: 100px;
  }

  .link {
    cursor: pointer;
  }

  .link:hover {
    text-decoration: underline;
  }
</style>
