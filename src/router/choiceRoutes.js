
import NewChoiceView from "@/views/choices/NewChoiceView.vue";
import ChoiceView from "@/views/choices/ChoiceView.vue";
import EditChoicesView from "@/views/choices/EditChoicesView.vue";

export default [
    {
        path: '/choices',
        name: 'choice',
        component:ChoiceView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/choices/create',
        name: 'create-choices',
        component:NewChoiceView,
        meta: {
            requiresAuth: true,
        }
    },
    {
        path: '/choices/edit/:id',
        name: 'edit-choices',
        component:EditChoicesView,
        meta: {
            requiresAuth: true,
        }
    }
]