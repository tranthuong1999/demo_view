<script setup>
import { isMobile } from "../Composables/useScreenBreakpoints";
const data_course = [
  "Hơn 1000 bài tập và dự án thực tế",
  "Công nghệ cập nhật mới nhất",
  "Hình ảnh, ví dụ, bài giảng sinh động trực quan",
  "Tư duy phân tích, giải quyết vấn đề trong dự án",
  "Học tập kinh nghiệm, qui trình làm dự án, các qui chuẩn trong dự án",
  "Cơ hội thực tập tại các công ty lớn như FPT, Microsoft",
];
const data_schedule = [
  "Lộ trình bài bản từ zero tới chuyên nghiệp, nâng cao",
  "Học, luyện tập code, kỹ thuật phân tích, soft skill",
  "Huấn luyện để phát triển năng lực và niềm đam mê lập trình",
];
const data_mentor = [
  "Tương tác cùng mentor và giảng viên qua phần thảo luận",
  "Review code và đưa ra các nhận xét góp ý",
  "Chấm điểm tương tác thảo luận giữa các học viên",
];
const data_system = [
  "Tự động chấm điểm trắc nghiệm và đưa câu hỏi tùy theo mức độ học viên",
  "Thống kê lượt xem video, làm bài, điểm số theo chu kỳ",
  "Thống kê, so sánh khả năng học của các học viên cùng level để đưa ra mục tiêu học tập",
];
const data_certificate = [
  "Chấm bài và có thể vấn đáp trực tuyến để review",
  "Hệ thống của chúng tôi cũng tạo ra cho bạn một CV trực tuyến độc đáo",
  "Kết nối CV của bạn đến với các đối tác của V learning",
];
</script>

<template>
  <div class="course-description">
    <div class="course" :class="{ course_mobile: isMobile }">
      <div class="block-1">
        <h1 class="title">Khóa học</h1>
        <p class="desc_course">
          <span>Học qua dự án thực tế</span>,học đi đôi với hành, không lý
          thuyết lan man, phân tích cội nguồn của vấn đề, xây dựng từ các ví dụ
          nhỏ đến thực thi một dự án lớn ngoài thực tế để học viên học xong làm
          được ngay
        </p>
        <div class="list-course">
          <div v-for="title in data_course" :key="title" class="course">
            <div>
              <i class="material-icons">check</i>
            </div>
            <div class="title_course">{{ title }}</div>
          </div>
        </div>
      </div>
      <div class="block-2">
        <h1 class="title">Lộ trình phù hợp</h1>
        <div class="list-course">
          <div v-for="title in data_schedule" :key="title" class="course">
            <div>
              <i class="material-icons">check</i>
            </div>
            <div class="title_course">{{ title }}</div>
          </div>
        </div>
      </div>

      <div class="block-3">
        <h1 class="title">Giảng viên</h1>
        <div class="list-course">
          <div v-for="title in data_mentor" :key="title" class="course">
            <div>
              <i class="material-icons">check</i>
            </div>
            <div class="title_course">{{ title }}</div>
          </div>
        </div>
      </div>

      <div class="block-4">
        <h1 class="title">Hệ thống học tập</h1>
        <div class="list-course">
          <div v-for="title in data_system" :key="title" class="course">
            <div>
              <i class="material-icons">check</i>
            </div>
            <div class="title_course">{{ title }}</div>
          </div>
        </div>
      </div>

      <div class="block-5">
        <h1 class="title">Chứng nhận</h1>
        <div class="list-course">
          <div v-for="title in data_certificate" :key="title" class="course">
            <div>
              <i class="material-icons">check</i>
            </div>
            <div class="title_course">{{ title }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.course-description {
  padding: 0 50px;
  .course {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
    color: var(--colorWhite);
    &_mobile {
      display: flex !important;
      flex-direction: column !important;
    }
    .title {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 28px;
    }
    .list-course {
      display: flex;
      flex-direction: column;
      padding-top: 12px;
      gap: 4px;
      padding-bottom: 24px;
      .course {
        display: flex;
        flex-direction: row;
        .title_course {
          font-weight: 700;
        }
      }
    }
    .block-1 {
      background-color: var(--colorGlobal);
      grid-row: 1/3;
      padding: 12px;
      border-radius: 4px;
      background-image: url(../assets/robot.png);
      background-position: 100% 100%;
      background-size: 50%;
      background-repeat: no-repeat;
      .desc_course {
        max-width: 447px;
        font-weight: 300;
        line-height: 1.5;
        font-size: 16px;
        span {
          font-weight: 700;
        }
      }
    }
    .block-2,
    .block-3,
    .block-4,
    .block-5 {
      padding: 12px;
      border-radius: 4px;
    }
    .block-2 {
      background-color: #f6ba35;
    }
    .block-3 {
      background-color: #f6ba35;
    }
    .block-4 {
      background-color: #5c8295;
    }
    .block-5 {
      background-color: #63c0a8;
    }
  }
}
</style>