import QuizView from "@/views/quiz/QuizView.vue";
import NewQuizView from "@/views/quiz/NewQuizView.vue";

export default [
    {
        path: '/quizzes',
        name: 'quiz',
        component: QuizView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/quizzes/create',
        name: 'new-quiz',
        component: NewQuizView,
        meta: {
            requiresAuth: true,
        }
    }
]