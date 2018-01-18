<template>
  <div class='container'>
    <input
      type='text'
      v-model='name'
      placeholder='Enter track name'
    />
    <button
      @click='addTrack'
      :disabled='isNameEmpty'
    >
      Add track
    </button>
  </div>
</template>

<script>
  import {eventBus} from '../main.js'
  export default {
    data () {
      return {
        name: ''
      }
    },
    computed: {
      isNameEmpty () {
        return !this.name.length
      }
    },
    methods: {
      addTrack () {
        eventBus.addTrack({
          name: this.name,
          id: Date.now(),
          isEditing: false
        })
        this.name = ''
      }
    }
  }
</script>

<style scoped>
  .container {
    text-align: center;
  }

  input {
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.4;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: 0;
  }

  input:focus {
    border-color: #66afe9;
  }

  button {
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
    border-radius: 4px;
    color: #333;
    border-color: #ccc;
    cursor: pointer;
  }

  button[disabled] {
    cursor: not-allowed;
    opacity: .65;
  }
</style>
