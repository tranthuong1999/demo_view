<script setup>
import { isMobile } from "../Composables/useScreenBreakpoints";

const data_infor = [
  {
    title: "V LEARNING ?",
    header: "Nơi hội tụ kiến thức",
    desc: "ây là nền tảng giảng dạy và học tập trực tuyến được xây dựng để hỗ trợ phát triển giáo dục trong thời đại công nghiệp 4.0, được xây dựng dựa trên cơ sở quan sát toàn bộ các nhu cầu cần thiết của một lớp học offline. Từ đó đáp ứng và đảm bảo cung cấp các công cụ toàn diện, dễ sử dụng cho giáo viên và học sinh, giúp tạo nên một lớp học trực tuyến thú vị và hấp dẫn.",
    image: require("../assets/info_1.png"),
    heightLight: "Đ",
  },
  {
    title: "CHƯƠNG TRÌNH HỌC V LEARNING",
    header: "Hệ thống học hàng đầu",
    desc: "iảng viên đều là các chuyên viên thiết kế đồ họa và giảng viên của các trường đại học danh tiếng trong thành phố: Đại học CNTT, KHTN, Bách Khoa,…Trang thiết bị phục vụ học tập đầy đủ, phòng học máy lạnh, màn hình LCD, máy cấu hình mạnh, mỗi học viên thực hành trên một máy riêng.100% các buổi học đều là thực hành trên máy tính. Đào tạo với tiêu chí: “học để làm được việc”, mang lại cho học viên những kiến thức hữu ích nhất, sát với thực tế nhất.",
    image: require("../assets/info_2.png"),
    heightLight: "G",
  },
  {
    title: "TẦM NHÌN V LEARNING",
    header: "Đào tạo lập trình chuyên sâu",
    desc: "rở thành hệ thống đào tạo lập trình chuyên sâu theo nghề hàng đầu khu vực, cung cấp nhân lực có tay nghề cao, chuyên môn sâu cho sự phát triển công nghiệp phần mềm trong thời đại công nghệ số hiện nay, góp phần giúp sự phát triển của xã hội, đưa Việt Nam thành cường quốc về phát triển phần mềm.giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.",
    image: require("../assets/info_3.png"),
    heightLight: "T",
  },
  {
    title: "SỨ MỆNH V LEARNING",
    header: "Phương pháp đào tạo hiện đại",
    desc: "ử dụng các phương pháp đào tạo tiên tiến và hiện đại trên nền tảng công nghệ giáo dục, kết hợp phương pháp truyền thống, phương pháp trực tuyến, lớp học đảo ngược và học tập dựa trên dự án thực tế, phối hợp giữa đội ngũ training nhiều kinh nghiệm và yêu cầu từ các công ty, doanh nghiệp. Qua đó, V learning giúp người học phát triển cả tư duy, phân tích, chuyên sâu nghề nghiệp, học tập suốt đời, sẵn sàng đáp ứng mọi nhu cầu của doanh nghiệp.",
    image: require("../assets/info_4.png"),
    heightLight: "S",
  },
];
</script>



<template>
  <div class="information-page">
    <div className="info-block-1">
      <h5>V LEARNING HỌC LÀ VUI</h5>
      <h2>Cùng nhau khám phá nhưng điều mới mẻ</h2>
      <p>Học đi đôi với hành</p>
    </div>
    <div className="info-block-2">
      <div
        v-for="(item, index) in data_infor"
        :key="index"
        class="list_info"
        :class="{ list_info_mobile: isMobile }"
      >
        <div class="item_infor" :class="`item_infor_${index}`">
          <div className="img-logo">
            <img :src="item.image" />
          </div>
          <div className="item-content">
            <p className="title-infor">{{ item.title }}</p>
            <p className="header-infor">{{ item.header }}</p>
            <p className="desc-infor">
              <span>{{ item.heightLight }}</span
              >{{ item.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.information-page {
  .info-block-1 {
    background-position: 50%;
    padding: 150px 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-image: url(../assets/info_6.png);

    @keyframes img-infor {
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

    h5,
    h2,
    p {
      text-align: center;
      color: #fff;
    }

    h5 {
      color: #41b294;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 20px;
    }

    h2 {
      color: #f6ba35;
      font-size: 40px;
      font-weight: 600;
    }

    p {
      font-size: 18px;
    }
  }

  .info-block-2 {
    padding: 0 50px;

    .list_info {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 50px;
      padding: 50px 0px;

      &.list_info_mobile {
        gap: 5px;

        .item_infor {
          flex-direction: column;

          .img-logo {
            order: 1;
          }

          .img-content {
            order: 2;
          }
        }
      }

      .item_infor {
        display: flex;
        justify-content: space-evenly;
        flex: 1;

        &.item_infor_1,
        &.item_infor_3 {
          .img-logo {
            order: 2;
          }
          .img-content {
            order: 1;
          }
        }

        .img-logo {
          width: 100%;
          height: 300px;
          flex: 2.5;

          img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            animation: img-infor 3s linear infinite;
          }
        }

        .item-content {
          flex: 3;

          .title-infor {
            text-transform: uppercase;
            font-size: 20px;
            font-weight: 700;
            color: #41b294;
          }

          .header-infor {
            color: #012025;
            font-size: 40px;
            font-weight: 700;
          }

          .desc-infor {
            max-width: 735px;
            color: #8c8c8c;
            line-height: 2.2;

            span {
              font-size: calc(60px + 0.75vw);
              line-height: 40px;
              color: #cd5c5c;
              float: left;
              padding-top: 10px;
              padding-right: 5px;
            }
          }
        }
      }
    }
  }
}
</style>