import * as api from '../api/authorapi'
import * as actionType from '../constant/actionType';

export const getAll = () => async (dispatch) => {
    try {
      const {data} = await api.getAll()
      dispatch({ 
        type: actionType.FETCHALL, 
        payload: data });
    } catch (error) {
      console.log('error');
    }
  };
  export const registerAuthor = (formData) => async (dispatch) => {

    // api.getAll().fetchAll()
    //     .then(res => {
    //         console.log(res)
    //         dispatch({
    //             type: actionType.FETCHALL,
    //             payload: res.data.users
    //             })
    // })
    // .catch(err => console.log(err))
  try {
      const result = await api.registerauthor(formData)
      dispatch({ 
        type: actionType.POSTCOMMENT, 
        payload: result.data });
    } catch (error) {
      console.log('error');
    }
  };
//   export const updatecomment = (formData) => async (dispatch) => {
//     try {
//       const {data} = await api.update(formData)
//       console.log(data)
//       dispatch({ 
//         type: actionType.UPDATE, 
//         payload: data });
//     } catch (error) {
//       console.log(error);
//     }
//   };

  
// export const deletecomment = (id) => async (dispatch) => {
//   try {
//     await api.deletecomment(id)
//     dispatch({ 
//       type: actionType.DELETECOMMENT,
//       payload: id });
//   } catch (error) {
//     console.log(error);
//   }
// }