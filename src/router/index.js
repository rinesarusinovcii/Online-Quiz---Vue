import RegisterView from "@/views/auth/RegisterView.vue";
import LogInView from "@/views/auth/LogInView.vue";

import QuizRoutes from "@/router/quizRoutes.js";
import QuestionRoutes from "@/router/questionRoutes.js";

import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import {useLoginStore} from "@/stores/login.js";





const routes= [
    {
        path: '/auth/register',
        name: 'register',
        component: RegisterView,
        meta: {
            requiresAuth: false,
        },
    },

    {
        path: '/auth/login',
        name: 'login',
        component: LogInView,
        meta: {
            requiresAuth: false,
        },
    },



    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requiresAuth: true,
        },
    },
    ...QuizRoutes,
    ...QuestionRoutes,

    {
        path: "/:notFound(.*)",
        component: NotFoundView,
        meta: {
            requiresAuth: true,
        },
    },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// navigatin guards

// router.beforeEach((to, from) => {
//     // console.log(`Navigating to ${to.path} from ${from.path}`);
//
//     const loginStore = useLoginStore()
//
//     if (to.meta.requiresAuth && !loginStore.isLoggedIn) {
//         return {
//             name: 'login',
//             query: {redirect: to.fullPath}
//         }
//     } else if (!to.meta.requiresAuth && loginStore.isLoggedIn) {
//         return {
//             name: 'home'
//         }
//     }
//     // next();
// });



router.beforeEach((to, from, next) => {
    const loginStore = useLoginStore();

    if (to.meta.requiresAuth && !loginStore.isLoggedIn) {
        return next({ name: 'login', query: { redirect: to.fullPath } });
    }

    if ((to.name === 'login' || to.name === 'register') && loginStore.isLoggedIn) {
        return next({ name: 'home' });
    }

    return next(); // VERY IMPORTANT!
});



export default router;
