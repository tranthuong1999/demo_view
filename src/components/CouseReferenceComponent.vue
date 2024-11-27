
<script setup>
import { defineProps } from "vue";
defineProps(["data"]);
</script>

<template>
  <div class="course_ref_component">
    <div class="list_reference">
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
        <div class="description">
          <div class="item_1">
            <i class="material-icons">check</i>
            <p>8 giờ</p>
          </div>

          <div class="item_1">
            <i class="material-icons">check</i>
            <p>8 giờ</p>
          </div>

          <div class="item_1">
            <i class="material-icons">check</i>
            <p>8 giờ</p>
          </div>
        </div>

        <div class="footer">
          <div class="footer_left">
            <div class="img_footer">
              <img src="" alt="" />
            </div>
            <p>Elon Musk</p>
          </div>

          <div class="footer_right">
            <p>800.000<sup>đ</sup></p>
            <p>400.000<sup>đ</sup></p>
          </div>
        </div>
        <v-tooltip activator="parent" location="start">Tooltip</v-tooltip>
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
      }
    }
  }
}
</style>