<script setup>
import CountUp from "vue-countup-v3";

const data = [
  {
    image: require("../assets/counter_1.png"),
    number: 9000,
    title: "Học viên",
  },
  {
    image: require("../assets/counter_2.png"),
    number: 1000,
    title: "Khóa học",
  },
  {
    image: require("../assets/counter_3.png"),
    number: 33200,
    title: "Giờ học",
  },
  {
    image: require("../assets/counter_4.png"),
    number: 400,
    title: "Giảng viên",
  },
];
</script>

<template>
  <div class="counter_page">
    <div class="list_counter">
      <div v-for="item in data" :key="item.number" class="item_counter">
        <div class="image">
          <img :src="item.image" alt="" />
        </div>
        <div class="counter_num">
          <count-up :end-val="item.number">{{ item.number }}</count-up>
        </div>

        <p class="counter_title">{{ item.title }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.counter_page {
  padding: 50px;
  background-color: var(--colorbg);
  .list_counter {
    display: flex;
    justify-content: space-around;
    .item_counter {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: center;
      .image {
        width: 80px;
        height: 80px;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      .counter_num {
        color: var(--colorGlobal);
        font-size: 50px;
        font-weight: bold;
      }
      .counter_title {
        font-weight: bold;
      }
    }
  }
}
</style>