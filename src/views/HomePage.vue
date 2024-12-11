<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { isMobile } from "../Composables/useScreenBreakpoints";

const isFocus = ref(false);
const isMenuMobile = ref(false);
const router = useRouter();

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

const handleLogin = () => {
  router.push({ path: "/login" });
};



</script>
<template>
  <div class="nav_bar">
    <div class="block_1">
      <img src="../assets/logo.png" alt="logo" />
      <input
        v-if="!isMobile"
        placeholder="Tìm kiếm"
        class="input_search"
        @focus="isFocus = true"
        @blur="isFocus = false"
        :class="{ 'focused-search': isFocus }"
      />
    </div>
    <div class="block_2" v-if="!isMobile">
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
      <button class="btn-login" @click="handleLogin">Đăng nhập</button>
      <i
        @click="isMenuMobile = !isMenuMobile"
        v-if="isMobile"
        class="material-icons"
        :class="'icon_drop_down'"
        >arrow_drop_down</i
      >
    </div>

    <div v-if="isMenuMobile && isMobile" class="menu_mobile">
      <div class="input_search_mobile">
        <input placeholder="Tìm kiếm" />
      </div>
      <div class="menu_category">
        <MenuComponent title="Danh mục" :data="data_category" path="trangchu" />
        <MenuComponent title="Khoá học " path="khoahoc" />
        <MenuComponent title="Blog" path="blog" />
        <MenuComponent title="Sự kiện" :data="data_event" path="sukien" />
        <MenuComponent title="Thông tin" path="thongtin" />
        <div>
          <button class="btn_log_out">Đăng xuất</button>
        </div>
      </div>
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
  position: fixed;
  z-index: 1000;
  background-color: #fff;
  box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.15);
  width: 100%;
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
    display: flex;
    gap: 6px;
    align-items: center;
    position: relative;
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
    .icon_drop_down {
      color: black;
      font-weight: 900;
      &:hover {
        cursor: pointer;
      }
    }
  }
  .menu_mobile {
    width: 200px;
    height: 300px;
    position: fixed;
    animation: fadeInDown 0.5s ease-in;
    transition: all 0.5s;
    background-color: rgba(1, 135, 126, 0.8);
    top: 70px;
    right: 10px;
    transform: translateX(0);
    z-index: 1000;
    .input_search_mobile {
      padding: 0 12px;
      padding-top: 4px;
      padding-bottom: 12px;
      input {
        border: 1px solid var(--colorGlobal);
        padding: 2px 8px;
        outline: none;
        width: 100%;
        background-color: #fff;
        border-radius: 4px;
      }
    }
    .menu_category {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 70%;
      align-items: center;
      .btn_log_out {
        font-size: 15px;
        font-weight: 700;
        color: var(--colorText);
        transition: all 0.2s;
        text-transform: uppercase;
        &:hover {
          cursor: pointer;
          color: #fff;
        }
      }
    }
  }
}
</style>