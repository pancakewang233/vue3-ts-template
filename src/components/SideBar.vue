<script setup lang="ts">
</script>

<template>
  <div class="sidebar">
      <slot></slot>
  </div>
</template>

<style scoped>
.sidebar{
  width: 14%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid blue;
}

.sidebar :deep(.router-link-active) {
  color: red;
}
</style>
