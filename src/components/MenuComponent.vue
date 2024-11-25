<template>
  <div class="menu_component">
    <i class="material-icons" v-if="icon && icon.length > 0">{{ icon }}</i>
    <v-menu open-on-hover>
      <template v-slot:activator="{ props }">
        <button
          class="custom-button"
          v-bind="props"
          @click="handleItemRouter(path)"
        >
          {{ title }}
        </button>
      </template>
      <v-list v-if="data && data.length > 0" class="content-menu">
        <v-list-item v-for="(item, index) in data" :key="index">
          <div class="custom-title" @click="handleCategoryRouter(item.path)">
            {{ item.title }}
          </div>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
defineProps(["title", "data", "icon", "path"]);

const handleCategoryRouter = (path) => {
  router.push({ path: `/${path}` });
};

const handleItemRouter = (path) => {
  router.push({ path: `/${path}` });
};
</script>

<style scoped lang='scss'>
.content-menu {
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: var(--colorGlobal) !important;
  .custom-title {
    font-size: 15px !important;
    color: var(--colorText);
    font-weight: 700;
    text-transform: uppercase;
    transition: all 0.2s;
    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }
}

.menu_component {
  display: flex;
  align-items: center;
  gap: 10px;
  .custom-button {
    font-size: 15px;
    font-weight: 700;
    color: var(--colorText);
    text-transform: uppercase;
    transition: all 0.2s;
    &:hover {
      color: var(--colorGlobal);
    }
  }
  .material-icons {
    font-size: 16px;
    font-weight: 700;
    // :model-value="true" activator="parent"
  }
}
</style>
