import { createWebHistory, createRouter } from 'vue-router';
import HomePage from "../views/HomePage.vue";
import EventPage from "../views/EventPage.vue";
import CoursePage from "../views/CoursePage.vue";
import InforPage from "../views/InforPage.vue";
import FooterPage from "../views/FooterPage.vue";
import CategoryPage from "../views/CategoryPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: HomePage,
        },
        {
            path: '/thongtin',
            component: {
                defaults: InforPage,
                footer: FooterPage
            }
        },
        {
            path: '/khoahoc',
            component: CoursePage
        },
        {
            path: '/sukien',
            component: EventPage
        },
        {
            path: '/danhmuckhoahoc/:name',
            component: CategoryPage
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundPage
        }
    ],
})

export default router;