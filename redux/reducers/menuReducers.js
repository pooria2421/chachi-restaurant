import { IS_LOADER, OPEN_MENU } from "../actions";


const initialState = {
   isOpen : false,
   isLoader : false 
};

export const MenuRreducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };
      case IS_LOADER:
        return {
          ...state,
          isLoader: action.payload
        };

    default:
      return state;
  }
};
