<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <button class="btn btn-primary" type="button" disabled="">
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
  </button>
</template>

<style scoped>

</style>