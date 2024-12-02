<script setup>
import { onMounted, ref, watch } from "vue";
import { isTablet, isMobile } from "../Composables/useScreenBreakpoints";
import { useCategoryStore } from "../store/categoryStore";
const data = ref([
  { name: "Chương trình học", icon: "laptop", number: 300 },
  { name: "Nhà sáng tạo", icon: "camera", number: 10000 },
  { name: "Nhà thiết kế", icon: "camera", number: 400 },
  { name: "Bài giảng", icon: "book", number: 3000 },
  { name: "Video", icon: "play_circle", number: 40000 },
  { name: "Lĩnh vực", icon: "play_circle", number: 200 },
]);

const data_course = ref([]);
const totalPage = ref(1);
const page = ref(1);
const categoryStore = useCategoryStore();
const loading = ref(false);

const fetchDataByPage = async () => {
  loading.value = true;
  try {
    await categoryStore.fetchListCourseByPage(page.value);
    const { items, totalPages } = categoryStore.listCourseByPage;
    data_course.value = items;
    totalPage.value = totalPages;
  } catch (error) {
    console.error("Failed to fetch course data:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(fetchDataByPage);
watch(page, fetchDataByPage);
</script>

<template>
  <div class="course_page">
    <div class="block_1">
      <h3>Khóa học</h3>
      <p>Bắt đầu hành trình nào!!!</p>
    </div>

    <div
      class="block_2"
      :class="{ block_2_tablet: isTablet, block_2_mobile: isMobile }"
    >
      <div v-for="(item, index) in data" :key="index" class="list_item">
        <div class="item">
          <p class="title">{{ item.name }}</p>
          <div>
            <i class="material-icons" :class="'icon_child'">
              {{ item.icon }}
            </i>
          </div>
          <p class="number">{{ item.number }}</p>
        </div>
      </div>
    </div>
    <div class="block_3">
      <div class="title_couse">
        <i class="material-icons" :class="'icon_label'"> label </i>
        <p class="title">Danh sách khóa học</p>
      </div>
      <div v-if="loading" class="loading-spinner">Loading...</div>
      <div v-else class="list_course">
        <CoursePopularComponent :data="data_course" />
      </div>
      <div class="block_pagination">
        <div class="text-center">
          <v-pagination
            v-model="page"
            :length="totalPage"
            content-class="custom-pagination"
          ></v-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.course_page {
  padding-top: 96px;
  .block_1 {
    padding: 50px;
    text-transform: uppercase;
    background-color: #ffd60a;
    color: var(--colorWhite);
  }
  .block_2 {
    display: grid;
    padding: 50px;
    grid-template-columns: repeat(6, 1fr);
    &_mobile {
      grid-template-columns: repeat(1, 1fr);
    }
    &_tablet {
      grid-template-columns: repeat(3, 1fr);
    }
    .list_item {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      color: var(--colorWhite);
      text-transform: uppercase;
      height: 100%;
      padding: 30px 20px;
      text-align: center;
      .item {
        display: flex;
        flex-direction: column;
        gap: 8px;
      }
      &:nth-child(1) {
        background-color: #264653;
      }
      &:nth-child(2) {
        background-color: #2a9d8f;
      }
      &:nth-child(3) {
        background-color: #e9c46a;
      }
      &:nth-child(4) {
        background-color: #f4a261;
      }
      &:nth-child(5) {
        background-color: #ee8959;
      }
      &:nth-child(6) {
        background-color: #e76f51;
      }
      .title {
        font-weight: bold;
      }
      .number {
        font-size: 20px;
        font-weight: 600;
      }
      .icon_child {
        font-size: 30px;
      }
    }
  }
  .block_3 {
    padding: 50px;
    .title_couse {
      display: flex;
      align-items: center;
      gap: 8px;
      .icon_label {
        color: var(--colorTPrimary);
        font-size: 20px;
      }
      .title {
        font-size: 20px;
        font-weight: bold;
      }
    }
    .list_course {
      padding-top: 30px;
    }
  }
  .block_pagination {
    padding-top: 50px;
  }
}
</style>