<script setup>
import {onErrorCaptured} from "vue";
import {useAppToast} from "@/composables/useAppToast.js";

const {showError} = useAppToast()
onErrorCaptured((err) => {
  // Handle the error
  // console.error('Error captured:', err);
  showError(err.response?.data?.message || 'An unexpected error occurred')
  return false // Prevent the error from propagating further
});
</script>

<template>
  <!-- Placeholder ku contenti qe e shkruni mes tagjeve hapese edhe mbyllese te komponentes renderohet ne slot  -->
  <slot/>
</template>

<style scoped>

</style>