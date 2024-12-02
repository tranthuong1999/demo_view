<script setup>
import { ref, onMounted } from "vue";

import { useCategoryStore } from "../store/categoryStore";

const categoryStore = useCategoryStore();
const data = ref([]);

onMounted(async () => {
  data.value = categoryStore.listCourse.slice(4, 8);
});
</script>




<template>
  <div class="course_reference_page">
    <h4 class="title">Khóa học tham khảo</h4>
    <CourseReferenceComponent :data="data" />
  </div>
</template>

<style scoped lang="scss">
.course_reference_page {
  padding: 0 50px;
  padding-bottom: 50px;
  .title {
    color: #000;
    text-decoration: none;
    padding-bottom: 50px;
  }
}
</style>