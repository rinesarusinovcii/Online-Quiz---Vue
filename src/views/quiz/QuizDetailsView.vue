<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import QuizService from '@/service/quizService';
import QuestionService from '@/service/questionService';
import ChoiceService from '@/service/choiceService';
import QuizSpinner from '@/components/ui/QuizSpinner.vue';
import TheMainLayout from '@/components/ui/TheMainLayout.vue';
import QuizCard from '@/components/ui/QuizCard.vue';

const route = useRoute();
const quizId = route.params.id;

const quiz = ref(null);
const questions = ref([]);
const isLoading = ref(true);

const loadQuizDetails = async () => {
  try {
    isLoading.value = true;

    quiz.value = await QuizService.getQuizById(quizId);
    const allQuestions = await QuestionService.getAllQuestions();
    const allChoices = await ChoiceService.getChoices();

    questions.value = allQuestions
        .filter(q => q.quizId === parseInt(quizId))
        .map(q => ({
          ...q,
          choices: allChoices.filter(c => c.questionId === q.id)
        }));

  } catch (error) {
    console.error('Error loading quiz details:', error);
  } finally {
    isLoading.value = false;
  }
};

onMounted(loadQuizDetails);
</script>

<template>
  <the-main-layout>
    <template #content>
      <div class="col-lg-8 col-md-8 col-1 ">
        <div v-if="isLoading" class="text-center mt-5">
          <quiz-spinner :is-loading="isLoading" />
        </div>

        <div v-else-if="quiz">
          <quiz-card>
            <template #header>
              <h3 class="mb-3">{{ quiz.title }}</h3>
            </template>

            <p><strong>Description:</strong> {{ quiz.description }}</p>
            <p><strong>Category:</strong> {{ quiz.category }}</p>
            <p><strong>Time Limit:</strong> {{ quiz.timeLimit }} minutes</p>
            <hr />

            <div v-if="questions.length === 0">
              <p>No questions found for this quiz.</p>
            </div>

            <div v-else>
              <div v-for="question in questions" :key="question.id" class="mb-4 p-3 border rounded">
                <h5>{{ question.text }}</h5>
                <p><strong>Type:</strong> {{ question.questionType }}</p>
                <p><strong>Points:</strong> {{ question.points }}</p>
                <ul>
                  <li v-for="choice in question.choices" :key="choice.id">
                    {{ choice.text }}
                    <span v-if="choice.isCorrect" class="text-success">(Correct)</span>
                  </li>
                </ul>
              </div>
            </div>
          </quiz-card>
        </div>
      </div>
    </template>
  </the-main-layout>
</template>

<style scoped>
h3 {
  font-weight: bold;
}
</style>
