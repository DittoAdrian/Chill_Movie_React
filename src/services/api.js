const API_URL = import.meta.env.VITE_API_URL;
import axios from "axios";

// Fetch to All Users
export const fetchUsers = async () => {
  try {
    const res = await fetch(`${API_URL}/users`);
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Fetch Error : ", err);
    throw err;
  }
};

// Fetch User ById
export const fetchUserById = async (userLogin) => {
  try {
    const res = await axios.get(`${API_URL}/users/${userLogin}`);
    const data = await res.data;
    return data;
  } catch (err) {
    console.log("Fetch Error : ", err);
    throw err;
  }
};

// Fetch Post data objek to MockApi
export const fetchPostUser = async (dataUser) => {
  try {
    const response = await axios.post(`${API_URL}/users`, dataUser);
    console.log("Data berhasil dikirim:", response.data);
  } catch (err) {
    console.error("Ada kesalahan saat mengirim data:", err);
    throw err;
  }
};

// Fetch Put untuk Update User
export const fetchPutUser = async (userLogin, userData) => {
  try {
    const res = await axios.put(`${API_URL}/users/${userLogin}`, userData);
    console.log("Data berhasil diupdate : ", res.data);
    return res.data;
  } catch (err) {
    console.error("Ada kesalahan saat mengirim data:", err);
    throw err;
  }
};

// Fetch Delete untuk delete data akun
export const fetchDeleteUser = async (userLogin) => {
  try {
    const res = await axios.delete(`${API_URL}/users/${userLogin}`);
    console.log("Data Akun berhasil dihapus", res.data);
    return res.data;
  } catch (err) {
    console.log("Gagal menghapus Akun", err);
    throw err;
  }
};
