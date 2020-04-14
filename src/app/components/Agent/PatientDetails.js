import React  ,{useState ,useEffect}from 'react';
import {Button ,Col,Label,Input,FormGroup,Form ,Row ,Table, Modal, ModalHeader, ModalBody, ModalFooter}  from 'reactstrap'
import { useHistory } from "react-router";
import {Link} from  'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {onePatient} from '../../../redux/actions/PatientsActions'



const PatientDetails  = (props) =>{ 

  
  const content = useSelector((state) => state.patients.allpatients);
  
  //this hook gives us redux store state



  const dispatch = useDispatch(onePatient());
  useEffect(() => {
    dispatch(onePatient());
  }, []);



  const {
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  let history = useHistory()




  function handleClose(){

    history.goBack()
   }
  



   console.log(content)



  return (
    <div>
  
    <div style={{marginTop:70 ,padding:10}}>
    </div>

    <Form style={{padding:20, border:"4px solid  rgba(76,140,64,0.6) ",boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>
    <Button className='btn-secondary' style={{marginBottom:10}}  onClick={handleClose}>Close</Button>

    <h1 style={{textAlign:'center'}}>Patel Personal Details</h1>
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





    <h1 style={{ textAlign:'center' ,color:"white"}}>
    Last Screening Details  
     <Button className='btn btn-info' style={{marginLeft:1500,marginBottom:20, marginTop:-20}}> 
     <Link to="/updatePatientDetails" style={{color:'white'}}>
     Update  </Link></Button></h1>

    

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



    
    <h1 style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}}>Testing Details  <Button className="btn-info" style={{marginLeft:1500,marginBottom:20, marginTop:-20}}> <Link to="/test" style={{color:"white"}}>Test Patient</Link></Button></h1>


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
        <th>Action</th>
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
        <td>-</td>

      </tr>
      <tr>
      <th scope="row">2</th>
      <td>01/01/01</td>
      <td>REd Cross</td>
      <td>13543</td>
      <td>Des</td>
      <td>negative</td>
      <td>-</td>

     
    
    </tr>
    <tr>
        <th scope="row">3</th>
        <td>01/01/01</td>
        <td>REd Cross</td>
        <td>13543</td>
        <td>Des</td>
        <td>pending</td>
        <td><Button className="btn btn-info" onClick={toggle}>Update Results</Button></td>

      =
      </tr>


      <tr>
        <th scope="row">1</th>
        <td>01/01/01</td>
        <td>REd Cross</td>
        <td>13543</td>
        <td>Des</td>
        <td>pending</td>
        <td><Button className="btn btn-info">Update Results</Button></td>
      </tr>
    </tbody>
  </Table>
  

  </Row>
  </Form>




  <Modal isOpen={modal} toggle={toggle} className={className}>
  <ModalHeader style={{backgroundColor:"rgba(76,140,64,0.6) " ,textAlign:'center' ,color:"white" ,boxShadow: "8px 20px 8px 0 rgba(0, 0, 0, 0.2)"}} toggle={toggle}> Update  Results </ModalHeader>
  <ModalBody>
  <Row form>

  <Col md={12}>
  <FormGroup>
    <Label for="exampleState">Results </Label>
    <Input type="select" name="travelled"  id="gender"> 
    <option>Select</option>
    <option value="Yes">Positive</option>
    <option value="No">Negative</option>
    </Input>
  </FormGroup>

  </Col>

</Row>
.
  </ModalBody>
  <ModalFooter>
    <Button color="success" onClick={toggle}>Yes</Button>{' '}
    <Button color="danger" onClick={toggle}>NO</Button>
  </ModalFooter>
</Modal>
    
    </div>
  );
}






export default PatientDetails;