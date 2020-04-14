import React  ,{useState} from 'react';
 
import {
   Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

import { useDispatch,} from 'react-redux';
import {addKit} from '../../../redux/actions/KitsActions'


 function NewKit() {



  const [state, setstate] = useState({"batchNumber": "",
                                      "brandName": "" ,
                                      'serialNumber':''
                                    })



      console.log(state)

      const dispatch = useDispatch();
      
 
    
    
      function handleSubmit(e) {
        e.preventDefault();
        if (state) {
            dispatch(addKit(state))
        }
    }

   
    
    
    
    
    return (

<div>          
<div className="h" style={styles.h}><h5>New Kit</h5></div>
<br></br>
<Form className="col-sm-12" style={styles.container} onSubmit={handleSubmit}>

  <FormGroup  >
    <Label for="exampleEmail">Brand Name</Label>
    <Input type="text" value={state.brandName}  onChange={e=> setstate({ ...state, brandName:e.target.value})} id="exampleEmail" placeholder="Brand Name" />
  </FormGroup>

  <FormGroup>
  <Label for="exampleEmail">Batch Number</Label>
  <Input type="number" value={state.batchNumber}  onChange={e=> setstate({ ...state, batchNumber:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
</FormGroup>

<FormGroup>
  <Label for="exampleEmail">Serial Number</Label>
  <Input type="number" value={state.serialNumber}  onChange={e=> setstate({ ...state, serialNumber:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
</FormGroup>



<Button color="success" type="submit" className="btn btn-block" style={{marginTop:30}} >Add Kit</Button>


</Form>
        </div>
        
        
       
    )
}


const styles = {

    container:{
      
       
      border:"4px solid green",
      boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
     
      
    
  },
  h:{
    borderLeft:"10px solid #4c8c40"
  }
  
  
  
  
  
  
  }
export default NewKit