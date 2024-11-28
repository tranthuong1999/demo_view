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
  <div class="course_reference_page">
    <h4 class="title">Khóa học tham khảo</h4>
    <CourseReferenceComponent :data="data" />
  </div>
</template>

<style scoped lang="scss">
.course_reference_page {
  padding: 0 50px;
  padding-bottom: 50px;
  .title {
    color: #000;
    text-decoration: none;
    padding-bottom: 50px;
  }
}
</style>