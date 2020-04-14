import React  ,{useEffect}from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Table }  from 'reactstrap'

import { Mytests } from '../../../redux/actions/PatientsActions';


const MyTests  = (props) =>{ 




  
  const content = useSelector((state) => state.auth.allusers);
  
  //this hook gives us redux store state


  console.log(content)
  const dispatch = useDispatch(Mytests());



  let name = localStorage.getItem('username')

  useEffect(() => {
    dispatch(Mytests(name));
  }, []);

  return (
    <div>
    
    <div >
    <h5 className="container" style={styles.container}>Tests</h5>
   <Table striped  responsive>
      <thead>
        <tr>
          <th>#</th>
          <th>TEST RESULT</th>
          <th>TOTAL</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>positive</td>
          <td>150</td>
       
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>NEGATIVE</td>
        <td>120</td>
  
     </tr>
  
      </tbody>
    </Table>
    
    
    
    </div>


    
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




export default MyTests;