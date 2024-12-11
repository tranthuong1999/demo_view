<template>
  <div class="text-center">
    <v-overlay v-model="overlay"></v-overlay>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const overlay = ref(false);

onMounted(() => {
  overlay.value = true;
//   setTimeout(() => {
//     overlay.value = false;
//   }, 3000);
});
</script>
