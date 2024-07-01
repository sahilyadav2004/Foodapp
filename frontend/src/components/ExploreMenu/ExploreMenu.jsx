import React from 'react'
import "./ExploreMenu.css"
import {menu_list} from "../../assets/assets"
const ExploreMenu = ({category,setcategory}) => {
  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p className='explore-menu-text'>Choose from a diverse menu </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
            return (
                <div onClick={()=>setcategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item" key={index} >
                    <img src={item.menu_image} alt={item.title} className={category===item.menu_name?"active":""}/>
                    <p>{item.menu_name}</p>
                </div>
            )})
        }
      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
