import React, { useState } from "react";
import { connect } from "react-redux";

const Counter = (props) =>{

   return (
     <div className="counter">
       <h2>Counter</h2>
       <div>
         <button onClick={props.decrement}>-</button>
         <span className="count">{props.compteur}</span>
         <button onClick={props.increment}>+</button>
       </div>
     </div>
   );
 }
 const mapDispatchToProps=(dispatch)=>{
     return{
        decrement:()=>dispatch({type:"DEC"}),
        increment:()=>dispatch({type:"INC"})
     }
 }
 const mapStateToProps=(state)=>{
   return {
     compteur:state.count
   }
 }


export default connect(mapStateToProps,mapDispatchToProps) (Counter);