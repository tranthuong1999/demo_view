<script setup>
import { isMobile, isTablet } from "../Composables/useScreenBreakpoints";

const data_time = ["NGÀY", "GIỜ", "PHÚT", "GIÂY"];
const data_creattive = [
  { image: require("../assets/crea_1.jpg"), name: "NGUYỄN NHẬT" },
  { image: require("../assets/crea_2.jpg"), name: "NGUYỄN NHẬT NAM" },
  { image: require("../assets/crea_3.jpg"), name: "NGUYỄN NAM" },
  { image: require("../assets/crea_4.jpg"), name: "JHONNY ĐẶNG" },
  { image: require("../assets/crea_5.jpg"), name: "NGÔ HENRY" },
  { image: require("../assets/crea_6.jpg"), name: "VƯƠNG PHẠM VN" },
  { image: require("../assets/crea_7.jpg"), name: "ROBER IMACU" },
  { image: require("../assets/crea_8.jpg"), name: "KHOA PUG" },
];

const data_sponsor = [
  { image: require("../assets/img_meta.jpg"), title: "FACEBOOK" },
  { image: require("../assets/img_micro.jpg"), title: "MICROSOFT" },
  { image: require("../assets/img_google.jpg"), title: "GOOGLE" },
  { image: require("../assets/img_amazon.jpg"), title: "AMAZON" },
];
</script>

<template>
  <div class="event-page">
    <div class="child-block-1">
      <div class="image-block-1">
        <img
          src="https://demo2.cybersoft.edu.vn/static/media/backroundTech.a989a5f8.jpg"
          alt=""
        />
      </div>

      <div class="image_block_2" :class="{ image_block_2_mobile: isMobile }">
        <img
          src="https://demo2.cybersoft.edu.vn/static/media/high-techbrain.2f38d2ab.png"
          alt=""
        />
      </div>

      <div class="infor-event">
        <div class="list-time">
          <div v-for="(item, index) in data_time" :key="index">
            <div class="item-time" :class="`item-time-${index + 1}`">
              <p class="time">00</p>
              <p class="day">{{ item }}</p>
            </div>
          </div>
        </div>

        <h6 class="title-evn">SỰ KIỆN CÔNG NGHỆ LỚN NHẤT 2021</h6>
        <p class="date-evn">20 - 25 THÁNG 12, 2022, VIỆT NAM</p>
      </div>
    </div>

    <div class="child_block_2" :class="{ child_block_2_mobile: isMobile }">
      <div class="img-detail">
        <img src="../assets/course_1.png" alt="" />
      </div>
      <div class="desc-event">
        <h5>SỰ KIỆN CÔNG NGHỆ DÀNH CHO STARTUP</h5>
        <p class="meeting">Nơi gặp gỡ của những tư tưởng lớn</p>
        <p class="card-text">
          Innovatube Frontier Summit (IFS) là sự kiện đầu tiên tại Việt Nam tập
          trung vào cả bốn mảng tiêu biểu của công nghệ tiên phong, bao gồm
          Artificial Intelligence (trí tuệ nhân tạo), Internet of Things
          (Internet vạn vật), Blockchain (Chuỗi khối) và Augmented
          reality/Virtual Reality (Thực tế tăng cường/Thực tế ảo)
        </p>
        <div>
          <button class="btn btn-join">Tham gia</button>
          <button class="btn btn-more">Tìm hiểu thêm</button>
        </div>
      </div>
    </div>

    <div class="child-block-3">
      <h3 class="name-creative">CÁC NHÀ ĐỒNG SÁNG TẠO</h3>
      <div
        class="list_creative"
        :class="{
          list_creative_mobile: isMobile,
          list_creative_tablet: isTablet,
        }"
      >
        <div
          v-for="(item, index) in data_creattive"
          :key="index"
          class="item-creative"
        >
          <div class="img-logo">
            <img :src="item.image" alt="" />
          </div>
          <p class="name name_first">{{ item.name }}</p>
          <p class="name">CEO TECHVIET PRODUCTION</p>
        </div>
      </div>
    </div>

    <div class="child-block-4">
      <h2 className="name-sponsor">NHÀ TÀI TRỢ CHƯƠNG TRÌNH</h2>

      <div
        class="list_sponsor"
        :class="{
          list_sponsor_mobile: isMobile,
          list_sponsor_tablet: isTablet,
        }"
      >
        <div
          v-for="(item, index) in data_sponsor"
          :key="index"
          class="item-sponsor"
        >
          <div class="img-logo">
            <img :src="item.image" alt="" />
          </div>
          <p class="title">{{ item.title }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.event-page {
  position: relative;
  overflow: hidden;
  padding-top: 96px;

  .child-block-1 {
    background-size: cover;
    -webkit-filter: grayscale(50%);

    .image-block-1 {
      img {
        width: 100%;
        height: 700px;
        object-fit: fill;
      }
    }

    .image_block_2 {
      position: absolute;
      top: 0;
      left: 55%;

      &_mobile {
        left: 0;
      }

      img {
        width: 700px;
        object-fit: fill;
      }
    }

    .infor-event {
      position: absolute;
      z-index: 100;
      top: 30%;
      left: 100px;

      .list-time {
        display: flex;
        color: #fff;
        gap: 30px;

        .item-time {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          font-weight: 600;

          &.item-time-1 {
            color: #ffbe0b;
          }

          &.item-time-2 {
            color: #fb5607;
          }

          &.item-time-3 {
            color: #ff006e;
          }

          &.item-time-4 {
            color: #8338ec;
          }

          .time {
            line-height: 30px;
            font-size: 60px;
            font-weight: 600;
          }

          .day {
            font-size: 20px;
            font-weight: 400;
            color: #fff;
          }
        }
      }

      .title-evn {
        font-size: 40px;
        font-weight: 600;
        padding: 10px 0;
        color: #fff;
      }

      .date-evn {
        font-size: 18px;
        color: #fff;
      }
    }
  }

  .child_block_2 {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    &.child_block_2_mobile {
      flex-direction: column;
      align-items: center;

      .desc-event {
        padding: 0 50px;
        padding-bottom: 50px;
      }
    }

    @keyframes img-evnt {
      0% {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
      }

      50% {
        -webkit-transform: translateY(0);
        transform: translateY(0);
      }

      100% {
        -webkit-transform: translateY(-15px);
        transform: translateY(-15px);
      }
    }

    .img-detail {
      padding: 50px;

      img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        animation: img-evnt 3s linear infinite;
      }
    }

    .desc-event {
      padding: 50px;

      h5 {
        padding-bottom: 10px;
        text-transform: uppercase;
        color: #9f1f56;
        font-size: 30px;
        font-weight: 600;
      }

      .meeting {
        font-weight: 700;
      }

      .card-text {
        font-size: 16px;
        color: #8c8c8c;
        padding: 20px 0px;
        max-width: 520px;
      }

      .btn {
        padding: 8px 16px;
        border-radius: 4px;
        border: none;
        color: #fff;
        text-transform: uppercase;
      }

      .btn-join {
        margin-right: 16px;
        background-color: #41b294;
      }

      .btn-more {
        background-color: #f6ba35;
      }
    }
  }

  .child-block-4 {
    padding: 0 50px;

    .name-sponsor {
      text-align: center;
      padding: 20px;
      font-size: 30px;
      color: #f6ba35;
      font-weight: 600;
      text-transform: uppercase;
    }

    .list_sponsor {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 20px;
      padding-top: 20px;
      padding-bottom: 50px;

      &.list_sponsor-mobile {
        grid-template-columns: repeat(1, 1fr);
      }

      &.list_sponsor-tabnet {
        grid-template-columns: repeat(2, 1fr);
      }

      .item-sponsor {
        display: flex;
        flex-direction: column;
        gap: 5px;
        align-items: center;

        .img-logo {
          width: 100%;
          height: 220px;

          img {
            width: 100%;
            height: 100%;
            border-radius: 10px;
          }
        }

        .title {
          font-size: 20px;
          text-transform: uppercase;
          font-weight: 600;
        }
      }
    }
  }

  .child-block-3 {
    padding: 50px;
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://demo2.cybersoft.edu.vn/static/media/lightTech.32807735.jpg");

    .name-creative {
      text-align: center;
      font-size: 30px;
      color: #f6ba35;
      font-weight: 600;
      text-transform: uppercase;
      padding: 20px;
    }

    .list_creative {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 15px;

      &.list_creative_mobile {
        grid-template-columns: repeat(2, 1fr);
      }
      &.list_creative_tabnet {
        grid-template-columns: repeat(3, 1fr);
      }

      .item-creative {
        .img-logo {
          width: 100%;
          height: 300px;

          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .name {
          font-weight: 600;
          font-size: 15px;
          color: #fff;
        }
        .name_first {
          margin-top: 12px;
          margin-bottom: 6px;
        }
      }
    }
  }
}
</style>