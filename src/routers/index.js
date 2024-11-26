import { createWebHistory, createRouter } from 'vue-router';
import HomePage from "../views/HomePage.vue";
import EventPage from "../views/EventPage.vue";
import CoursePage from "../views/CoursePage.vue";
import InforPage from "../views/InforPage.vue";
import FooterPage from "../views/FooterPage.vue";
import CategoryPage from "../views/CategoryPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import BlogPage from "../views/BlogPage.vue";
import CourseDescriptionPage from "../views/CourseDescriptionPage.vue";
import ResponsivePage from "../views/ResponsivePage.vue";
import CounterPage from "../views/CounterPage.vue";
import MentorPage from "../views/MentorPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            components: {
                default: HomePage,
                courseDesc: CourseDescriptionPage,
                footer: FooterPage,
                counter: CounterPage,
                mentor: MentorPage,

            },
        },
        {
            path: '/trangchu',
            component: HomePage,
        },
        {
            path: '/thongtin',
            component: InforPage
        },
        {
            path: '/khoahoc',
            component: CoursePage
        },
        {
            path: '/blog',
            component: BlogPage
        },
        {
            path: '/sukien/:name',
            component: EventPage
        },
        {
            path: '/danhmuckhoahoc/:name',
            component: CategoryPage
        },
        {
            path: '/responsive',
            component: ResponsivePage
        },
        {
            path: '/footer',
            component: FooterPage
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundPage
        }
    ],
})

export default router;