import React,{useEffect ,useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import {testPatient ,allPatientTests ,onePatientScreen ,
Record}  from '../../../redux/actions/PatientsActions'
import {allKits} from '../../../redux/actions/KitsActions'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useParams} from 'react-router'
import {Col,Label,Input,FormGroup ,Row }  from 'reactstrap'
import moment from 'moment'


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



 function TestPatient() {

    let  para = useParams()
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const content = useSelector((state) => state.patients.alltests);
    const content2 = useSelector((state) => state.kits.allkits);  
    const content3 = useSelector((state) => state.patients.onescreen);
    const content4 = useSelector((state) => state.patients.updatescreen);
    const username = localStorage.getItem('username')
    const dispatch = useDispatch(allPatientTests(para.id));
    const dispatch2 = useDispatch(allKits());
    const dispatch4 = useDispatch(Record());
    const dispatch3 = useDispatch(onePatientScreen(para.id));
    const [ScreenData ,setScreen] =  useState({
        "dateOfTest": moment().format('DD/MM/YYYY'),
        "patientScreeningId":para.id,
        "testKitId":'',
        "testResult": "POSITIVE",
        "testingAgentUsername": '' 
    })




    const handleClickOpen = () => {
      setOpen(true);
    };


  
    const handleClose = () => {
      setOpen(false);
    };

    
    
  const dispatchs = useDispatch();
    useEffect(() => {
      dispatch(allPatientTests(para.id));
      dispatch2(allKits())
      dispatch3(onePatientScreen(para.id))
      dispatch4(Record())
    },[]);

  var a = []
content3.map(x=>{


x.map(y=>{

  return  a.push(y.id)

})
    
})



console.log(a)
console.log(content4)



const handleCloseSubmit = () => {

  
  const  newScreen = {
    "dateOfTest": moment().format('DD/MM/YYYY'),
    "timeOfTest":moment().format('HH:mm'),
    "patientScreeningId":a[0],
    "testKitId":ScreenData.testKitId,
    "testResult": ScreenData.testResult,
    "testingAgentUsername": username,

        }
    dispatchs(testPatient(newScreen))
    console.log(newScreen)
    setOpen(false);

  };









  
    return (<div>
        <h5 className="h" style={{borderLeft:"10px solid #4c8c40"}}>Patel Test</h5>

        <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        New Test
      </Button>
    
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>No#</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Kit Used</TableCell>
              <TableCell align="right">Test Agent</TableCell>
              <TableCell align="right">Result</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                1
                </TableCell>
                <TableCell align="right">01/01/01</TableCell>
                <TableCell align="right">Red Cross 123</TableCell>
                <TableCell align="right">Doc Tawa</TableCell>
                <TableCell align="right">Positive</TableCell>
              
              </TableRow>
        
          </TableBody>
        </Table>
      </TableContainer> 





      <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">Testing  Details</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
<form>
        <Row form>

        <Col md={12} >
        <FormGroup>
          <Label for="exampleCity">Testing Kit:</Label>
             <Input type="select" name="travelled" value={ScreenData.testKitId}  onChange={e=>setScreen({ ...ScreenData ,testKitId:e.target.value})} > 
            
             {content2.map((team) => <option key={team.value} value={team.id}>{team.brandName}</option>)}
                 </Input>
                 </FormGroup>
               </Col>

          <Col md={12}>

          <FormGroup>
              <Label for="exampleCity">Testing Kit:</Label>
                 <Input type="select" name="travelled" value={ScreenData.testResult}  onChange={e=>setScreen({ ...ScreenData ,testResult:e.target.value})} > 
          <option>Select</option>
          <option value="POSITIVE">POSITIVE</option>
          <option value="NEGATIVE">NEGATIVE</option>
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


export default TestPatient