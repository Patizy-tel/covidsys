import React  ,{useEffect , useState}from 'react';

import {allKits ,addKit} from '../../../redux/actions/KitsActions'
import { useDispatch, useSelector } from "react-redux";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {FormGroup,Form }  from 'reactstrap'
import TextField from '@material-ui/core/TextField';



import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';



const AllKits  = (props) =>{ 



  const [open, setOpen] = useState(false);
// Generate Order Data


  const content = useSelector((state) => state.kits.allkits);
  
  //this hook gives us redux store state


  const dispatch = useDispatch(allKits());


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  useEffect(() => {
    dispatch(allKits());
  }, [])



  const [state, setstate] = useState({"batchNumber": "",
                                      "brandName": "" ,
                                      'serialNumber':''
                                    })



      console.log(state)

      const dispatchs = useDispatch();
      
    
    
      function handleSubmit(e) {
        e.preventDefault();
        if (state) {
            dispatchs(addKit(state))
            setOpen(false);
        }
    }

   


  console.log(content)

     let a  =  content.map((x,i)=>(

    <TableRow key={i}>
    <TableCell>{i +1}</TableCell>
    <TableCell>{x.brandName}</TableCell>
    <TableCell>{x.batchNumber}</TableCell>
    <TableCell>{x.serialNumber}</TableCell>
    </TableRow>
  
  ))
  return (
    <div>

   

    <h5 className="container" style={styles.container}>All Kits</h5>

    <button className='btn btn-success' onClick={handleClickOpen}> Add New Kit</button>
      <Table size="small" className="table table-striped" >
  
  <TableHead>
    <TableRow>
      <TableCell>Date</TableCell>
      <TableCell> Brand Name</TableCell>
      <TableCell>Batch Number</TableCell>
      <TableCell>Serial Number</TableCell>
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
<DialogTitle id="alert-dialog-title" style={styles.dialog}>New Kit</DialogTitle>
<DialogContent>
  <DialogContentText id="alert-dialog-description">
  <Form className="col-sm-12" onSubmit={handleSubmit} style={{width:"800px"}}>

  <FormGroup className="col-sm-12" >
    
    <TextField className="col-sm-12" label="Brand Name"  value={state.brandName}  onChange={e=> setstate({ ...state, brandName:e.target.value})} id="exampleEmail" placeholder="Brand Name" />
  </FormGroup>

  <FormGroup className="col-sm-12">
  <TextField className="col-sm-12" label="Batch Number" type="number" value={state.batchNumber}  onChange={e=> setstate({ ...state, batchNumber:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
</FormGroup>

<FormGroup className="col-sm-12">
  <TextField className="col-sm-12" label="Serial Number" type="number" value={state.serialNumber}  onChange={e=> setstate({ ...state, serialNumber:e.target.value})} id="exampleEmail" placeholder="with a placeholder" />
</FormGroup>

</Form>
  </DialogContentText>
</DialogContent>
<DialogActions>
  <Button onClick={handleClose} color="primary">
    Cancel
  </Button>
  <Button onClick={handleSubmit} color="primary" autoFocus>
    Submit
  </Button>
</DialogActions>
</Dialog>



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



export default AllKits;