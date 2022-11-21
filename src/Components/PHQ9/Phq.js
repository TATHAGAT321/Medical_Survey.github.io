
import React from 'react';
import { useState } from 'react';
import './phq.css';
import axios from 'axios';

function Phq({onRouteChange}){
    //const [name, setName] = useState();
    const [sc0,setSc0]= useState(0);
    const [sc1,setSc1]= useState(0);
    const [sc2,setSc2]= useState(0);
    const [sc3,setSc3]= useState(0);
    const [score,setScore] = useState(0); 

    const onHandleChange = (e)=>{
        if(e.target.value=="0"){
            setSc0(sc0+1);
        }else if(e.target.value=="1"){
            setSc1(sc1+1);  
        }else if(e.target.value=="2"){
            setSc2(sc2+1);  
        }else{
            setSc3(sc3+1);
        } 
    }
    // const function3 = (e)=>{
    //     setScore(sc0*0 + sc1*1 + sc2*2 + sc3*3);
    // }
    const function1 = (e)=>{
       
        // const data = {
        //     PHQ9Score:(sc0*0 + sc1*1 + sc2*2 + sc3*3)
        //   }
        // //   console.log("hello World",data.PHQ9Score);
        //   axios.post('https://sheet.best/api/sheets/f42fd69b-53f3-4802-b5b6-30742c006af4',data).then((response)=>{
        //     setScore('');
        //   }) 
        setScore(sc0*0 + sc1*1 + sc2*2 + sc3*3);
        
    }
    const function2=(e)=>{
        onRouteChange('moas',{PHQ9Score:(sc0*0 + sc1*1 + sc2*2 + sc3*3)}); 
       // setScore('');
    }
    
    const handleSubmit= (e) => {
      //addChoreLog([choreDesc, name, date])
    //   function3();
      //function1();
      function2();
      e.preventDefault();
    }
    return(
        <div>
            
            <div>
             <table>
             <caption>PHQ-9</caption>
                <tr>
                    <th>Over the last 2 weeks, how often have you been bother by any of the following problems ?</th>
                    <th>Not at all</th>
                    <th>Several days </th>
                    <th>More than half days</th>
                    <th>Nearly everyDay</th>
                </tr>
                <tr>
                    <td >Little Interested or pleasure in doing things </td>
                    <td>1 <input onChange={onHandleChange} type="radio" name="myGroupName" value="0"/></td>
                    <td>2 <input onChange={onHandleChange} type="radio" name="myGroupName" value= "1"/></td>
                    <td>3 <input onChange={onHandleChange} type="radio" name="myGroupName" value= "2"/></td>
                    <td>4 <input onChange={onHandleChange} type="radio" name="myGroupName" value= "3"/></td>
                </tr>
                <tr>
                    <td >Feeling down, deepressed or hopeless </td>
                    <td>1 <input onChange={onHandleChange} type="radio" name="myGroupName1" value="0"/></td>
                    <td>2 <input onChange={onHandleChange} type="radio" name="myGroupName1" value= "1"/></td>
                    <td>3 <input onChange={onHandleChange} type="radio" name="myGroupName1" value= "2"/></td>
                    <td>4 <input onChange={onHandleChange} type="radio" name="myGroupName1" value= "3"/></td>
                </tr>
                <tr>
                    <td >Feeling down, deepressed or hopeless </td>
                    <td>1 <input onChange={onHandleChange} type="radio" name="myGroupName2" value="0"/></td>
                    <td>2 <input onChange={onHandleChange} type="radio" name="myGroupName2" value= "1"/></td>
                    <td>3 <input onChange={onHandleChange} type="radio" name="myGroupName2" value= "2"/></td>
                    <td>4 <input onChange={onHandleChange} type="radio" name="myGroupName2" value= "3"/></td>
                </tr>
                <tr>
                    <td >Trouble falling or statying asleep, or sleeping too much. </td>
                    <td>1 <input onChange={onHandleChange} type="radio" name="myGroupName3" value="0"/></td>
                    <td>2 <input onChange={onHandleChange} type="radio" name="myGroupName3" value= "1"/></td>
                    <td>3 <input onChange={onHandleChange} type="radio" name="myGroupName3" value= "2"/></td>
                    <td>4 <input onChange={onHandleChange} type="radio" name="myGroupName3" value= "3"/></td>
                </tr>
                <tr>
                    <td >Feeling tired or having little energy </td>
                    <td>1 <input onChange={onHandleChange} type="radio" name="myGroupName4" value="0"/></td>
                    <td>2 <input onChange={onHandleChange} type="radio" name="myGroupName4" value= "1"/></td>
                    <td>3 <input onChange={onHandleChange} type="radio" name="myGroupName4" value= "2"/></td>
                    <td>4 <input onChange={onHandleChange} type="radio" name="myGroupName4" value= "3"/></td>
                </tr>
                <tr>
                    <td >Poor appetite or overeating </td>
                    <td>1 <input onChange={onHandleChange} type="radio" name="myGroupName5" value="0"/></td>
                    <td>2 <input onChange={onHandleChange} type="radio" name="myGroupName5" value= "1"/></td>
                    <td>3 <input onChange={onHandleChange} type="radio" name="myGroupName5" value= "2"/></td>
                    <td>4 <input onChange={onHandleChange} type="radio" name="myGroupName5" value= "3"/></td>
                </tr>
                <tr>
                    <td>Feeling bad about yourself ot that you're a failure or have let yourself or your family down </td>
                    <td>1 <input onChange={onHandleChange} type="radio" name="myGroupName6" value="0"/></td>
                    <td>2 <input onChange={onHandleChange} type="radio" name="myGroupName6" value= "1"/></td>
                    <td>3 <input onChange={onHandleChange} type="radio" name="myGroupName6" value= "2"/></td>
                    <td>4 <input onChange={onHandleChange} type="radio" name="myGroupName6" value= "3"/></td>
                </tr>
                <tr>
                    <td >Trouble concentrarting on things, such as reading the newspaper or watching television. </td>
                    <td>1 <input onChange={onHandleChange} type="radio" name="myGroupName7" value="0"/></td>
                    <td>2 <input onChange={onHandleChange} type="radio" name="myGroupName7" value= "1"/></td>
                    <td>3 <input onChange={onHandleChange} type="radio" name="myGroupName7" value= "2"/></td>
                    <td>4 <input onChange={onHandleChange} type="radio" name="myGroupName7" value= "3"/></td>
                </tr>
                <tr>
                    <td>Moving or speaking so slowly that other eople could have noticed ? or the opposite -- being so fidgety or restless that you have been moving around a lot more than usual. </td>
                    <td>1 <input onChange={onHandleChange} type="radio" name="myGroupName8" value="0"/></td>
                    <td>2 <input onChange={onHandleChange} type="radio" name="myGroupName8" value= "1"/></td>
                    <td>3 <input onChange={onHandleChange} type="radio" name="myGroupName8" value= "2"/></td>
                    <td>4 <input onChange={onHandleChange} type="radio" name="myGroupName8" value= "3"/></td>
                </tr>
                <tr>
                    <td >Thought that you would be better off dead or of hurting yourself in some way. </td>
                    <td>1 <input onChange={onHandleChange} type="radio" name="myGroupName9" value="0"/></td>
                    <td>2 <input onChange={onHandleChange} type="radio" name="myGroupName9" value= "1"/></td>
                    <td>3 <input onChange={onHandleChange} type="radio" name="myGroupName9" value= "2"/></td>
                    <td>4 <input onChange={onHandleChange} type="radio" name="myGroupName9" value= "3"/></td>
                </tr>
                <tr>
                    <td >Little Interested or pleasure in doing things </td>
                    <td>1 <input onChange={onHandleChange} type="radio" name="myGroupName10" value="0"/></td>
                    <td>2 <input onChange={onHandleChange} type="radio" name="myGroupName10" value= "1"/></td>
                    <td>3 <input onChange={onHandleChange} type="radio" name="myGroupName10" value= "2"/></td>
                    <td>4 <input onChange={onHandleChange} type="radio" name="myGroupName10" value= "3"/></td>
                </tr>
                <tr>
                    <td >For office coding: Total Score = </td>
                    <td className='c1'>{sc0} </td>
                    <td className="c1">{sc1} </td>
                    <td className='c1'>{sc2}</td>
                    <td className='c1'>{sc3}</td>
                </tr> 

             </table>
            </div>
            <div className="survey">
                <h4>If you checked off any problems, how difficult have these problem made it for you to do your work, take care of things at home, or get along with other people ?</h4>
                <table>
                    <tr>
                        <th>Not difficult at all</th>
                        <th>Somewhat difficult</th>
                        <th>Very difficult </th>
                        <th>Exteremly difficult</th>
                    </tr>
                    <tr>
                        <td><input type="checkbox" name="myGroupName11"/></td>
                        <td><input type="checkbox" name="myGroupName11"/></td>
                        <td><input type="checkbox" name="myGroupName11"/></td>
                        <td><input type="checkbox" name="myGroupName11"/></td>
                    </tr>

                </table>
            </div>
            <div>
            <button className="next" onClick={handleSubmit}> Submit </button>
            </div>
        </div>
        
    );
}

export default Phq;