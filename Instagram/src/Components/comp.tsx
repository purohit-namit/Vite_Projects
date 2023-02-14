import * as React from 'react';

function Prac(){
 function HandleClick(){
   
  
    alert("double clicked")
   
 }
    return(
        <>
        <div >

       <button onDoubleClick={HandleClick} >Clicked</button>
        </div>
        </>
    )
}
export default Prac