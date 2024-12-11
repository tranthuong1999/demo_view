<script setup>
import { ref, onMounted } from "vue";

import { useCategoryStore } from "../store/categoryStore";

const categoryStore = useCategoryStore();
const data = ref([]);

onMounted(async () => {
  data.value = categoryStore.listCourse.slice(0, 4);
});
</script>

<template>
  <div class="course_popular_page">
    <h1 class="title_course">Khóa học phổ biến</h1>
    <div class="list_course">
      <CoursePopularComponent :data="data" />
    </div>
  </div>
</template>

<style lang="scss">
.course_popular_page {
  .title_course {
    font-weight: 600;
    color: var(--colorSPrimary);
    font-size: 20px;
    padding: 50px;
  }
  .list_course {
    padding-bottom: 50px;
  }
}
</style>
