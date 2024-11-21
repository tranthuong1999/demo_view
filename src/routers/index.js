import { createWebHistory, createRouter } from 'vue-router'
// @ts-ignore
import HomeView from '../components/HomeView.vue';
// @ts-ignore
import AboutView from '../components/AboutView.vue';
// @ts-ignore
import TestView from '../components/TestPage.vue';
// @ts-ignore
import NotFound from '../components/NotFound.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            components: {
                default: HomeView,
                a: AboutView,
                b: TestView,
            },
        },
        {
            path: '/other',
            components: {
                default: TestView,
                a: NotFound,
            },
        },
        {
            path: '/about',
            components: AboutView
        },
    ],
})

export default router;