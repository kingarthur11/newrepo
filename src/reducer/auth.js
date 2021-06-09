import * as actionType from '../constant/actionType';

const initialState = {
  list: []
}
const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.POSTCOMMENT:
      return {
        ...state, 
        list: {comment:action.payload}
      };
    case actionType.UPDATE:
    return {
      ...state, 
      list: action.payload
    };
    case actionType.DELETECOMMENT:
      return state.list.filter(({ id }) => id !== action.payload.id);
    default:
      return state;
  }
};

export default commentReducer;