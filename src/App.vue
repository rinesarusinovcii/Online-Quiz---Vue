<script setup>


import RegisterView from "@/views/auth/RegisterView.vue";
import {useRegisterStore} from "@/stores/register.js";


const registerStore = useRegisterStore();
</script>

<template>
  <router-view/>
  <register-view/>

</template>

<style scoped>

</style>
