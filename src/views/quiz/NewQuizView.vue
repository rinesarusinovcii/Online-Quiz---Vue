<script setup>

import QuizButton from "@/components/ui/QuizButton.vue";
import QuizCard from "@/components/ui/QuizCard.vue";
</script>

<template>
  <div class="col-lg-9 col-md-8 col-2 ">

    <link href="/assets/css/quiz.css">
   <quiz-card >
     <template #header>
       <h2 class="text-center">New Quiz</h2>
     </template>
     <template #default>
       <div class="text-center">
         <form >
           <!-- Title -->
           <div class="mb-3">
             <label for="title" class="form-label">Quiz Title</label>
             <input type="text" class="form-control" id="title" field="title"
                    placeholder="Enter the quiz title" required>
           </div>

           <!-- Description -->
           <div class="mb-3">
             <label for="description" class="form-label">Description</label>
             <textarea class="form-control" id="description" field="description" rows="3"
                       placeholder="Enter a short description"></textarea>
           </div>

           <!-- Category -->
           <div class="mb-3">
             <label for="category" class="form-label">Category</label>
             <input type="text" class="form-control" id="category" field="category"
                    placeholder="Enter the quiz category">
           </div>


           <!-- Time Limit -->
           <div class="mb-3">
             <label for="timeLimit" class="form-label">Time Limit (minutes)</label>
             <input type="number" class="form-control" id="timeLimit"field="timeLimit"
                    placeholder="Enter the time limit">
           </div>

           <!--            <button type="submit" class="btn btn-primary">Save Quiz</button>-->
           <quiz-button class="btn btn-primary">Add Quiz</quiz-button>
           <!-- Submit Button -->
           <!--                    <a th:href="@{/question/newQuestion}" class="btn btn-primary mt-4">Next</a>-->
         </form>


       </div>
     </template>
   </quiz-card>
  </div>
</template>

<style scoped>

</style>