<script setup>
import {
  isMobile,
  isTablet,
} from "../Composables/useScreenBreakpoints";
</script>

<template>
  <div>
    <div v-if="isMobile">This is a Mobile Screen</div>
    <div v-else-if="isTablet">This is a Tablet Screen</div>
    <div v-else>This is a Desktop Screen</div>
  </div>
</template>
