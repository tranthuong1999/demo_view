<script setup>
import { ref } from "vue";
import { useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    account: yup.string().required("Tài khoản không được để trống"),
    password: yup.string().required("Mật khẩu không được để trống"),
  }),
});

const {
  errors: errorRegister,
  handleSubmit: handleRegisterSubmit,
  defineField: defineRegisterField,
  resetForm,
} = useForm({
  validationSchema: yup.object({
    accRegister: yup.string().required("Tài khoản không được để trống"),
    name: yup.string().required("Tên không được để trống"),
    passReg: yup
      .string()
      .required("Mật khẩu không được để trống")
      .min(8)
      .matches(/[a-z]/, "Mật khẩu phải có ít nhất một chữ cái thường")
      .matches(/[A-Z]/, "Mật khẩu phải có ít nhất một chữ cái hoa"),
    email: yup.string().email().required("Email không được để trống"),
    phone: yup
      .string()
      .required("Số điện thoại không được để trống")
      .matches(/^(0|\+84)(3|5|7|8|9)[0-9]{8}$/, "Số điện thoại không hợp lệ"),
  }),
});

const [account, accountAttrs] = defineField("account");
const [password, passwordAttrs] = defineField("password");
// form register

const [accRegister, accRegisterAttrs] = defineRegisterField("accRegister");
const [name, nameAttrs] = defineRegisterField("name");
const [passReg, passRegAttrs] = defineRegisterField("passReg");
const [email, emailAttrs] = defineRegisterField("email");
const [phone, phoneAttrs] = defineRegisterField("phone");
const modalLogin = ref(false);
const modalRegister = ref(false);
const isScreenLogin = ref(true);
const selectedGroup = ref("GP01");
const router = useRouter();

const authStore = useAuthStore();

const onSubmit = handleSubmit(async (values) => {
  const dataLogin = {
    taiKhoan: values.account,
    matKhau: values.password,
  };
  await authStore.fetchLogin(dataLogin);
  modalLogin.value = true;
  if (authStore.isLogin) {
    setTimeout(() => {
      router.push({ path: "/" });
    }, 2000);
  } else {
    setTimeout(() => {
      modalLogin.value = false;
    }, 1000);
  }
});
const onRegisterSubmit = handleRegisterSubmit(async (values) => {
  const { phone, email, accRegister, passReg, name } = values;
  const dataRegister = {
    email,
    phone,
    matKhau: passReg,
    hoTen: accRegister,
    maNhom: selectedGroup.value,
    taiKhoan: name,
  };
  await authStore.fetchRegister(dataRegister);
  modalRegister.value = true;
  if (authStore.isRegister) {
    setTimeout(() => {
      modalRegister.value = false;
      resetForm();
    }, 1000);
  } else {
    setTimeout(() => {
      modalRegister.value = false;
    }, 1000);
  }
});
</script>

<template>
  <div class="page_login">
    <div v-if="modalLogin && authStore.isLogin" class="loader">
      <v-progress-circular
        :size="50"
        color="primary"
        indeterminate
      ></v-progress-circular>
    </div>
    <!-- block -1 -->
    <div class="contain_log_in">
      <div class="item_left" v-if="isScreenLogin">
        <h1 class="title_log_in">Đăng nhập</h1>
        <p class="desc">hoặc sử dụng tài khoản đã đăng ký của bạn</p>
        <form @submit="onSubmit" class="form_login">
          <div>
            <input
              v-model="account"
              v-bind="accountAttrs"
              class="input account_login"
              placeholder="Tài khoản"
            />
          </div>
          <div class="error">{{ errors.account }}</div>
          <div>
            <input
              type="password"
              v-model="password"
              v-bind="passwordAttrs"
              class="input passwod_login"
              placeholder="Mật khẩu"
            />
          </div>
          <div class="error">{{ errors.password }}</div>
          <div class="btn_forget_pass">
            <button>Quên mật khẩu?</button>
          </div>
          <div class="btn_log_in">
            <button>Đăng nhập</button>
          </div>
        </form>
      </div>
      <div class="item_left" v-else>
        <h1 class="title_log_in">Chào mừng bạn đã trở lại!</h1>
        <p class="desc">Vui lòng đăng nhập để kết nối với tài khoản của bạn</p>
        <div class="btn_log_in">
          <button @click="isScreenLogin = true">Đăng nhập</button>
        </div>
      </div>

      <div class="item_right" v-if="isScreenLogin">
        <h1>Xin chào!</h1>
        <p>Vui lòng nhấn đăng ký để thiết lập thông tin tài khoản của bạn!</p>
        <div class="btn_register">
          <button @click="isScreenLogin = false">Đăng ký</button>
        </div>
      </div>

      <div class="item_right item_right_form_register" v-else>
        <h1 class="tile_register">ĐĂNG KÝ!</h1>
        <form @submit="onRegisterSubmit" class="form_register">
          <div>
            <input
              v-model="accRegister"
              v-bind="accRegisterAttrs"
              class="input account_login"
              placeholder="Tài khoản"
            />
          </div>
          <div class="error">{{ errorRegister.accRegister }}</div>

          <div>
            <input
              v-model="name"
              v-bind="nameAttrs"
              class="input account_login"
              placeholder="Họ tên"
            />
          </div>
          <div class="error">{{ errorRegister.name }}</div>
          <div>
            <input
              type="password"
              v-model="passReg"
              v-bind="passRegAttrs"
              class="input account_login"
              placeholder="Mật khẩu"
            />
          </div>
          <div class="error">{{ errorRegister.passReg }}</div>
          <div>
            <input
              v-model="email"
              v-bind="emailAttrs"
              class="input account_login"
              placeholder="Email"
            />
          </div>
          <div class="error">{{ errorRegister.email }}</div>

          <div>
            <input
              v-model="phone"
              v-bind="phoneAttrs"
              class="input account_login"
              placeholder="Số điện thoại"
            />
          </div>
          <div class="error">{{ errorRegister.phone }}</div>
          <div>
            <v-select
              class="select_group"
              v-model="selectedGroup"
              :items="[
                'GP01',
                'GP02',
                'GP03',
                'GP04',
                'GP05',
                'GP06',
                'GP07',
                'GP08',
                'GP09',
                'GP10',
              ]"
            ></v-select>
          </div>

          <div class="btn_register_form">
            <button>Đăng ký</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <DialogComponent
    v-if="modalLogin && !authStore.isLogin"
    :isActive="modalLogin"
  >
    <template #header>
      <i class="material-icons" :class="'icon_login'">error</i>
    </template>
    <template #body>
      <h2>Tài khoản hoặc mật khẩu không đúng</h2>
    </template>
    <template #footer>
      <div>Đã xảy ra lỗi vui lòng quay lại trang chủ hoặc thử lại</div>
    </template>
  </DialogComponent>
  <OverPlayComponent v-if="modalLogin && authStore.isLogin" />
  <DialogComponent
    v-if="modalRegister && authStore.isRegister"
    :isActive="modalRegister"
  >
    <template #header>
      <i class="material-icons" :class="'icon_register_succ'">check</i>
    </template>
    <template #body>
      <h2>Đăng ký thành công</h2>
    </template>
  </DialogComponent>

  <DialogComponent
    v-if="modalRegister && !authStore.isRegister"
    :isActive="modalRegister"
  >
    <template #header>
      <i class="material-icons" :class="'icon_register_faile'">error</i>
    </template>
    <template #body>
      <h2>Tài khoản hoặc mật khẩu đã tồn tại</h2>
    </template>
    <template #footer>
      <div>Vui lòng thử đăng ký lại</div>
    </template>
  </DialogComponent>
</template>

<style scoped lang="scss">
.page_login {
  background: url("../assets/bgr_login.png");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  // overflow: hidden;
  overflow-y: hidden;
  .loader {
    position: absolute;
  }
  .contain_log_in {
    width: 90vw;
    height: 80vh;
    max-width: 100%;
    max-height: 100%;
    background: var(--colorWhite);
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.2), 0 10px 10px rgba(0, 0, 0, 0.2);
    display: flex;
    flex: 1;
    margin-top: 100px;
    margin-bottom: 100px;
    .item_left {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .title_log_in {
        font-weight: 700;
      }
      .desc {
        padding-bottom: 6px;
      }
      .form_login {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 8px;
        padding: 0 30px;
        .input {
          background: #eee;
          border: none;
          padding: 10px 15px;
          width: 100%;
          &:focus {
            transform: translateX(-2px);
            border-radius: 5px;
            outline: 1px solid var(--colorGlobal);
          }
        }
        .error {
          color: red;
        }
      }
      .btn_forget_pass {
        display: flex;
        justify-content: center;
        button {
          color: #36867b;
          font-size: 14px;
          text-decoration: none;
          margin: 15px 0;
        }
      }
      .btn_log_in {
        display: flex;
        justify-content: center;
        button {
          border-radius: 20px;
          border: 1px solid #36867b;
          background: #36867b;
          color: var(--colorWhite);
          font-size: 12px;
          font-weight: 700;
          padding: 12px 45px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: -webkit-transform 80ms ease-in;
          transition: transform 80ms ease-in;
          transition: transform 80ms ease-in, -webkit-transform 80ms ease-in;
        }
      }
    }
    .item_right {
      flex: 1;
      background: url("https://demo2.cybersoft.edu.vn/static/media/bg-all.2b72c7ac.png");
      background-size: cover;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: #fff;
      gap: 12px;
      &_form_register {
        display: flex;
        flex-direction: column;
        justify-content: start;
        padding: 0 30px;
        .tile_register {
          padding-top: 12px;
        }
        .form_register {
          display: flex;
          width: 100%;
          height: 60%;
          justify-content: space-between;
          flex-direction: column;
          .input {
            background: #eee;
            border: none;
            padding: 10px 15px;
            width: 100%;
            &:focus {
              transform: translateX(-2px);
              border-radius: 5px;
              outline: 1px solid var(--colorGlobal);
            }
          }
          .error {
            color: red;
          }
          .select_group {
            // background: #fff;
          }
          .btn_register_form {
            display: flex;
            justify-content: center;
            button {
              border-radius: 20px;
              border: 1px solid #36867b;
              background: #36867b;
              color: var(--colorWhite);
              font-size: 12px;
              font-weight: 700;
              padding: 12px 45px;
              letter-spacing: 1px;
              text-transform: uppercase;
              transition: -webkit-transform 80ms ease-in;
              transition: transform 80ms ease-in;
              transition: transform 80ms ease-in, -webkit-transform 80ms ease-in;
            }
          }
        }
      }

      .btn_register {
        button {
          background: #36867b;
          border-color: var(--colorWhite);
          border-radius: 20px;
          border: 1px solid #36867b;
          background: #36867b;
          color: var(--colorWhite);
          font-size: 12px;
          font-weight: 700;
          padding: 12px 45px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: -webkit-transform 80ms ease-in;
          transition: transform 80ms ease-in;
          transition: transform 80ms ease-in, -webkit-transform 80ms ease-in;
        }
      }
    }
  }
}
.icon_login,
.icon_register_faile {
  font-size: 70px !important;
  color: #f0ad4e !important;
}
.icon_register_succ {
  font-size: 70px !important;
  color: green !important;
}
</style>
