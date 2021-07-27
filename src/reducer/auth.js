import * as actionType from '../constant/actionType';

const initialState = {
  list: []
}
const userReducer = (state = initialState, action) => {
  const {type, payload} = action

  switch (type) { 

    case actionType.FETCHALL:
      return {
        ...state,
        list: payload
    };

    case actionType.CREATEUSER:
      return {
        ...state,
        list: [...payload]
    }; 

    case actionType.UPDATEUSER:
      return {
        ...state,
        list: state.list.map(x => x.id === payload.id ? action.payload : x)
    }
    
    // case actionType.DELETEUSER:
    //   return {
    //     ...state,
    //     list: state.list.data.filter((item) => item.id !== payload)
    // }

    default:
      return state;
  }
};

export default userReducer;