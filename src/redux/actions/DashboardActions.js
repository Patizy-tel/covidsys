import axios from "axios";


import { GET_ERRORS , GENDERMALE  ,GENDERFEMALE, MALENEGATIVE ,MALEPOSITIVE ,
          BULUAYO_NEGATIVE,BULUAYO_POSITIVE ,MIDLANDS_NEGATIVE,MIDLANDS_POSITIVE,
          HARARE_NEGATIVE,HARARE_POSITIVE ,MANICALAND_NEGATIVE,MANICALAND_POSITIVE ,
          MASHONALAND_CENTRAL_NEGATIVE,MASHONALAND_CENTRAL_POSITIVE ,MASHONALAND_EAST_NEGATIVE
          ,MASHONALAND_EAST_POSITIVE ,MASHONALAND_WEST_POSITIVE ,MASHONALAND_WEST_NEGATIVE ,
          MASVINGO_NEGATIVE,MASVINGO_POSITIVE ,MATABELELAND_NORTH_NEGATIVE ,MATABELELAND_NORTH_POSITIVE
          ,MATABELELAND_SOUTH_NEGATIVE, MATABELELAND_SOUTH_POSITIVE


} from "../types";




//// demo by gender
//demo by  gender result

//demo by province  gender result
//demo by provence 


  



  export const genderMale = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-gender?gender=MALE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:GENDERMALE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }



  
  export const genderFeMale = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-gender?gender=FEMALE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:GENDERFEMALE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }


  export const malePositive = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-gender/result?gender=MALE&result=POSITIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MALEPOSITIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }
  export const maleNegative = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-gender/result?gender=MALE&result=NEGATIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MALENEGATIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }
  export const bulawayoPositive = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=BULAWAYO&result=POSITIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:BULUAYO_POSITIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }


  export const bulawayoNegative = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=BULAWAYO&result=NEGATIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:BULUAYO_NEGATIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }



  export const midlandsPositive = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MIDLANDS&result=POSITIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MIDLANDS_POSITIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }
  export const midlandsNegative = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MIDLANDS&result=NEGATIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MIDLANDS_NEGATIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }



  export const  hararePositive = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=HARARE&result=POSITVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:HARARE_POSITIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }


  export const harareNegative = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=HARARE&result=NEGATIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:HARARE_NEGATIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }

  export const manicalandPositive = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MANICALAND&result=POSITIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MANICALAND_POSITIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }
  export const manicalandNegative = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MANICALAND&result=NEGATIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MANICALAND_NEGATIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }

  export const mashonalandCentralPositive = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MASHONALAND_CENTRAL&result=POSITIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MASHONALAND_CENTRAL_POSITIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }
  export const mashonalandCentralNegative = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MASHONALAND_CENTRAL&result=NEGATIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MASHONALAND_CENTRAL_NEGATIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }


  
  export const mashonalandEastPositive = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MASHONALAND_EAST&result=POSITIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MASHONALAND_EAST_POSITIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }
  export const mashonalandEastNegative = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MASHONALAND_EAST&result=NEGATIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MASHONALAND_EAST_NEGATIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }


  export const mashonalandWestPositive = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MASHONALAND_WEST&result=POSITIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MASHONALAND_WEST_POSITIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }
  export const mashonalandWestNegative = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MASHONALAND_WEST&result=NEGATIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MASHONALAND_WEST_NEGATIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })
  }


  export const masvingoPositive= () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MASVINGO&result=POSITIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MASVINGO_POSITIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }
  export const masvingoNegative = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MASHONALAND_EAST&result=NEGATIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MASVINGO_NEGATIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }



  export const matabelelandNorthPositive = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MATABELELAND_NORTH&result=POSITIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MATABELELAND_NORTH_POSITIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }
  export const matabelelandNorthNegative = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MATABELELAND_NORTH&result=NEGATIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MATABELELAND_NORTH_NEGATIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }

  export const matabelelandSouthPositive = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MATABELELAND_SOUTH&result=POSITIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MATABELELAND_SOUTH_POSITIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }
  export const matabelelandSouthNegative = () => dispatch=>{

    axios.get("http://45.76.141.84:8080/v1/patients/demographics/by-province/result?province=MATABELELAND_SOUTH&result=NEGATIVE")
         .then(resp=>{
           console.log(resp)
           dispatch({
           type:MATABELELAND_SOUTH_NEGATIVE,
           payload:resp.data
         })}).catch(err=>{
          dispatch({
            type:GET_ERRORS,
            payload:err,
            msg:alert('trouble getting data ,please refresh')
          })

        })

  }

  