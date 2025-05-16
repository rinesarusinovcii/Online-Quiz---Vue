<script setup>
import QuizCard from "@/components/ui/QuizCard.vue";
import TheMainLayout from "@/components/ui/TheMainLayout.vue";
import QuizButton from "@/components/ui/QuizButton.vue";
import QuizSpinner from "@/components/ui/QuizSpinner.vue";

import { reactive, ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAppToast } from "@/composables/useAppToast.js";
import QuizService from "@/service/quizService.js";

const formData = reactive({
  title: { val: '', isValid: true },
  description: '',
  category: '',
  timeLimit: ''
})

const formIsValid = ref(true)
const isLoading = ref(false)
const { showSuccess } = useAppToast()
const route = useRoute()
const router = useRouter()
const quizId = parseInt(route.params.id)

const validateForm = () => {
  formIsValid.value = true
  if (!formData.title.val) {
    formData.title.isValid = false
    formIsValid.value = false
  }
}

const clearValidity = (key) => {
  formData[key].isValid = true
}

const handleSubmit = async () => {
  validateForm()
  if (!formIsValid.value) return

  const obj = {
    title: formData.title.val,
    description: formData.description,
    category: formData.category,
    timeLimit: formData.timeLimit
  }

  try {
    isLoading.value = true
    const response = await QuizService.updateQuiz(quizId, obj)
    if (response) {
      showSuccess("Quiz updated successfully")
      await router.push({ name: 'quizzes' }) // ose 'quiz-list' sipas routes që ke
    }
  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}

const loadQuiz = async (id) => {
  try {
    isLoading.value = true
    const response = await QuizService.getQuizById(id)
    if (response) {
      formData.title.val = response.title
      formData.description = response.description
      formData.category = response.category
      formData.timeLimit = response.timeLimit
    }
  } catch (e) {
    await router.push({ name: 'quizzes' })
    console.error(e)
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await loadQuiz(quizId)
})
</script>

<template>
  <the-main-layout>
    <template #content>
      <div class="col-lg-8 col-md-8 col-1">
        <quiz-card>
          <template #header>
            <h2 class="text-center">Edit Quiz</h2>
          </template>

          <template #default>
            <div v-if="isLoading" class="text-center">
              <quiz-spinner :is-loading="isLoading"/>
            </div>
            <form v-else @submit.prevent="handleSubmit">
              <!-- Title -->
              <div class="mb-3">
                <label for="title" class="form-label">Quiz Title</label>
                <input type="text"
                       id="title"
                       class="form-control"
                       :class="{ 'is-invalid': !formData.title.isValid }"
                       v-model="formData.title.val"
                       @blur="clearValidity('title')"
                       placeholder="Enter the quiz title" required>
                <div class="invalid-feedback">Title is required</div>
              </div>

              <!-- Description -->
              <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea id="description"
                          class="form-control"
                          v-model="formData.description"
                          placeholder="Enter a short description" rows="3"></textarea>
              </div>

              <!-- Category -->
              <div class="mb-3">
                <label for="category" class="form-label">Category</label>
                <input type="text"
                       id="category"
                       class="form-control"
                       v-model="formData.category"
                       placeholder="Enter the quiz category">
              </div>

              <!-- Time Limit -->
              <div class="mb-3">
                <label for="timeLimit" class="form-label">Time Limit (minutes)</label>
                <input type="number"
                       id="timeLimit"
                       class="form-control"
                       v-model="formData.timeLimit"
                       placeholder="Enter the time limit">
              </div>

              <div class="text-center">
                <quiz-button class="btn btn-primary me-2" :is-loading="isLoading">Save</quiz-button>
                <router-link :to="{name: 'quizzes'}" class="btn btn-light-secondary">Cancel</router-link>
              </div>
            </form>
          </template>
        </quiz-card>
      </div>
    </template>
  </the-main-layout>
</template>

<style scoped></style>
