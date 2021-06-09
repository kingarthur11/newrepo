import axios from 'axios'

const API = axios.create({baseURL: 'http://localhost:8000/api'});

export const getAll = () => API.get('/getallauthorcomments')
export const postcomment = (formData) => API.post('/postauthorcomment', formData);
export const update = (formData) => API.post('/updateauthorcomment', formData);
export const deletecomment = (id) => API.delete('/deleteauthorcomment/:id', id);