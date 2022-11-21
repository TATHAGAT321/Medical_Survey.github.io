import React from 'react';
import { useState } from 'react'; 
import './whoqal.css';
import Popup from 'reactjs-popup';
function Whoqal({onRouteChange}){

const options = [
     {
        comments:"For office Use G1/G1.1",
        question: "How would you rate your quality of life?" ,
        answers : ["Very poor", "Poor",  "Neither poor nor good","Good","Very Good"]
     },
     {
        comments:"For office Use G4/G2.3",
        question: "How satisfied are you with your health?" ,
        answers : ["Very dissatisfied", "Dissatisfied",  "Neither Statisfied nor dissatisfied","Satisfied","Very satisfied"]
     },
     {
        comments:"For Office Use F11.3/F13.1.4",
        question: "How much do you need any medical treatment to function in your life?" ,
        answers : ["Not at all", "A little",  "A Moderate Amount","Very much","An extreme amount"],
     },
     {
        comments:"For Office Use F4.1/F6.1.2",
        question: "How much do you enjoy life?" ,
        answers : ["Not at all", "A little",  "A Moderate Amount","Very much","An extreme amount"]
     },
     {
        comments:"For Office Use F24.2/F29.13",
        question: "To what extent do you feel your life to be meaningful?" ,
        answers : ["Not at all", "A little",  "A Moderate Amount","Very much","An extreme amount"]
     },
     {
        comments:"For Office Use F5.2/F7.16",
        question: "How well are you able to concentrate?" ,
        answers : ["Not at all", "A little",  "A Moderate Amount","Very much","An extreme amount"]
     },
     {
        comments:"For office Use F16.1/F20.1.2",
        question: "How safe do you feel in your daily life?" ,
        answers : ["Not at all", "Slightly",  "Moderately","Mostly","Completely"]
     },
     {
        comments:"For Office Use F22.1/F27.1.2",
        question: "How healthy is your physical environment?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use F2.1/F2.1.1",
        question: "Do you have enough energy for everyday life? " ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use F7.1/F9.12",
        question: "Are you able to accept your bodily appearance?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use F18.1/F23.11",
        question: "Have you enough money to meet your needs?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For office Use F20.1/F25.1.1",
        question: "How available to you is the information that you For Office Use need in your day-to-day life?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use F21.1/F26.12",
        question: "To what extent do you have the opportunity for leisure activities?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use 3.1/F11.1.1",
        question: "How well are you able to get around?" ,
        answers : ["Very poor", "Poor",  "Neither poor nor well","Well","Very well"]
 
     },
     {
        comments:"For Office Use F33/F4.2.2",
        question: "How satisfied are you with your sleep? " ,
        answers : ["Very disstatisfied", "Dissatisfied","Neither satisfied nor dissatisfied",  "Satisfied","Very Statisfied"]
     },
     {
        comments:"For Office Use F10.3/F12.2.3",
        question: "How satisfied are you with your ability to perform your daily living activities?" ,
        answers : ["Very disstatisfied", "Dissatisfied","Neither satisfied nor dissatisfied",  "Satisfied","Very Statisfied"]
 
     },
     {
        comments:"For Office Use F10.3/F12.2.3",
        question: "Do you get the kind of support from others that you need?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use F12.4/F16.2.1",
        question: "How satisfied are you with your capacity for work?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use F6.4/F8.2.2",
        question: "How satisfied are you with yourself?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use F13.3/F17.2.3",
        question: "How satisfied are you with your personal relationships?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use F15.3/F3.2.1",
        question: "How satisfied are you with your sex life?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use  F14.4/F18.2.5",
        question: "How satisfied are you with the support you get from your friends?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use F17.3/F21.2.2",
        question: "How satisfied are you with the conditions of your living place? " ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use F19.3/F24.2.1",
        question: "How satisfied are you with your access to health services?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
 
     },
     {
        comments:"For Office Use  F23.3/F28.2.2",
        question: "How satisfied are you with your mode of transportation?" ,
        answers : ["Not at all", "A little",  "Moderately","Mostly","Completely"]
     },
     {
        comments:"For Office Use F8.1/F10.1.2",
        question: "How often do you have negative feelings, such as blue mood, despair, anety, depression?" ,
        answers : ["Never", "Seldom",  "Quite often","Very often","Always"]
     },
]


    // const[change, setChange] = useState();
    // const onHandleChange= ((e)=>{
    //     //setChange(e.target.value);
    //     e.preventDefault();
    // });
    return(
        <div className='mainqal'>
            <h1 className='titlemain'>WHO Quality of life scale - Brief</h1>

            <p className='title'>Before we begin we would like to ask you to answer a few general questions about yourself by circling in the correct answer or filling in the space provided.</p>
            <div className='formtype'>
             <ol className='details'>
                 <li>
                 <label>What is your gender ? 
                    <select >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                 </label>
                </li> 
                <li>
                    <label>
                        What is your date of birth? 
                        <input type="date" />
                    </label>
                </li>
                 <li>
                   <label> 
                     What is the highest Education you received? 
                     <select>
                        <option value="elementary">Elementary School</option>
                        <option value="high">High School</option>
                        <option value="college">College</option>
                        <option value="graduate">Graduate/Professional Degree</option>
                    </select>
                    </label>
                </li>
                <li>
                   <label> 
                     What is your martial status? 
                     <select >
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                        <option value="livein">Ling as Married</option>
                        <option value="seperated">seperated</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Widowed">Widowed</option>
                     </select>
                    </label>
                </li> 
                 <li>
                   <label> 
                     Are you currently ill? 
                     <select >
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                     </select>
                    </label>
                </li> 
                 <li>
                    <label>
                        If something is wrong with your health what do you think it is?
                        <input type="textarea" /> illness/problem
                    </label>
                </li> 
            </ol> 
            </div>
            <div className='texttype'>
               <p><b>Instructions:</b> This questionnaire asks how you feel about your quality of life, health, or other areas of your life. Please answer all of the questions. If you are unsure about which response to give to a question, please choose the one that appears most appropriate. This can often be your first response.</p>
               <p>Please keep in mind standards hopes, pleasures, and concerns. We ask that you think about your life in the last two weeks. For example, thinking about the last two weeks a question might ask</p>
               <table>
                        <tr>
                        <th></th>
                        <th>Not at all</th>
                        <th>A little</th>
                        <th>Moderately</th>
                        <th>Mostly</th>
                        <th>Completely</th>
                        </tr>
                        <tr>
                        <td> Do you get the kind of support from others that you need?</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        </tr>
                </table>
                <p>you should circle the number that best fits how much support you got from others over the last two weeks. So you would circle the number 4 if you got a great deal of support from others.</p>
                <table>
                        <tr>
                        <th></th>
                        <th>Not at all</th>
                        <th>A little</th>
                        <th>Moderately</th>
                        <th>Mostly</th>
                        <th>Completely</th>
                        </tr>
                        <tr>
                        <td> Do you get the kind of support from others that you need?</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        </tr>
                </table>
                <p> You would circle number if you did not get any of the support that you needed from others in the last two weeks </p>
                    <table>
                        <tr>
                        <th></th>
                        <th>Not at all</th>
                        <th>A little</th>
                        <th>Moderately</th>
                        <th>Mostly</th>
                        <th>Completely</th>
                        </tr>
                        <tr>
                        <td> Do you get the kind of support from others that you need?</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        </tr>
                    </table>
            </div>
            <div className='tablediv'>
               <p><b>Please read each questions, assess your feelings, and circle the number on the scale that gives the best answer for you for each questions.</b></p>
               <table>
               { options.map((obj,id)=>{
                if(id===1 || id===2 || id===3 || id===8 || id===10 || id===15 || id===16 || id===18 || id===25){
                   return(
                    <React.Fragment>
                    <tr>
                    <th></th>
                    <th></th>
                    {
                        obj.answers.map((answer)=>
                        <th> {answer} </th>
                        )
                    }
                    </tr>
                    <tr>
                           <td>{obj.comments}</td>
                           <td>{obj.question}</td>
                           {
                           obj.answers.map((answer)=>
                           <td> <input type = "radio"/> </td>
                           )
                           }
                    </tr>
                    </React.Fragment>
                   )
                }else{
                    return(
                        <tr>
                           <td>{obj.comments}</td>
                           <td>{obj.question}</td>
                           {
                           obj.answers.map((answer)=>
                           <td> <input type = "radio"/>  </td>
                           )
                           }
                        </tr>
                       )
                }
               })
               
            }
               </table>
            </div>
            <div className='footer'>
                <label>Did someone help you to fill out this form? 
                (Please select Yes or No)
                <select>
                    <option> Yes</option>
                    <option> No </option>
                </select>
                </label>
                <p>
                    <label>
                        Ηοw long did it take you to fill out this form?
                        <input type="text"/> minutes
                    </label>
                </p>
            </div>
            <div>
             <button className="next" onClick={()=>onRouteChange('language')}> Submit </button>
            </div>
            

        </div>
    )
}
export default Whoqal;