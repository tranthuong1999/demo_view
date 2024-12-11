import { defineStore } from 'pinia';
import { apiRegister, apiLogin } from "../apis/authentication.api"

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        isLogin: false,
        isRegister: false,
        isLoading: false,
        inforUser: {}
    }),
    actions: {
        async fetchRegister(data) {
            try {
                const response = await apiRegister(data);
                if (response) {
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
                console.log("response fetchLogin", response)
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
        }
    },
});
