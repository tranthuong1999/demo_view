import { defineStore } from 'pinia';
import { apiGetListCategory, apiFetchListAllCourse } from "../apis/category.api"

export const useCategoryStore = defineStore('postStore', {
    state: () => ({
        category: [],
        listCourse: [],
        loading: false,
        error: null,
    }),
    actions: {
        async fetchListCategory() {
            try {
                const response = await apiGetListCategory();
                this.category = response;
            } catch (err) {
                this.error = 'Failed to fetch posts';
                console.error(err);
            }
        },
        async fetchListCourse() {
            try {
                const response = await apiFetchListAllCourse();
                this.listCourse = response;
            } catch (err) {
                this.error = 'Failed to fetch posts';
                console.error(err);
            }
        },
    },
});
