import React  ,{useState}from 'react';
import {Col, Form, FormGroup, Label, Input,Button} from 'reactstrap';
import Background from '../../../assets/1.jpg'
import { useDispatch,} from 'react-redux';
import {loginUser} from '../../../redux/actions/authActions'
//import Logo from '../../../assets/logo.png';

const Login  = () =>{


   const [userData ,setData] =  useState({ username:'' ,password:''})
   const dispatch = useDispatch();

   console.log(userData)



   
   function handleSubmit(e) {
    e.preventDefault();
    if (userData) {
        dispatch(loginUser(userData));
    }
}



  return (

    <div responsive="true">

    <div style={styles.img}/> 
  
    <Col  style={styles.container} sm="12" md={{ size: 6, offset: 3 }}>
    <div style={{textAlign:"center"}}>
      <h1>Login</h1>
    </div>
    <Form  style={{paddingBottom:20,marginTop:-30}} onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="username">User name</Label>
        <Input type="text" 
               name="username"  
               value={userData.username}  
               id="username" 
               placeholder="Username"
               onChange={e=>setData({ ...userData ,username:e.target.value})}
               required/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" 
               name="password" 
               id="password" 
               value={userData.password} 
               placeholder="password"
               onChange={e=>setData({...userData,password:e.target.value})} 
               required/>
      </FormGroup>
      
      <Button color="success" className="btn btn-block"  type="submit">Submit</Button>
  
  
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

export default Login;