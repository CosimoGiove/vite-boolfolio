<script>
import { RouterLink } from 'vue-router';
export default {
    name: "mainheader",
}
</script>

<template>
    <header>
        <div class="contenitorenav container">
            <div>
                logo
            </div>
            <div>
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
            </div>
        </div>
    </header>
</template>

<style scoped>
h1 {
    text-align: center;
    color: black;
    padding: 20px;
}

ul {
    list-style: none;
    display: flex;
    li{
        margin-left: 40px;
        
    }
    li:hover{
        background-color: black;
        color: white;
        transform: scale(1.5);

    }
}

.contenitorenav{
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

header {
    background-color: lightgrey;
    margin-bottom: 20px;
}
</style>