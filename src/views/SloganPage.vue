<script setup>
import { isTabnet, isMobile } from "../Composables/useScreenBreakpoints";
</script>

<template>
  <div class="slogan_page">
    <div class="item" :class="{ item_mobile: isTabnet || isMobile }">
      <div class="item_left">
        <h1 class="title" :class="{ title_mobile: isMobile }">Chào mừng</h1>
        <h1 class="title" :class="{ title_mobile: isMobile }">
          đến với môi trường
        </h1>
        <h1 class="v_learning">V<span>learning</span></h1>
        <div class="btn">
          <button class="btn_start">Bắt đầu nào</button>
        </div>
      </div>

      <div class="img_plane">
        <img src="../assets/anh_bia_5.png" alt="" />
      </div>

      <div class="item_right">
        <div class="img">
          <img src="../assets/anh_bia_1.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.slogan_page {
  padding: 0 50px;
  position: relative;
  @keyframes aniText {
    0% {
      width: 0;
    }
    50% {
      width: 230px;
    }
  }
  .item {
    display: flex;
    justify-content: space-around;
    &_mobile {
      align-items: center;
      flex-direction: column-reverse;
      padding-bottom: 24px;
    }
    .item_left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .title {
        font-size: 50px;
        font-weight: bold;
        &_mobile {
          font-size: 40px;
        }
      }
      .v_learning {
        font-size: 65px;
        color: var(--colorGlobal);
        overflow: hidden;
        -webkit-animation: aniText 5s steps(10) infinite;
        animation: aniText 5s steps(10) infinite;
        span {
          margin-left: 5px;
          font-size: 50px;
        }
      }
      .btn {
        .btn_start {
          padding: 5px 10px;
          background-color: var(--colorSPrimary);
          border: none;
          transition: all 0.5s;
          text-transform: uppercase;
          font-size: 15px;
          color: #fff;
          border-radius: 8px;
        }
      }
    }
    .img_plane {
      position: absolute;
      width: 154px;
      height: 154px;
      left: 32%;
      top: 15%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .item_right {
      .img {
        width: 735px;
        height: 735px;
        padding: 50px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
    }
  }
}
</style>