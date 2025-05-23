<script setup>
import QuizButton from "@/components/ui/QuizButton.vue";
import QuizCard from "@/components/ui/QuizCard.vue";
import TheMainLayout from "@/components/ui/TheMainLayout.vue";
import { reactive, ref } from "vue";
import { useAppToast } from "@/composables/useAppToast.js";
import { useRouter } from "vue-router";
import QuizService from "@/service/quizService.js";
import { useLoginStore } from "@/stores/login.js";

const loginStore = useLoginStore();
const toast = useAppToast();
const router = useRouter();

const formData = reactive({
  title: { val: "", isValid: true },
  description: { val: "", isValid: true },
  category: { val: "", isValid: true },
  timeLimit: { val: "", isValid: true },
  createdAt: new Date().toISOString().split("T")[0],
  isPublished: true
});

const formIsValid = ref(true);
const isLoading = ref(false);

const validateForm = () => {
  formIsValid.value = true;

  if (!formData.title.val) {
    formData.title.isValid = false;
    formIsValid.value = false;
  }

  if (!formData.description.val || formData.description.val.length < 10) {
    formData.description.isValid = false;
    formIsValid.value = false;
  }

  if (!formData.category.val) {
    formData.category.isValid = false;
    formIsValid.value = false;
  }

  if (!formData.timeLimit.val || formData.timeLimit.val <= 0) {
    formData.timeLimit.isValid = false;
    formIsValid.value = false;
  }
};

const clearValidity = (key) => {
  formData[key].isValid = true;
};

const handleSubmit = async () => {
  validateForm();
  if (!formIsValid.value) return;

  // Kontrollo nëse useri është i loguar
  if (!loginStore.isLoggedIn) {
    toast.showError("Duhet të jeni loguar për të krijuar një quiz!");
    await router.push({ name: "login" });
    return;
  }

  const quiz = {
    title: formData.title.val,
    description: formData.description.val,
    category: formData.category.val,
    timeLimit: Number(formData.timeLimit.val),
    isPublished: formData.isPublished, // Shto ID e userit të loguar
    createdAt: new Date().toISOString().split("T")[0]
  };

  try {
    isLoading.value = true;
    const response = await QuizService.createQuiz(quiz);

    // Verifiko më mirë përgjigjen
    if (response) {
      toast.showSuccess("Quiz u krijua me sukses!");
      setTimeout(() => {
        router.push({ name: "quiz" });
      }, 1000); // 1 sekondë delay
    }
    else {
      toast.showError("Përgjigja e serverit ishte e zbrazët");
    }
  } catch (e) {
    console.error("Gabim në krijimin e quiz-it:", e);
    toast.showError("Diçka shkoi keq: " + (e.response?.data?.message || e.message));
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <the-main-layout>
    <template #content>
      <div class="col-lg-8 col-md-8 col-1">
        <quiz-card>
          <template #header>
            <h2 class="text-center">New Quiz</h2>
          </template>
          <template #default>
            <div class="text-center">
              <form @submit.prevent="handleSubmit">
                <!-- Title -->
                <div class="mb-1">
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
                <div class="mb-1">
                  <label for="description" class="form-label">Quiz Description</label>
                  <textarea
                      id="description"
                      class="form-control"
                      :class="{ 'is-invalid': !formData.description.isValid }"
                      v-model="formData.description.val"
                      @blur="clearValidity('description')"
                      placeholder="Enter the quiz description (min 10 characters)"
                      rows="4"
                  ></textarea>
                </div>

                <!-- Category -->
                <div class="mb-1">
                  <label for="category" class="form-label">Quiz Category</label>
                  <input
                      type="text"
                      id="category"
                      class="form-control"
                      :class="{ 'is-invalid': !formData.category.isValid }"
                      v-model="formData.category.val"
                      @blur="clearValidity('category')"
                      placeholder="Enter the quiz category"
                  />
                </div>

                <!-- Time Limit -->
                <div class="mb-1">
                  <label for="timeLimit" class="form-label">Time Limit (minutes)</label>
                  <input
                      type="number"
                      id="timeLimit"
                      class="form-control"
                      :class="{ 'is-invalid': !formData.timeLimit.isValid }"
                      v-model="formData.timeLimit.val"
                      @blur="clearValidity('timeLimit')"
                      placeholder="Enter quiz time limit in minutes"
                  />
                </div>

                <!-- Is Published -->
                <div class="form-check mb-1 text-start">
                  <input
                      class="form-check-input"
                      type="checkbox"
                      id="isPublished"
                      v-model="formData.isPublished"
                  />
                  <label class="form-check-label" for="isPublished">
                    Publish this quiz
                  </label>
                </div>

                <!-- Buttons -->
                <div class="text-center">
                  <quiz-button class="btn btn-primary me-3" :is-loading="isLoading" >
                    Add Quiz
                  </quiz-button>
                  <router-link :to="{name: 'home'} " class="btn btn-secondary">Cancel</router-link>
                </div>
              </form>
            </div>
          </template>
        </quiz-card>
      </div>
    </template>
  </the-main-layout>
</template>
