const BASE_URL = "https://elearningnew.cybersoft.edu.vn/api"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJUcmFpbmluZyBnaeG6o25nIHZpw6puIGN5YmVyc29mdCAyMDIyIiwiSGV0SGFuU3RyaW5nIjoiMzAvMTEvMjAyOCIsIkhldEhhblRpbWUiOiIxODU5MTU1MjAwMDAwIiwibmJmIjoxNTg0MjkxNjAwLCJleHAiOjE4NTkzMDI4MDB9.9nOWAOoO7NtipuO-A-4_8kwzVp7j5HSdXjEegqTgcXI"
const headers = {
    'Content-Type': 'application/json',
    "Tokencybersoft": `${token}`,
}

export const apiLogin = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });
        const result = await response.json();
        localStorage.setItem('credential', JSON.stringify(result))
        return result;
    }
    catch (error) {
        return error;
    }
}

export const apiRegister = async (data) => {
    try {
        const response = await fetch(`${BASE_URL}/QuanLyNguoiDung/DangKy`, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(data),
        });
        const result = await response.json();
        return result;
    }
    catch (error) {
        return error;
    }
}

// export const apiFetchAccountInfor = async (taiKhoan: string) => {
export const apiFetchAccountInfor = async (taiKhoan) => {
    const _token = JSON.parse(localStorage.getItem("credential")).accessToken
    try {
        const response = await fetch(`${BASE_URL}/QuanLyNguoiDung/ThongTinTaiKhoan`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `Bearer ${_token}`,
                "Tokencybersoft": `${token}`,
            },
            body: JSON.stringify(taiKhoan),
        });
        const result = await response.json();
        return result;
    }
    catch (error) {
        return error;
    }
}

