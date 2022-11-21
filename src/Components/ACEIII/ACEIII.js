import React from 'react';
import customTable from '../Table/customTable';



function ACEIII(){
    
   const  table = [
           {
             title:"",
             row : [["Name","Date of testing"],["Date of Bith","Tester's Name"],["Hospital No or Address:","Age at living full time education"],["","ocuupation"],["","Handedness"]]
           },
           {
            title:"ATTENTION",
            row : [["Ask: What is the","Day","Date","Month","Year","Season","Attention(Score 0-5)"],
                   ["Ask: Which","No./Floor","Street/Hospital","Town","County","Country","Attention(Score 0-5)"]]
           },
           {
            title : "ATTENTION",
            row: [["I'm going to give you three words and I'd like you to repeat them after me: lemon, key and ball. After subject repeats, say Try to remember them because I'm going to ask you later","Attention(Score 0-3)"],["Score only the first trial (repeat 3 times if necessary).",""],["Register Number of Trials: ",""]]
           },
           {
            title : "ATTENTION",
            row: [["Ask the subject: Could you take 7 away from 100? I'd like you to keep taking 7 away from each new number until I tell you to stop.","Attention(Score 0-5)"],
                   ["If subject makes a mistake, do not stop them. Let the subject carry on and check subsequent answers (eg, 93, 84, 77, 70, 63-score 4).",""],
                   ["Stop after five subtractions (93, 86, 79, 72, 65)",""]
                  ]
           },
           {
            title : "MEMORY",
            row : [["Ask: Which 3 words did I ask you to repeat and remember?","Memory [Score 0-3]"]]
           },
           {
            title : "FLUENCY",
            row : [["Letters Say: I'm going to give you a letter of the alphabet and I'd like you to generate as many words as you can beginning with that letter, but not names of people or places. For example, if I give you the letter C, you could give me words like cat, cry, clock and so on. But, you can't give me words like Catherine or Canada. Do you understand? Are you ready? You have one minute. The letter I want you to use is the letter P ","Fluency(Score 0-71)"]]
           },
           {
            title:"",
            row : [["","","",""]]
           },
           {
            title:"",
            row : [[ "Animals Say. Now can you name as many animals as possible. It can begin with any letter.","Fluency(Score 0-7)"]]
           },
           {

           }
    ]
    return(
        <div>
            <h1>ADDENBROOKE'S COGNITIVE EXAMINATION - ACEIII</h1>
            <h2>English Version A(2012) </h2>
            <customTable />
        </div>
    )

}