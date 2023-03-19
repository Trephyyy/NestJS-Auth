

<template>
  <main>
    <h1>Profile:</h1>
    <div>{{ profile }}</div>
  </main>
</template>
<script lang='ts' setup>
import axios from 'axios'
import { ref } from 'vue'

const token = localStorage.getItem('access_token')

const profile = ref('')

axios.get('http://localhost:3001/profile', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then(response => {
    console.log(response)
    profile.value = response.data
  })
  .then(error => {
    console.log(error)

  })
</script>
