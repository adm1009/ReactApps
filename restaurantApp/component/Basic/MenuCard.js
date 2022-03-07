import React from 'react'

const MenuCard = ({menuData}) => {
    // console.log(menuData);
  return (<div>
      {menuData.map((item)=>{
          const{id,name,category,image,description}=item;
          return <div key={id} style={{display:"inline-block",margin:"60px"}}>
            <h2>{id}){name}</h2>
            <span>{category}</span>
            <br />
            <img src={image} style={{width:"500px",height:"300px"}} />
            <br />
            <span>{description}</span>
            <br />
            <span>Order Now</span>
            <br />
            </div>
      })}
     
  </div>  
  )
}

export default MenuCard;