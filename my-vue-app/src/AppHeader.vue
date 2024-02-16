<script>
import { RouterLink } from 'vue-router';
export default {
    name: "mainheader",
}
</script>

<template>
    <header>
        <ul>
            <li>
                <router-link class="nav-link" to="/post">progetti</router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/about">about</router-link>
            </li>
            <li>
                <router-link class="nav-link" to="/">home</router-link>
            </li>
        </ul>
    </header>
</template>

<style scoped>
h1 {
    text-align: center;
    color: black;
    padding: 20px;
}

header {
    background-color: lightgrey;
}
</style>