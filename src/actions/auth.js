import * as api from '../api/authorapi'
import * as actionType from '../constant/actionType';

export const getAllUsers = () => async (dispatch) => {
    try {
      const {data} = await api.getallusers()
      // console.log(data)
      dispatch({ 
        type: actionType.FETCHALL, 
        payload: data 
      });
    } catch (error) {
      console.log('error');
    }
  };

  export const getOneUser = (id) => async (dispatch) => {
    try {
      const {data} = await api.getoneuser(id);
      dispatch({
        type: actionType.FETCHONE,
        payload: data,
      });
      
    } catch (err) {
      console.log(err);
    }
  };

  export const CreateUser = (formData) => async (dispatch) => {
    try {
        const {data} = await api.createuser(formData)
        dispatch({ 
          type: actionType.CREATEUSER, 
          payload: data 
        });
      } catch (error) {
        console.log('error');
      }
    };

  export const UpdateUser = (id, formData) => async (dispatch) => {
    try {
      const {data} = await api.updateuser(id, formData)
      dispatch({ 
        type: actionType.UPDATEUSER, 
        payload: data 
      });
    } catch (error) {
      console.log(error);
    }
  };

export const deleteUser = (id) => async (dispatch) => {
  try {
    await api.deleteuser(id)
    dispatch({  
      type: actionType.DELETEUSER,
      payload: id

    });
    dispatch(getAllUsers());
  } catch (error) {
    console.log(error);
  }
}