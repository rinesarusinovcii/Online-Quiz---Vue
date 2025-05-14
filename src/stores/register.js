import { defineStore } from "pinia";
import { ref } from "vue";
import user from "@/helpers/user.js";

export const useRegisterStore = defineStore('register', () => {
    // state
    const successMessage = ref(null);
    const errorMessage = ref(null);
    const isLoading = ref(false);

    // actions
    const register = async (newUser) => {
        isLoading.value = true;
        successMessage.value = null;
        errorMessage.value = null;

        try {
            const response = await user.post('auth/register', newUser);
            if (response.data) {
                successMessage.value = "Regjistrimi u krye me sukses!";
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                errorMessage.value = error.response.data.message;
            } else {
                errorMessage.value = "Ndodhi një gabim gjatë regjistrimit.";
            }
        } finally {
            isLoading.value = false;
        }
    };

    return {
        register,
        successMessage,
        errorMessage,
        isLoading
    };
});
