import React from 'react';
import {
  Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import Background from '../../../assets/1.jpg'
import {Link} from 'react-router-dom'

const Register  = () =>{

  return (

    <div resposive>

    <div style={styles.img} /> 
  
    <Col  style={styles.container} sm="12" md={{ size: 6, offset: 3 }}>
    <h1 style={{textAlign:"center"}}>Register</h1>
    <Form  style={{width:'100%'}}>
      <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
      </FormGroup>

      <Col sm={{ size: 10, offset: 4}}>
        <Button color="success"  style={{width:200}}><Link  style={{color:'white'}} to="/login">
        Submit
        </Link></Button>
      </Col>

  
    </Form>
    
    
    </Col>
    
  
  
  </div>
  );
}




const styles = {

  container:{
    
     
     border:"40px solid  rgba(76,140,64,0.6)",
    marginTop:"150px",
    backgroundColor:"#fff" ,
  

  
},

img:{
     backgroundImage: `url(${Background})`,
     backgroundRepeat:"no-repeat",
     backgroundSize:"cover",
     minHeight: "100%",
     minWidth: "1024px",
     width: "100%",
     height: "auto",
     position: "fixed",
     top: 0,
     left: 0

}




}

export default Register;