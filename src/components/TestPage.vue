
<script setup>
import { ref } from "vue";

const items = ref([
  { text: "Real-Time", icon: "mdi-clock" },
  { text: "Audience", icon: "mdi-account" },
  { text: "Conversions", icon: "mdi-flag" },
]);
</script>

<template>
  <div>
    <h1>about test</h1>
    <v-card class="mx-auto" max-width="300">
      <v-list disabled>
        <v-list-subheader>REPORTS</v-list-subheader>

        <v-list-item v-for="(item, i) in items" :key="i">
          <template v-slot:prepend>
            <v-icon :icon="item.icon"></v-icon>
          </template>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>

