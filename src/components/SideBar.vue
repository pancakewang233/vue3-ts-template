<script setup lang="ts">
</script>

<template>
  <div class="sidebar">
      <slot></slot>
  </div>
</template>

<style scoped>
.sidebar{
  width: 16%;
  display: flex;
  flex-direction: column;
}

.sidebar :deep(.router-link-active) {
  color: red;
}
</style>
