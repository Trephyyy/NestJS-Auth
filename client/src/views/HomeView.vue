

<template>
  <main>
    <h1>Profile:</h1>
    <div>{{ profile }}</div>
  </main>
</template>
<script lang='ts' setup>
import axios from 'axios'
import { ref } from 'vue'


const profile = ref('')

axios.get('http://localhost:3001/profile', {})
  .then(response => {
    console.log(response)
  })
  .then(error => {
    console.log(error)

  })
</script>
