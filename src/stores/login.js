import { defineStore } from "pinia";
import { computed, ref } from "vue";
import user from "@/helpers/user.js";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "vue-router";
import {useAppToast} from "@/composables/useAppToast.js";

export const useLoginStore = defineStore('login', () => {
    const token = ref(localStorage.getItem('token') || null);
    const router = useRouter();
    const toastMessage = useAppToast()

    const logIn = async (userData) => {
        try {
            const response = await user.post('auth/login', userData);

            if (response.data?.token) {
                token.value = response.data.token;
                localStorage.setItem('token', token.value);
                return true; // Kthen true nëse login është i suksesshëm
            }
            return false;
        } catch (error) {
            toastMessage.showError('Email ose fjalëkalim i gabuar!')
            return false; // Kthen false nëse ka gabim
        }
    };

    const logOut = () => {
        token.value = null;
        localStorage.removeItem('token');
        router.push({ name: 'login' }); // Ridrejto në faqen e login pas logout
    };

    const isLoggedIn = computed(() => !!token.value);

    const loggedInUser = computed(() => {
        return token.value ? jwtDecode(token.value) : null;
    });

    return {
        logIn,
        logOut,
        isLoggedIn,
        loggedInUser,
        token,
        toastMessage

    };
});