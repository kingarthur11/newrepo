import axios from 'axios'

const API = axios.create({baseURL: `http://localhost:8000/api/v1`});

export const getAll = () => API.get('/users')
export const registerauthor = (formData) => API.post('/users', formData);
// export const updateauthor = (formData) => API.post('/updateauthor', formData);
// export const deleteuser = (name) => API.delete('/deleteauthor/:id', name);