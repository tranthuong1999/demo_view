
<script setup>
import { defineProps } from "vue";
import { isMobile, isTablet } from "../Composables/useScreenBreakpoints";

defineProps(["data"]);
</script>

<template>
  <div class="course_ref_component">
    <div
      class="list_reference"
      :class="{
        list_reference_tabnet: isTablet,
        list_reference_mobile: isMobile,
      }"
    >
      <div v-for="(item, index) in data" :key="index" class="item_reference">
        <div class="image">
          <img
            src="https://elearningnew.cybersoft.edu.vn/hinhanh/asdasd_gp01.gif"
            alt=""
          />
        </div>
        <p class="title">
          Lập trình hiện đang là xu hướng trên toàn thế giới...
        </p>
        <p class="biDanh">Lập trình web</p>
        <p class="title_like">Yêu thích</p>
        <div class="description">
          <div class="item_1">
            <i class="material-icons" :style="{ color: '#f5c002' }"
              >access_time</i
            >
            <p>8 giờ</p>
          </div>

          <div class="item_1">
            <i class="material-icons" :style="{ color: '#f06f68' }">event</i>
            <p>4 tuần</p>
          </div>

          <div class="item_1">
            <i class="material-icons" :style="{ color: '#65c9ff' }"
              >bar_chart</i
            >
            <p>Tất cả</p>
          </div>
        </div>

        <div class="footer">
          <div class="footer_left">
            <div class="img_footer">
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/avatar2.bb9626e2.png"
                alt=""
              />
            </div>
            <p class="title_name">Elon Musk</p>
          </div>

          <div class="footer_right">
            <p class="price_1">800.000<sup>đ</sup></p>
            <p class="price_2">
              400.000<sup>đ</sup>
              <i class="material-icons" :style="{ color: 'red' }">label</i>
            </p>
          </div>
        </div>
        <v-tooltip
          activator="parent"
          :location="index % 2 === 0 ? 'start' : 'end'"
          class="content_tooltip"
          >Tooltip</v-tooltip
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.course_ref_component {
  .list_reference {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    &_mobile {
      display: grid;
      gap: 20px;
    }
    &_tabnet {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
    gap: 12px;
    .item_reference {
      position: relative;
      display: flex;
      flex-direction: column;
      transition: all 0.5s;
      width: 280px;
      min-width: 280px;
      min-height: 370px;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      border: 1px solid rgba(0, 0, 0, 0.125);
      box-shadow: 0 0 10px 4px rgba(0, 0, 0, 0.2);
      border-top-right-radius: 12px;
      border-top-left-radius: 12px;
      .image {
        img {
          width: 100%;
          height: 100%;
          border-radius: 12px;
        }
      }
      .title {
        font-size: 16px;
        font-weight: bold;
        padding: 12px;
        padding-top: 20px;
      }
      .biDanh {
        position: absolute;
        top: 50%;
        left: 0;
        display: inline-block;
        padding: 0 10px;
        color: #fff;
        color: var(--colorWhite);
        background-color: var(--colorGlobal);
      }
      .title_like {
        position: absolute;
        top: 0;
        left: -5px;
        padding: 5px 8px 4px;
        color: var(--colorWhite);
        background-color: red;
        font-weight: bold;
        font-size: 13px;
        text-transform: uppercase;
        &::before {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          left: 0;
          bottom: -10px;
          border-bottom: 10px solid transparent;
          border-right: 5px solid red;
          -webkit-filter: brightness(0.8);
          filter: brightness(0.8);
        }
        &::after {
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          top: 0;
          right: -12px;
          border-color: red transparent;
          border-style: solid;
          border-width: 15px 12px 15px 0;
        }
      }
      .description {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 12px;
        padding-bottom: 32px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125);
        .item_1 {
          display: flex;
          flex-direction: row;
          gap: 4px;
          color: var(--colorTextCard);
        }
      }
      .footer {
        display: flex;
        justify-content: space-between;
        padding: 8px 12px;
        align-items: center;
        .footer_left {
          display: flex;
          gap: 6px;
          align-items: center;
          .img_footer {
            width: 40px;
            height: 40px;
            img {
              width: 100%;
              height: 100%;
              object-fit: contain;
            }
          }
          .title_name {
            color: var(--colorTextCard);
            font-size: 16px;
          }
        }
        .footer_right {
          display: flex;
          flex-direction: column;
          gap: 6px;
          .price_1 {
            font-size: 12px;
            color: var(--colorTextCard);
            text-decoration-line: line-through;
          }
          .price_2 {
            display: flex;
            align-items: center;
            gap: 2px;
            font-weight: 700;
            color: var(--colorGlobal);
          }
        }
      }
    }
  }
}
</style>