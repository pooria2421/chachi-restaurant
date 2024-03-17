import { OPEN_MENU } from "../actions";


const initialState = {
   isOpen : false
};

export const MenuRreducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MENU:
      return {
        ...state,
        isOpen: action.payload.isOpen,
      };

      return {
        ...state,
        booksBuy: [],
      };
    default:
      return state;
  }
};
