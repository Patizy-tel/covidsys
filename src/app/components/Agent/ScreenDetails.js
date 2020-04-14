import React,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {onePatientScreen ,updateTest} from '../../../redux/actions/PatientsActions'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {useParams} from 'react-router'
import {Col,Label,Input,FormGroup,Row }  from 'reactstrap'


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



 function ScreenDetails() {

    let  para = useParams()

    console.log(para)
  

   





    const [open, setOpen] = useState(false);
    const [ScreenData ,setScreen] =  useState({

        
    "bodyAchesPresent": true,
    "coldsPresent": true,
    "coughPresent": true,
    "diarrhoeaPresent": true,
    "difficultiesInBreathingPresent": true,
    "fatiguePresent": true,
    "feverPresent": true,
    "hasATravelHistoryToACovid19InfectedArea": true,
    "hasDirectContactWithCovid19Patient": true,
    "hasTravelledPast14Days": true,
    "headachePresent": true, 
     partnerId:para.id

    })

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const content = useSelector((state) => state.patients.onescreen);


    const dispatch = useDispatch(onePatientScreen(para.id));
    
  const dispatchs = useDispatch();
    useEffect(() => {
      dispatch(onePatientScreen(para.id));
    },[]);



    console.log(content)


const username = localStorage.getItem('username')




  const  newScreen = {
            
    "bodyAchesPresent":ScreenData.bodyAchesPresent,
    "coldsPresent": ScreenData.coldsPresent,
    "coughPresent": ScreenData.coughPresent,
    "diarrhoeaPresent": ScreenData.diarrhoeaPresent,
    "difficultiesInBreathingPresent":ScreenData.difficultiesInBreathingPresent,
    "fatiguePresent": ScreenData.fatiguePresent,
    "feverPresent": ScreenData.feverPresent,
    "hasATravelHistoryToACovid19InfectedArea": ScreenData.hasATravelHistoryToACovid19InfectedArea,
    "hasDirectContactWithCovid19Patient":ScreenData.hasDirectContactWithCovid19Patient,
    "hasTravelledPast14Days": ScreenData.hasTravelledPast14Days,
    "headachePresent":ScreenData.headachePresent , 
     patientId:para.id,
     "testingAgentUsername":username


}



const handleCloseSubmit = () => {


    dispatchs(updateTest(newScreen))
    setOpen(false);



  };




     
  let a  = content.map((x ,i)=>(

            x.map((y,i)=>(

              <TableRow key={i}>
              <TableCell>{i+1}</TableCell>
              <TableCell>{`${`${y.bodyAchesPresent}`}`}</TableCell>
              <TableCell>{`${y.coldsPresent}`}</TableCell>
              <TableCell>{`${y.coughPresent}`}</TableCell>
              <TableCell>{`${y.diarrhoeaPresent}`}</TableCell>
              <TableCell>{`${y.difficultiesInBreathingPresent}`}</TableCell>
              <TableCell> {`${y.headachePresent}`}</TableCell>
              <TableCell>{`${y.fatiguePresent}`}</TableCell>
              <TableCell> {`${y.feverPresent}`} </TableCell>
              <TableCell> {`${y.hasATravelHistoryToACovid19InfectedArea}`} </TableCell>
              <TableCell> {`${y.hasDirectContactWithCovid19Patient}`} </TableCell>
              <TableCell> {`${y.hasTravelledPast14Days}`}</TableCell>
              </TableRow>


            ))

   
  
  
  
  
  ))
  
  


   
  












  
    return (<div>
        <h5 className="h" style={{borderLeft:"10px solid #4c8c40"}}>Patel Last Screens</h5>

        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        New Screen
      </Button>
    
   
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No#</TableCell>
              <TableCell align="right">BodyAches</TableCell>
              <TableCell align="right">Cold</TableCell>
              <TableCell align="right">Cough</TableCell>
              <TableCell align="right">Diarrhoea</TableCell>
              <TableCell align="right">Breathing Difficult</TableCell>
              <TableCell align="right">Headache</TableCell>
              <TableCell align="right">Fatigue</TableCell>
              <TableCell align="right">Fever</TableCell>
              <TableCell align="right">Travelled to invected Areas</TableCell>
              <TableCell align="right">Contact with Covid patient</TableCell>
              <TableCell align="right">Travelled in last 14Days</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        

              {a}
        
          </TableBody>
        </Table>
  





      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Screeing  Details</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
<form>
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Cough:</Label>
                 <Input type="select" name="travelled" value={ScreenData.coughPresent}  onChange={e=>setScreen({ ...ScreenData ,coughPresent:e.target.value})} > 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Colds</Label>
                  <Input type="select" name="travelled" value={ScreenData.coldsPresent}  onChange={e=>setScreen({ ...ScreenData ,coldsPresent:e.target.value})}  id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Diarrhoea</Label>
                  <Input type="select" name="travelled" value={ScreenData.diarrhoeaPresent}  onChange={e=>setScreen({ ...ScreenData ,diarrhoeaPresent:e.target.value})}  id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Sore Throat</Label>
                  <Input type="select" name="travelled"  value={ScreenData.difficultiesInBreathingPresent}  onChange={e=>setScreen({ ...ScreenData ,difficultiesInBreathingPresent:e.target.value})} id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Body Aches</Label>
                  <Input type="select" name="travelled"  value={ScreenData.bodyAchesPresent}  onChange={e=>setScreen({ ...ScreenData ,bodyAchesPresent:e.target.value})} id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Heachache</Label>
                  <Input type="select" name="travelled" value={ScreenData.headachePresent}  onChange={e=>setScreen({ ...ScreenData ,headachePresent:e.target.value})}  id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">Tempreratue above 37.8 </Label>
                  <Input type="select" name="travelled"  value={ScreenData.feverPresent}  onChange={e=>setScreen({ ...ScreenData ,feverPresent:e.target.value})} id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Difficulty in breathing</Label>
                  <Input type="select" name="travelled"  value={ScreenData.coughPresent}  onChange={e=>setScreen({ ...ScreenData ,coughPresent:e.target.value})} id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
      
        </Row>
        
    
        <Row form>
        
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Travelled  in the past 14days</Label>
              <Input type="select" name="travelled" value={ScreenData.hasTravelledPast14Days}  onChange={e=>setScreen({ ...ScreenData ,hasTravelledPast14Days:e.target.value})} id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
       
          
      
        </Row>
        
    
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleCity">travelled in Covid-19 Infected Area</Label>
                  <Input type="select" name="travelled" value={ScreenData.hasATravelHistoryToACovid19InfectedArea}  onChange={e=>setScreen({ ...ScreenData ,hasATravelHistoryToACovid19InfectedArea:e.target.value})}  id="gender"> 
          <option>Select</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
          </Input>
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="exampleState">Any direct contact with a Covid patient</Label>
              <Input type="select" name="travelled"  value={ScreenData.hasDirectContactWithCovid19Patient}  onChange={e=>setScreen({ ...ScreenData ,hasDirectContactWithCovid19Patient:e.target.value})} id="gender"> 
              <option>Select</option>
              <option value="true">Yes</option>
              <option value="false">No</option>
              </Input>
            </FormGroup>
          </Col>
      
        </Row>  

        </form>
    
        
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleCloseSubmit} color="primary" autoFocus>
          Submit
        </Button>
      </DialogActions>
    </Dialog>





















      </div>
    )
}


export default ScreenDetails