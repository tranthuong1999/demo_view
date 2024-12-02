import { defineStore } from 'pinia';
import { apiGetListCategory, apiFetchListAllCourse, apiGetListCourseByPage } from "../apis/category.api"

export const useCategoryStore = defineStore('postStore', {
    state: () => ({
        category: [],
        listCourse: [],
        listCourseByPage: [],
        loading: false,
        error: null,
    }),
    actions: {
        async fetchListCategory() {
            try {
                const response = await apiGetListCategory();
                this.category = response;
            } catch (err) {
                this.error = 'Failed to fetchListCategory';
                console.error(err);
            }
        },
        async fetchListCourse() {
            try {
                const response = await apiFetchListAllCourse();
                this.listCourse = response;
            } catch (err) {
                this.error = 'Failed to fetchListCourse';
                console.error(err);
            }
        },
        async fetchListCourseByPage(page) {
            this.loading = true;
            try {
                const response = await apiGetListCourseByPage(page);
                this.listCourseByPage = response;
            } catch (err) {
                this.error = 'Failed to fetchListCourseByPage';
                console.error(err);
            } finally {
                this.loading = false;
            }
        },
    },
});
