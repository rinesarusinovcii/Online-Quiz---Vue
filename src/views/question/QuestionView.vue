<script setup>

import QuizCard from "@/components/ui/QuizCard.vue";
</script>

<template>
  <quiz-card>
    <template #header>
      <h2 class="text-center">Question View</h2>
    </template>

    <div class="p-3">
      <div class="mb-3">
        <h5 class="fw-bold">Question:</h5>
        <p>{{ question.text }}</p>
      </div>

      <div class="mb-3">
        <h6 class="fw-bold">Type:</h6>
        <p>{{ typeLabels[question.questionType] || 'Unknown' }}</p>
      </div>

      <div class="mb-3">
        <h6 class="fw-bold">Points:</h6>
        <p>{{ question.points }}</p>
      </div>

      <div class="mb-3">
        <h6 class="fw-bold">Quiz ID:</h6>
        <p>{{ question.quizId }}</p>
      </div>

      <div v-if="question.choices && question.choices.length" class="mb-3">
        <h6 class="fw-bold">Choices:</h6>
        <ul class="list-group">
          <li v-for="(choice, index) in question.choices" :key="index" class="list-group-item">
            {{ choice }}
          </li>
        </ul>
      </div>
    </div>
  </quiz-card>
</template>

<style scoped>

</style>