import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from "react"
function App() {
  const[num,setNum]=useState(0);
  const myStyle = {
    textAlign:"center",
    margin:"30px"
  };
  useEffect(()=>{
    document.title= `Effect (${num})`
  })
  return (
    <div style={myStyle}>
      {num}
      <br />
      <button onClick={()=>setNum(num+1)}>INC</button>
    </div>
  );
}

export default App;
