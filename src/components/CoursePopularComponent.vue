<script setup>
import { defineProps } from "vue";
import { isMobile, isTablet } from "../Composables/useScreenBreakpoints";
defineProps(["data"]);
</script>

<template>
  <div
    class="list"
    :class="{
      list_mobile: isMobile,
      list_tabnet: isTablet,
    }"
  >
    <div
      v-for="(course, index) in data"
      :key="index"
      class="course_popular_page"
    >
      <div class="image">
        <img :src="course.hinhAnh" alt="" />
      </div>
      <p class="stikerCard">{{ course.biDanh }}</p>
      <p class="title">Lập trình hiện đang là xu hướng trên toàn thế giới...</p>
      <div class="author">
        <div class="img_author">
          <img
            src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png"
            alt=""
          />
        </div>
        <p class="name_author">Elon Musk</p>
      </div>
      <div class="footer">
        <div class="footer_left">
          <p class="count_real">800.000<sup>đ</sup></p>
          <p class="count_descrease">400.000<sup>đ</sup></p>
        </div>
        <div class="footer_right">
          <i class="material-icons" :class="icon_star"> star </i>
          <span class="review_star">4.9</span>
          <span class="count_star">(7840)</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  // justify-content: space-evenly;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 0 100px;
  gap: 24px 0px;
  &_mobile {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
  }
  &_tabnet {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .course_popular_page {
    position: relative;
    display: flex;
    flex-direction: column;
    transition: all 0.4s;
    width: 280px;
    min-width: 280px;
    min-height: 370px;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2);
    border-radius: 12px;
    &:hover {
      cursor: pointer;
      transform: translateY(-2px);
    }
    .image {
      width: 100%;
      img {
        width: 100%;
        height: 100%;
        height: 240px;
        object-fit: fill;
      }
    }
    .stikerCard {
      position: absolute;
      top: 50%;
      left: 0;
      display: inline-block;
      position: absolute;
      z-index: 10;
      padding: 0 10px;
      color: #fff;
      color: var(--colorWhite);
      background-color: var(--colorGlobal);
      max-height: 30px;
    }
    .title {
      padding: 12px;
      font-size: 16px;
      font-weight: bold;
    }
    .author {
      display: flex;
      flex-direction: row;
      gap: 10px;
      padding-left: 12px;
      align-items: center;
      padding-bottom: 24px;
      .img_author {
        width: 40px;
        height: 40px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .name_author {
        color: var(--colorTextCard);
        font-size: 18px;
      }
    }
    .footer {
      display: flex;
      justify-content: space-between;
      padding: 12px;
      align-items: center;
      border-top: 1px solid rgba(0, 0, 0, 0.125);
      .footer_left {
        .count_real {
          font-size: 12px;
          color: var(--colorTextCard);
          text-decoration-line: line-through;
        }
        .count_descrease {
          font-weight: 500;
          color: #41b294;
          color: var(--colorGlobal);
        }
      }
      .footer_right {
        display: flex;
        gap: 2px;
        align-items: center;
        .material-icons {
          color: var(--colorSPrimary) !important;
        }
        .review_star {
          color: var(--colorSPrimary);
        }
        .count_star {
          font-size: 12px;
          color: var(--colorTextCard);
        }
      }
    }
  }
}
</style>
