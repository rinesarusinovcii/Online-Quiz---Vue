<script setup>
defineProps({
  isLoading: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <!-- v-bind="$attrs" => i bon bind komplet atributet e html ne komponenten qe e kemi kriju -->
  <button type="button"
          disabled
          v-if="isLoading"
          v-bind="$attrs">
    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    <slot/>
  </button>
  <button v-else v-bind="$attrs">
    <slot/>
  </button>
</template>

<style scoped></style>