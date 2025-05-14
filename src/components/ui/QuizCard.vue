<script setup>
</script>

<template>
  <div class="card">
    <div class="card-header">
      <!-- Named slots -->
      <slot name="header"/>
    </div>
    <div class="card-body">
      <!-- Slot name default  -->
      <slot/>
    </div>
  </div>
</template>

<style scoped></style>