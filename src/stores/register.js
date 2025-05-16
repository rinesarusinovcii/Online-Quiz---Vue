import { defineStore } from "pinia";
import { ref } from "vue";
import user from "@/helpers/user.js";
import { useAppToast } from "@/composables/useAppToast.js";


export const useRegisterStore = defineStore('register', () => {
    const toastMessage = useAppToast();
    const isLoading = ref(false);

    const register = async (newUser) => {
        isLoading.value = true;
        try {
            const response = await user.post('auth/register', newUser);
            if (response.data) {
                toastMessage.showSuccess('Regjistrimi u krye me sukses!');
                return true;
            }
        } catch (error) {
            if (error.response?.data?.message) {
                toastMessage.showError("Error: " + error.response.data.message);
            } else {
                toastMessage.showError('Gabim gjatë regjistrimit.');
            }
            return false;
        } finally {
            isLoading.value = false;
        }


        // const isRegistered = async (email) => {
        //     try {
        //         const response = await user.get(`auth/check-email?email=${encodeURIComponent(email)}`);
        //         if (response.data.exists) {
        //             toastMessage.showWarning("Ky email është tashmë i regjistruar. Ju lutem identifikohuni.");
        //             await router.push("/login");
        //             return true;
        //         }
        //         return false;
        //     } catch (error) {
        //         toastMessage.showError("Gabim gjatë kontrollimit të email-it.");
        //         return false;
        //     }
        // };
    };

    return {
        register,
        isLoading,
        // isRegistered

    };
});
