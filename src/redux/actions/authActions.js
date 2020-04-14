import axios from "axios";
import jwt_decode from "jwt-decode";


import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING, ADD_USER, ALL_USERS } from "../types";

// Register User
export const addUser = (userData) => dispatch => {
  axios
    .post("http://45.76.141.84:8080/v1/testing-agents", userData)
    .then(resp=>{
        dispatch({
            type:ADD_USER,
            payload:resp.data,
            msg:alert("succcess")

        })
    })
    .catch(err =>{ 

      console.log(err)
      dispatch({
        type: GET_ERRORS,
        payload: err,
        msg:alert(err.message)
      })
  }
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {

  axios
    .post("http://45.76.141.84:8080/authenticate",userData)
    .then(res => {

      console.log(res.data)

      localStorage.setItem('access_token' ,res.data.jwtToken)
      // Save to localStorage
      // Set token to localStorage
     
const decoded = jwt_decode(res.data.jwtToken);
      console.log(decoded)

      var {Role ,username} =  decoded

      

      // Set current user
      dispatch(setCurrentUser(decoded));

    
  localStorage.setItem('username',username)

     localStorage.setItem('Role' ,Role)
        alert('success')
      switch (Role) {
        case 'ADMIN':
          return window.location.href = '/dashboard'
          case 'AGENT':
            return window.location.href = '/agent'
            case 'PATIENT':
              return window.location.href = '/patient'
          
    
      
        default:
          break;
      }
        
        

 
    })
    .catch(err =>{
      console.log(err)
      dispatch({
        type: GET_ERRORS,
        payload: err.message,
         msg:alert(err)
      })}
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = (history) => dispatch => {
  localStorage.removeItem('access_token')
  localStorage.removeItem('refresh_token')
  localStorage.removeItem('authorities' )
  localStorage.removeItem('username')
  window.location.href  = '/'
  // Set current user to empty object {} which will set isAuthenticated to false
  
};



export const allUsers = () => dispatch=>{

  axios.get("http://45.76.141.84:8080/v1/testing-agents/all")
       .then(resp=>{
         console.log(resp)
         dispatch({
         type:ALL_USERS,
         payload:resp.data
       })}).catch(err=>{
        dispatch({
          type:GET_ERRORS,
          payload:err,
          msg:alert('trouble getting data ,please refresh')
        })

      })

}

