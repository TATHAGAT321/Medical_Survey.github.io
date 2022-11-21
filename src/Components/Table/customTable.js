import React from 'react';
import { useState } from 'react';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';


function customTable(props){
    const colCount = props.count;
    const colData = props.col;
    const rowData = props.row;
  return(
    <React.Fragment>
     
     <table>
        <caption>{props.data}</caption>
        <tr>
        {
          colData.map((data,id)=>
            <th>{data}</th>
          )
        }
        </tr>
        {
         rowData.map((data,id)=>
          <tr>{ 
            colData.map((data,id)=>
             <td>{id}</td>
            )
           } 
          </tr>
         )
        }

     </table>
    </React.Fragment>
  )
}
export default customTable;