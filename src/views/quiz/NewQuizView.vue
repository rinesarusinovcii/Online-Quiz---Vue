<script setup>

import QuizButton from "@/components/ui/QuizButton.vue";
import QuizCard from "@/components/ui/QuizCard.vue";
import TheMainLayout from "@/components/ui/TheMainLayout.vue";
import {reactive, ref} from "vue";
import {useAppToast} from "@/composables/useAppToast.js";
import {useRouter} from "vue-router";
import QuizService from "@/service/quizService.js";

const formData = reactive({
  title: { val: '', isValid: true },
  description: '',
  category: '',
  timeLimit: ''
});

const formIsValid = ref(true);
const validateForm = () => {
  formIsValid.value = true;

  if (!formData.title.val) {
    formData.title.isValid = false;
    formIsValid.value = false;
  }
};

const clearValidity = (key) => {
  formData[key].isValid = true;
};

const isLoading = ref(false);
const { showSuccess } = useAppToast();
const router = useRouter();

const handleSubmit = async () => {
  validateForm();

  if (!formIsValid.value) return;

  const quiz = {
    title: formData.title.val,
    description: formData.description,
    category: formData.category,
    timeLimit: formData.timeLimit
  };

  try {
    isLoading.value = true;
    const response = await QuizService.createQuiz(quiz);
    if (response) {
      showSuccess("Quiz created successfully");
      await router.push({ name: 'quiz' });
    }
  } catch (e) {
    console.error(e);
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <the-main-layout>
    <template #content><div class="col-lg-9 col-md-8 col-2 ">

      <link href="../../assets/css/quiz.css">
      <quiz-card >
        <template #header>
          <h2 class="text-center">New Quiz</h2>
        </template>
        <template #default>
          <div class="text-center">
            <form @submit.prevent="handleSubmit">
              <!-- Title -->
              <div class="mb-3">
                <label for="title" class="form-label">Quiz Title</label>
                <input
                    type="text"
                    id="title"
                    class="form-control"
                    :class="{ 'is-invalid': !formData.title.isValid }"
                    v-model="formData.title.val"
                    @blur="clearValidity('title')"
                    placeholder="Enter the quiz title"
                />
              </div>

              <!-- Description -->
              <!-- Title -->
              <div class="mb-3">
                <label for="description" class="form-label">Quiz Description</label>
                <input
                    type="text"
                    id="description"
                    class="form-control"
                    :class="{ 'is-invalid': !formData.description }"
                    v-model="formData.description"

                    placeholder="Enter the quiz description"
                />
              </div>

              <!-- Category -->
              <!-- Title -->
              <div class="mb-3">
                <label for="category" class="form-label">Quiz Category</label>
                <input
                    type="text"
                    id="category"
                    class="form-control"
                    :class="{ 'is-invalid': !formData.category }"
                    v-model="formData.category"

                    placeholder="Enter the quiz category"
                />
              </div>


              <!-- Time Limit -->
              <!-- Title -->
              <div class="mb-3">
                <label for="timeLimit" class="form-label">Time limit</label>
                <input
                    type="number"
                    id="timeLimit"
                    class="form-control"
                    :class="{ 'is-invalid': !formData.timeLimit }"
                    v-model="formData.timeLimit"

                    placeholder="Enter quiz time limit"
                />
              </div>

              <!--            <button type="submit" class="btn btn-primary">Save Quiz</button>-->
              <div class="text-center">
                <quiz-button class="btn btn-primary me-2" :is-loading="isLoading">Add Quiz</quiz-button>
                <router-link :to="{ name: 'quiz' }" class="btn btn-light-primary">Cancel</router-link>
              </div>
              <!-- Submit Button -->
              <!--                    <a th:href="@{/question/newQuestion}" class="btn btn-primary mt-4">Next</a>-->
            </form>


          </div>
        </template>
      </quiz-card>
    </div>
    </template>
  </the-main-layout>

</template>

<style scoped>

</style>