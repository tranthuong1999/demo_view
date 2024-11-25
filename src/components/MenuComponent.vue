<template>
  <div class="menu_component">
    <i class="material-icons" v-if="icon && icon.length > 0">{{ icon }}</i>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <button class="custom-button" v-bind="props">{{ title }}</button>
      </template>
      <v-list v-if="data && data.length > 0">
        <v-list-item v-for="(item, index) in data" :key="index">
          <v-list-item-title
            class="custom-title"
            @click="handleRouter(item.path)"
          >
            {{ item.title }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps(["title", "data", "icon"]);

const handleRouter = (path) => {
  console.log("path", path);
};
</script>

<style scoped lang='scss'>
.menu_component {
  display: flex;
  align-items: center;
  gap: 10px;
  :hover {
    cursor: pointer;
  }
  .custom-button {
    font-size: 15px;
    font-weight: 700;
    color: var(--colorText);
    text-transform: uppercase;
  }
  .custom-title {
  }
  .material-icons {
    font-size: 16px;
    font-weight: 700;
  }
}
</style>
