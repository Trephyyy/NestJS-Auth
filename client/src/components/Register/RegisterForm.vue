<template>
    <div class="flex flex-col items-center justify-center w-full h-full">
        <form @submit.prevent="submitForm" class="my-20 space-y-8 form">
            <h1 class="text-2xl text-center bold">Register</h1>

            <div class="">
                <!-- <label for="username">Username:</label> -->
                <input class="input" v-model="username" required type="text" placeholder="username" name="username">
            </div>
            <div>
                <!--  <label for="password">Password:</label> -->
                <input class="input" v-model="password" required type="password" placeholder="password" name="password">
            </div>
            <button
                class='px-4 py-1 ml-auto flex border-[#aeacac] text-[#aeacac] hover:text-black hover:border-black border-2'>Log
                In</button>
        </form>
        <div class="div">{{ err }}</div>

    </div>
</template>
<script lang='ts' setup>
import { ref } from 'vue'
import axios from 'axios'


const username = ref('')
const password = ref('')

const err = ref('')

const formData = {
    username,
    password
}
const submitForm = () => {
    console.log('Submitting...    ')
    axios.post('http://localhost:3001/users', { username: username.value, password: password.value })
        .then(response => {
            err.value = 'User Created Successfully'

            console.log(response)
            // handle success response
        })
        .catch(error => {
            err.value = error.response.data.message
            console.log(error.response.data.message)
        })
}
</script>
<style lang='scss' scoped>
input {
    padding: 4px 8px;
    color: black;
    border: 2px #aeacac solid;
    border-radius: 4px;
    transition: border 500ms, border-radius 250ms;

    &::placeholder {
        transition: opacity 300ms;
    }

    &:focus {
        border: 2px solid black;
        border-radius: 0px;
        outline: none;

        &::placeholder {
            opacity: 0;
        }
    }
}
</style>