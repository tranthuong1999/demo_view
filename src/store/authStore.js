import { defineStore } from 'pinia';
import { apiRegister, apiLogin, apiFetchAccountInfor } from "../apis/authentication.api"
import { apiDeleteCourse } from "../apis/category.api";
export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isLogin: false,
        isRegister: false,
        isLoading: false,
        inforUser: {},
        inforAccount: {}
    }),
    actions: {
        async fetchRegister(data) {
            try {
                const response = await apiRegister(data);
                console.log("response fetchRegister", response)
                if (response.success) {
                    this.isRegister = true;
                }
                else {
                    this.isRegister = false;
                }
            } catch (err) {
                this.error = 'Failed to fetchListCategory';
                console.error(err);
            }
        },
        async fetchLogin(data) {
            try {
                const response = await apiLogin(data);
                if (response.accessToken) {
                    this.isLogin = true;
                    this.inforUser = response;
                } else {
                    this.isLogin = false;
                }
            } catch (err) {
                this.error = 'Failed to fetchListCourse';
                console.error(err);
                this.isLogin = false;
            }
        },
        async fetchUserInfor(taiKhoan) {
            try {
                const response = await apiFetchAccountInfor(taiKhoan);
                console.log("fetchUserInfor", response)
                this.inforAccount = response;
            } catch (err) {
                this.error = 'Failed to fetchListCourse';
                console.error(err);
                this.isLogin = false;
            }
        },
        async fetchDeleteCourse(maKhoaHoc, taiKhoan) {
            try {
                const response = await apiDeleteCourse(maKhoaHoc, taiKhoan);
                if (response.success) {
                    this.inforAccount = {
                        ...this.inforAccount,
                        chiTietKhoaHocGhiDanh: this.inforAccount.chiTietKhoaHocGhiDanh.filter((item) => item.maKhoaHoc !== maKhoaHoc)
                    }
                }
            } catch (err) {
                this.error = 'Failed to fetchDetailCourse';
                console.error(err);
                this.isRegisterCourse = false;
            }
        },
    },
});
