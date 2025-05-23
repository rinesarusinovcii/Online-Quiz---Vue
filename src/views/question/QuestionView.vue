<script setup xmlns="http://www.w3.org/1999/html">
import QuizCard from "@/components/ui/QuizCard.vue";
import { ref, onMounted } from "vue";
import QuizSpinner from "@/components/ui/QuizSpinner.vue";
import QuizTable from "@/components/ui/QuizTable.vue";
import QuizButton from "@/components/ui/QuizButton.vue";
import QuestionService from "@/service/questionService.js";
import { useRouter } from 'vue-router';
import TheMainLayout from "@/components/ui/TheMainLayout.vue";
import {useAppToast} from "@/composables/useAppToast.js";


const isLoading = ref(false);
const questions = ref([]);
const router = useRouter();

const columns = ref([
  { key: 'id', label: '#' },
  { key: 'text', label: 'Text' },
  { key: 'questionType', label: 'Type' },
  { key: 'points', label: 'Points' },
  { key: 'quizId', label: 'Quiz ID' },
]);

const typeLabels = {
  MULTIPLE_CHOICE: 'Multiple Choice',
  TRUE_FALSE: 'True/False',
  SHORT_ANSWER: 'Short Answer',
};

const loadQuestions = async () => {
  try {
    isLoading.value = true;
    const response = await QuestionService.getAllQuestions();
    questions.value = response.map(q => ({
      id: q.id,
      text: q.text,
      questionType: typeLabels[q.questionType] || 'Unknown',
      points: q.points,
      quizId: q.quizId,
      choices: q.choices || [],
    }));
  } catch (e) {
    console.error("Gabim gjatë ngarkimit të pyetjeve:", e);
  } finally {
    isLoading.value = false;
  }
};
const { showSuccess } = useAppToast();
const onDelete = async (id) => {
  if (confirm('Are you sure you want to delete this question?')) {
    try {
      isLoading.value = true
      const response = await QuestionService.deleteQuestion(id)
      if (response) {
        showSuccess('Question deleted successfully')
        location.reload()
        // await loadDepartments()
      }
    } catch (e) {
      throw e;
    } finally {
      isLoading.value = false
    }
  }
}
onMounted(async () => {
  await loadQuestions();
});

</script>

<template>
  <the-main-layout>
    <template #content>
      <div class="col-lg-8 col-md-8 col-1">
  <quiz-card>

    <template #header>
      <div class="d-flex justify-content-between">
        <h5>Questions</h5>
        <router-link :to="{ name: 'create-question' }" class="btn btn-primary">
          <i class="bi bi-plus"></i>
        </router-link>
      </div>
    </template>

    <div class="text-center" v-if="isLoading">
      <quiz-spinner :is-loading="isLoading" />
    </div>

    <quiz-table v-else
                   id="questions"
                   :rows="questions"
                   :columns="columns"
                   has-actions>
      <template #actions="{ rreshti }">
        <router-link :to="{ name: 'edit-question', params: { id: rreshti.id } }"
                     class="btn btn-secondary">
          <i class="bi bi-pencil-fill"></i>
        </router-link>
        <quiz-button class="btn btn-danger ms-2"
                    @click="onDelete(rreshti.id)">
          <i class="bi bi-trash-fill"></i>
        </quiz-button>
      </template>
    </quiz-table>

  </quiz-card>
      </div>
    </template>
  </the-main-layout>
</template>

<style scoped></style>
