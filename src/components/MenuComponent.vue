<template>
  <div class="menu_component">
    <i class="material-icons" v-if="icon && icon.length > 0">{{ icon }}</i>
    <v-menu open-on-hover activator="parent" :location="end">
      <template v-slot:activator="{ props }">
        <button
          class="custom_button"
          :class="{ custom_button_mobile: isMobile }"
          v-bind="props"
          @click="handleItemRouter(path)"
        >
          {{ title }}
        </button>
      </template>
      <v-list
        v-if="data && data.length > 0"
        class="content_menu"
        :class="{ content_menu_mobile: isMobile }"
      >
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
import { isMobile } from "../Composables/useScreenBreakpoints";

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
.content_menu {
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: rgb(117, 184, 177) !important;
  &_mobile {
    background: rgba(1, 135, 126, 0.8) !important;
  }
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
  .custom_button {
    font-size: 15px;
    font-weight: 700;
    color: var(--colorText);
    text-transform: uppercase;
    transition: all 0.2s;
    &:hover {
      color: var(--colorGlobal);
    }
    &_mobile {
      &:hover {
        color: #fff;
      }
    }
  }
  .material-icons {
    font-size: 16px;
    font-weight: 700;
    // :model-value="true" activator="parent"
  }
}
</style>
