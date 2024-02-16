import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/AppHome.vue';
import PostList from './pages/PostList.vue';
import AppAbout from './pages/AppAbout.vue';
const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: AppHome
},
{
path: '/about',
name: 'about',
component: AppAbout
},
{
    path: '/post',
    name: 'post',
    component: PostList,
    },
]
});
export { router };