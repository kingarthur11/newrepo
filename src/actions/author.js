import * as api from '../api/authorapi'
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
  export const postauthor = (formData, history) => async (dispatch) => {
    try {
      const {data} = await api.postauthor(formData)
      dispatch({ 
        type: actionType.POSTAUTHOR, 
        payload: data });
        history.push('/author')
    } catch (error) {
      console.log(error.response);
    }
  };
  export const updateauthor = (formData) => async (dispatch) => {
    try {
      const {data} = await api.updateauthor(formData)
      console.log(data)
      dispatch({ 
        type: actionType.UPDATEAUTHOR, 
        payload: data });
    } catch (error) {
      console.log(error);
    }
  };
  
export const deleteuser = (name) => async (dispatch) => {
    try {
      await api.deleteuser(name)

      dispatch({ 
        type: actionType.DELETEAUTHOR,
        payload: name });
    } catch (error) {
      console.log(error);
    }
  }