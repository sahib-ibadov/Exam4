import React, { useContext } from 'react'
import Maincontext from '../Context/Context'
import Card from './Card'
import "./Card.scss"

function Cards() {
    const {data,HandleSearch,handleFilter,handAZ}=useContext(Maincontext)
    console.log("object",data)
  return (
    <div className='container'>
        <div className='cards__top' style={{display:"flex", justifyContent:'center', alignItems:"center", flexDirection:"column"}}>
            <div></div>
            <div><h2>Popular Courses</h2></div>
            <div>
                <input type="text" style={{marginRight:"10px"}} placeholder='search' onChange={(e)=>{
                    HandleSearch(e.target.value)
                
                }} />
                <button  style={{backgroundColor:"black", color:"white"}} onClick={()=>{
                    handleFilter()
                }}>Filter by Price</button>
                <button  style={{backgroundColor:"black", color:"white",marginLeft:"10px"}} onClick={()=>{
                    handAZ()
                }}>Filter by A_Z</button>
            </div>
        </div>
        <div className="row">
            {
                data.map((item,index)=>{
                    return(<Card item={item} key={index}/>)
                })
            }
        </div>
      
    </div>
  )
}

export default Cards
