import { SET_CURRENT_USER, USER_LOADING, ADD_USER, ALL_USERS  } from "../types";

const isEmpty = require("is-empty");

const initialState = {
  isAuthenticated: false,
  user: {},
  newuser:{},
  allusers:[{
    name:'tello',
    surname:"tizy",
    "dob":"tom"
  }]

};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true, 
        user: action.payload
      };
      case ADD_USER:
        return {
          ...state, 
        newuser: action.payload
        };

        case ALL_USERS:
        return {
          ...state, 
        allusers: action.payload
        };
    case USER_LOADING:
      return {
        ...state,
        loading: true
      };
   
    default:
      return state;
  }
}
