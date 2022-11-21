import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from "react";
import axios from 'axios';
//import ACEIII from './Components/ACEIII/ACEIII';
// import DoctorsDashboard from './Components/DoctorDashboard/RecordsStore';
import Language from './Components/Language/Language.js';
import MOAS from './Components/MOAS/Moas';
import PHQ9 from'./Components/PHQ9/Phq';
// import PatientDashboard from './Components/PatientDashboard/PatientDetails';
import WHOQAL from './Components/WHOQAL/Whoqal';
import WelcomeSurvey from'./Components/WelcomeSurvey/Survey';


function App(props) {
  const [route,setRoute] = useState('language');
  const [finaldata,setFinalData] = useState({Name:'',Age:'',Sex:'',Father:'',Address:'',Date:'',PHQ9Score:'',MoasScore:''});
   function function1(data1, data2){

    if(data1 == 'phq9'){
      console.log("name",data2.Name);
     setFinalData({Name : data2.Name,
                   Age : data2.Age,
                   Sex : data2.Sex,
                   Father: data2.Father,
                   Address: data2.Address,
                   Date: data2.Date,
                   PHQ9Score: data2.PHQ9Score,
                   MoasScore: data2.MoasScore
                });
    }else if(data1 == 'moas'){
      setFinalData({Name : data2.Name,
        Age : data2.Age,
        Sex : data2.Sex,
        Father: data2.Father,
        Address: data2.Address,
        Date: data2.Date,
        PHQ9Score: data2.PHQ9Score,
        MoasScore: data2.MoasScore
     });
      //setFinalData({PHQ9Score: data2.PHQ9Score});
    }else if(data1=='whoqal'){
      setFinalData({Name : data2.Name,
        Age : data2.Age,
        Sex : data2.Sex,
        Father: data2.Father,
        Address: data2.Address,
        Date: data2.Date,
        PHQ9Score: data2.PHQ9Score,
        MoasScore: data2.MoasScore
     });
      //setFinalData({MoasScore: data2.MoasScore});
    }
  }
  const onRouteChange = (data1,data2)=>{
    setRoute(data1); 
    if(data1 != 'survey'){
     console.log("apidata data2 is",data2);
     function1(data1,data2);
     if(data1=='moas'){
      const data = {
        Name:finaldata.Name,
        Age:finaldata.Age,
        Sex:finaldata.Sex,
        Father:finaldata.Father,
        Address:finaldata.Address,
        Date:finaldata.Date,
        PHQ9Score:data2.PHQ9Score,
        MoasScore:finaldata.MoasScore
      }
      console.log("apidata",data);
      axios.post('https://sheet.best/api/sheets/f42fd69b-53f3-4802-b5b6-30742c006af4',data).then((response)=>{
        console.log("apidata",response);
      });
    }
    if(data1=='whoqal'){
      const data = {
        MoasScore:data2.MoasScore
      }
      console.log("apidata",data);
      axios.post('https://sheet.best/api/sheets/f42fd69b-53f3-4802-b5b6-30742c006af4',data).then((response)=>{
        console.log("apidata",response);
    });
  }
  }
  }
  return (
    <div className="App"> 
      {
       (route == 'language')?
        <Language onRouteChange={onRouteChange}/>
        :
       (route == 'survey')
        ? <WelcomeSurvey onRouteChange={onRouteChange}/>
        :((route == 'phq9')
          ? <PHQ9 onRouteChange={onRouteChange}/>
          : ((route == 'moas')
            ? <MOAS onRouteChange={onRouteChange}/>
            : ((route=='whoqal')
             ? <WHOQAL onRouteChange={onRouteChange}/>
             : <Language onRouteChange={onRouteChange}/>)
          )
        )
      }
      {/* <WelcomeSurvey/> */}
      {/* <PHQ9 /> */}
      {/* <MOAS />  */}
      {/* <WHOQAL /> */}

    </div>
  );
}

export default App;
