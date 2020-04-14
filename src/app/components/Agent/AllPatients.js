import React  ,{useEffect}from 'react';
import {Link} from  'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {allPatient} from '../../../redux/actions/PatientsActions'
import Pageview from '@material-ui/icons/Pageview'



import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import BorderColorIcon from '@material-ui/icons/BorderColor';


const AllPatients  = (props) =>{ 

  
  const content = useSelector((state) => state.patients.allpatients);
  
  //this hook gives us redux store state


  console.log(content)
  const dispatch = useDispatch(allPatient());
  useEffect(() => {
    dispatch(allPatient());
  }, []);

 

  var red = 'P'

  console.log(red)



let a  =  content.map((x,i)=>(

  <TableRow key={i}>
  <TableCell>{i +1}</TableCell>
  <TableCell>{x.fullName}</TableCell>
  <TableCell>{x.email}</TableCell>
  <TableCell>{x.phoneNumber}</TableCell>
  <TableCell>{x.nationalIdNumber}</TableCell>
  <TableCell>{x.passportNumber}</TableCell>
  <TableCell>{x.gender}</TableCell>
  <TableCell> {x.dateOfBirth} </TableCell>

  <TableCell align="right"><Link to={`/onescreen/${x.patientId}`} style={{color:"green"}} ><BorderColorIcon/></Link>&nbsp;<Link style={{color:"red"}} to={`/test/${x.patientId}`}><Pageview/></Link></TableCell>
  </TableRow>




))




  return (
    <div>
  
  <h5 className="container" style={styles.container}>All Patients</h5>
  
<button className='btn btn-success'><Link to="/addpatient" style={{color:"white"}}>New Patient</Link></button>
    <Table size="small" className="table table-striped" >

        <TableHead>
          <TableRow>
            <TableCell>No#</TableCell>
            <TableCell>Full Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>National Id</TableCell>
            <TableCell>Passport Number</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Date Of Birth</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {a}
        </TableBody>
        </Table>
    
    
    
    
    </div>
  );
}


const styles={
  container:{
    borderLeft:"10px solid #4c8c40"
  },
  dialog:{
    borderLeft:"10px solid #4c8c40",
    marginLeft:"10px"
  }
}



export default AllPatients;