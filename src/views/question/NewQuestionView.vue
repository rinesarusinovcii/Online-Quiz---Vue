<script setup>
import QuizButton from "@/components/ui/QuizButton.vue";
import QuizCard from "@/components/ui/QuizCard.vue";
import TheMainLayout from "@/components/ui/TheMainLayout.vue";
import { reactive, ref, onMounted } from "vue";
import { useAppToast } from "@/composables/useAppToast.js";
import { useRouter } from "vue-router";
import QuestionService from "@/service/questionService.js";
import { useLoginStore } from "@/stores/login.js";
import { useQuizStore } from "@/stores/quiz.js";

const loginStore = useLoginStore();
const toast = useAppToast();
const router = useRouter();
const quizStore = useQuizStore();

onMounted(() => {
  quizStore.getQuizzes();
});

const questionTypes = [ "MULTIPLE_CHOICE",
  "TRUE_FALSE"];

const formData = reactive({
  text: { val: "", isValid: true },
  questionType: { val: "", isValid: true },
  points: { val: "", isValid: true },
  quizId: { val: "", isValid: true }
});

const formIsValid = ref(true);
const isLoading = ref(false);

const validateForm = () => {
  formIsValid.value = true;

  if (!formData.text.val || formData.text.val.length < 10) {
    formData.text.isValid = false;
    formIsValid.value = false;
  }

  if (!formData.questionType.val) {
    formData.questionType.isValid = false;
    formIsValid.value = false;
  }

  if (!formData.points.val || formData.points.val < 0) {
    formData.points.isValid = false;
    formIsValid.value = false;
  }

  if (!formData.quizId.val) {
    formData.quizId.isValid = false;
    formIsValid.value = false;
  }
};

const clearValidity = (key) => {
  formData[key].isValid = true;
};

const handleSubmit = async () => {
  validateForm();
  if (!formIsValid.value) return;

  const question = {
    text: formData.text.val,
    questionType: formData.questionType.val,
    points: parseFloat(formData.points.val),
    quizId: Number(formData.quizId.val)
  };

  try {
    isLoading.value = true;
    const response = await QuestionService.createQuestion(question);

    if (response) {
      toast.showSuccess("Pyetja u krijua me sukses!");
      setTimeout(() => {
        router.push({ name: "question" });
      }, 1000);
    } else {
      toast.showError("Përgjigja e serverit ishte bosh");
    }
  } catch (e) {
    toast.showError("Gabim: " + (e.response?.data?.message || e.message));
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
            <h2 class="text-center">New Question</h2>
          </template>
          <template #default>
            <form @submit.prevent="handleSubmit">
              <!-- Question Text -->
              <div class="mb-1">
                <label class="form-label">Question Text</label>
                <textarea
                    class="form-control"
                    :class="{ 'is-invalid': !formData.text.isValid }"
                    v-model="formData.text.val"
                    @blur="clearValidity('text')"
                    placeholder="Enter the question"
                    rows="3"
                ></textarea>
              </div>

              <!-- Question Type -->
              <div class="mb-1">
                <label class="form-label">Question Type</label>
                <select
                    class="form-select"
                    :class="{ 'is-invalid': !formData.questionType.isValid }"
                    v-model="formData.questionType.val"
                    @blur="clearValidity('questionType')"
                >
                  <option disabled value="">Select type</option>
                  <option v-for="type in questionTypes" :key="type" :value="type">{{ type }}</option>
                </select>
              </div>

              <!-- Points -->
              <div class="mb-1">
                <label class="form-label">Points</label>
                <input
                    type="number"
                    class="form-control"
                    :class="{ 'is-invalid': !formData.points.isValid }"
                    v-model="formData.points.val"
                    @blur="clearValidity('points')"
                    placeholder="Points for this question"
                />
              </div>

              <!-- Quiz ID (Dropdown) -->
              <div class="mb-1">
                <label class="form-label">Quiz</label>
                <select
                    class="form-select"
                    :class="{ 'is-invalid': !formData.quizId.isValid }"
                    v-model="formData.quizId.val"
                    @blur="clearValidity('quizId')"
                >
                  <option disabled value="">Select quiz</option>
                  <option
                      v-for="quiz in quizStore.quizzesForDropdown"
                      :key="quiz.value"
                      :value="quiz.value"
                  >
                    {{ quiz.label }}
                  </option>
                </select>
              </div>

              <!-- Buttons -->
              <div class="text-center">
                <quiz-button class="btn btn-primary me-3" :is-loading="isLoading">
                  Add Question
                </quiz-button>
                <router-link :to="{ name: 'home' }" class="btn btn-secondary">Cancel</router-link>
              </div>
            </form>
          </template>
        </quiz-card>
      </div>
    </template>
  </the-main-layout>
</template>
