import React, { useState } from 'react'
import  Menu from "./MenuApi.js";
import MenuCard from './MenuCard';
import Navbar from './Navbar.js';
const uniqueList = [...new Set(
    Menu.map((cur)=>{
        return cur.category
    })),"All"]
console.log(uniqueList);
const Restaurant = () => {
    const myStyle={
        display:"inline-block",
        margin:"5px"
    }
    const[menuData,setMenuData] =useState(Menu);
    const[navNames,setNavNames] =useState(uniqueList);
    const filteritem = (category) =>{
        if(category === "All"){
            setMenuData(Menu);
            return;
        }
      const updatedList = Menu.filter((current)=>{
          return current.category === category
      });
      setMenuData(updatedList)
    }
  return (
    <div >
        <h1 style={{textAlign:"center"}}>Restaurant App</h1>
        <Navbar filteritem={filteritem} myStyle={myStyle} navNames={navNames}/>
        <MenuCard menuData={menuData}/>
    </div>
  )
}

export default Restaurant;