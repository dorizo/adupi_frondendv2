import qs from 'qs';
import axios, { catchCallBack } from '../index';

const GET_ALL_ANGGOTA = async () => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };
  try {
    const response = await axios.get('anggota/all', { headers });
    return response;
  } catch (error) {
    return catchCallBack(error);
  }
};
const GET_ONE_ANGGOTA = async (id) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };
  try {
    const response = await axios.get(`anggota/one/${id}`, { headers });
    return response;
  } catch (error) {
    return catchCallBack(error);
  }
};

const ADD_ANGGOTA = async ({ nama, nik, noHp, jenisKelamin, wilayahCode, ktp, alamat }) => {
  const data = qs.stringify({
    nama,
    nik,
    noHp,
    jenisKelamin,
    wilayahCode,
    ktp,
    alamat,
  });
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };
  try {
    const response = await axios.post(`anggota/add`, data, { headers });
    return response;
  } catch (error) {
    return catchCallBack(error);
  }
};

const UPDATE_ANGGOTA = async ({ nama, nik, noHp, jenisKelamin, wilayahCode, ktp, alamat }, id) => {
  const data = qs.stringify({
    nama,
    nik,
    noHp,
    jenisKelamin,
    wilayahCode,
    ktp,
    alamat,
  });
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };
  try {
    const response = await axios.put(`anggota/edit/${id}`, data, { headers });
    return response;
  } catch (error) {
    return catchCallBack(error);
  }
};
const DELETE_ANGGOTA = async (id) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
  };
  try {
    const response = await axios.delete(`anggota/delete/${id}`, { headers });
    return response;
  } catch (error) {
    return catchCallBack(error);
  }
};
export { ADD_ANGGOTA, GET_ALL_ANGGOTA, DELETE_ANGGOTA, UPDATE_ANGGOTA, GET_ONE_ANGGOTA };
