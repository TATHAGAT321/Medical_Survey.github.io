
import React from 'react';
import { useState } from 'react';
import './Moas.css'
import axios from 'axios';
function Moas({onRouteChange}){
   
      const [sc0,setSc0]= useState(0);
      const [sc1,setSc1]= useState(0);
      const [sc2,setSc2]= useState(0);
      const [sc3,setSc3]= useState(0);
     // const [sc4,setSc4]= useState(0);
      const [score,setScore] = useState(0); 

      const onHandleChange1 = (e)=>{
         if(e.target.value=="0"){
             setSc0(sc0+0);
         }else if(e.target.value=="1"){
             setSc0(sc0+1);  
         }else if(e.target.value=="2"){
             setSc0(sc0+2);  
         }else if(e.target.value=="3"){
             setSc0(sc0+3);
         }else{
            setSc0(sc0+4);
         }
      } 
     const onHandleChange2 = (e)=>{
      if(e.target.value=="0"){
         setSc1(sc1+0);
     }else if(e.target.value=="1"){
         setSc1(sc1+1);  
     }else if(e.target.value=="2"){
         setSc1(sc1+2);  
     }else if(e.target.value=="3"){
         setSc1(sc1+3);
     }else{
        setSc1(sc1+4);
     }
  }
  const onHandleChange3 = (e)=>{
   if(e.target.value=="0"){
      setSc2(sc2+0);
  }else if(e.target.value=="1"){
      setSc2(sc2+1);  
  }else if(e.target.value=="2"){
      setSc2(sc2+2);  
  }else if(e.target.value=="3"){
      setSc2(sc2+3);
  }else{
     setSc2(sc2+4);
  }
}
const onHandleChange4 = (e)=>{
   if(e.target.value=="0"){
      setSc3(sc3+0);
  }else if(e.target.value=="1"){
      setSc3(sc3+1);  
  }else if(e.target.value=="2"){
      setSc3(sc3+2);  
  }else if(e.target.value=="3"){
      setSc3(sc3+3);
  }else{
     setSc3(sc3+4);
  }
}

// const function1 = (e)=>{
       
//    // const data = {
//    //     MoasScore:(sc0*1 + sc1*2 + sc2*3 + sc3*4)
//    //   }
//      setScore(sc0*1 + sc1*2 + sc2*3 + sc3*4)
//    /* console.log("hello World",data.MoasScore);*/
//    //   axios.post('https://sheet.best/api/sheets/f42fd69b-53f3-4802-b5b6-30742c006af4',data).then((response)=>{
//    //     setScore('');
//    //   }) 
// }
  
   const function2=(e)=>{
      onRouteChange('whoqal',{MoasScore:(sc0*1 + sc1*2 + sc2*3 + sc3*4)}); 
      //setScore('');
  }
  
  const handleSubmit= (e) => {

    //function1();
    function2();
    e.preventDefault();
  } 


    const [rater, setRater] = useState();
    return(
        <div>
            <h1>The Modified Overt Aggression Scale(MOAS)</h1>
            <div className='wrapper'>
            <div className='input1'>
             <label className=''> Patient <input type="text"/></label>
            </div>
            <div className='input2'>
            <label className='input2r'> Rater <input type="text" value = {rater} onChange={(e)=>setRater(e.target.value)}/>
            </label>
            <label className='input2d'> Date <input type="date"/> </label> 
            </div>
            <div className='input3'>
             <h4 className='input3h'>Instructions</h4>
             <hr className='line'/>
             <p>Rate the patient aggressive behaviour over the past week. Select as many item as appropriate. Refer to the pocket guide for full measure</p>
            </div>
            <div className='input4'>
             <h4 className='input4h'>Scoring</h4>
             <hr className='line'/>
             <ol className='olist'>
                <li>Add items in each category </li>
                <li>In scoring summary, multiply sum by weight and weighted sum for total weighted score. Use that score to track changes in level of aggression overtime. </li>
            </ol>
            </div>
            </div>
            <div>
               
                <table>
                 <caption>Verbal Aggression</caption>
                 <tr>
                   <th></th>
                   <th></th>
                 </tr>
                 <tr> 
                    <td className='type1'><input onChange={onHandleChange1} value="0" type="radio" /> </td>
                    <td className='type2'>0 No verbal aggression </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange1} value="1" type="radio" /> </td>
                    <td className='type2'>1 Shouts angrily, curses mildly or make personal insults  </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange1} value="2" type="radio" /> </td>
                    <td className='type2'>2 Curses viciously, is severly insulting, has temper outbrusts</td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange1} value="3" type="radio" /> </td>
                    <td className='type2'>3 Impulsively threatens voilence towards other or self </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange1} value="4" type="radio" /> </td>
                    <td className='type2'>4 Threatens voilence towards others or self repeatedly or delibrately </td>
                 </tr>
                 <tr>
                    <td className='type1'>{sc0}</td>
                    <td className='type2'>SUM VERBAL AGGRESSION SCORE </td>
                 </tr>
                </table>
            </div>
            <div>
                <table>
                <caption>Aggression against Property</caption>
                <tr>
                   <th></th>
                   <th></th>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange2} value="0" type="radio" /> </td>
                    <td className='type2'>0 No Aggression against property </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange2} value="1" type="radio" /> </td>
                    <td className='type2'>1 Slams doores,rips clothing, urinate on floor  </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange2} value="2" type="radio" /> </td>
                    <td className='type2'>2 Throw object down, kicks furniture, defaces walls</td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange2} value="3" type="radio" /> </td>
                    <td className='type2'>3 Break objects, smashes windows </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange2} value="4" type="radio" /> </td>
                    <td className='type2'>4 Sets fire, throw objects dangerously </td>
                 </tr>
                 <tr>
                    <td className='type1'>{sc1} </td>
                    <td className='type2'>SUM PROPERTY AGGRESSION SCORE </td>
                 </tr>
                </table>
            </div>
            <div>
                <table>
                <caption>Αutoaggression</caption>
                <tr>
                   <th></th>
                   <th></th>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange3} value="0" type="radio" /> </td>
                    <td className='type2'>0 No Autoaggression </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange3} value="1" type="radio" /> </td>
                    <td className='type2'>1 Picks or scrathes skins, pulls hair out, hit self(without injury)  </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange3} value="2" type="radio" /> </td>
                    <td className='type2'>2 Bangs heads, throw fists into walls, throw self onto floor</td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange3} value="3" type="radio" /> </td>
                    <td className='type2'>3 Inflict minor cuts, bruises, burns or welts on self </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange3} value="4" type="radio" /> </td>
                    <td className='type2'>4 Inflicts major injury onself or make a suicide attempt </td>
                 </tr>
                 <tr>
                    <td className='type1'>{sc2} </td>
                    <td className='type2'>SUM  AUTOAGGRESSION SCORE </td>
                 </tr>
                </table>
            </div>
            <div>
                
                <table>
                <caption>Physical Aggression</caption>
                <tr>
                   <th></th>
                   <th></th>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange4} value="0" type="radio" /> </td>
                    <td className='type2'>0 No physical Aggression </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange4} value="1" type="radio" /> </td>
                    <td className='type2'>1 Makes menacing gesture, swings at people, grabs at clothing  </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange4} value="2" type="radio" /> </td>
                    <td className='type2'>2 Strikes, pushes, scrathes, pulls hair of other(without injury)</td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange4} value="3" type="radio" /> </td>
                    <td className='type2'>3 Attack other, causing mild injury(bruises, sprain, welts etc) </td>
                 </tr>
                 <tr>
                    <td className='type1'><input onChange = {onHandleChange4} value="4" type="radio" /> </td>
                    <td className='type2'>4 Attacks others, causing serious injury </td>
                 </tr>
                 <tr>
                    <td className='type1'>{sc3} </td>
                    <td className='type2'>SUM PHYSICAL AGGRESSION SCORE </td>
                 </tr>
                </table>
            </div>
            <div>
            <table className='table2'>
                <tr className='hello'>
                <th>CATEGORY</th>
                <th>SUM SCORE</th>
                <th>WEIGHTS</th>
                <th>WEIGHTED SUM</th>
                </tr>
                <tr>
                <td>Verbal Aggression</td>
                <td>{sc0}</td>
                <td>x1</td>
                <td>{sc0 * 1}</td>
                </tr>
                <tr>
                <td>Aggression Against Property</td>
                <td>{sc1}</td>
                <td>x2</td>
                <td>{sc1 * 2}</td>
                </tr>
                <tr>
                <td>Autoaggression</td>
                <td>{sc2}</td>
                <td>x3</td>
                <td>{sc2 * 3}</td>
                </tr>
                <tr>
                <td>Physical Aggression</td>
                <td>{sc3}</td>
                <td>x4</td>
                <td>{sc3 * 4}</td>
                </tr>
                <tr>
                <td>Total Weighted Score</td>
                <td>{sc0+sc1+sc2+sc3}</td>
                <td></td>
                <td>{sc0*1 + sc1*2 + sc2*3 + sc3*4}</td>
                </tr>
            </table>
            </div>
            <div>
               <button className="next" onClick={handleSubmit}> Submit </button>
            </div>

       </div>
       
    )
}

export default Moas;