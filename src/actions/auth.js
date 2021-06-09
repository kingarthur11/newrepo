import * as api from '../api/commentapi'
import * as actionType from '../constant/actionType';

export const getAll = () => async (dispatch) => {
    try {
      const {data} = await api.getAll()
      dispatch({ 
        type: actionType.FETCHALL, 
        payload: data });
    } catch (error) {
      console.log(error.response);
    }
  };
  export const postcomment = (formData, history) => async (dispatch) => {
    try {
      const {data} = await api.postcomment(formData)
      dispatch({ 
        type: actionType.POSTCOMMENT, 
        payload: data });
        history.push('/')
    } catch (error) {
      console.log(error.response);
    }
  };
  export const updatecomment = (formData) => async (dispatch) => {
    try {
      const {data} = await api.update(formData)
      console.log(data)
      dispatch({ 
        type: actionType.UPDATE, 
        payload: data });
    } catch (error) {
      console.log(error);
    }
  };

  
export const deletecomment = (id) => async (dispatch) => {
  try {
    await api.deletecomment(id)
    dispatch({ 
      type: actionType.DELETECOMMENT,
      payload: id });
  } catch (error) {
    console.log(error);
  }
}