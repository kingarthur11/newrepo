import axios from 'axios'

const API = axios.create({baseURL: `http://localhost:8000/api/v1`});

export const getallusers = () => API.get('/users')
export const getoneuser = (id) => API.get(`/user/${id}`)
export const createuser = (formData) => API.post('/user', formData);
export const updateuser = (formData, id) => API.put(`/user/${id}`, formData);
export const deleteuser = (id) => API.delete(`/user/${id}`);