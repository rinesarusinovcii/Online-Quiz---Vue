// stores/question.js
import { defineStore } from "pinia";
import { ref, computed } from "vue";
import QuestionService from "@/service/questionService.js";

export const useQuestionStore = defineStore('question', () => {
    // state
    const questions = ref([]);

    // actions
    const getQuestions = async () => {
        const response = await QuestionService.getAllQuestions();
        if (response) {
            questions.value = response;
        }
    };

    // getters
    const questionsForDropdown = computed(() =>
        questions.value.map(q => ({
            value: q.id,
            label: q.text || `Question ${q.id}`
        }))
    );

    return {
        questions,
        getQuestions,
        questionsForDropdown
    };
});
