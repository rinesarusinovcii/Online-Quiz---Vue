<script setup>

import QuizButton from "@/components/ui/QuizButton.vue";
import QuizCard from "@/components/ui/QuizCard.vue";
import TheMainLayout from "@/components/ui/TheMainLayout.vue";
</script>

<template>
<the-main-layout>
  <template #content>
    <quiz-card>
      <template #header>
        <h2 class="text-center">New Question</h2>
      </template>
      <div class="text-center">
        <form >
          <!-- Dërgon quizId si një input hidden -->
          <input type="hidden" name="quizId" field="quizId"  />
          <input type="hidden" name="questionId" field="id" />  <!-- Sigurohuni që ID e pyetjes të dërgohet -->
          <div class="mb-3">
            <label for="text" class="form-label">Question Text</label>
            <textarea class="form-control" id="text" field="text" rows="3" placeholder="Enter the question text" required></textarea>
          </div>
          <div class="mb-3">
            <label for="questionType" class="form-label">Question Type</label>
            <select class="form-select" id="questionType" field="questionType">
              <option value="" disabled selected>Select question type</option>
              <option value="MULTIPLE_CHOICE">Multiple Choice</option>
              <option value="TRUE_FALSE">True/False</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="points" class="form-label">Points</label>
            <input type="number" class="form-control" id="points" field="points" placeholder="Enter the points" step="0.1" required>
          </div>
          <quiz-button class="btn btn-primary">Add Question</quiz-button>
        </form>


      </div>
    </quiz-card>
  </template>
</the-main-layout>

</template>

<style scoped>

</style>