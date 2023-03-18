<template>
    <div class="w-screen bg-[#101010] h-20">
        <nav>
            <ul class="flex text-white flex-row items-center justify-end h-20 space-x-16 mr-20 font-bold">
                <router-link to="/">
                    <li>Home</li>
                </router-link>
                <router-link to="/login">
                    <li>Login</li>
                </router-link>
                <router-link to="/dashboard">
                    <li>Dashboard</li>
                </router-link>
                <router-link to="/users">
                    <li>Users</li>
                </router-link>
            </ul>

        </nav>

    </div>
</template>
<style lang='scss' scoped>
.router-link-active>li {
    color: red;
}
</style>