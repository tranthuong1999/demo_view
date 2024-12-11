<script setup>
import { ref, onMounted, computed } from "vue";
import { isMobile, isTablet } from "../Composables/useScreenBreakpoints";
const data = ref([
  {
    image: require("../assets/mentor_1.jpg"),
    name: "Big DadMoon",
    title: "Chuyên gia lĩnh vực",
    expert: "lập trình",
  },
  {
    image: require("../assets/mentor_2.jpg"),
    name: "carDi MenBor",
    title: "Chuyên gia ngôn ngữ",
    expert: "Vue Js",
  },
  {
    image: require("../assets/mentor_3.jpg"),
    name: "Bladin Slaham",
    title: "Chuyên gia hệ thống",
    expert: "máy tính",
  },
  {
    image: require("../assets/mentor_4.jpg"),
    name: "Chris Andersan",
    title: "Chuyên gia lĩnh vực",
    expert: "Full Skill",
  },
  {
    image: require("../assets/mentor_5.jpg"),
    name: "VueLo Gadi",
    title: "Chuyên gia lĩnh vực",
    expert: "Phân tích",
  },
  {
    image: require("../assets/mentor_6.jpg"),
    name: "Hoàng Nam",
    title: "Chuyên gia lĩnh vực ",
    expert: "PHP",
  },
  {
    image: require("../assets/mentor_7.jpg"),
    name: "David Ngô Savani",
    title: "Chuyên gia lĩnh vực",
    expert: "Front End",
  },
]);

const isActive = ref(false);

const startIndex = ref(0);

const visibleMentors = computed(() => {
  if (isMobile.value) {
    return data.value.slice(startIndex.value, startIndex.value + 1);
  }
  if (isTablet.value) {
    return data.value.slice(startIndex.value, startIndex.value + 4);
  }
  return data.value.slice(startIndex.value, startIndex.value + 6);
});

const handleItemLeft = () => {
  if (startIndex.value > 0) {
    startIndex.value -= 1;
  }
  isActive.value = true;
};

const handleItemRight = () => {
  if (startIndex.value + 6 < data.value.length) {
    startIndex.value += 1;
  }
  isActive.value = false;
};

onMounted(() => {
  console.log(`the component is now mounted.`);
});
</script>


<template>
  <div class="mentor_page">
    <h4 class="title">Giảng viên hàng đầu</h4>
    <div class="block_1">
      <div class="list_mentor">
        <div
          v-for="item in visibleMentors"
          :key="item.number"
          class="item_mentor"
        >
          <div class="img">
            <img :src="item.image" alt="" />
          </div>
          <p class="name_mentor">{{ item.name }}</p>
          <p class="title_mentor">{{ item.title }}</p>
          <p class="expert_mentor">{{ item.expert }}</p>
          <div class="star-mentor">
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <i class="material-icons">star</i>
            <p class="count_review">4.9</p>
          </div>
          <p class="review">100 Đánh giá</p>
        </div>
      </div>
    </div>

    <div class="block_2">
      <p
        class="item"
        @click="handleItemLeft"
        :class="{ item_left_active: isActive }"
      ></p>
      <p
        class="item"
        @click="handleItemRight"
        :class="{ item_right_active: !isActive }"
      ></p>
    </div>

    <div class="block_3" :class="{ block_3_is_mobile: isMobile }">
      <div class="triangleTopRight"></div>
      <div class="item_left">
        <img src="../assets/mentor_8.png" alt="" />
      </div>
      <div class="item_right">
        <div class="desc">
          <q>
            Chương trình giảng dạy được biên soạn dành riêng cho các bạn Lập
            trình từ trái ngành hoặc đã có kiến thức theo cường độ cao, luôn
            được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng
            lập và giảng viên dày kinh nghiệm.Thực sự rất hay và hấp dẫn
          </q>
        </div>
        <p class="name_dev">Nhi Dev</p>
        <p class="employeer">Học viên xuất sắc</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.mentor_page {
  padding: 50px;
  overflow: hidden;
  .title {
    color: #000;
    padding-bottom: 50px;
  }
  .block_1 {
    .list_mentor {
      display: flex;
      justify-content: space-around;
      overflow: hidden;
      .item_mentor {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 16px;
        border-radius: 12px;
        gap: 4px;
        transition: all 0.2s;
        &:hover {
          box-shadow: 0 0 10px 6px rgba(0, 0, 0, 0.13);
        }
        .img {
          width: 80px;
          height: 80px;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
          }
        }
        .name_mentor {
          font-weight: bold;
        }
        .expert_mentor {
          text-transform: capitalize;
          font-weight: 700;
        }
        .star-mentor {
          display: flex;
          gap: 2px;
          .material-icons {
            color: var(--colorSPrimary);
          }
          .count_review {
            color: var(--colorSPrimary);
            opacity: 0.9;
          }
        }
        .review {
          font-size: 13px;
          color: var(--colorTextCard);
        }
      }
    }
  }
  .block_2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    .item {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--colorGlobal);
      transition: all 0.4s;
      &_left_active,
      &_right_active {
        opacity: 0.2;
      }
    }
  }
  .block_3 {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 50px;
    position: relative;
    gap: 24px;
    .triangleTopRight {
      transform: rotate(-45deg);
      position: absolute;
      top: 0;
      left: 0;
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 50px solid var(--colorSPrimary);
    }
    &_is_mobile {
      flex-direction: column;
      gap: 20px;
    }
    .item_left {
      height: 220px;
      width: 230px;
      background-color: var(--colorTPrimary);
      border-radius: 10px 100px 110px;
      img {
        width: 200px;
        height: 200px;
        object-fit: contain;
      }
    }
    .item_right {
      .desc {
        max-width: 745px;
        line-height: 30px;
        font-size: 17px;
        font-weight: 500;
        q::before {
          font-size: 50px;
          font-family: fantasy;
          color: var(--colorTPrimary);
        }
      }
      .name_dev {
        color: var(--colorTPrimary);
        padding-top: 12px;
      }
      .employeer {
        color: var(--colorTextCard);
      }
    }
  }
}
</style>>
