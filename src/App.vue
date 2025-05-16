<!-- App.vue -->
<script setup>
import { useRoute } from 'vue-router';
import ErrorBoundary from "@/components/shared/ErrorBoundary.vue";
import {useRegisterStore} from "@/stores/register.js";
import {useLoginStore} from "@/stores/login.js";

import HomeView from "@/views/HomeView.vue";
import LogInView from "@/views/auth/LogInView.vue";
import RegisterView from "@/views/auth/RegisterView.vue";
import TheMainLayout from "@/components/ui/TheMainLayout.vue";
const route = useRoute();
const registerStore = useRegisterStore();
const loginStore = useLoginStore()
</script>

<template>
  <error-boundary  >
    <!-- Nëse nuk është loguar dhe është te /auth/register -->

<!--    <register-view v-if="!registerStore.isloggedIn && route.name === 'register'" />-->
<!--    &lt;!&ndash; Nëse nuk është loguar dhe është te /auth/login &ndash;&gt;-->

<!--    <log-in-view v-else-if="!loginStore.isLoggedIn && route.name === 'login'"  />-->



<!--    &lt;!&ndash; Nëse është loguar, shfaq TheLayout &ndash;&gt;-->
<!--     <home-view v-else />-->
    <router-view />
  </error-boundary>



</template>
