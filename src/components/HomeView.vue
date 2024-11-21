

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const handleNavigate = () => {
  router.push("/about/5");
};
</script>


<template>
  <div>
    <h2>HomeView</h2>
    <button @click="handleNavigate">Clickme</button>
  </div>
</template>