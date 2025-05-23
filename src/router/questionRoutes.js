import NewQuestionView from "@/views/question/NewQuestionView.vue";
import QuestionView from "@/views/question/QuestionView.vue";
import EditQuestionView from "@/views/question/EditQuestionView.vue";

export default [
    {
        path: '/question',
        name: 'question',
      component:QuestionView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/question/create',
        name: 'create-question',
        component:NewQuestionView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/question/edit/:id',
        name: 'edit-question',
        component:EditQuestionView,
        meta: {
            requiresAuth: true,
        }
    }

]