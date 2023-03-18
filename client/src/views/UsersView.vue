<template>
    <div>
        Users:
        {{ users }}
    </div>
</template>
<script lang='ts' setup>
const users: Array<Users> = [
    {
        name: 'trephy',
        password: '1234',
        auth: 'local',
    },
    {
        name: 'random',
        auth: 'github',
        id: '213123124',
    }
]
interface Users {
    name: string
    password?: string
    auth: string
    id?: string
}
</script>