<script setup>

import TheMainLayout from "@/components/ui/TheMainLayout.vue";
import {useLoginStore} from "@/stores/login.js";
const loginStore = useLoginStore();

</script>

<template>
  <the-main-layout>
    <template #content>
    <div class="col-lg-8 col-md-8 col-1 " id="temp">
      <div class="card border-0">
        <!-- Card body -->
        <div class="card-body p-10 ">
          <div class="text-center">
            <!-- img -->
            <img src="../assets/images/survey-img.svg " alt="survey" class="img-fluid"/>
            <!-- text -->
            <div class="px-lg-8">
              <h1>Welcome to Quiz</h1>
              <p class="mb-0">Engage live or asynchronously with quiz and poll questions that
                participants complete at their own pace.</p>
<!--              <a href="@{/quizzes/newQuiz}" class="btn btn-primary mt-4">Start Your Quiz</a>-->
              <router-link :to="{name: 'new-quiz'}" class="btn btn-primary mt-4">
                Create New Quiz
              </router-link>

            </div>
          </div>
        </div>
      </div>
    </div>
    </template>
  </the-main-layout>
</template>

<style scoped>

</style>