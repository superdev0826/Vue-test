<script setup lang="ts">
import { ref } from 'vue'
const date = ref<string>('')
</script>
<template>
  <div class="center">
    <DateInput v-model="date" />
  </div>
</template>

<style>
.center {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
