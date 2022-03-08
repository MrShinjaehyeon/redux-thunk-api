import axios from "axios";

export const getMembers = () => axios.get(`http://localhost:3001/member`);

export const getMember = (id) =>
  axios.get(`http://localhost:3001/member/${id}`);

export const delMember = (id) =>
  axios.delete(`http://localhost:3001/member/${id}`);

export const postMember = (data) =>
  axios.post(`http://localhost:3001/member/`, data);

export const putMember = (datas) =>
  axios.put(`http://localhost:3001/member/${datas.id}`, datas);
