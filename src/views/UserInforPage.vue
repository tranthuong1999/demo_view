<script setup>
import { onMounted, ref } from "vue";
import { isMobile } from "../Composables/useScreenBreakpoints";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";

const isShowInfor = ref(false);
const power_1 = 100;
const power_2 = 80;
const power_3 = 60;
const power_4 = 40;

const authStore = useAuthStore();
const userInfor = JSON.parse(localStorage.getItem("credential"));
const router = useRouter();

onMounted(() => {
  if (!userInfor) {
    router.push({ path: "/" });
    return;
  }
  authStore.fetchUserInfor(userInfor.taiKhoan);
});

const handleDeleteCourse = async (course) => {
  await authStore.fetchDeleteCourse(course.maKhoaHoc, userInfor.taiKhoan);
};
</script>


<template>
  <div class="user_infor">
    <div class="block_1">
      <h1>Thông tin cá nhân</h1>
      <p>Thông tin học viên</p>
    </div>
    <div class="block_2">
      <div class="item_left" v-if="!isMobile">
        <div class="img_logo">
          <img
            src="https://cdn.dribbble.com/users/2364329/screenshots/6676961/02.jpg?compress=1&resize=800x600"
            alt=""
          />
          <p class="name">Robert Nguyễn</p>
          <p class="title">Lập trình viên Front-end</p>
          <div class="btn_resume">
            <button>Hồ sơ cá nhân</button>
          </div>
        </div>
      </div>
      <div class="item_right">
        <div class="total_state">
          <div
            class="btn_infor"
            :class="{ btn_infor_active: isShowInfor }"
            @click="isShowInfor = true"
          >
            Thông tin cá nhân
          </div>
          <div
            class="btn_course"
            :class="{ btn_course_active: !isShowInfor }"
            @click="isShowInfor = false"
          >
            Khoá học
          </div>
        </div>
        <div class="show_infor" v-if="isShowInfor">
          <div class="infor_top" :class="{ infor_top_mobile: isMobile }">
            <div class="infor_top_left">
              <p><span class="infor_title">Email:</span>abcdefgh@gmail.com</p>
              <p><span class="infor_title">Họ và tên:</span>abcde</p>
              <p><span class="infor_title">Số điện thoại:</span>01234567893</p>
            </div>
            <div class="infor_top_right">
              <p>
                <span class="infor_title">Tài khoản:</span>abcdefgh@gmail.com
              </p>
              <p><span class="infor_title">Nhóm:</span>abcdefgh@gmail.com</p>
              <p>
                <span class="infor_title">Đối tượng:</span>abcdefgh@gmail.com
              </p>
              <div class="btn_update">
                <button>Cập nhật</button>
              </div>
            </div>
          </div>
          <div class="infor_bottom">
            <h1 class="title_skill">Kĩ năng của tôi</h1>
            <div
              class="infor_bottom_footer"
              :class="{ infor_bottom_footer_mobile: isMobile }"
            >
              <div class="infor_bottom_left">
                <div class="item_footer">
                  <div class="item_footer_title item_footer_title_1">HTML</div>
                  <div class="check">
                    <v-progress-linear
                      v-model="power_1"
                      color="#f9ca9a"
                      height="18"
                    ></v-progress-linear>
                  </div>
                </div>

                <div class="item_footer">
                  <div class="item_footer_title item_footer_title_2">CSS</div>
                  <div class="check">
                    <v-progress-linear
                      v-model="power_2"
                      color="#f8bebb"
                      height="18"
                    ></v-progress-linear>
                  </div>
                </div>

                <div class="item_footer">
                  <div class="item_footer_title item_footer_title_3">JS</div>
                  <div class="check">
                    <v-progress-linear
                      v-model="power_3"
                      color="#f0cc6b"
                      height="18"
                    ></v-progress-linear>
                  </div>
                </div>

                <div class="item_footer">
                  <div class="item_footer_title item_footer_title_4">React</div>
                  <div class="check">
                    <v-progress-linear
                      v-model="power_4"
                      color="#113d3c"
                      height="18"
                    ></v-progress-linear>
                  </div>
                </div>
              </div>
              <div
                class="infor_bottom_right"
                :class="{ infor_bottom_right_mobile: isMobile }"
              >
                <div class="item_bottom_right">
                  <div class="item_detail_left">
                    <i class="material-icons" :style="{ color: '#fff' }"
                      >access_time</i
                    >
                  </div>
                  <div class="item_detail_rigth">
                    <p class="desc">Giờ học</p>
                    <p class="count_num">80</p>
                  </div>
                </div>
                <div class="item_bottom_right">
                  <div class="item_detail_left">
                    <i class="material-icons" :style="{ color: '#fff' }"
                      >access_time</i
                    >
                  </div>
                  <div class="item_detail_rigth">
                    <p class="desc">Điểm tổng</p>
                    <p class="count_num">80</p>
                  </div>
                </div>
                <div class="item_bottom_right">
                  <div class="item_detail_left">
                    <i class="material-icons" :style="{ color: '#fff' }"
                      >access_time</i
                    >
                  </div>
                  <div class="item_detail_rigth">
                    <p class="desc">Buổi học</p>
                    <p class="count_num">40</p>
                  </div>
                </div>
                <div class="item_bottom_right">
                  <div class="item_detail_left">
                    <i class="material-icons" :style="{ color: '#fff' }"
                      >access_time</i
                    >
                  </div>
                  <div class="item_detail_rigth">
                    <p class="desc">Cấp độ</p>
                    <p class="count_num">Trung cấp</p>
                  </div>
                </div>
                <div class="item_bottom_right">
                  <div class="item_detail_left">
                    <i class="material-icons" :style="{ color: '#fff' }"
                      >access_time</i
                    >
                  </div>
                  <div class="item_detail_rigth">
                    <p class="desc">Học lực</p>
                    <p class="count_num">Khá</p>
                  </div>
                </div>
                <div class="item_bottom_right">
                  <div class="item_detail_left">
                    <i class="material-icons" :style="{ color: '#fff' }"
                      >access_time</i
                    >
                  </div>
                  <div class="item_detail_rigth">
                    <p class="desc">Bài tập</p>
                    <p class="count_num">100</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="show_course" v-else>
          <div class="course_top" v-if="!isMobile">
            <h1>Khóa học của tôi</h1>
            <div>
              <input placeholder="Tìm kiếm" class="input_search" />
            </div>
          </div>
          <div
            v-for="(course, index) in authStore.inforAccount
              .chiTietKhoaHocGhiDanh"
            :key="index"
            class="course_bottom"
          >
            <div class="course" :class="{ course_mobile: isMobile }">
              <div class="course_left">
                <img :src="course.hinhAnh" alt="" />
              </div>

              <div class="course_right">
                <h4 class="course_right_title">Javascripttasd</h4>
                <p class="course_right_desc">
                  ES6 là một chuẩn Javascript mới được đưa ra vào năm 2015 với
                  nhiều quy tắc và cách sử dụng khác nhau...
                </p>
              </div>
              <div class="course_footer">
                <div>
                  <button @click="handleDeleteCourse(course)">
                    Huỷ khoá học
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user_infor {
  padding-top: 96px;
  .block_1 {
    padding: 50px;
    text-transform: uppercase;
    background-color: #ffd60a;
    color: var(--colorWhite);
  }
  .block_2 {
    display: flex;
    flex: 1;
    gap: 20px;
    padding: 0 50px;
    padding-bottom: 50px;
    .item_left {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 100px;
      .img_logo {
        img {
          width: 150px;
          height: 150px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
      .name {
        text-align: center;
        margin-bottom: 10px;
        font-weight: bold;
      }
      .title {
        margin-bottom: 10px;
        text-align: center;
      }
      .btn_resume {
        text-align: center;
        button {
          padding: 10px;
          border-radius: 20px;
          color: var(--colorWhite);
          background-color: var(--colorGlobal);
          border: none;
          font-size: 18px;
        }
      }
    }
    .item_right {
      flex: 3;
      .total_state {
        display: flex;
        align-items: center;
        padding-top: 40px;
        .btn_infor,
        .btn_course {
          background-color: var(--colorWhite);
          color: var(--colorText);
          border-top: 2px solid var(--colorGlobal);
          padding: 16px;
          cursor: pointer;
        }
        .btn_infor_active,
        .btn_course_active {
          cursor: pointer;
          color: var(--colorWhite);
          border: none;
          border-top: 2px solid transparent;
          background-color: var(--colorGlobal);
          outline: none;
          padding: 16px;
          transition: all 0.3s;
        }
      }
      .show_infor {
        display: flex;
        flex-direction: column;
        padding-top: 16px;
        gap: 16px;
        .infor_top {
          display: flex;
          justify-content: space-between;
          width: 70%;
          &_mobile {
            width: 100%;
            flex-direction: column;
            gap: 16px;
          }
          &_left,
          &_right {
            display: flex;
            flex-direction: column;
            gap: 16px;
            .infor_title {
              font-weight: bold;
              font-size: 16px;
              margin-right: 12px;
            }
            .btn_update {
              button {
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
        }
        .infor_bottom {
          padding-bottom: 50px;
          .title_skill {
            font-weight: 700;
            text-transform: uppercase;
            padding-bottom: 10px;
          }
          &_footer_mobile {
            flex-direction: column;
            gap: 20px;
          }
          &_footer {
            display: flex;
            justify-content: space-between;
            .infor_bottom_left {
              display: flex;
              flex-direction: column;
              gap: 12px;
              width: 100%;
              .item_footer {
                display: flex;
                align-items: center;
                gap: 8px;
                width: 100%;
                .check {
                  width: 70%;
                }
                &_title {
                  width: 60px;
                  height: 45px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  border-radius: 8px;
                  text-transform: uppercase;
                  color: #fff;
                  &_1 {
                    background: #f9ca9a;
                  }
                  &_2 {
                    background: #f8bebb;
                  }
                  &_3 {
                    background: #f0cc6b;
                  }
                  &_4 {
                    background: #113d3c;
                  }
                }
              }
            }
            .infor_bottom_right {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              width: 50%;
              gap: 12px;
              &_mobile {
                width: auto;
              }
              .item_bottom_right {
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 15px;
                border-radius: 20px;
                background: var(--colorGlobal);
                color: var(--colorWhite);
                .item_detail_left {
                  margin-right: 8px;
                }
                .desc {
                  font-size: 18px;
                  font-weight: bold;
                }
                .count_num {
                  font-weight: 600;
                }
              }
            }
          }
        }
      }
    }
  }
  .show_course {
    .course_top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      h1 {
        padding-bottom: 12px;
      }
      .title_course {
        text-transform: uppercase;
        font-size: 17px;
        font-weight: bold;
      }
      .input_search {
        outline: none;
        border: none;
        width: 100%;
        height: 40px;
        border-radius: 8px;
        padding-left: 10px;
        margin-left: 15px;
        background-image: url(http://localhost:3002/img/icon_search.6d6000d2.png);
        background-size: 30px;
        background-position: 100%;
        background-repeat: no-repeat;
        background-color: #f5f5f5;
        &:focus {
          border: 2px solid var(--colorGlobal);
          outline: none;
        }
      }
    }
    .course_bottom {
      display: flex;
      padding-bottom: 20px;
      .course {
        display: flex;
        gap: 20px;
        &_mobile {
          flex-direction: column;
        }
        .course_left {
          img {
            object-fit: fill;
            width: 100%;
            height: 200px;
            min-height: 200px;
            min-width: 300px;
            margin-right: 20px;
          }
        }
        .course_right {
          &_title {
            font-weight: bold;
          }
          &_desc {
            color: var(--colorTextCard);
            margin-bottom: 5px;
            max-width: 640px;
          }
        }
        .course_footer {
          display: flex;
          align-items: end;
          button {
            padding: 5px 10px;
            background-color: #f6ba35;
            border: none;
            transition: all 0.5s;
            text-transform: uppercase;
            font-size: 15px;
            color: #fff;
            min-width: 150px;
            border-radius: 4px;
          }
        }
      }
    }
  }
}
</style>