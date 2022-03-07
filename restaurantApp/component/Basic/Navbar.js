import React from 'react'

const Navbar = ({filteritem,myStyle,navNames}) => {
  return (
    <nav >
        <div style={{textAlign:"center"}}>
        {navNames.map((cur)=>{
           return <>
           <button onClick={()=>filteritem(cur)} style={myStyle}>{cur}</button>
           </>
        })}
        </div>
            
                {/* <button onClick={()=>filteritem("lunch")} style={myStyle}>Lunch</button>
                <button onClick={()=>filteritem("dinner")} style={myStyle}>Dinner</button> */}
                {/* <button onClick={()=>setMenuData(Menu)} style={myStyle}>All</button> */}
            
        </nav>
  )
}

export default Navbar