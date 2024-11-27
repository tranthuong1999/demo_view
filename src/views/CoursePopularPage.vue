<script setup>
import { ref } from "vue";

const data = ref([
  {
    maKhoaHoc: "",
    biDanh: "javascriptt",
    tenKhoaHoc: "Javascriptt",
    moTa: "rất hay",
    luotXem: 100,
    hinhAnh:
      "https://elearningnew.cybersoft.edu.vn/hinhanh/javascriptt_gp01.png",
    maNhom: "gp01",
    ngayTao: "08/10/2024",
    soLuongHocVien: 0,
    nguoiTao: {
      taiKhoan: "guldiusgvils",
      hoTen: "guldiusgvils",
      maLoaiNguoiDung: "GV",
      tenLoaiNguoiDung: "Giáo vụ",
    },
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: "FrontEnd",
      tenDanhMucKhoaHoc: "Lập trình Front end",
    },
  },
  {
    maKhoaHoc: "",
    biDanh: "javascriptt",
    tenKhoaHoc: "Javascriptt",
    moTa: "rất hay",
    luotXem: 100,
    hinhAnh:
      "https://elearningnew.cybersoft.edu.vn/hinhanh/javascriptt_gp01.png",
    maNhom: "gp01",
    ngayTao: "08/10/2024",
    soLuongHocVien: 0,
    nguoiTao: {
      taiKhoan: "guldiusgvils",
      hoTen: "guldiusgvils",
      maLoaiNguoiDung: "GV",
      tenLoaiNguoiDung: "Giáo vụ",
    },
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: "FrontEnd",
      tenDanhMucKhoaHoc: "Lập trình Front end",
    },
  },
  {
    maKhoaHoc: "",
    biDanh: "javascriptt",
    tenKhoaHoc: "Javascriptt",
    moTa: "rất hay",
    luotXem: 100,
    hinhAnh:
      "https://elearningnew.cybersoft.edu.vn/hinhanh/javascriptt_gp01.png",
    maNhom: "gp01",
    ngayTao: "08/10/2024",
    soLuongHocVien: 0,
    nguoiTao: {
      taiKhoan: "guldiusgvils",
      hoTen: "guldiusgvils",
      maLoaiNguoiDung: "GV",
      tenLoaiNguoiDung: "Giáo vụ",
    },
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: "FrontEnd",
      tenDanhMucKhoaHoc: "Lập trình Front end",
    },
  },
  {
    maKhoaHoc: "",
    biDanh: "javascriptt",
    tenKhoaHoc: "Javascriptt",
    moTa: "rất hay",
    luotXem: 100,
    hinhAnh:
      "https://elearningnew.cybersoft.edu.vn/hinhanh/javascriptt_gp01.png",
    maNhom: "gp01",
    ngayTao: "08/10/2024",
    soLuongHocVien: 0,
    nguoiTao: {
      taiKhoan: "guldiusgvils",
      hoTen: "guldiusgvils",
      maLoaiNguoiDung: "GV",
      tenLoaiNguoiDung: "Giáo vụ",
    },
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: "FrontEnd",
      tenDanhMucKhoaHoc: "Lập trình Front end",
    },
  },
]);
</script>

<template>
  <div class="course_popular_page">
    <h1 class="title_course">Khóa học phổ biến</h1>
    <div class="list_course">
      <CoursePopularComponent :data="data" />
    </div>
  </div>
</template>

<style lang="scss">
.course_popular_page {
  .title_course {
    font-weight: 600;
    color: var(--colorSPrimary);
    font-size: 20px;
    padding: 50px ;
  }
  .list_course {
    padding-bottom: 50px;
  }
}
</style>
