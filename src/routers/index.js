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
import SloganPage from "../views/SloganPage.vue";
import CoursePopularPage from "../views/CoursePopularPage.vue";
import CourseReferencePage from "../views/CourseReferencePage.vue";
import CourseFontEndPage from "../views/CourseFontEndPage.vue";
import MenuPageCheck from "../views/MenuPageCheck.vue";
import DetailCoursePage from "../views/DetailCoursePage.vue";
import LoginPage from "../views/LoginPage.vue";

import { useCategoryStore } from "../store/categoryStore"

const home_page = {
    nav_bar: HomePage,
    menu_check: MenuPageCheck,
    slogan: SloganPage,
    course_desc: CourseDescriptionPage,
    footer: FooterPage,
    counter: CounterPage,
    mentor: MentorPage,
    course_popular: CoursePopularPage,
    course_reference: CourseReferencePage,
    course_font_end: CourseFontEndPage,
}

const fetchCategoryData = async () => {
    const categoryStore = useCategoryStore();
    await categoryStore.fetchListCourse();
    await categoryStore.fetchListCategory();
};

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            components: home_page,
            beforeEnter: fetchCategoryData
        },
        {
            path: '/login',
            components: {
                login: LoginPage
            },
        },
        {
            path: '/trangchu',
            components: home_page,
            beforeEnter: fetchCategoryData
        },
        {
            path: '/thongtin',
            components: {
                nav_bar: HomePage,
                infor: InforPage,
                footer: FooterPage,
            }
        },
        {
            path: '/khoahoc',
            components: {
                nav_bar: HomePage,
                course: CoursePage,
                footer: FooterPage,
            }
        },
        {
            path: '/blog',
            components: {
                nav_bar: HomePage,
                blog: BlogPage,
                footer: FooterPage,
            }
        },
        {
            path: '/sukien/:name?',
            components: {
                nav_bar: HomePage,
                event: EventPage,
                footer: FooterPage,
            }
        },
        {
            path: '/danhmuckhoahoc/:name',
            components: {
                nav_bar: HomePage,
                category: CategoryPage,
                footer: FooterPage,
            }
        },
        {
            path: '/chitiet/:course_code',
            components: {
                nav_bar: HomePage,
                detail_course: DetailCoursePage,
                footer: FooterPage,
            },
            beforeEnter: fetchCategoryData
        },
        {
            path: '/responsive',
            component: ResponsivePage
        },
        {
            path: '/:pathMatch(.*)*',
            component: NotFoundPage
        }
    ],
})

export default router;