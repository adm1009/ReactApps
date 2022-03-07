import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";
function App() {
  const [num,setNum] = useState(0);
  const myStyle = {
    display:"inline-block",
    margin:"30px"
  }
  return (
    <div style={{textAlign:"center"}}>
      <h1>{num}</h1>
      <button onClick={()=>setNum(num+1)} style={myStyle}>INC</button>
      <button onClick={()=>num>0 ? setNum(num-1): setNum(0)} style={myStyle}>DEC</button>
    </div>
  );
}

export default App;
