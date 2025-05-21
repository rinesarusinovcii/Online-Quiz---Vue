// stores/quiz.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import QuizService from "@/service/quizService.js";

export const useQuizStore = defineStore('quiz', () => {
    // state
    const quizzes = ref([]);

    // actions
    const getQuizzes = async () => {
        const response = await QuizService.getAllQuizzes(); // duhet ta kesh të implementuar
        if (response) {
            quizzes.value = response;
        }
    };

    // getters
    const quizzesForDropdown = computed(() =>
        quizzes.value.map(q => ({
            value: q.id,
            label: q.title || `Quiz ${q.id}`
        }))
    );

    return { getQuizzes, quizzesForDropdown };
});
