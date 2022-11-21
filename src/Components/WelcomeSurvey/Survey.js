import React from 'react';
import { useState } from 'react';
import './Survey.css';
import axios from 'axios';

function Survey({onRouteChange}) {
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [sex, setSex] = useState();
    const [father, setFather] = useState();
    const [address, setAddress] = useState();
    const [date, setDate] = useState();
    const [tc,setTc] = useState();
    
    // const function1 = (e)=>{
    //     // const data = {
    //     //     Name:name,
    //     //     Age:age,
    //     //     Sex:sex,
    //     //     Father:father,
    //     //     Address:address,
    //     //     Date:date,
    //     //     TC_Number:tc
    //     //   }
    //     //   axios.post('https://sheet.best/api/sheets/f42fd69b-53f3-4802-b5b6-30742c006af4',data).then((response)=>{
    //     //     setName('');
    //     //     setAge('');
    //     //     setSex('');
    //     //     setFather('');
    //     //     setAddress('');
    //     //     setDate('');
    //     //     setTc('');
    //     //   })
       

    // }
    const function2=(e)=>{
        onRouteChange('phq9',{
            Name:name,
            Age:age,
            Sex:sex,
            Father:father,
            Address:address,
            Date:date,
            TC_Number:tc
          });
    }
    
    const handleSubmit= (e) => {
      //addChoreLog([choreDesc, name, date])
      //function1();
      function2();
      e.preventDefault();
    }
  
    return (
     <div className = "form-box">
     <div id="google_translate_element"></div>
     <h1 className = "form-step" color='blue'>Welcome to Survey</h1>
      <form autoComplete="off" className = "user" onSubmit={handleSubmit}>
        <div  className = "field1">
        <input placeholder="Name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Age" name="age" type="text" value={age} onChange={(e) => setAge(e.target.value)} />
        <input  placeholder = "Sex" name="sex" type="text" value={sex} onChange={(e) => setSex(e.target.value)} />
        <input name="name" placeholder = "Father's Name" type="text" value={father} onChange={(e) => setFather(e.target.value)} />
        <textarea placeholder = " Address:" name="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        <input placeholder = "Date of Accident: " name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <input placeholder=" TC Number: " name="TC" type="number" value={tc} onChange={(e) => setTc(e.target.value)} />
        </div>
        <button className = "btn" type='submit'> Submit </button>
       
      </form>
      </div>
    )
  }

  export default Survey;
