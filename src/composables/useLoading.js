import {ref} from "vue";

export function useLoading() {
    const isLoading = ref(false);

    const withLoading = async (asyncFunc) => {
        try {
            isLoading.value = true;
            await asyncFunc();
        } catch (e) {
            throw e;
        } finally {
            isLoading.value = false;
        }
    }

    return {isLoading, withLoading}
}