import React,{useEffect, useReducer} from "react";
const reducer = (state,action)=>{
 if(action.type==="INCR"){
   state = state + 1;
 }
 if(action.type==="DECR"){
  state = state - 1;
}
return state;
}
function App() {
  // const[num,setNum]=useState(0);
  const initialdata = 0;
  const[state,dispatch]=useReducer(reducer,initialdata);
  const myStyle = {
    textAlign:"center",
    margin:"30px"
  };
  useEffect(()=>{
    document.title= `Effect (${state})`
  })
  return (
    <div style={{textAlign:"center"}}>
      <h1>{state}</h1>
      <button onClick={() => dispatch({type:"INCR"})} style={myStyle}>INC</button>
      <button onClick={() => dispatch({type:"DECR"})} style={myStyle}>DEC</button>
    </div>
  );
}

export default App;