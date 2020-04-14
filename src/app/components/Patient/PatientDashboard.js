import React from 'react';
import Submenu from '../layout/Patient/SubMenu' ;
import {Col,Label,FormGroup,Form ,Row ,Table, }  from 'reactstrap'




const PatientDashboard  = (props) =>{ 






  






  return (
    <div>
    <Submenu />
    <div style={{marginTop:70 ,padding:10}}>
    </div>

    <Form style={{padding:20, border:"4px solid  rgba(76,140,64,0.6) ",boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>

    <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>Patel Personal Details</h1>
    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleEmail">First Name</Label>
          <h6>Patel</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="examplePassword">Last Name</Label>
          <h6>Lincon</h6>
        </FormGroup>
      </Col>
    </Row>

    <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleEmail">Date Of Birth</Label>
        <h6>01/01/01</h6>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="examplePassword"> National Id</Label>
        <h6 >567-296335-f17</h6>
      </FormGroup>
    </Col>
  </Row>

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Address</Label>
          <h6 >47 casteen belverder</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Phone Number</Label>
          <h6>07821442345</h6>
        </FormGroup>
      </Col>
  
    </Row>


    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Email Address</Label>
          <h6 >1123@gmail.com</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Gender</Label>
          <h6 >Male</h6>
        </FormGroup>
      </Col>
  
    </Row>





    <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>
    Last Screening Details  
     </h1>

    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Cough:</Label>
         <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Colds</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
  
    </Row>
    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Diarrhoea</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Sore Throat</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
  
    </Row>
    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Body Aches</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Heachache</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
  
    </Row>
    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Tempreratue above 37.8 </Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Difficulty in breathing</Label>
          <h6 style={{color:'green'}}>No</h6>
        </FormGroup>
      </Col>
  
    </Row>
    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">Fatigue</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Travelled  in the past 14days</Label>
          <h6 style={{color:'red'}}>yes</h6>
        </FormGroup>
      </Col>
  
    </Row>
    

    <Row form>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleCity">travelled in Covid-19 Infected Area</Label>
          <h6 style={{color:'green'}}>No</h6>
        </FormGroup>
      </Col>
      <Col md={6}>
        <FormGroup>
          <Label for="exampleState">Any direct contact with a Covid patient</Label>
          <h6 style={{color:'green'}}>No</h6>
        </FormGroup>
      </Col>
  
    </Row>



    
    <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>Testing Details  </h1>


    <Row form>
    <Table striped style={{boxShadow: "0 20px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)" ,}} responsive>
    <thead>
      <tr>
        <th>#</th>
        <th>Date</th>
        <th>Brand Name of Kit</th>
        <th>Batch Number</th>
        <th>Testing Agent</th>
        <th>Result</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td>01/01/01</td>
        <td>REd Cross</td>
        <td>13543</td>
        <td>Des</td>
        <td>negative</td>
       

      </tr>
      <tr>
      <th scope="row">2</th>
      <td>01/01/01</td>
      <td>REd Cross</td>
      <td>13543</td>
      <td>Des</td>
      <td>negative</td>
     

     
    
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>01/01/01</td>
        <td>REd Cross</td>
        <td>13543</td>
        <td>Des</td>
        <td>pending</td>
        

      =
      </tr>


      <tr>
        <th scope="row">1</th>
        <td>01/01/01</td>
        <td>REd Cross</td>
        <td>13543</td>
        <td>Des</td>
        <td>pending</td>
     
      </tr>
    </tbody>
  </Table>
  

  </Row>
  </Form>

   
    </div>
  );
}






export default PatientDashboard;