<script setup>
import { ref } from "vue";
const isFocus = ref(false);
const data_category = ref([
  { path: "danhmuckhoahoc/BackEnd", title: "Lập trình backend" },
  { path: "danhmuckhoahoc/Design", title: "Thiết kế web" },
  { path: "danhmuckhoahoc/DiDong", title: "Lập trình di động" },
  { path: "danhmuckhoahoc/FrontEnd", title: "Lập trình front end" },
  { path: "danhmuckhoahoc/FullStack", title: "Lập trình full stack" },
  { path: "danhmuckhoahoc/TuDuy", title: "Tư duy lập trình" },
]);
const data_event = ref([
  { path: "sukien/lastYear", title: "Sự kiện sale cuối năm" },
  { path: "sukien/Noel", title: "Sự kiện giáng sinh" },
  { path: "sukien/Noel", title: "Sự kiện Noel" },
]);

</script>
<template>
  <div class="nav_bar">
    <div class="block_1">
      <img src="../assets/logo.png" alt="logo" />
      <input
        placeholder="Tìm kiếm"
        class="input_search"
        @focus="isFocus = true"
        @blur="isFocus = false"
        :class="{ 'focused-search': isFocus }"
      />
    </div>

    <div class="block_2">
      <MenuComponent
        title="Danh mục"
        :data="data_category"
        icon="density_medium"
        path="trangchu"
      />
      <MenuComponent title="Khoá học " path="khoahoc" />
      <MenuComponent title="Blog" path="blog" />
      <MenuComponent title="Sự kiện" :data="data_event" path="sukien" />
      <MenuComponent title="Thông tin" path="thongtin" />
    </div>

    <div class="block_3">
      <button class="btn-login">Đăng nhập</button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.nav_bar {
  display: flex;
  padding: 0 50px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .block_1 {
    display: flex;
    gap: 24px;
    align-items: center;
    img {
      width: 250px;
      height: 96px;
      object-fit: contain;
    }
    .input_search {
      outline: none;
      border: none;
      width: 100%;
      height: 40px;
      border-radius: 8px;
      padding-left: 10px;
      margin-left: 15px;
      background-image: url(../assets/icon_search.png);
      background-size: 30px;
      background-position: 100%;
      background-repeat: no-repeat;
      background-color: #f5f5f5;
    }
    .focused-search {
      border: 2px solid var(--colorGlobal);
      outline: none;
    }
  }
  .block_2 {
    display: flex;
    gap: 24px;
  }
  .block_3 {
    .btn-login {
      padding: 5px 10px;
      background-color: var(--colorSPrimary);
      border: none;
      transition: all 0.5s;
      text-transform: uppercase;
      font-size: 15px;
      border-radius: 8px;
      color: var(--colorWhite);
    }
  }
}
</style>