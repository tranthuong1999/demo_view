<script setup>
const data_link = ["Trang chủ", "Dịch vụ", "Nhóm", "Blog"];
const data_course = ["Front End", "Back End", "Full stack", "Node Js"];
import { isMobile } from "../Composables/useScreenBreakpoints";
</script>

<template>
  <div class="footer">
    <div class="footer_page" :class="{ footer_page_mobile: isMobile }">
      <div class="block-item-1">
        <div class="text-logo">
          <span class="textE">V</span><span class="e_learn">learning</span>
          <div class="icon-calendar">
            <i class="material-icons"> calendar_month </i>
          </div>
        </div>
        <div class="block-1-item">
          <div class="icon-lg">
            <i class="material-icons" :class="icon_arrow"> local_phone </i>
          </div>
          <div class="desc">1800-123-4567</div>
        </div>
        <div class="block-1-item">
          <div class="icon-lg">
            <i class="material-icons" :class="icon_arrow"> mail </i>
          </div>
          <div class="desc">devit@gmail.com</div>
        </div>
        <div class="block-1-item">
          <div class="icon-lg">
            <i class="material-icons" :class="icon_arrow">add_locations</i>
          </div>
          <div class="desc">Đà Nẵng</div>
        </div>
      </div>
      <!-- block-2 -->
      <div class="block-item-2" :class="{ block_2_mobile: isMobile }">
        <div class="block-2">
          <h4 class="title">Liên kết</h4>
          <div class="block-2_list">
            <div v-for="item in data_link" :key="item" class="item-list">
              <i class="material-icons" :class="icon_arrow">
                arrow_forward_ios
              </i>
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
        <div class="block-2">
          <h4 class="title">Khóa học</h4>
          <div class="block-2_list">
            <div v-for="item in data_course" :key="item" class="item-list">
              <i class="material-icons" :class="icon_arrow">
                arrow_forward_ios
              </i>
              <p>{{ item }}</p>
            </div>
          </div>
        </div>
        <div class="block-2">
          <h4 class="title">Đăng kí tư vấn</h4>
          <div class="block-2_list">
            <div>
              <input placeholder="Họ và tên" class="input-footer" />
            </div>
            <div>
              <input placeholder="Email" class="input-footer" />
            </div>
            <div>
              <input placeholder="Số điện thoại" class="input-footer" />
            </div>
            <div class="btn-footer">
              <button class="btn-register">Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
    </div>
    <!--  -->
    <div class="footer-2" :class="{ footer_2_mobile: isMobile }">
      <p class="copy-right">Copyright © 2021. All rights reserved.</p>
      <div class="list_icon">
        <div class="item_icon">
          <i class="material-icons">facebook</i>
        </div>
        <div class="item_icon">
          <i class="material-icons">facebook</i>
        </div>
        <div class="item_icon">
          <i class="material-icons">facebook</i>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  flex-direction: column;
  background-color: var(--colorbg);
  padding: 0 50px;
  .footer_page {
    display: flex;
    flex-direction: row;
    flex: 1;
    padding-top: 50px;
    padding-bottom: 24px;
    &_mobile {
      flex-direction: column;
      gap: 12px;
    }
    .block-item-1 {
      display: flex;
      flex-direction: column;
      gap: 12px;
      flex: 0.5;
      .text-logo {
        color: var(--colorText);
        font-family: "fontPoppin";
        display: inline-block;
        position: relative;
        font-size: 20px;
        transition: all 0.3s;
        text-shadow: 5px -2px 3px #54d2c0;
        position: relative;
        &:hover {
          transition: all 0.2s;
          transform: scale(1.05);
          cursor: pointer;
        }
        .textE {
          font-size: 40px;
          color: var(--colorGlobal);
          font-weight: bold;
        }
        .e_learn {
          color: black;
          font-size: 30px;
          font-weight: bold;
        }
        .icon-calendar {
          position: absolute;
          top: 0;
          left: 100px;
        }
      }

      .block-1-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        transition: all 0.2s;
        &:hover {
          transform: translateY(-2px);
          color: #01877e;
          cursor: pointer;
        }
        .desc {
          font-weight: bold;
        }
        gap: 8px;
        .icon-lg {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: var(--colorGlobal);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
    .block-item-2 {
      flex: 3;
      display: flex;
      justify-content: space-evenly;
      &.block_2_mobile {
        // display: grid;
        // grid-template-columns: repeat(2, 1fr);
        flex-direction: column;
        gap: 12px;
      }
      .block-2 {
        display: flex;
        flex-direction: column;
        .title {
          font-size: 25px;
          font-weight: 700;
        }
        .block-2_list {
          .item-list {
            display: flex;
            align-items: center;
            gap: 8px;
            transition: all 0.2s;
            font-weight: 700;
            &:hover {
              transform: translateY(-2px);
              color: #01877e;
              cursor: pointer;
            }
            .material-icons {
              font-size: 12px;
              font-weight: bold;
            }
          }
          .input-footer {
            margin: 3px 0;
            outline: none;
            border: none;
            width: 300px;
            max-width: 100%;
            height: 40px;
            border: 2px solid var(--colorGlobal);
            border-radius: 8px;
            padding-left: 10px;
            background-color: #f5f5f5;
          }
          .btn-footer {
            margin-top: 10px;
            .btn-register {
              padding: 5px 10px;
              background-color: var(--colorSPrimary);
              border: none;
              transition: all 0.5s;
              text-transform: uppercase;
              font-size: 15px;
              color: var(--colorWhite);
              border-radius: 4px;
            }
          }
        }
      }
    }
  }
  .footer-2 {
    padding: 5px 0px;
    border-top: 1px solid #d0d0d0;
    display: flex;
    justify-content: space-between;
    &.footer_2_mobile {
      flex-direction: column;
      gap: 8px;
    }
    .list_icon {
      display: flex;
      gap: 8px;
      .item_icon {
        width: 40px;
        height: 40px;
        background-color: var(--colorGlobal);
        color: #fff;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>