<script setup>

import QuizCard from "@/components/ui/QuizCard.vue";
import TheMainLayout from "@/components/ui/TheMainLayout.vue";
</script>

<template>
 <the-main-layout>
   <template #content>
     <div class="col-lg-9 col-md-8 col-2 ">
       <quiz-card>
         <template #header>
           <h5 class="text-center">All Quizzes</h5>
         </template>
         <div class="row" each="quiz : quizzes" >
           <div class="col-lg-6 col-md-8 col-12 mb-4">
             <div class="card shadow-sm">
               <div class="card-body">
                 <input type="hidden" value="quiz.id">
                 <h5 class="card-title" text="quiz.title"></h5>
                 <p class="card-text" text="quiz.description"></p>
                 <p><strong>Category:</strong> <span text="quiz.category"></span></p>
                 <p><strong>Created By:</strong> <span text="quiz.createdBy"></span></p>
                 <p><strong>Created At:</strong> <span text="quiz.createdAt"></span></p>
                 <p><strong>Time Limit:</strong> <span text="quiz.timeLimit + ' minutes'"></span>
                 </p>
                 <p><strong>Questions:</strong> <span text="quiz.questions.size()"></span></p>

                 <a href="/question/newQuestion(quizId=${quiz.id})" class="btn btn-primary">Add Question</a>

                 <button type="button" class="btn btn-primary">Edit</button>
                 <a href="'/quizzes/' + ${quiz.id} + '/delete'" class="btn btn-danger">Delete</a>

               </div>
             </div>
           </div>
         </div>
       </quiz-card>
     </div>
     </template>
 </the-main-layout>
</template>

<style scoped>

</style>