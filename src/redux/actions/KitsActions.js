import axios from "axios";
import { ADD_KIT  ,ALL_KITS ,GET_ERRORS, ONE_KIT, UPDATE_KIT} from "../types";

  // add a new desktop
  export const addKit = (kitData) => dispatch => {
    axios
      .post("http://45.76.141.84:8080/v1/test-kits", kitData)
      .then(resp=>{
          dispatch({
              type:ADD_KIT,
              payload:resp,
              msg:alert("succcess")

          })
      })
      .catch(err =>{ 

        console.log(err)
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
    }
      );
  };




    // add a new desktop
    export const updateKit = (kitData) => dispatch => {
        axios
          .post("/desktops", kitData)
          .then(resp=>{
              dispatch({
                  type:UPDATE_KIT,
                  payload:resp.data,
                  msg:alert("succcess")
    
              })
          })
          .catch(err =>{ 
    
            console.log(err)
            dispatch({
              type: GET_ERRORS,
              payload: err
            })
        }
          );
      };
    
    

  
  export const allKits = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/test-kits/all")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:ALL_KITS,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }

  export const oneKit = (id) => dispatch=>{

    axios.get(`${id}`)
         .then(resp=>{
           console.log(resp.data)
           dispatch({
           type:ONE_KIT,
           payload:resp
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }


  