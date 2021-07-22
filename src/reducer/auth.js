import * as actionType from '../constant/actionType';

const initialState = {
  list: []
}
const commentReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) {
    case actionType.FETCHALL:
      return {
        list: {user: payload}
      };
    case actionType.POSTCOMMENT:
      return {
        ...state, 
        list: payload
      };
    case actionType.UPDATE:
    return {
      ...state, 
      list: payload
    };
    case actionType.DELETECOMMENT:
      return state.list.filter(({ id }) => id !== payload.id);
    default:
      return state;
  }
};

export default commentReducer;