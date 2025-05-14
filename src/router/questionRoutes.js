import NewQuestionView from "@/views/question/NewQuestionView.vue";

export default [
    {
        path: '/question',
        name: 'question',
      component:NewQuestionView,
        meta: {
            requiresAuth: false,
        }
    }
]