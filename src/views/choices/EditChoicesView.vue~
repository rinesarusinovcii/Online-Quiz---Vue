<script setup>
import QuizButton from "@/components/ui/QuizButton.vue";
import QuizCard from "@/components/ui/QuizCard.vue";
import TheMainLayout from "@/components/ui/TheMainLayout.vue";
import { reactive, ref, onMounted } from "vue";
import { useAppToast } from "@/composables/useAppToast.js";
import {useRoute, useRouter} from "vue-router";
import ChoiceService from "@/service/choiceService.js";
import QuestionService from "@/service/questionService.js";
import { useQuestionStore } from "@/stores/question.js";

const toast = useAppToast();
const router = useRouter();
const questionStore = useQuestionStore();

const questions = ref([]);
const formIsValid = ref(true);
const isLoading = ref(false);

const formData = reactive({
  text: { val: "", isValid: true },
  correct: { val: false, isValid: true },
  questionId: { val: "", isValid: true }
});

onMounted(async () => {
  try {
    const response = await QuestionService.getAllQuestions();
    questions.value = response.map(q => ({
      label: q.text,
      value: q.id
    }));
  } catch (e) {
    toast.showError("Gabim gjatë ngarkimit të pyetjeve");
  }
});

const validateForm = () => {
  formIsValid.value = true;

  if (!formData.text.val || formData.text.val.length < 1) {
    formData.text.isValid = false;
    formIsValid.value = false;
  }

  if(!formData.questionId.val && formData.questionId.val !== 0) {

    formData.questionId.isValid = false;
    formIsValid.value = false;
  }
};

const clearValidity = (key) => {
  formData[key].isValid = true;
};

const handleSubmit = async () => {
  validateForm();
  if (!formIsValid.value) return;

  const choice = {
    id: choiceId, // Sigurohuni që e përfshini ID-në
    text: formData.text.val,
    correct: formData.correct.val,
    questionId: Number(formData.questionId.val)
  };

  try {
    isLoading.value = true;
    const response = await ChoiceService.updateChoice(choiceId, choice);

    if (response) {
      toast.showSuccess("Përgjigjja u shtua me sukses!");
      setTimeout(() => {
        router.push({ name: "choice" });
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


const route = useRoute()
const choiceId = parseInt(route.params.id)
const getChoiceById = async (id) => {
  try {
    isLoading.value = true
    const response = await ChoiceService.getChoicesById(id)
    if (response) {
      formData.text.val = response.text
      formData.correct.val = response.correct
      formData.questionId.val = response.questionId
    }
  } catch (e) {
    await router.push({name: 'choice'})
    throw e;
  } finally {
    isLoading.value = false
  }
}
onMounted(async () => {
  await questionStore.getQuestions();
  await getChoiceById(choiceId);
});
</script>
<template>
  <the-main-layout>
    <template #content>
      <div class="col-lg-8 col-md-8 col-12">
        <quiz-card>
          <template #header>
            <h2 class="text-center">Edit Choice</h2>
          </template>
          <template #default>
            <form @submit.prevent="handleSubmit">
              <!-- Choice Text -->
              <div class="mb-1">
                <label class="form-label">Choice Text</label>
                <input
                    type="text"
                    class="form-control"
                    :class="{ 'is-invalid': !formData.text.isValid }"
                    v-model="formData.text.val"
                    @blur="clearValidity('text')"
                    placeholder="Enter choice text"
                />
              </div>

              <!-- Is Correct -->
              <div class="mb-1 form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="formData.correct.val"
                    id="correctCheck"
                />
                <label class="form-check-label" for="correctCheck">
                  Is Correct
                </label>
              </div>

              <!-- Question Dropdown -->
              <div class="mb-1">
                <label class="form-label">Question</label>
                <select
                    class="form-select"
                    :class="{ 'is-invalid': !formData.questionId.isValid }"
                    v-model.number="formData.questionId.val"
                    @blur="clearValidity('questionId')"
                >
                  <option disabled value=null>Select a question</option>
                  <option
                      v-for="question in questionStore.questionsForDropdown"
                      :key="question.value"
                      :value="question.value"
                  >
                    {{ question.label }}
                  </option>
                </select>
              </div>

              <!-- Buttons -->
              <div class="text-center">
                <quiz-button class="btn btn-primary me-3" :is-loading="isLoading">
                  Edit Choice
                </quiz-button>
                <router-link :to="{ name: 'choices' }" class="btn btn-secondary">
                  Cancel
                </router-link>
              </div>
            </form>
          </template>
        </quiz-card>
      </div>
    </template>
  </the-main-layout>
</template>

<style scoped>
.text-center {
  text-align: center;
}
</style>
