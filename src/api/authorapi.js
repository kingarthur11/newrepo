import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:8000/api'});

export const getAll = () => API.get('/getallauthor')
export const postauthor = (formData) => API.post('/postauthor', formData);
export const updateauthor = (formData) => API.post('/updateauthor', formData);
export const deleteuser = (name) => API.delete('/deleteauthor/:id', name);