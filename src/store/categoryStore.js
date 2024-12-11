import { defineStore } from 'pinia';

import { apiGetListCategory, apiFetchListAllCourse, apiGetListCourseByPage, apiFetchCourseByCategory, apiDetailCourse, apiRegisterCourse } from "../apis/category.api"

export const useCategoryStore = defineStore('postStore', {
    state: () => ({
        category: [],
        listCourse: [],
        listCourseByPage: [],
        loading: false,
        error: null,
        listCourseByCategory: [],
        detailCourse: {},
        isRegisterCourse: false
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
        async fetchCourseByCategory(category) {
            try {
                const response = await apiFetchCourseByCategory(category);
                this.listCourseByCategory = response;
            } catch (err) {
                this.error = 'Failed to fetchCourseByCategory';
                console.error(err);
            }
        },
        async fetchDetailCourse(courseCode) {
            try {
                const response = await apiDetailCourse(courseCode);
                this.detailCourse = response;
            } catch (err) {
                this.error = 'Failed to fetchDetailCourse';
                console.error(err);
            }
        },
        async fetchRegisterCourse(maKhoaHoc, taiKhoan) {
            try {
                const response = await apiRegisterCourse(maKhoaHoc, taiKhoan);
                if (response.success) {
                    this.isRegisterCourse = true;
                }
                else {
                    this.isRegisterCourse = false;
                }
            } catch (err) {
                this.error = 'Failed to fetchDetailCourse';
                console.error(err);
                this.isRegisterCourse = false;
            }
        },
    },
});
