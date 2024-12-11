<script setup>
import { isMobile, isTablet } from "../Composables/useScreenBreakpoints";
import { useRoute } from "vue-router";
import { ref, onMounted } from "vue";
import { useCategoryStore } from "../store/categoryStore";
import { watch } from "vue";

const router = useRoute();
const loading = ref(false);
const course_code = ref(router.params.course_code);
const categoryStore = useCategoryStore();
const data = ref([]);

const data_lesson = [
  {
    title:
      "Xây dựng các ứng dụng web mạnh mẽ, nhanh chóng, thân thiện với người dùng và phản ứng nhanh",
  },
  {
    title:
      "Đăng ký công việc được trả lương cao hoặc làm freelancer trong một trong những lĩnh vực được yêu cầu nhiều nhất mà bạn có thể tìm thấy trong web dev ngay bây giờ",
  },
  {
    title:
      "Cung cấp trải nghiệm người dùng tuyệt vời bằng cách tận dụng sức mạnh của JavaScript một cách dễ dàng",
  },
  { title: "Tìm hiểu tất cả về React Hooks và React Components" },
  {
    title:
      "Thông thạo chuỗi công cụ hỗ trợ React, bao gồm cú pháp Javascript NPM, Webpack, Babel và ES6 / ES2015",
  },
  { title: "Nhận ra sức mạnh của việc xây dựng các thành phần có thể kết hợp" },
  {
    title:
      "Hãy là kỹ sư giải thích cách hoạt động của Redux cho mọi người, bởi vì bạn biết rất rõ các nguyên tắc cơ bản",
  },
  {
    title:
      "Nắm vững các khái niệm cơ bản đằng sau việc cấu trúc các ứng dụng Redux",
  },
];

const data_couse_1 = [
  "Các khái niệm về React Component",
  "Thiết lập môi trường cho Windows",
  "Tạo ứng dụng React - React-Scripts",
  "Ghi chú nhanh về dấu ngoặc kép cho string interpolation",
];

const data_couse_2 = [
  "Trang chủ và thành phần thư mục",
  "Hướng dẫn khóa học + Liên kết Github",
  "Trang chủ thương mại điện tử + thiết lập SASS",
  "Tệp CSS và SCSS",
  "React 17: Cập nhật các gói + Phiên bản React mới nhất",
];

const data_couse_3 = [
  "connect() and mapStateToProps",
  "Trạng thái thư mục vào Redux",
  "Thành phần Tổng quan về Bộ sưu tập",
];

const apiFetchCourseByCategory = async () => {
  loading.value = true;
  try {
    await categoryStore.fetchDetailCourse(course_code.value);
  } catch (err) {
    console.log("err", err);
  } finally {
    loading.value = false;
  }
};
onMounted(apiFetchCourseByCategory);
watch(
  () => router.params.name,
  (newName) => {
    course_code.value = newName;
    apiFetchCourseByCategory();
  }
);
onMounted(async () => {
  data.value = categoryStore.listCourse.slice(4, 8);
});
</script>



<template>
  <div class="detail-course-child-page">
    <div class="block-1">
      <h3>THÔNG TIN KHÓA HỌC</h3>
      <p>TIẾN LÊN VÀ KHÔNG CHẦN CHỪ !!!</p>
    </div>

    <div
      class="block_2"
      :class="{ block_2_mobile: isMobile, block_2_tablet: isTablet }"
    >
      <div class="block_2-child-1">
        <p class="name">{{ categoryStore.detailCourse.tenKhoaHoc }}</p>
        <div class="overview" :class="{ overview_small: isTablet || isMobile }">
          <div class="overview-1">
            <div class="img-logo">
              <img
                src="https://demo2.cybersoft.edu.vn/static/media/instrutor5.2e4bd1e6.jpg"
                alt=""
              />
            </div>
            <div>
              <p class="name-1">Giảng viên</p>
              <p class="name-2">Robert Ngô Ngọc</p>
            </div>
          </div>
          <div class="overview-1">
            <div class="img-logo">
              <i class="material-icons">star</i>
            </div>
            <div>
              <p class="name-1">Lĩnh vực</p>
              <p class="name-2">Lập trình Backend</p>
            </div>
          </div>
          <div class="overview-1">
            <div>
              <p class="over-view-last">
                <span>
                  <v-rating
                    hover
                    :length="5"
                    :size="32"
                    :model-value="4.5"
                    active-color="#f6ba35"
                  />
                </span>
                <span class="count_review">3.5 </span>
              </p>
              <p class="name-1 rating">100 đánh giá</p>
            </div>
          </div>
        </div>
        <p className="desc">
          React.js là thư viện JavaScript phổ biến nhất mà bạn có thể sử dụng và
          tìm hiểu ngày nay để xây dựng giao diện người dùng hiện đại, phản ứng
          cho web. Khóa học này dạy bạn về React chuyên sâu, từ cơ bản, từng
          bước đi sâu vào tất cả các kiến nhiều ví dụ và cũng giới thiệu cho bạn
          các khái niệm nâng cao.Bạn sẽ nhận được tất cả lý thuyết, hàng tấn ví
          dụ và bản trình diễn, bài tập và bài tập cũng như vô số kiến khác bỏ
          qua - sau cùng, có một lý do tại sao khóa học này lại rất lớn! Và
          trong trường hợp bạn thậm chí không biết tại sao bạn lại muốn học
          React và bạn chỉ ở đây vì một số quảng cáo hoặc "thuật toán" - đừng lo
          lắng: ReactJS là một công nghệ quan trọng với tư cách là một nhà phát
          triển web và trong khóa học này, tôi sẽ cũng giải thích TẠI SAO điều
          đó lại quan trọng!
        </p>

        <h5 class="title-less">Những gì bạn sẽ học</h5>
        <div class="list-lesson">
          <div
            v-for="(item, index) in data_lesson"
            :key="index"
            class="item-course"
          >
            <div class="child_item">
              <i class="material-icons" :class="'icon_check'">check</i>
              <p>{{ item.title }}</p>
            </div>
          </div>
        </div>

        <h5 class="content-less">Nội dung khóa học</h5>

        <div class="course-detail-item">
          <div class="introduce">
            MỤC 1: GIỚI THIỆU <span><button>Xem trước</button></span>
          </div>
          <p class="lesson">Bài học</p>
          <div class="list-lesson">
            <div
              v-for="(item, index) in data_couse_1"
              :key="index"
              class="item-lesson"
            >
              <p class="item_child">
                <span><i class="material-icons">play_circle</i> </span>
                {{ item }}
              </p>
              <p class="item_child">
                <span><i class="material-icons">clock</i> </span> 14:35
              </p>
            </div>
          </div>
        </div>

        <div class="course-detail-item">
          <div class="introduce">
            MỤC 2: KIẾN THỨC CĂN BẢN <span><button>Xem trước</button></span>
          </div>
          <p class="lesson">Bài học</p>
          <div class="list-lesson">
            <div
              v-for="(item, index) in data_couse_2"
              :key="index"
              class="item-lesson"
            >
              <p class="item_child">
                <span> <i class="material-icons">play_circle</i> </span>
                {{ item }}
              </p>
              <p class="item_child">
                <span><i class="material-icons">clock</i> </span> 14:35
              </p>
            </div>
          </div>
        </div>

        <div class="course-detail-item">
          <div class="introduce">
            MỤC 3: KIẾN THỨC CHUYÊN SÂU <span><button>Xem trước</button></span>
          </div>
          <p class="lesson">Bài học</p>
          <div class="list-lesson">
            <div
              v-for="(item, index) in data_couse_3"
              :key="index"
              class="item-lesson"
            >
              <p class="item_child">
                <span> <i class="material-icons">play_circle</i> </span>
                {{ item }}
              </p>
              <p class="item_child">
                <span><i class="material-icons">clock</i> </span> 14:35
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="block_2-child-2">
        <div class="img-logo">
          <img :src="categoryStore.detailCourse.hinhAnh" alt="" />
        </div>
        <p class="price">
          <i class="material-icons">star</i> 500.000<sup>đ</sup>
        </p>
        <div class="button">
          <button class="btn-register">Đăng ký</button>
        </div>
        <div class="detail">
          <p>Ghi danh: <span>10 học viên </span></p>
          <i class="material-icons">star</i>
        </div>
        <div class="detail">
          <p>Thời gian: <span>18 giờ </span></p>
          <i class="material-icons">star</i>
        </div>
        <div class="detail">
          <p>Bài học: <span>10</span></p>
          <i class="material-icons">star</i>
        </div>
        <div class="detail">
          <p>Video: <span>14 </span></p>
          <i class="material-icons">star</i>
        </div>
        <div class="detail">
          <p>Trình độ: <span> Người mới bắt đầu</span></p>
          <i class="material-icons">star</i>
        </div>
        <div class="input-code">
          <input type="text" placeholder="Nhập mã" />
        </div>
      </div>
    </div>

    <div class="block-3">
      <h5>Khoá học tham khảo</h5>
      <CourseReferenceComponent :data="data" />
    </div>
  </div>
</template>

.<style scoped lang="scss">
.detail-course-child-page {
  padding-top: 96px;
  .block-1 {
    padding: 50px;
    text-transform: uppercase;
    background-color: #ffd60a;
    color: #fff;

    p {
      font-size: 13px;
    }
  }

  .block_2 {
    display: flex;
    flex: 1;
    padding: 50px;
    gap: 50px;

    &_mobile {
      flex-direction: column;

      .block_2-child-2 {
        order: 1;
      }

      .block_2-child-1 {
        order: 2;
      }
    }

    .block_2-child-1 {
      flex: 3;

      .name {
        font-size: 24px;
        font-weight: bold;
      }

      .overview {
        display: flex;
        justify-content: space-between;
        padding: 30px 0px;

        &_small {
          flex-direction: column;
        }

        .overview-1 {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 10px;
          .count_review {
            font-weight: bold;
          }

          .img-logo {
            img {
              width: 50px;
              height: 50px;
              object-fit: cover;
              border-radius: 50%;
            }

            i {
              font-size: 35px;
              color: green;
            }
          }

          .name-1 {
            font-size: 14px;
            color: #8c8c8c;
          }

          .rating {
            text-align: end;
          }

          .name-2 {
            font-weight: 700;
          }

          .over-view-last {
            display: flex;
            align-items: center;
            gap: 4px;
          }
        }
      }

      .desc {
        color: #8c8c8c;
        padding-bottom: 20px;
        border-bottom: 1px solid #d0d0d0;
        text-align: justify;
      }

      .title-less {
        padding: 10px 0;
        font-size: 20px;
      }

      .list-lesson {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px 20px;
        .item-course {
          font-weight: 600;
          color: #000;
          .child_item {
            display: flex;
            gap: 4px;
            .icon_check {
              color: #f6ba35;
              font-size: 20px;
              font-weight: bold;
            }
          }
        }
      }

      .content-less {
        padding: 30px 0;
        font-size: 20px;
      }

      .course-detail-item {
        .introduce {
          padding: 10px;
          margin-bottom: 20px;
          background-color: hsla(0, 0%, 86.3%, 0.1411764705882353);

          span {
            margin-left: 12px;

            button {
              padding: 8px 12px;
              background-color: transparent;
              border: 1px solid #41b294;
              font-weight: 700;
              text-transform: uppercase;
              color: #41b294;
              transition: all 0.5s;
              border-radius: 4px;

              &:hover {
                cursor: pointer;
                background-color: #41b294;
                color: #fff;
              }
            }
          }
        }

        .lesson {
          padding: 0 10px;
          font-weight: 600;
        }

        .list-lesson {
          display: grid;
          grid-template-columns: repeat(1, 1fr);

          .item-lesson {
            display: flex;
            align-items: center;
            padding: 10px;
            justify-content: space-between;
            box-shadow: 1px 1px 2px 1px rgba(239, 244, 190, 0.27);
            .item_child {
              display: flex;
            }
            i {
              margin-right: 10px;
              color: #41b294;
            }
          }
        }
      }

      .list-course-reference {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 20px;
      }
    }
    .block_2-child-2 {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 15px;
      padding: 10px 30px;
      box-shadow: 1px 1px 10px 4px #dadada;
      max-height: 600px;

      .img-logo {
        display: flex;
        justify-content: center;
        img {
          width: 100%;
          height: 200px;
          object-fit: fill;
          padding-top: 3px;
        }
      }

      .price {
        display: flex;
        align-items: center;
        justify-content: end;
        text-align: end;
        font-weight: 500;
        font-size: 25px;

        i {
          margin-right: 10px;
          color: #f6ba35;
        }
      }

      .button {
        margin: 20px 0;

        .btn-register {
          width: 100%;
          padding: 5px;
          background-color: transparent;
          border: 1px solid #41b294;
          font-weight: 500;
          text-transform: uppercase;
          color: #41b294;
          transition: all 0.5s;
          font-size: 20px;

          &:hover {
            cursor: pointer;
            color: #fff;
            background-color: #41b294;
          }
        }
      }

      .detail {
        display: flex;
        justify-content: space-between;
        font-size: 18px;
        padding-bottom: 20px;
        border-bottom: 1px solid #f2f1f1;

        p {
          color: #8c8c8c;

          span {
            color: #252525;
            font-weight: 500;
          }
        }

        i {
          font-size: 20px;
          color: #f6ba35;
        }
      }

      .input-code {
        border: 8px;
        margin-bottom: 10px;

        input {
          width: 100%;
          padding: 8px;

          &:hover {
            border: 1px solt green;
          }
        }
      }
    }
  }

  .block-3 {
    padding: 0 50px;
    margin-bottom: 50px;
    h5 {
      padding: 10px 0px;
      font-weight: 700;
      font-size: 20px;
    }

    .list-course-reference {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 20px;

      &-mobile {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      &-tabnet {
        grid-template-columns: repeat(3, 1fr);
      }
    }
  }
}
</style>