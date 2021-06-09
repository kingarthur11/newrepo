import * as actionType from '../constant/actionType';

const initialState = {
  list: []
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.POSTAUTHOR:
      return {
        ...state, 
        list: [...state.list, {...action.payload}]
      };
    case actionType.UPDATEAUTHOR:
    return {
      ...state, 
      list: action.payload
    };
    case actionType.DELETEAUTHOR:
      return state.list[0].filter(({ name }) => name !== action.payload.name);
    default:
      return state;
  }
};

export default userReducer;