import React ,{useState} from 'react';
import {
  Form,
  FormGroup, Input,
  Button,Col
} from 'reactstrap';
import { useDispatch,} from 'react-redux';
import {addUser} from '../../../redux/actions/authActions'
import { useHistory } from "react-router";
import { TextField } from '@material-ui/core';

const AddUser  = () =>{


  let history = useHistory()
  
  
  console.log(history)

  const [newUser ,setUser] = useState({

    "city": "",
    "province":"",
    streetAddress:'',
    "addressOfPractice": "",
    "email": "",
    "firstName": "",
    "gender": "",
    "lastName": "",
    "nationalIdNumber": "",
    "practicingNumber": "",
    "qualification": "",
    "phoneNumber":"",
    "username": ""
  
  })

  var userData = {
    
      "addressOfPractice": newUser.addressOfPractice,
      "practicingNumber": newUser.practicingNumber,
      "qualification": newUser.qualification,
      "userCommand": {
        "address": {
          "city": newUser.city,
          "province": newUser.province,
          "streetAddress": newUser.streetAddress
        },
        "dateOfBirth": newUser.dateOfBirth,
        "email": newUser.email,
        "fullName": newUser.firstName,
        "gender":newUser.gender,
        "group": 'AGENT',
        "nationalIdNumber":newUser.nationalIdNumber,
        "phoneNumber": newUser.phoneNumber,
        
      }
    
  }




  const dispatch = useDispatch();


  console.log(newUser)



    
  function handleSubmit(e) {
    e.preventDefault();
    if (newUser) {
      dispatch(addUser(userData))


    }
}

 


  return (

    <div>
   <h5 className="h" style={styles.h}>New User</h5>
   <Col sm="12" md={{ size: 6, offset: 3 }}>
<Form className="col-sm-12" onSubmit={handleSubmit}>
      <div className="row">
      <FormGroup className="col-sm-6">
        <TextField label="First Name" 
               value={newUser.firstName}  
               
             onChange={e=>setUser({ ...newUser ,firstName:e.target.value})}
               placeholder="First Name" className="formControl" />
      </FormGroup>

      <FormGroup className="col-sm-6">
    
      <TextField label="Last Name"
            value={newUser.lastName} 
            
            onChange={e=>setUser({ ...newUser ,lastName:e.target.value})}
              placeholder="last Name" />
    </FormGroup>
      </div>

    <div className="row">
    <FormGroup className="col-sm-6">
    
    <TextField label="User Name" 
          value={newUser.username} 
          
          onChange={e=>setUser({ ...newUser ,username:e.target.value})}
           placeholder="username" />
  </FormGroup>

      <FormGroup className="col-sm-6">
        
        <TextField label="Qualification" 
               value={newUser.qualification}
               
             onChange={e=>setUser({ ...newUser ,qualification:e.target.value})} 
               placeholder="Qualification" />
      </FormGroup>
    </div>

      <div className="row">
      <FormGroup className="col-sm-6">
      
      <Input type="select" name="group"  value={newUser.gender} 
      onChange={e=>setUser({ ...newUser ,gender:e.target.value})}> 
               <option>Gender</option>
              <option value="MALE">MALE</option>
              <option value="FEMALE">FEMALE</option>
              </Input>
    </FormGroup>



      <FormGroup className="col-sm-6">
      
      <TextField label="Practicing Number" 
             value={newUser.practicingNumber}
             onChange={e=>setUser({ ...newUser ,practicingNumber:e.target.value})}
             placeholder="practicing number" />
    </FormGroup>

      </div>

    <div className="row">
    <FormGroup className="col-sm-6">
    
    <TextField label="Email" type="email" name="email" value={newUser.email} onChange={e=>setUser({ ...newUser ,email:e.target.value})} id="exampleEmail" placeholder="Email" />
  </FormGroup>


  <FormGroup className="col-sm-6">
  
  <TextField label="Phone Number" 
         value={newUser.phoneNumber} 
         onChange={e=>setUser({ ...newUser ,phoneNumber:e.target.value})}
         placeholder="phone number" />
</FormGroup>
    </div>


<div className="row">
<FormGroup className="col-sm-6">
<TextField label="Address of Practise"
      value={newUser.addressOfPractice} 
      onChange={e=>setUser({ ...newUser ,addressOfPractice:e.target.value})}
placeholder="Enter Practising Address" />

</FormGroup>



<FormGroup className="col-sm-6">
<Input type="select" name="group"  value={newUser.province} 
      onChange={e=>setUser({ ...newUser ,province:e.target.value})}> 
              <option>Province</option>
              <option value="BULAWAYO">BULAWAYO</option>
              <option value="HARARE">HARARE</option>
              <option value="MANICALAND">MANICALAND</option>
              <option value="MASHONALAND_CENTRAL">MASHONALAND_CENTRAL</option>
              <option value="MASHONALAND_EAST">MASHONALAND_EAST</option>
              <option value="MASHONALAND_WEST">MASHONALAND_WEST</option>
              <option value="MASVINGO">MASVINGO</option>
              <option value="MATABELELAND_NORTH">MATABELELAND_NORTH</option>
              <option value="MATABELELAND_SOUTH">MATABEKELAND_SOUTH</option>
              <option value="MIDLANDS">MIDLANDS</option>
              
              </Input>
</FormGroup>
</div>


<div className="row">
<FormGroup className="col-sm-6">
<TextField label="CITY" 
      value={newUser.city} 
      onChange={e=>setUser({ ...newUser ,city:e.target.value})}
placeholder="city" />

</FormGroup>


<FormGroup className="col-sm-6">
<TextField label="Street Address" 
      value={newUser.streetAddress} 
      onChange={e=>setUser({ ...newUser , streetAddress:e.target.value})}
placeholder="city" />

</FormGroup>

</div>
<Button color="success" type="submit">Add user</Button>





  
    </Form>
    
    
  </Col>
  
  </div>
  );
}

const styles = {

h:{
  borderLeft:"10px solid #4c8c40",
  
}
}
export default AddUser;