<script setup>
import { defineProps, computed } from "vue";

const props = defineProps({
  isActive: Boolean,
});
const dialogModel = computed(() => {
  return props.isActive;
});
</script>

<template>
  <v-app>
    <v-container>
      <v-dialog
        v-model="dialogModel"
        content-class="custom_dialog"
        max-width="500"
      >
        <template v-slot:default>
          <v-card>
            <div class="header">
              <slot name="header"></slot>
            </div>

            <div class="body">
              <slot name="body"></slot>
            </div>
            <div class="footer">
              <slot name="footer"></slot>
            </div>
          </v-card>
        </template>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<style scoped lang="scss">
.custom_dialog {
  .header {
    display: flex;
    justify-content: center;
    padding-top: 20px;
  }
  .body {
    max-width: 300px;
    margin: auto;
    text-align: center;
    color: #41b294;
  }
  .footer {
    display: flex;
    justify-content: center;
    padding: 30px 0;
    font-weight: 300;
  }
}
</style>
