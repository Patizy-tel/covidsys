import {  UPDATE_KIT, ADD_KIT, ALL_KITS, ONE_KIT  } from "../types";

const initialState = {
  updatekit:{},
  onekit:{},
  newkit:{},
  allkits:[]

};

export default function(state = initialState, action) {
  switch (action.type) {
 
      case ADD_KIT:
        return {
          ...state, 
        newkit: action.payload
        };

        case ALL_KITS:
        return {
          ...state, 
        allkits: action.payload
        };

        
        case ONE_KIT:
        return {
          ...state, 
        onekit: action.payload
        };

        case UPDATE_KIT:
            return {
              ...state, 
            updatekit: action.payload
            };
    

    default:
      return state;
  }
}
