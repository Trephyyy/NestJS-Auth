<template>
    <div class="w-full h-full flex items-center  justify-center">
        <form action="" class="space-y-8 my-20   form">
            <div class="">
                <!-- <label for="username">Username:</label> -->
                <input class="input" type="text" placeholder="username" name="username">
            </div>
            <div>
                <!--  <label for="password">Password:</label> -->
                <input class="input" type="password" placeholder="password" name="password">
            </div>
            <button type="submit"
                class='px-4 py-1 ml-auto flex border-[#aeacac] text-[#aeacac] hover:text-black hover:border-black border-2'>Log
                In</button>


        </form>
    </div>
</template>
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