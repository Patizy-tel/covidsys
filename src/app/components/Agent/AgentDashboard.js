import React  ,{useState ,useEffect}from 'react';

import Chart from 'react-apexcharts'
import { useDispatch, useSelector } from "react-redux";
import {
  genderMale,genderFeMale ,maleNegative ,malePositive ,
  bulawayoNegative,bulawayoPositive ,harareNegative ,hararePositive, 
  midlandsNegative,midlandsPositive, manicalandNegative ,manicalandPositive
 ,  matabelelandNorthPositive,
  masvingoNegative,masvingoPositive ,matabelelandNorthNegative
  ,

} from '../../../redux/actions/DashboardActions'


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';




const AgentDashboard  = (props) =>{ 

  const content = useSelector((state) => state.dashboard.gendermale);
  const content2 = useSelector((state) => state.dashboard.genderfemale);
  const content3 = useSelector((state) => state.dashboard.malepositive);
  const content4 = useSelector((state) => state.dashboard.malenegative);
  //const blues1 = useSelector((state) => state.dashboard.bulawayopositive);
  //const blues2= useSelector((state) => state.dashboard.bulawayonegative);
  //const h1 = useSelector((state) => state.dashboard.h1);
  //const h2= useSelector((state) => state.dashboard.h2);
  //const mid1 = useSelector((state) => state.dashboard.mid1);
  /*const mid2= useSelector((state) => state.dashboard.mid2);
  const mic1 = useSelector((state) => state.dashboard.mic1);
  const mic2= useSelector((state) => state.dashboard.mic2);
  const mas1 = useSelector((state) => state.dashboard.mas1);
  const mas2= useSelector((state) => state.dashboard.mas2); 
  const matn1 = useSelector((state) => state.dashboard.matn1);
  const matn2= useSelector((state) => state.dashboard.matn2);*/
  
  //this hook gives us redux store state

  const dispatch = useDispatch(genderMale());
  const dispatch2 =  useDispatch(genderFeMale())
  const dispatch3 =  useDispatch(malePositive())
  const dispatch4 =  useDispatch(maleNegative())
  const dispatch5 =  useDispatch(bulawayoNegative())
  const dispatch6 =  useDispatch(bulawayoPositive())
  const dispatch7 =  useDispatch(harareNegative())
  const dispatch8 =  useDispatch(hararePositive())
  const dispatch9 =  useDispatch(midlandsPositive())
  const dispatch10 =  useDispatch(midlandsNegative())
  const dispatch11 =  useDispatch(manicalandPositive())
  const dispatch12 =  useDispatch(manicalandNegative())
  const dispatch13 =  useDispatch(masvingoPositive())
  const dispatch14 =  useDispatch(masvingoNegative())
  const dispatch15 =  useDispatch(matabelelandNorthPositive())
  const dispatch16 =  useDispatch(matabelelandNorthNegative())

  
  useEffect(() => {
    dispatch(genderMale());
    dispatch2(genderFeMale());
    dispatch3(malePositive())
    dispatch4(maleNegative())
    dispatch5(bulawayoNegative())
    dispatch6(bulawayoPositive())
    dispatch7(harareNegative())
    dispatch8(hararePositive())
    dispatch9(midlandsPositive())
    dispatch10(midlandsNegative())
    dispatch11(manicalandPositive())
    dispatch12(manicalandNegative())
    dispatch13(masvingoPositive())
    dispatch14(masvingoNegative())
    dispatch15(matabelelandNorthPositive())
    dispatch16(matabelelandNorthNegative())


  }, []);

   console.log(content2 + "content")
  let colum = {
          
    series: [{
      name: 'NEGATIVE',
      data: [4, 5, 1, 7, 2, 3 ,5,7,6,content]
    }, {
      name: 'POSITIVE',
      data: [3, 3, 2, 8, 3, 7 ,6,5,6,content2]
    }],
    options: {

      title: {
        text: 'POSITiVE CASES AROUND THE COUNTRY',
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '14px',
          fontWeight:  'bold',
          fontFamily:  undefined,
          color:  '#263238'
        },
    },
    
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: true
        },
        zoom: {
          enabled: true
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          legend: {
            position: 'bottom',
            offsetX: -10,
            offsetY: 0
          }
        }
      }],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        type: 'text',
        categories: ['Midlands', 'Harare', 'Masvingo', 'Manicaland',
          'matebeleland South', 'matebeleland North' ,'mashonaland West' ,'mashonaland east' ,'mashonaland North' ,'Bulawayo'        ],
      },
      legend: {
        position: 'right',
        offsetY: 40
      },
      fill: {
        opacity: 1
      }
    },
  
  
  }





  
  let [totalPositve] = useState(
    
    
    {
          
      series: [50, 100],
      options: {

        title: {
          text: 'POSTIVES VS NEGATIVES FOR THE TESTED',
          align: 'left',
          margin: 10,
          offsetX: 0,
          offsetY: 0,
          floating: false,
          style: {
            fontSize:  '14px',
            fontWeight:  'bold',
            fontFamily:  undefined,
            color:  '#263238'
          },
      },
        chart: {
          type: 'donut',
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      },
  
    }
  )































  return (
    <div>
    
    <div className="container" >

    <h5 className="container">TOTAL TEST</h5>
    <Table size="small" className="table table-striped" >

<TableHead>
  <TableRow>
    <TableCell>MALE</TableCell>
    <TableCell>FEMALE</TableCell>
   
  </TableRow>
</TableHead>
<TableBody>

    <TableRow>
    <TableCell>{content}</TableCell>
      <TableCell>{content2}</TableCell>
    </TableRow>
</TableBody>
</Table>
 
</div>


    
<div className="container" >

<h5 className="container">TOTA TEST RESULTS</h5>
<Table size="small" className="table table-striped" >

<TableHead>
<TableRow>
<TableCell>GENDER</TableCell>
<TableCell>POSITIVE</TableCell>
<TableCell>NEGATIVE</TableCell>

</TableRow>
</TableHead>
<TableBody>

<TableRow>
<TableCell>MALE</TableCell>
<TableCell>{content3}</TableCell>
  <TableCell>{content4}</TableCell>
</TableRow>
</TableBody>
</Table>

</div>

 

    <Chart options={colum.options} series={colum.series} type="bar" height={350} />

    <Chart options={totalPositve.options} series={totalPositve.series} type="donut" height={350} />
  
    
   


    
    </div>
  );
}






export default AgentDashboard;