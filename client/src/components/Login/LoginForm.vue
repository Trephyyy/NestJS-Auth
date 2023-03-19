<template>
    <div class="flex flex-col items-center justify-center w-full h-full">
        <form @submit.prevent="submitForm" class="my-20 space-y-8 form">
            <h1 class="text-2xl text-center bold">Login</h1>

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
        <div class="my-10 text-2xl text-center"> OR </div>
        <div class="flex flex-row space-x-4">
            <div>
                <Icon icon="mdi:github" width="40" />
            </div>
            <div @click="steamLogin()">
                <Icon icon="mdi:steam" width="40" />
            </div>
            <div>
                <Icon icon="mdi:facebook" width="40" />
            </div>
        </div>
    </div>
</template>
<script lang='ts' setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'
import { Icon } from '@iconify/vue'

const password = ref('')
const username = ref('')

const err = ref('')

async function steamLogin() {
    axios.get('http://localhost:3001/auth/steam')
        .then(response => { window.location = response.data })
}



const getToken = () => {
    axios.post('http://localhost:3001/auth/steam')
}

const submitForm = () => {
    axios.post('http://localhost:3001/auth/login/local', { username: username.value, password: password.value })
        .then(response => {
            err.value = "Logged In Successfully "
            console.log(response)
            localStorage.setItem('access_token', response.data.access_token)
        })
        .catch(error => {
            err.value = error.response.data.message
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

    &:focus {
        border: 2px solid black;
        border-radius: 0px;
        outline: none;

        &::placeholder {
            color: transparent;
        }
    }
}
</style>