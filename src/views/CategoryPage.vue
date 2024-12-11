<script setup>
import { onMounted, watch, ref, computed } from "vue";
import { useCategoryStore } from "../store/categoryStore";
import { useRoute } from "vue-router";

const categoryStore = useCategoryStore();
const route = useRoute();
const category = ref(route.params.name);
const loading = ref(false);

const map_categoy = {
  BackEnd: "Lập trình backend",
  Design: "Thiết kế web",
  DiDong: "Lập trình di động",
  FrontEnd: "Lập trình front end",
  FullStack: "Lập trình full stack",
  TuDuy: "Tư duy lập trình",
};
const mapCategory = computed(() => map_categoy[category.value]);

const apiFetchCourseByCategory = async () => {
  loading.value = true;
  try {
    await categoryStore.fetchCourseByCategory(category.value);
  } catch (err) {
    console.log("err", err);
  } finally {
    loading.value = false;
  }
};

onMounted(apiFetchCourseByCategory);
watch(
  () => route.params.name,
  (newName) => {
    category.value = newName;
    apiFetchCourseByCategory();
  }
);
</script>


<template>
  <div class="category_page">
    <div class="block_1">
      <h3>Khóa học theo danh mục</h3>
      <p>Hãy chọn khóa học mong muốn !!!</p>
    </div>
    <div class="block_2">
      <i class="material-icons">check</i>
      <p class="title_category">{{ mapCategory }}</p>
    </div>
    <div v-if="loading" class="spiner_loading">
      <v-progress-circular indeterminate :size="40"></v-progress-circular>
    </div>
    <div v-else class="list_course">
      <CourseReferenceComponent :data="categoryStore.listCourseByCategory" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.category_page {
  padding-top: 96px;
  .block_1 {
    padding: 50px;
    text-transform: uppercase;
    background-color: #ffd60a;
    color: var(--colorWhite);
  }
  .block_2 {
    margin: 50px 0;
    display: inline-flex;
    gap: 8px;
    margin-left: 50px;
    border-radius: 25px;
    padding: 12px 10px;
    cursor: default;
    border: 2px solid #e4e4e4;
    outline: none;
    transition: 0.5s linear;
    font-weight: 500;
    &:hover {
      border: 2px solid #113d3c;
      -webkit-filter: brightness(110%);
      filter: brightness(110%);
      -webkit-transform: scale(0.98);
      transform: scale(0.98);
      cursor: pointer;
    }
    .title_category {
      color: #252525;
      font-weight: bold;
      text-transform: uppercase;
    }
  }
  .list_course {
    padding: 0 50px;
    padding-bottom: 50px;
  }
  .spiner_loading {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    justify-content: center;
  }
}
</style>